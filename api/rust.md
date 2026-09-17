# Rust

The native crate — the same engine every other binding of Wickra Verify wraps.

```bash
cargo add wickra-verify-core
```

```rust
use wickra_verify_core::{verify, Claim, DatasetRef};

// A claim is the strategy, the candles it ran over, and the report someone
// says that run produced. `verify` recomputes the report and compares.
let claim = Claim {
    strategy: strategy_json,
    dataset_ref: DatasetRef::Inline { data: candles_by_symbol.clone() },
    claimed_report: claimed_report_json,
};
let verdict = verify(&claim, &candles_by_symbol)?;

// `matches` is the whole answer; `mismatches` names every field that differs.
// The same triple yields the same verdict in all ten languages, byte for byte.
assert!(!verdict.matches);
assert_eq!(verdict.mismatches[0].field, "fees_paid");
```

## More

- [crates.io/crates/wickra-verify-core](https://crates.io/crates/wickra-verify-core)
- [docs.rs](https://docs.rs/wickra-verify-core)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples)
