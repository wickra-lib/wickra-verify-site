# Java

Recompute a claimed backtest report with the deterministic Wickra engine and
confirm or refute it, on the JVM over the Wickra C ABI via the Foreign Function
& Memory API (FFM/Panama, JDK 22+). A doctored `claimed_report` cannot pass,
because verification recomputes rather than trusting the supplied numbers.

```xml
<dependency>
  <groupId>org.wickra</groupId>
  <artifactId>wickra-verify</artifactId>
  <version>0.1.3</version>
</dependency>
```

Everything goes through a `Verifier` driven by JSON commands — the same command protocol every Wickra binding shares.

```java
import org.wickra.verify.Verifier;

try (Verifier verifier = new Verifier()) {
    String claim = "{"
        + "\"strategy\":" + strategySpec + ","          // a wickra-backtest StrategySpec
        + "\"dataset_ref\":{\"kind\":\"inline\",\"data\":" + data + "},"
        + "\"claimed_report\":" + report                // the report being checked (untrusted)
        + "}";
    String verdict = verifier.command("{\"cmd\":\"verify\",\"claim\":" + claim + "}");
    System.out.println(verdict); // the full Verdict as JSON
}
```

## More

- [Maven Central](https://central.sonatype.com/artifact/org.wickra/wickra-verify)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples/java)
