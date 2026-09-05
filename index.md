---
layout: home
title: "Wickra Verify — Confirm or refute a claimed backtest report against its strategy and data, deterministically, in ten languages"
titleTemplate: false

hero:
  name: "Wickra Verify"
  text: "Confirmed, or refuted."
  tagline: "Hand over a (strategy, data, claimed report) triple and get a deterministic verdict — confirmed or refuted — that anyone can recompute in ten languages."
  image:
    src: /wickra-mark.svg
    alt: "Wickra Verify"
  actions:
    - theme: brand
      text: View on GitHub
      link: https://github.com/wickra-lib/wickra-verify
    - theme: alt
      text: How it works
      link: /about

features:
  - icon: ⚖️
    title: "A verdict, not an opinion"
    details: "Give it the strategy, the data and the report someone claims they got. It recomputes and answers: confirmed, or refuted — and where the two differ."
  - icon: 🌍
    title: "Recomputable anywhere"
    details: "The same triple gives the same verdict in Rust, Python, Node, WASM, C, C++, C#, Go, Java and R, because the comparison is over a canonical form rather than a rendering."
  - icon: 🔍
    title: "Two independent checks"
    details: "A report can match while its hash does not, and the other way round. Both are reported separately, so a mis-blessed claim is visible rather than masked."
  - icon: ⚙️
    title: "Built on the core"
    details: "The same deterministic engine and the same 514 indicators as the rest of the stack, so a verdict is not a second opinion from a second implementation."
---
