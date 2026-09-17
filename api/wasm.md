# WASM

Recompute a claimed backtest report with the deterministic Wickra engine and
confirm or refute it, compiled to WebAssembly for the browser (and any WASM
host). A doctored `claimed_report` cannot pass, because verification recomputes
rather than trusting the supplied numbers. Built with [wasm-bindgen].

```bash
npm install wickra-verify-wasm
```

Everything goes through a `Verifier` driven by JSON commands — the same command protocol every Wickra binding shares.

```js
import init, { Verifier } from "wickra-verify-wasm";

await init(); // load the .wasm module (web target)

const verifier = new Verifier(); // default tolerances; new Verifier('{"atol":1e-9,"rtol":1e-6}') to override

const claim = {
  strategy: {/* a wickra-backtest StrategySpec */},
  dataset_ref: { kind: "inline", data: { BTCUSDT: [/* candles */] } },
  claimed_report: {/* the report being checked (untrusted) */},
};

const verdict = JSON.parse(verifier.command(JSON.stringify({ cmd: "verify", claim })));
console.log(verdict.matches ? "VERIFIED" : verdict.mismatches);
```

## More

- [npm](https://www.npmjs.com/package/wickra-verify-wasm)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples/wasm)
