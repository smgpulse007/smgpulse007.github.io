# Portfolio V2 QA Report

Status: Hostinger live staging QA complete; production cutover pending
Run date: 2026-07-12 through 2026-07-13
Branch: `codex/portfolio-v2-hostinger`

This report covers Portfolio V2 implementation, local QA, isolated Hostinger staging, and the live aesthetic/SEO release gates. The existing Website Builder production site, custom domain, DNS, nameservers, email, billing, subscriptions, and GitHub Pages mirror remain unchanged.

## Phase 2 live staging release evidence

| Gate | Result |
| --- | --- |
| Staging origin | `https://aquamarine-mole-482437.hostingersite.com` |
| Initial deployed application commit | `0d3ef553703eb7231bf7fc61916fdd83b5ee0d4f` |
| Last verified live staging commit before final release checkpoint | `8ff708b9e5b81434bd89bedf6ba60d865c11cd07`; `/build.json` target `hostinger-staging` |
| Deployment shape | Prebuilt static `dist/` contents; 83 archive entries; 5,186,962 compressed bytes; 5,822,692 uncompressed bytes; `index.html` at archive root |
| JavaScript budget | Home 192,218 executable bytes (186,992 external + 5,226 inline); Lab 592 inline bytes; other primary routes 0 bytes |
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
| SEO target behavior | Staging HTML `noindex,nofollow`, no sitemap; Hostinger's temporary-domain edge adds a Googlebot-specific disallow despite the repository's crawlable robots output. Production is `index,follow` with the only sitemap; mirror is `noindex,follow` with production canonicals and no sitemap. |

Every visual manifest records the live origin, full deployed SHA, browser, viewport, route, byte size, and screenshot SHA-256. Complete generated evidence is under `test-results/pass-1-identity-hierarchy/` through `test-results/pass-5-restraint-memorability/`. Durable representative captures are committed under `docs/screenshots/live-staging/`.

The staging static-deploy API exposes no deployment log/status endpoint. Deployment proof therefore uses the successful upload/deploy response, HTTPS responses, `/build.json`, route/asset tests, and live browser evidence. This limitation is not represented as a missing application log.

Largest archive entries were the LLM Steering GIF (1,400,567 bytes), AlphaQuant GIF (1,190,743 bytes), terminal GIF (906,091 bytes), and three HL7 diagrams (458,361, 446,373, and 362,649 bytes). The only substantial client bundle was `/_astro/client.DW6xmEpB.js` at 184,105 bytes. These assets are deliberate case-study evidence; essential navigation, claims, metrics, and work narratives remain server rendered.

## Weighted aesthetic release rubric

The score follows the 100-point rubric in the master launch specification. Accessibility, privacy, factual accuracy, target safety, and performance passed separately and are not traded for aesthetic points.

| Category | Score | Weight | Written evidence |
| --- | ---: | ---: | --- |
| Positioning clarity | 8 | 8 | Hero, role line, outcomes, selected work, and contact establish the applied-AI systems position within the five-second scan. |
| Originality | 9 | 10 | Editorial systems engineering and the System Flight Recorder form a coherent identity without copying reference layouts; one point is reserved because the wider editorial-tech genre is familiar. |
| Memorability | 7 | 8 | Recorder states, evidence mode, and domain-specific artifacts create a recognizable throughline; restraint intentionally limits spectacle. |
| Typography | 9 | 10 | Fluid hierarchy, compact labels, long-form measure, and code/data styles remain legible across ten viewports; dense evidence blocks still require attentive reading. |
| Composition | 9 | 10 | Authored mobile, tablet, desktop, and ultrawide compositions preserve hierarchy and rhythm; a few long case-study sections remain intentionally dense. |
| Artifact quality | 9 | 10 | Architecture diagrams, validation trails, screenshots, and governed evidence labels are project-specific and readable; some public repositories remain reference-grade rather than production products. |
| Case-study storytelling | 10 | 10 | Four flagship narratives cover problem, constraints, architecture, engineering decisions, evaluation, outcomes, role, evidence, limitations, and next steps. |
| Signature interaction | 8 | 8 | The Flight Recorder explains system validation and reviewer state, works from complete server HTML, supports keyboard use, and has reduced-motion/no-JS paths. |
| Recruiter scanability | 8 | 8 | Homepage, Work, Experience, About, and résumé provide progressively deeper scans with clear roles, dates, outcomes, and calls to action. |
| Technical depth | 8 | 8 | Case studies expose contracts, data flows, deterministic checks, model boundaries, evidence provenance, and operational limitations without publishing confidential implementation detail. |
| Mobile authorship | 5 | 6 | 320–430 px compositions, reflow at 200%, touch targets, and evidence controls passed; one point is reserved for the inherent density of long technical narratives. |
| Micro-polish | 3 | 4 | Focus, hover, forced-color, reduced-motion, borders, labels, social card, and PDF presentation are consistent; restraint was favored over ornamental finishing. |
| **Total** | **93** | **100** | **Passes the required 90-point release threshold.** |

