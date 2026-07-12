# Portfolio V2 QA Report

Status: local implementation and QA complete
Run date: 2026-07-12
Branch: `codex/portfolio-v2-hostinger`

This report covers the authorized design, implementation, and local QA phase. Hostinger staging, production cutover, DNS, the existing Website Builder site, email, billing, subscriptions, and the live GitHub Pages site were not changed.

## Release identity

| Field | Result |
| --- | --- |
| Baseline commit | `f5de5a490fd0c3413b48b7ab800f933b366a0285` |
| Portfolio V2 implementation checkpoint | `c587e06` |
| QA and hosting-runbook checkpoint | This report's commit |
| Hostinger staging commit | Not created; staging was outside the authorized phase |
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
| `npm ci` | 409 packages installed; 410 audited; 0 vulnerabilities |
| `npm run validate` | PASS: type/content, unit, build, link, target, axe, and Playwright suites |
| `npm run check` | 80 files; 0 errors, 0 warnings, 0 hints |
| `npm run test` | 6/6 Node tests passed, including receipt/privacy regression coverage |
| `npm run build` | 25 HTML pages plus machine-readable endpoints built |
| `npm run test:content` | PASS: 25 HTML files, 10 primary routes, provenance, award, metric, and résumé policy checks |
| `npm run test:links` | PASS: 375 local references across 25 HTML files; 24 external links inventoried |
| `npm run test:targets` | PASS: local, Hostinger staging, Hostinger production, and GitHub mirror builds |
| `npm run test:a11y` | 10/10 route scans passed WCAG A/AA axe rules |
| `npm run test:e2e` | 28/28 browser tests passed |
| `npm audit --audit-level=moderate` | 0 vulnerabilities |
| `npm run screenshots:pass2` | 50/50 route/viewport captures passed |
| `npm run screenshots:pass3` | 50/50 route/viewport captures passed after final fixes |

The first `npm ci` retry encountered an `EPERM` lock from a running local Astro preview. The preview process was stopped and the clean install then passed; this was a local process lock, not a dependency defect.

## Route and target coverage

Local tests cover `/`, `/work/`, all four flagship work routes, `/experience/`, `/lab/`, `/about/`, `/resume/`, `/portfolio.json`, `/llms.txt`, `/build.json`, compatibility routes, and the custom 404. They verify responses, canonical and robots metadata, server-rendered claims, navigation, console/network health, no horizontal overflow, reduced motion, keyboard behavior, and evidence-mode behavior.

| Target | Canonical | Robots | Result |
| --- | --- | --- | --- |
| Local | `http://localhost:4321` | `noindex,nofollow`; robots disallow | PASS |
| Hostinger staging | configured temporary staging origin | `noindex,nofollow`; robots disallow | PASS in generated target build; no remote staging deployment |
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
- [x] The source PDF is withheld because it contains fields and claims that require privacy clearance.
- [x] No broken local link, TODO, lorem ipsum, or placeholder evidence URL remains.

## Three intentional visual QA passes

Required viewports: 320×700, 390×844, 768×1024, 1024×900, and 1440×1000.

### Pass 1 — hierarchy and composition

Five homepage captures were reviewed for first-fold positioning, hero hierarchy, selected-work order, typography, spacing, mobile stacking, navigation, and footer completeness. Fixes included tightening the page hero, improving the 320-pixel fold, and clarifying selected-work hierarchy.

Evidence: `docs/screenshots/pass-1-hierarchy/` (5 original PNG files).

### Pass 2 — interaction and accessibility

Ten primary routes and case studies were captured at all five viewports. Review covered the flight recorder fallback and interaction, keyboard order, focus, reduced motion, mobile navigation, jump navigation, overflow, evidence controls, and media behavior.

Evidence: `test-results/pass-2-polish/` (50 original captures plus 50 Playwright attachments).

### Pass 3 — regression and restraint

The same 10×5 matrix was regenerated after the final visual and content fixes. Copy, classifications, evidence labels, metric context, award attribution, responsive layouts, social cards, résumé handling, and case-study pacing were rechecked.

Evidence: `test-results/pass-3-restraint/` (50 original captures plus 50 Playwright attachments). These generated files are intentionally ignored by Git and are uploaded by CI when the suite runs.

## Accessibility evidence

| Check | Result |
| --- | --- |
| Automated axe | 10/10 primary route scans passed |
| Keyboard navigation | Playwright coverage passed |
| Evidence control and focus visibility | Playwright coverage passed |
| Reduced motion | Playwright emulation passed |
| Skip link and landmarks | Axe/route coverage passed |
| Heading structure and alternatives | Axe/content coverage passed |
| Required viewport reflow | Five-project visual matrix and overflow checks passed |

## Performance evidence

Lighthouse 12.8.2 ran against a local preview built with Hostinger-production metadata. These are controlled local-lab results, not claims about a deployed network origin.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 100 | 100 | 100 | 100 | 0.9 s | 0 | 0 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.2 s | 0.005 | 0 ms |

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

1. Supply a privacy-cleared public résumé PDF, or explicitly approve a sanitized replacement. The reviewed `_JRFO` PDF is not published.
2. Confirm whether an official source can document Shailesh's precise Let's Talk Doc component contribution beyond résumé-supported team contribution language.
3. Approve Hostinger staging in a later phase and provide the staging origin so remote visual, response-header, SSL, and performance checks can run.
4. Before cutover, authorize read-only domain/DNS/email inventory, confirm email backup, visually approve staging, and provide the exact phrase `CUTOVER APPROVED`.
5. Confirm whether any third-party award logos or images are licensed for republication; none are used now.

## Conclusion

Portfolio V2 meets the local implementation and QA release criteria. The remaining items are intentionally gated owner actions for a public PDF and later Hostinger staging/cutover phases. No production deployment or merge is part of this conclusion.
