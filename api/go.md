# Go

Recompute a claimed backtest report with the deterministic Wickra engine and
confirm or refute it, from Go over the C ABI hub (cgo). A doctored
`claimed_report` cannot pass, because verification recomputes rather than
trusting the supplied numbers.

```bash
go get github.com/wickra-lib/wickra-verify-go
```

Everything goes through a `Verifier` driven by JSON commands — the same command protocol every Wickra binding shares.

```go
package main

import (
    "encoding/json"
    "fmt"

    wickra "github.com/wickra-lib/wickra-verify-go"
)

func main() {
    v := wickra.New()
    defer v.Close()

    claim := map[string]any{
        "strategy":       strategySpec,                     // a wickra-backtest StrategySpec
        "dataset_ref":    map[string]any{"kind": "inline", "data": data},
        "claimed_report": report,                           // the report being checked (untrusted)
    }
    cmd, _ := json.Marshal(map[string]any{"cmd": "verify", "claim": claim})
    out, err := v.Command(string(cmd))
    if err != nil {
        panic(err)
    }
    fmt.Println(out) // the full Verdict as JSON
}
```

## More

- [pkg.go.dev](https://pkg.go.dev/github.com/wickra-lib/wickra-verify-go)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples/go)
