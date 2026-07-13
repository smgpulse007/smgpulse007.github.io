# Portfolio V2 Release Evidence

Status: production release complete and verified
Release date: 2026-07-13

This is the concise launch-closeout index for Portfolio V2. Detailed procedures and privacy-safe infrastructure evidence remain in `QA_REPORT.md`, `HOSTINGER_PRODUCTION_INVENTORY.md`, `HOSTINGER_CUTOVER.md`, and `HOSTINGER_ROLLBACK.md`.

## Release identity

| Field | Verified value |
| --- | --- |
| Repository | `smgpulse007/smgpulse007.github.io` |
| Production branch | `main` |
| Release commit | `1ae06ad45315baffaef6d1564aae0da4d4051a53` |
| Release tag | Annotated `portfolio-v2.0.0` |
| Canonical production | `https://shaileshdudala.com` on Hostinger static hosting |
| Production build identity | `/build.json` target `hostinger-production`, built `2026-07-13T06:45:48.123Z` |
| Retained staging | `https://aquamarine-mole-482437.hostingersite.com`; same SHA; `hostinger-staging`; `noindex,nofollow` |
| GitHub Pages mirror | `https://smgpulse007.github.io`; same SHA; `github-pages-mirror`; production canonicals; `noindex,follow`; no sitemap; Pages `cname=null` |
| Legacy Builder | Published duplicate retained as the platform rollback asset; its address and connection procedure remain in the detailed operational inventory |

Production, staging, and the mirror are deployments of one Astro product. The Builder duplicate is rollback material, not a second portfolio.

The runtime release is immutable at `portfolio-v2.0.0`. A later evidence-only documentation commit may advance `main` without changing production, staging, the mirror, or the release tag; live `/build.json` remains the authoritative deployed identity.

## Immutable artifacts

| Artifact | SHA-256 |
| --- | --- |
| Hostinger production static archive | `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B` |
| Hostinger staging static archive | `84DE4CD94F5F95A2B0F7ABA15E70FF134209BB72C243BCCB1E3B249E3578ED94` |
| Public résumé PDF | `5B4D1E2B6940710776425B80080CADB2FFC734160D74A7C78CC868A2C6326A55` |

## GitHub Actions evidence

| Purpose | Workflow run | Artifact | Artifact digest |
| --- | --- | --- | --- |
| Final release CI | [29229851998](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29229851998) | `8271234263` | `sha256:e52d9f240a39e13d9f660598cdad69c959be8fd0a3fd397d1f4f18d1a4aab164` |
| Live staging/release QA | [29229921553](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29229921553) | `8271294538` | `sha256:5251b19fe8a571bc51c7e1142751df121587a3e4a1461b66406a287a97d49ed9` |
| Same-SHA GitHub Pages mirror | [29231031648](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29231031648) | `8271549578` | `sha256:392d07cacb2fdd4f2ff53332ab4102202c41d84b63bdafee22d166c33c0cbb7b` |

All three workflows completed successfully for the release lineage.

## Production verification

| Gate | Result |
| --- | --- |
| Browser QA | 138/138: 84 E2E, 30 accessibility, and 24 adverse-mode checks across Chromium, Firefox, and WebKit |
| Visual QA | 300/300 final production screenshots across 10 routes, 10 viewports, and 3 browser engines |
| Lighthouse mobile | 100 performance, 100 accessibility, 100 best practices, 100 SEO |
| Lighthouse desktop | 100 performance, 100 accessibility, 100 best practices, 100 SEO |
| Routes and SEO | Ten primary routes, compatibility behavior, production canonicals, `index,follow`, production-only sitemap, JSON-LD, machine-readable artifacts, and real custom 404 passed |
| Crawler-visible metrics | `7K`, `90%`, `20%`, `18%`, and `≈$3M` render in raw HTML; no zero placeholders |
| Social cards | All ten declared OG/Twitter PNGs returned successfully with valid 1200×630 PNG content |
| Résumé | `200 application/pdf`; live bytes matched the governed public artifact hash |
| TLS and redirects | Valid TLS for apex and `www`; HTTPS `www` permanently redirects once to the corresponding apex path and preserves path/query |
| Edge consistency | Observed Hostinger apex and `www` edges served the same release identity; no mixed deployment state |
| Internal links | All same-origin linked production targets passed |

Production Lighthouse JSON:

- `test-results/lighthouse-live-production-mobile-1ae06ad-20260713T065736Z.json`
- `test-results/lighthouse-live-production-desktop-1ae06ad-20260713T065736Z.json`

These JSON reports are ignored local QA outputs; the durable workflow artifacts above retain the release evidence.

## Production screenshots

Committed representative captures:

- [Home desktop, 1440×1000](screenshots/production/home-desktop-1440x1000.png)
- [Home mobile, 390×844](screenshots/production/home-mobile-390x844.png)
- [Home tablet, 768×1024](screenshots/production/home-tablet-768x1024.png)
- [Home ultrawide, 2560×1440](screenshots/production/home-ultrawide-2560x1440.png)
- [Home evidence mode](screenshots/production/home-evidence-mode-desktop-1440x1000.png)
- [Claims case study](screenshots/production/claims-case-desktop-1440x1000.png)
- [Custom 404](screenshots/production/custom-404-desktop-1440x1000.png)
- [Résumé route](screenshots/production/resume-route-desktop-1440x1000.png)
- [Résumé PDF page 1](screenshots/production/resume-pdf-1.png)
- [Résumé PDF page 2](screenshots/production/resume-pdf-2.png)

The complete production matrix is retained in the release QA artifacts.

## DNS, email, and rollback preservation

During cutover, the protected apex SPF and `_dmarc` TXT records were absent from the live zone. Only those two exact values were restored from matching snapshot `150089457`; no broad zone restore was used. Hostinger state and independent public resolvers `1.1.1.1` and `8.8.8.8` then confirmed the restored records.

Hostinger Free Business Email remains active with 0/100 mailboxes. MX, DKIM, SPF, DMARC, autodiscover, and autoconfig structure is present. Sensitive TXT payloads are intentionally not reproduced here.

The published Builder duplicate remains the platform rollback asset. The exact rollback origin and mutation sequence stay in `HOSTINGER_PRODUCTION_INVENTORY.md` and `HOSTINGER_ROLLBACK.md` rather than this public closeout index.

## Static Hostinger build settings

| Setting | Value |
| --- | --- |
| Framework | Astro |
| Node.js | Node 24 LTS |
| Install | `npm ci` |
| Build | `npm run build` |
| Output | `dist` contents at the document root |
| Entry file | None |
| Persistent server | None |

No server runtime is necessary for the current portfolio. Node is a build tool only.

## Remaining evidence questions

These do not block the verified release, but they constrain future wording or media:

1. Can an official public source document Shailesh’s precise Let’s Talk Doc component contribution?
2. Is there authoritative evidence for any BCBS-NC relationship to the HiCounselor challenge?
3. Can public sources replace résumé-only support for the professional impact metrics?
4. Are any additional award logos or media licensed for republication?

Operational launch blockers: none.
