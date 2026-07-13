# Portfolio V2 QA Report

Status: Portfolio V2 production release, same-SHA mirror, and launch verification complete
Run date: 2026-07-12 through 2026-07-13
Release branch: `main`
Release: `portfolio-v2.0.0` at `1ae06ad45315baffaef6d1564aae0da4d4051a53`

This report covers Portfolio V2 implementation, local QA, isolated Hostinger staging, the controlled Hostinger production cutover, DNS remediation, live production verification, and the same-SHA GitHub Pages mirror. Hostinger is the canonical production host; GitHub remains the source, CI, and no-index mirror layer.

## Phase 2 live staging release evidence

| Gate | Result |
| --- | --- |
| Staging origin | `https://aquamarine-mole-482437.hostingersite.com` |
| Initial deployed application commit | `0d3ef553703eb7231bf7fc61916fdd83b5ee0d4f` |
| Final live staging commit | `1ae06ad45315baffaef6d1564aae0da4d4051a53`; `/build.json` target `hostinger-staging`, built at `2026-07-13T06:44:16.396Z` |
| Deployment shape | Prebuilt static `dist/` contents with `index.html` at archive root; staging archive SHA-256 `84DE4CD94F5F95A2B0F7ABA15E70FF134209BB72C243BCCB1E3B249E3578ED94` |
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
| Final CI | [Run 29229851998](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29229851998), success on the release SHA; artifact `8271234263`, digest `sha256:e52d9f240a39e13d9f660598cdad69c959be8fd0a3fd397d1f4f18d1a4aab164` |
| Final live staging workflow | [Run 29229921553](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29229921553), success on the release SHA; artifact `8271294538`, digest `sha256:5251b19fe8a571bc51c7e1142751df121587a3e4a1461b66406a287a97d49ed9` |

Every visual manifest records the live origin, full deployed SHA, browser, viewport, route, byte size, and screenshot SHA-256. Complete generated evidence is under `test-results/pass-1-identity-hierarchy/` through `test-results/pass-5-restraint-memorability/`. Durable representative captures are committed under `docs/screenshots/live-staging/`.

The staging static-deploy API exposes no deployment log/status endpoint. Deployment proof therefore uses the successful upload/deploy response, HTTPS responses, `/build.json`, route/asset tests, and live browser evidence. This limitation is not represented as a missing application log.

## Production and mirror release evidence

| Gate | Final result |
| --- | --- |
| Canonical production | `https://shaileshdudala.com`; `/build.json` commit `1ae06ad45315baffaef6d1564aae0da4d4051a53`, target `hostinger-production`, built at `2026-07-13T06:45:48.123Z` |
| Release tag | Annotated `portfolio-v2.0.0`, peeled to the production SHA |
| Production archive | SHA-256 `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B` |
| Holding-page archive | SHA-256 `EBD364C245562A026645794E099C815284549CF5DA3C63C79B05BBC189F8F841`; retained for rollback and not needed during the successful launch |
| Live production browser QA | 30/30 accessibility + 84/84 E2E + 24/24 adverse-mode checks = 138/138; final 300-screenshot, ten-viewport, three-engine visual pass completed |
| Production surface | All ten primary routes, compatibility behavior, structured data, social images, public résumé, custom 404, raw server-rendered metrics, console/network checks, and TLS edges passed |
| Live production Lighthouse | Mobile and desktop scored 100 performance, 100 accessibility, 100 best practices, and 100 SEO; mobile LCP 1,041.8 ms / CLS 0, desktop LCP 280.2 ms / CLS 0.0048; TBT 0 ms for both |
| GitHub Pages mirror | `https://smgpulse007.github.io`; same release SHA, target `github-pages-mirror`, built at `2026-07-13T07:09:11.916Z`; production canonicals, `noindex,follow`, no sitemap, and Pages `cname=null` |
| Mirror workflow | [Run 29231031648](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29231031648), success; Pages artifact `8271549578`, digest `sha256:392d07cacb2fdd4f2ff53332ab4102202c41d84b63bdafee22d166c33c0cbb7b` |

