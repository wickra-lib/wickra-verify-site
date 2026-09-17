# R

Recompute a claimed backtest report with the deterministic Wickra engine and
confirm or refute it, from R over the Wickra C ABI hub (`.Call`). A doctored
`claimed_report` cannot pass, because verification recomputes rather than
trusting the supplied numbers.

```r
install.packages("wickraverify", repos = "https://wickra-lib.r-universe.dev")
```

Everything goes through a verifier handle driven by JSON commands — the same command protocol every Wickra binding shares.

```r
library(wickraverify)

verifier <- wkverify_new()

claim <- paste0(
  '{"strategy":', strategy_spec, ',',              # a wickra-backtest StrategySpec
  '"dataset_ref":{"kind":"inline","data":', data, '},',
  '"claimed_report":', report, '}'                 # the report being checked (untrusted)
)
verdict <- wkverify_command(verifier, paste0('{"cmd":"verify","claim":', claim, '}'))
cat(verdict)  # the full Verdict as JSON
```

## More

- [r-universe](https://wickra-lib.r-universe.dev)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples/r)