The selected direction and primary-source design references are documented in `CREATIVE_DIRECTION_RESEARCH.md`.

## Release identity

| Field | Result |
| --- | --- |
| Baseline commit | `f5de5a490fd0c3413b48b7ab800f933b366a0285` |
| Portfolio V2 implementation checkpoint | `c587e06` |
| QA and hosting-runbook checkpoint | This report's commit |
| Hostinger staging commit | Initial `0d3ef553703eb7231bf7fc61916fdd83b5ee0d4f`; last verified pre-release checkpoint `8ff708b9e5b81434bd89bedf6ba60d865c11cd07` through live `/build.json` |
| Pull request | [#1](https://github.com/smgpulse007/smgpulse007.github.io/pull/1); draft at this documentation checkpoint; merge-clean with two green CI checks on `8ff708b9e5b81434bd89bedf6ba60d865c11cd07` |
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
| Hostinger staging | temporary staging origin | Page HTML `noindex,nofollow`; no sitemap; live Hostinger edge adds `Googlebot Disallow: /` while allowing other crawlers | PASS with documented platform override |
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

All five local manifests passed with 300 screenshots, 100 per engine, 30 per viewport, the live origin, and the full deployed SHA. Generated matrices are ignored; the final `Live Hostinger Staging QA` workflow is configured to upload its pass-five evidence after it can be dispatched from `main`. Representative durable captures are committed under `docs/screenshots/live-staging/`:

- [desktop home, 1440×1000](screenshots/live-staging/home-desktop-1440x1000.png)
- [mobile home, 390×844](screenshots/live-staging/home-mobile-390x844.png)
- [tablet selected work, 768×1024](screenshots/live-staging/work-tablet-webkit-768x1024.png)
- [ultrawide home, 2560×1440](screenshots/live-staging/home-ultrawide-2560x1440.png)
- [mobile claims/evidence, Firefox 390×844](screenshots/live-staging/claims-mobile-firefox-390x844.png)
- [desktop résumé route, 1440×1000](screenshots/live-staging/resume-desktop-1440x1000.png)
- [public résumé PDF, page 1](screenshots/live-staging/public-resume-pdf-page-1.png)

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

## Remaining release actions and evidence questions

1. Confirm whether an official source can document Shailesh's precise Let's Talk Doc component contribution beyond résumé-supported team contribution language.
2. Confirm whether any third-party award logos or images are licensed for republication; none are used now.
3. Commit and push the final candidate, merge it to `main`, redeploy that exact SHA to staging, and complete the registered live-staging workflow.
4. Reconfirm the published Builder duplicate and verified Connect domain restoration control, then obtain the narrow action-time owner override required to delete only the original Builder website while leaving optional email/mailbox deletion unchecked.
5. Deploy and verify the exact production SHA, publish and verify the same-SHA GitHub Pages mirror, disable Domains/DNS tooling, and create the immutable release tag.

## Conclusion

Portfolio V2 meets the local and live-staging release criteria. The public PDF is published on staging, and the production-profile SEO/performance gate passes. Domain/email inventory and the Builder duplicate are complete. Production remains pending exact-`main`-SHA staging proof, the narrowly authorized Builder release, application creation/deployment, SSL/redirect and production verification, same-SHA mirror publication, tool lockdown, and tagging.
