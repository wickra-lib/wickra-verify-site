import { defineConfig } from 'vitepress'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// JSON-LD structured data (Organization + SoftwareApplication) so search
// engines and LLM crawlers can resolve the product's entity, ownership, and
// where it is published. Emitted once in the document <head> below.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://verify.wickra.org/#organization',
      name: 'Wickra',
      url: 'https://verify.wickra.org/',
      logo: 'https://verify.wickra.org/wickra-mark.svg',
      sameAs: [
        'https://github.com/wickra-lib/wickra-verify',
        'https://github.com/wickra-lib/wickra',
        'https://wickra.org/',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://verify.wickra.org/#software',
      name: 'Wickra Verify',
      url: 'https://verify.wickra.org/',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Windows, macOS, Linux, WebAssembly',
      programmingLanguage: ['Rust', 'Python', 'JavaScript', 'WebAssembly', 'C', 'C++', 'C#', 'Go', 'Java', 'R'],
      description:
        'Confirm or refute a claimed backtest report against its strategy and data, deterministically, in ten languages.',
      license: 'https://github.com/wickra-lib/wickra-verify#license',
      publisher: { '@id': 'https://verify.wickra.org/#organization' },
    },
  ],
}

export default defineConfig({
  title: 'Wickra Verify',
  description:
    'Confirm or refute a claimed backtest report against its strategy and data, deterministically, in ten languages.',
  lang: 'en-US',
  cleanUrls: true,

  // Served at the domain root (verify.wickra.org via Cloudflare Pages).
  base: '/',

  sitemap: { hostname: 'https://verify.wickra.org' },

  // README.md is repo documentation, not a site page — keep it out of the build.
  srcExclude: ['README.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/wickra-mark.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Wickra Verify — confirm or refute a claimed backtest report' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Hand over a (strategy, data, claimed report) triple and get a deterministic verdict — confirmed or refuted — that anyone can recompute in ten languages.',
      },
    ],
    ['meta', { property: 'og:image', content: 'https://verify.wickra.org/og-banner.webp' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://verify.wickra.org/og-banner.webp' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)],
  ],

  transformPageData(pageData) {
    const path = pageData.relativePath.replace(/(?:index)?\.md$/, '')
    const canonical = `https://verify.wickra.org/${path}`
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:url', content: canonical }],
    )
  },

  themeConfig: {
    siteTitle: 'Wickra Verify',
    logo: { src: '/wickra-mark.svg', alt: 'Wickra Verify' },
    logoLink: 'https://wickra.org/',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/wickra-lib/wickra-verify' },
      {
        text: 'Ecosystem',
        items: [
          { text: "Wickra (core)", link: "https://wickra.org" },
          { text: "Docs", link: "https://docs.wickra.org" },
          { text: "Exchange", link: "https://exchange.wickra.org" },
          { text: "Backtest", link: "https://backtest.wickra.org" },
          { text: "Terminal", link: "https://terminal.wickra.org" },
          { text: "Screener", link: "https://screener.wickra.org" },
          { text: "X-Ray", link: "https://xray.wickra.org" },
          { text: "Radar", link: "https://radar.wickra.org" },
          { text: "Copilot", link: "https://copilot.wickra.org" },
          { text: "Shazam", link: "https://shazam.wickra.org" }
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/wickra-lib/wickra-verify' }],

    search: { provider: 'local' },

    outline: { level: [2, 3], label: 'On this page' },

    lastUpdated: { text: 'Updated', formatOptions: { dateStyle: 'medium' } },
  },

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: false,
  },

  vite: {
    // wickra-wasm is a wasm-pack `--target bundler` build: its JS glue does
    // `import * as wasm from './wickra_wasm_bg.wasm'` and expects the bundler
    // to instantiate the module and expose its exports. vite-plugin-wasm does
    // exactly that, and vite-plugin-top-level-await handles the top-level await
    // the wasm init emits.
    plugins: [wasm(), topLevelAwait()],
    optimizeDeps: {
      // esbuild's dep pre-bundling can't follow the .wasm ESM import, so keep
      // wickra-wasm out of it and let vite-plugin-wasm handle it on demand.
      exclude: ['wickra-wasm'],
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
})
