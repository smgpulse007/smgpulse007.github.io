# Portfolio V2 QA Report

Status: Hostinger live staging QA complete; production cutover pending
Run date: 2026-07-12
Branch: `codex/portfolio-v2-hostinger`

This report covers Portfolio V2 implementation, local QA, isolated Hostinger staging, and the live aesthetic/SEO release gates. The existing Website Builder production site, custom domain, DNS, nameservers, email, billing, subscriptions, and GitHub Pages mirror remain unchanged.

## Phase 2 live staging release evidence

| Gate | Result |
| --- | --- |
| Staging origin | `https://aquamarine-mole-482437.hostingersite.com` |
| Initial deployed application commit | `0d3ef553703eb7231bf7fc61916fdd83b5ee0d4f` |
| Deployment shape | Prebuilt static `dist/` contents; 83 archive entries; `index.html` at archive root |
| Runtime | None; Node is a build/QA tool only |
| Live route/E2E matrix | 84/84 across Chromium, Firefox, and WebKit |
| Live accessibility matrix | 30/30 axe route scans across three engines |
| Live adverse-mode matrix | 24/24: no-JS, reduced motion, keyboard, forced colors, 200% reflow, cold cache, slow network, and DPR 2 |
| Live visual passes | 5/5 passes; 1,500/1,500 full-page screenshots |
| Visual distribution per pass | 100 per browser; 30 per required viewport; 10 routes |
| Aesthetic rubric | 93/100; required threshold 90 |
| Live Lighthouse | Mobile/desktop: 100 performance, 100 accessibility, 100 best practices; SEO 66 by intentional staging `noindex` |
| Production-profile Lighthouse | Mobile/desktop: 100 performance, 100 accessibility, 100 best practices, 100 SEO |
| Core performance | Live LCP 0.90s mobile / 0.24s desktop; production-profile LCP 0.91s / 0.20s; CLS 0-0.0048; TBT 0ms |
| Public résumé | Two-page ATS-readable PDF; SHA-256 `5B4D1E2B6940710776425B80080CADB2FFC734160D74A7C78CC868A2C6326A55` |
| SEO target behavior | Staging `noindex,nofollow`, crawl allowed, no sitemap; production `index,follow` with the only sitemap; mirror `noindex,follow` with production canonicals and no sitemap |

Every visual manifest records the live origin, full deployed SHA, browser, viewport, route, byte size, and screenshot SHA-256. Complete generated evidence is under `test-results/pass-1-identity-hierarchy/` through `test-results/pass-5-restraint-memorability/`. Durable representative captures are committed under `docs/screenshots/live-staging/`.

The staging static-deploy API exposes no deployment log/status endpoint. Deployment proof therefore uses the successful upload/deploy response, HTTPS responses, `/build.json`, route/asset tests, and live browser evidence. This limitation is not represented as a missing application log.

## Release identity

| Field | Result |
| --- | --- |
| Baseline commit | `f5de5a490fd0c3413b48b7ab800f933b366a0285` |
| Portfolio V2 implementation checkpoint | `c587e06` |
| QA and hosting-runbook checkpoint | This report's commit |
| Hostinger staging commit | Initial live application checkpoint `0d3ef553703eb7231bf7fc61916fdd83b5ee0d4f`; final docs checkpoint is verified through `/build.json` after redeploy |
| Production commit/tag | Not created; no merge or production deployment occurred |

## Baseline findings resolved

- Server-rendered homepage markup contained `0K`, zero percentages, and `$0M`; Portfolio V2 renders the governed values directly in HTML.
- Canonicals were hard-coded to GitHub Pages and the mirror was indexable; all four deployment targets now generate explicit canonical, robots, sitemap, and structured-data behavior.
- A real retail receipt was incorrectly labeled synthetic; the asset and stale references were removed.
- Award wording incorrectly associated challenge-winning language with the HEDIS/HL7 reference project; the award is now attributed to the Let's Talk Doc team and linked to official evidence.
- The baseline had no committed Playwright, axe, content-governance, target-matrix, or screenshot suite; all are now part of the repository.