During cutover, SPF and DMARC were found missing from the live zone. Only those two records were restored exactly from the matching DNS snapshot `150089457`; no broad snapshot restore was performed. Public resolvers then confirmed SPF and DMARC. The final zone contains all 10 approved baseline record groups plus a separately classified Hostinger-added `ftp` A record. Hostinger email remained active and unaffected; the account has 0 mailboxes, so no mailbox content or send/receive path existed to test.

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
| Hostinger staging commit | Initial `0d3ef553703eb7231bf7fc61916fdd83b5ee0d4f`; final verified release `1ae06ad45315baffaef6d1564aae0da4d4051a53` through live `/build.json` and workflow 29229921553 |
| Pull request | [#1](https://github.com/smgpulse007/smgpulse007.github.io/pull/1), merged to `main`; subsequent release fixes remained on the verified `main` lineage |
| Production commit/tag | `1ae06ad45315baffaef6d1564aae0da4d4051a53`; annotated `portfolio-v2.0.0` |
| Production and mirror identity | Both live `/build.json` endpoints report the production commit; targets are `hostinger-production` and `github-pages-mirror` respectively |

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
| Final production live matrix | 138/138: 30 accessibility, 84 E2E, and 24 adverse-mode checks; final visual pass 300/300 |
| Release CI evidence | Runs 29229851998 and 29229921553 completed successfully for `1ae06ad45315baffaef6d1564aae0da4d4051a53`; artifacts `8271234263` and `8271294538` retain the full automated and visual evidence |
| Mirror release evidence | Run 29231031648 completed successfully for the same SHA; Pages artifact `8271549578` |

The first `npm ci` retry encountered an `EPERM` lock from a running local Astro preview. The preview process was stopped and the clean install then passed; this was a local process lock, not a dependency defect.

## Route and target coverage

Local tests cover `/`, `/work/`, all four flagship work routes, `/experience/`, `/lab/`, `/about/`, `/resume/`, `/portfolio.json`, `/llms.txt`, `/build.json`, compatibility routes, and the custom 404. They verify responses, canonical and robots metadata, server-rendered claims, navigation, console/network health, no horizontal overflow, reduced motion, keyboard behavior, and evidence-mode behavior.

| Target | Canonical | Robots | Result |
| --- | --- | --- | --- |
| Local | `http://localhost:4321` | `noindex,nofollow`; crawl allowed; no sitemap | PASS |
| Hostinger staging | temporary staging origin | Page HTML `noindex,nofollow`; no sitemap; live Hostinger edge adds `Googlebot Disallow: /` while allowing other crawlers | PASS with documented platform override |
| Hostinger production | `https://shaileshdudala.com` | `index,follow`; crawl allowed; production sitemap advertised | LIVE PASS at release SHA |
| GitHub Pages mirror | production canonical with mirror asset origin | `noindex,follow`; robots allow; no sitemap; no custom-domain CNAME | LIVE PASS at the same release SHA |

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

All five local manifests passed with 300 screenshots, 100 per engine, 30 per viewport, the live origin, and the full deployed SHA. Final live-staging workflow 29229921553 uploaded the release-SHA matrix in artifact `8271294538`; production verification added a 300/300 final visual matrix. Generated matrices remain ignored locally, while representative durable captures are committed under `docs/screenshots/live-staging/`:

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

Lighthouse 12.6.1 ran against the live Hostinger staging origin, a local preview built with Hostinger-production metadata, and the final canonical production origin. Staging SEO is intentionally lower because `noindex` is a release requirement. The final live runs used Lighthouse's supported actual-Chromium mode (`emulatedUserAgent:false`) because Hostinger challenged synthetic Lighthouse client hints; hostname and TLS validation remained enabled.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Live staging mobile | 100 | 100 | 100 | 66 intentional | 0.90 s | 0 | 0 ms |
| Live staging desktop | 100 | 100 | 100 | 66 intentional | 0.24 s | 0 | 0 ms |
| Production-profile mobile | 100 | 100 | 100 | 100 | 0.91 s | 0 | 0 ms |
| Production-profile desktop | 100 | 100 | 100 | 100 | 0.20 s | 0.0048 | 0 ms |
| Final live production mobile | 100 | 100 | 100 | 100 | 1.0418 s | 0 | 0 ms |
| Final live production desktop | 100 | 100 | 100 | 100 | 0.2802 s | 0.0048 | 0 ms |

Final live reports: `test-results/lighthouse-live-production-mobile-1ae06ad-20260713T065736Z.json` and `test-results/lighthouse-live-production-desktop-1ae06ad-20260713T065736Z.json` (ignored local artifacts). INP was not applicable to the navigation audits; TBT was 0 ms for both.

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
| Staging source | Final release SHA verified at the isolated Hostinger origin |
| Production branch | `main`; release `1ae06ad45315baffaef6d1564aae0da4d4051a53` |

## Remaining evidence questions

1. Confirm whether an official source can document Shailesh's precise Let's Talk Doc component contribution beyond résumé-supported team contribution language.
2. Confirm whether an authoritative source supports any BCBS-NC relationship to the HiCounselor challenge; no such attribution is currently published.
3. Determine whether public sources can replace résumé-only support for individual professional metrics; current wording remains qualified.
4. Confirm whether third-party award logos or media are licensed for republication; none are currently used.

These questions do not block the release because unsupported details are omitted or explicitly qualified.

## Conclusion

Portfolio V2 is live and verified at `https://shaileshdudala.com` from release `1ae06ad45315baffaef6d1564aae0da4d4051a53` / `portfolio-v2.0.0`. The same SHA is available on the no-index GitHub Pages mirror, the public résumé and machine-readable artifacts are live, all release gates pass, DNS/email state is reconciled, and the rollback Builder duplicate and holding artifact remain available. The product is static; no server runtime is necessary.
