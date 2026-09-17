# Python

Recompute a claimed backtest report with the deterministic Wickra engine and
confirm or refute it, field by field. A doctored `claimed_report` cannot pass,
because verification recomputes rather than trusting the supplied numbers.

```bash
pip install wickra-verify
```

Everything goes through a `Verifier` driven by JSON commands — the same command protocol every Wickra binding shares, so this Python front-end drives the exact same core as the native CLI.

```python
import json
from wickra_verify import Verifier

verifier = Verifier()  # default tolerances; Verifier('{"atol":1e-9,"rtol":1e-6}') to override

claim = {
    "strategy": {...},                       # a wickra-backtest StrategySpec
    "dataset_ref": {"kind": "inline", "data": {"BTCUSDT": [...]}},
    "claimed_report": {...},                 # the report being checked (untrusted)
}

verdict = json.loads(verifier.command(json.dumps({"cmd": "verify", "claim": claim})))
if verdict["matches"]:
    print("VERIFIED")
else:
    for m in verdict["mismatches"]:
        print(f"{m['field']}: claimed {m['claimed']}, actual {m['actual']}")
```

## More

- [PyPI](https://pypi.org/project/wickra-verify/)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples/python)