Baseline screenshots are retained locally at:

- `docs/screenshots/baseline/home-1440x1000.png`
- `docs/screenshots/baseline/home-390x844.png`

## Final automated validation

All commands exited successfully from a clean dependency install.

| Command | Final result |
| --- | --- |
| `npm ci` | Lockfile install succeeded; 413 packages audited; 0 vulnerabilities |
| `npm run validate` | PASS: type/content, unit, build, link, target, axe, and Playwright suites |
| `npm run check` | 83 files; 0 errors, 0 warnings, 0 hints |
| `npm run test` | 6/6 Node tests passed, including receipt/privacy regression coverage |
| `npm run build` | 25 HTML pages plus machine-readable endpoints built |
| `npm run test:content` | PASS: 25 HTML files, 10 primary routes, PDF text/privacy, social-card, structured-data, and target-aware sitemap checks |
| `npm run test:links` | PASS: 376 local references and 13 external evidence URLs checked |
| `npm run test:targets` | PASS: local, Hostinger staging, Hostinger production, and GitHub mirror builds |
| `npm run test:a11y:all` | 30/30 route scans passed WCAG A/AA axe rules across 3 engines |
| `npm run test:e2e:all` | 84/84 live and local browser tests passed |
| `npm run test:live-modes` | 24/24 adverse-mode tests passed |
| `npm run test:secrets` | PASS; recognized credential material absent from tracked and unignored repository files |
| `npm audit --audit-level=moderate` | 0 vulnerabilities |
| `npm run screenshots` | Five live passes; 1,500/1,500 captures passed |

The first `npm ci` retry encountered an `EPERM` lock from a running local Astro preview. The preview process was stopped and the clean install then passed; this was a local process lock, not a dependency defect.

## Route and target coverage

Local tests cover `/`, `/work/`, all four flagship work routes, `/experience/`, `/lab/`, `/about/`, `/resume/`, `/portfolio.json`, `/llms.txt`, `/build.json`, compatibility routes, and the custom 404. They verify responses, canonical and robots metadata, server-rendered claims, navigation, console/network health, no horizontal overflow, reduced motion, keyboard behavior, and evidence-mode behavior.

| Target | Canonical | Robots | Result |
| --- | --- | --- | --- |
| Local | `http://localhost:4321` | `noindex,nofollow`; crawl allowed; no sitemap | PASS |
| Hostinger staging | temporary staging origin | `noindex,nofollow`; crawl allowed; no sitemap | PASS on live origin |
| Hostinger production | `https://shaileshdudala.com` | `index,follow` | PASS in generated target build; no production deployment |
| GitHub Pages mirror | production canonical with mirror asset origin | `noindex,follow`; robots allow | PASS in generated target build; no branch deployment |

## Content, evidence, and privacy gates

- [x] Final metric values are present in server HTML.
- [x] No `0K`, `$0M`, or zero-percentage placeholders remain.
- [x] Public claims carry context, evidence status, publication status, and qualifications where needed.
- [x] Let's Talk Doc uses team-award attribution and official source links.
- [x] HEDIS/HL7 is labeled as a separate public reference implementation.
- [x] Team Re-Admit uses the exact public project and recognition names.
- [x] Unsupported BCBS-NC attribution is absent.
- [x] Readmission/FHIR reference work is labeled deterministic and synthetic.
- [x] Professional systems remain sanitized and distinct from public repositories.
- [x] The real receipt and all filename references are absent.
- [x] No credential, PHI, payment record, or private internal identifier is published.
- [x] The résumé route provides a current, print-friendly public summary.
- [x] The private source PDF is withheld; the generated public edition passes ATS extraction, metadata, render, and banned-content review.
- [x] No broken local link, TODO, lorem ipsum, or placeholder evidence URL remains.

