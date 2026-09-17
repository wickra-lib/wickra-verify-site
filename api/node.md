# Node

Recompute a claimed backtest report with the deterministic Wickra engine and
confirm or refute it, field by field. A doctored `claimed_report` cannot pass,
because verification recomputes rather than trusting the supplied numbers. The
native core is Rust, bound via [napi-rs].

```bash
npm install wickra-verify
```

Everything goes through a `Verifier` driven by JSON commands — the same command protocol every Wickra binding shares, so this Node front-end drives the exact same core as the native CLI.

```js
const { Verifier } = require("wickra-verify");

const verifier = new Verifier(); // default tolerances; new Verifier('{"atol":1e-9,"rtol":1e-6}') to override

const claim = {
  strategy: {/* a wickra-backtest StrategySpec */},
  dataset_ref: { kind: "inline", data: { BTCUSDT: [/* candles */] } },
  claimed_report: {/* the report being checked (untrusted) */},
};

const verdict = JSON.parse(verifier.command(JSON.stringify({ cmd: "verify", claim })));
if (verdict.matches) {
  console.log("VERIFIED");
} else {
  for (const m of verdict.mismatches) {
    console.log(`${m.field}: claimed ${m.claimed}, actual ${m.actual}`);
  }
}
```

## More

- [npm](https://www.npmjs.com/package/wickra-verify)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples/node)
