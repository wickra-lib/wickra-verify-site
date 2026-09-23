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

<script setup>
const installTabs = [
  { label: 'Python', lang: 'bash', code: 'pip install wickra-verify' },
  { label: 'Node', lang: 'bash', code: 'npm install wickra-verify' },
  { label: 'Rust', lang: 'bash', code: 'cargo add wickra-verify-core' },
  { label: 'WASM', lang: 'bash', code: 'npm install wickra-verify-wasm' },
  { label: 'C', lang: 'bash', code: '# prebuilt header + library from GitHub releases:\n# github.com/wickra-lib/wickra-verify/releases' },
  { label: 'C#', lang: 'bash', code: 'dotnet add package Wickra.Verify' },
  { label: 'Go', lang: 'bash', code: 'go get github.com/wickra-lib/wickra-verify-go' },
  { label: 'Java', lang: 'xml', code: '<!-- Maven Central -->\n<dependency>\n  <groupId>org.wickra</groupId>\n  <artifactId>wickra-verify</artifactId>\n  <version>0.1.4</version>\n</dependency>' },
  { label: 'R', lang: 'r', code: 'install.packages("wickraverify", repos = "https://wickra-lib.r-universe.dev")' },
]
</script>

## Install

The same engine from every language — native Rust, Python, Node.js and WASM, plus a C
ABI for C, C++, C#, Go, Java and R.

<InstallTabs :tabs="installTabs" />

The [API pages](/api/rust) carry a quick start per language; the
[repository README](https://github.com/wickra-lib/wickra-verify#readme) the same in one place.

## Built on the Wickra core

Wickra Verify is part of the [Wickra](https://wickra.org) ecosystem — one indicator core,
twenty-three products, the same ten-language binding surface in every one of them,
checked byte-for-byte by a golden corpus in every repository.

> Wickra Verify is a software library, not a trading system, and gives no financial
> advice — its outputs are deterministic transforms of the input data and do not
> predict future returns. Use it at your own risk.