## Five intentional live visual QA passes

Required viewports: 320×700, 360×800, 390×844, 430×932, 768×1024, 1024×900, 1280×800, 1440×1000, 1920×1080, and 2560×1440. Each pass covered 10 routes in Chromium, Firefox, and WebKit: 300 screenshots per pass.

1. `pass-1-identity-hierarchy`: five-second positioning, first-fold hierarchy, mobile/ultrawide composition, selected-work order.
2. `pass-2-signature-interaction`: flight-recorder prominence, static fallback, evidence control, focus, reduced motion, and navigation.
3. `pass-3-editorial-depth`: case-study pacing, technical artifacts, claim context, award attribution, and résumé narrative.
4. `pass-4-craft-microdetail`: typography, borders, labels, control states, density, browser rendering, and social-card/resume presentation.
5. `pass-5-restraint-memorability`: removal of gratuitous spectacle, consistency, credibility, and final regression review.

All five manifests passed with 300 screenshots, 100 per engine, 30 per viewport, the live origin, and the full deployed SHA. Generated matrices are ignored and uploaded as CI artifacts; representative final PNGs are committed under `docs/screenshots/live-staging/`.

## Accessibility evidence

| Check | Result |
| --- | --- |
| Automated axe | 30/30 primary route scans passed across Chromium, Firefox, and WebKit |
| Keyboard navigation | Playwright coverage passed |
| Evidence control and focus visibility | Playwright coverage passed |
| Reduced motion | Playwright emulation passed |
| Skip link and landmarks | Axe/route coverage passed |
| Heading structure and alternatives | Axe/content coverage passed |
| Required viewport reflow | Ten-viewport, three-engine visual matrix and overflow checks passed |

## Performance evidence

Lighthouse 12.6.1 ran against the live Hostinger staging origin and a local preview built with Hostinger-production metadata. Staging SEO is intentionally lower because `noindex` is a release requirement.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Live staging mobile | 100 | 100 | 100 | 66 intentional | 0.90 s | 0 | 0 ms |
| Live staging desktop | 100 | 100 | 100 | 66 intentional | 0.24 s | 0 | 0 ms |
| Production-profile mobile | 100 | 100 | 100 | 100 | 0.91 s | 0 | 0 ms |
| Production-profile desktop | 100 | 100 | 100 | 100 | 0.20 s | 0.0048 | 0 ms |

Reports: `test-results/lighthouse-production-mobile.json` and `test-results/lighthouse-production-desktop.json` (ignored local artifacts).

## Expected Hostinger static build settings

| Field | Value |
| --- | --- |
| Framework | Astro |
| Node.js | 24 LTS |
| Install | `npm ci` |
| Build | `npm run build` |
| Output directory | `dist` |
| Entry file / server command | None |
| Runtime | Static files only; no server runtime is necessary |
| Staging branch | `codex/portfolio-v2-hostinger` after explicit staging authorization |
| Production branch | `main` only after owner approval, merge, and cutover authorization |

## Remaining owner actions and evidence questions

1. Confirm whether an official source can document Shailesh's precise Let's Talk Doc component contribution beyond résumé-supported team contribution language.
2. Enable the disabled Domains/DNS MCP servers for read-only cutover inventory and restart Codex.
3. Confirm domain-email existence and backup status before any website/domain attachment change.
4. In hPanel, archive/duplicate the Website Builder site and perform the verified safe release/application-attachment action if no API-equivalent exists.
5. Confirm whether any third-party award logos or images are licensed for republication; none are used now.

## Conclusion

Portfolio V2 meets the local and live-staging release criteria. The public PDF is published on staging, and the production-profile SEO/performance gate passes. Production remains intentionally pending safe domain/email inventory, Builder archival/release, application attachment, SSL/redirect verification, and same-SHA mirror publication.
