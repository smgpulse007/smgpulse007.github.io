# Editorial UI Refresh

## Baseline and scope

- Starting point: `fe047d7e2b80225967a66efdc6d8e0f9f8e682af`, the latest available V2.3 branch, not a verified V3 release.
- Branch: `codex/portfolio-editorial-refresh`.
- Reviewed production at `https://shaileshdudala.com/` and the V2.3 staging site at `https://lightgrey-bat-510306.hostingersite.com/`.
- This is a presentation and usability update. It does not re-audit repository maturity, refresh July 2026 research data, or expand professional claims.
- Production, DNS, email, and the existing staging sites remain unchanged.

## Audit

The previous first screen prioritized a large abstract slogan over personal identity. Outline lettering, glowing orbital graphics, repeated instrument panels, and dense all-caps labels made unrelated sections look alike. Too many proof and interaction surfaces competed on the homepage. The floating motion control also occupied content space.

The redesign establishes identity first, then selected work, qualified outcomes, public project artifacts, background, and a direct contact path. It uses a light reading surface, dark ink, restrained rust accents, serif emphasis, and distinct project colors. Spacing and typography are deliberately smaller on secondary pages and tools.

## Implemented

- New identity-led homepage with four professional projects, three scoped outcomes, and two real repository screenshots.
- Shared header, footer, typography, focus states, page headings, research library, and case-study reading surfaces.
- Matching browser icon and generated social-sharing images.
- Mobile navigation closes with Escape, restores focus, and closes on navigation.
- Project explorer displays actual available artifacts, announces result counts, automatically selects a visible match, and handles empty searches.
- A full project directory remains available without JavaScript. Career and claims interactions remain on their relevant detail pages instead of occupying the homepage.
- Motion preference remains persistent, with its control in the footer and suppressed when reduced motion is requested.
- Restored the original checked-in LLM comparison within the case-study body, including its coefficient and generalization limits.

## Evidence and assets

Professional project previews are explicitly labeled synthetic/system reconstructions or evaluation frameworks. They are not employer screenshots. The LLM Steering still is derived from frame zero of the existing checked-in workbench GIF using Sharp. The AlphaQuant screenshot is an existing repository artifact. No new performance, award, ownership, or maturity claims were introduced.

`src/styles/editorial.css` is the current visual layer over the retained historical styles. Historical components remain available for compatibility routes and interactive evidence. The data manifests retain their existing V2.3 schema version because their content contract has not changed.

## Architecture

Astro 7 generates static HTML and JSON from TypeScript content modules and checked-in assets. The frontend uses custom responsive CSS, Lucide icons, and targeted TypeScript interactions; React 19 remains in the existing component toolchain. Sharp generates social images. Hostinger serves the build output directly, with no application server, database, runtime API, or private credentials shipped to visitors. Email contact is a mail link, not a server-side form.

Node 24 LTS is the recommended build/test runtime. The dependency refresh resolves Astro 7.3.3, Sharp 0.35.4, PDF.js 6.3.289, and PostCSS 8.5.28, along with patched transitive dependencies. The Windows system Node installation was not changed; this work uses Codex's bundled Node 24.19.0.

GitHub's initial dependency audit reported 12 inherited findings. Patched dependencies were installed without `--force`; the resulting npm audit reports zero vulnerabilities. The relevant image-processing advisories are [Astro GHSA-26w7-cxv4-gfx2](https://github.com/advisories/GHSA-26w7-cxv4-gfx2) and [Sharp GHSA-rgj7-g3m4-5g8c](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c). This is dependency-audit evidence, not an exhaustive application security audit.

## Verification

The required gates are `npm run validate` and the three-engine Playwright suite, including `tests/editorial.spec.ts`. The latter adds search recovery, visible selection, mobile dismissal/focus, actual image loading, first-screen content, and responsive overflow assertions.

Initial QA caught and corrected inherited dark-theme contrast failures, a reduced-motion control override, and the accidentally removed LLM comparison. Testing against Astro's development server also exposed its toolbar headings and build-only social-image routes; acceptance testing uses the static production build instead.

The hosted no-JavaScript check waits for the load event before measuring layout, because DOMContentLoaded can precede remote CSS loading when scripts are disabled. The newer Astro preview is explicitly kept in the foreground for Playwright via `--ignore-lock`.

Verified on 2026-09-19 (America/New_York):

| Check | Result |
| --- | --- |
| `npm run validate` | Passed, including 13 validator unit tests, Astro checks, 54-page build, content/claims/evidence/privacy gates, local links, four deployment-target contracts, accessibility, end-to-end, and editorial tests |
| Final patched-stack browser suite | 271 passed: 243 accessibility, end-to-end, browser-mode, and editorial checks across Chromium/Firefox/WebKit, plus 28 desktop/mobile screenshots; no skipped or flaky tests |
| Final hosted Chromium suite | 81 passed against the deployed HTTPS site, including source revision, noindex/canonical metadata, image loading, no-JavaScript layout, and controls |
| Dependency audit | Zero reported npm audit vulnerabilities |
| Local link validation | 1,080 references across 54 HTML files; 83 external URLs inventoried, not re-audited locally |
| Media budget | Validator passed; 59.7 KB gzip across shipped JavaScript |

The new editorial interaction checks also run in GitHub CI. Automated accessibility checks found no WCAG A/AA violations on the 19 tested routes; this is not a claim of complete manual accessibility certification.

Review captures: [desktop home](editorial-refresh/home-desktop.png), [mobile home](editorial-refresh/home-mobile.png), [project explorer](editorial-refresh/projects-desktop.png), and [mobile research](editorial-refresh/research-mobile.png).

## Page-by-page refinement

Follow-up starting point: `a529069e3d83a9553d89eeb4663783edee90d5d3`. The user requested elegant timelines and visualizations, refinement of every page, and deployment without another review cycle.

- Rebuilt the career visualization as a semantic five-stage timeline, with aligned dates, restrained markers, and a vertical tablet/mobile layout. Removed the oversized SVG, intersecting dates, decorative waves, and duplicated fallback content.
- Corrected career deep links: each stage now reaches the corresponding role rather than the reverse-chronological row at the same array index.
- Replaced the claims orbit with a compact workflow-boundary diagram and readable step controls. Selection is announced with `aria-pressed`; the readout is a polite live region.
- Replaced the nine-program radial layout with an aligned, responsive selection grid. Refined model comparisons, document evidence, evolution stages, system layers, and legacy interactive tools.
- Unified project-detail pages, older system pages, calls to action, and the 404 page with the current typography, spacing, and colors. Historical no-index concept studies remain historical studies.
- Added the missing screen-reader-only utility and regression coverage for timeline labels, role targets, every program selection, and every claims step at narrow widths.

Completed browser verification: **347 passed**, no failures, skips, or flaky tests. This includes 285 functional/accessibility checks across Chromium, Firefox, and WebKit, plus 62 desktop/mobile visual captures covering all **31 public content pages**, including project details and 404. The timeline is additionally checked at widths 320, 390, 768, 1024, 1440, and 2560; diagram controls at 320, 390, 768, and 1440.

The first refinement pass caught a 320px program-label overflow and insufficient contrast on workflow numbers; both were corrected before the passing suite. Isolated diagram screenshots hide fixed site navigation during capture; full-page captures retain the real navigation. This prevents screenshot stitching from painting the fixed header over a tall diagram.

The complete `npm run validate` also passed after the refinement, including all 31 automated accessibility routes, 49 Chromium end-to-end checks, 15 three-engine editorial checks, source/content/evidence validation, 1,075 local references, and all four deployment-target contracts. The final screenshot-only rerun passed all 62 captures after correcting isolated screenshot handling.

Refinement captures: [career desktop](editorial-refresh/career-desktop.png), [career mobile](editorial-refresh/career-mobile.png), [claims workflow](editorial-refresh/claims-workflow.png), and [program map mobile](editorial-refresh/program-map-mobile.png).

## Deployment boundary and recovery

Hostinger authentication was restored using a fresh task-local MCP connection and the user's corrected Windows credential. Codex and the other running agents were not restarted. Never put credentials in this repository, this report, or chat.

The isolated preview is live at [the Hostinger staging site](https://paleturquoise-loris-684693.hostingersite.com/). The previous staging site is preserved for comparison. Production cutover still requires the repository's explicit approval gate.

- Deployed refinement revision: `43ac9fc651ae115037215d641a752866f8623b0f`.
- Build time: `2026-09-20T00:44:00.792Z`.
- [Live build identity](https://paleturquoise-loris-684693.hostingersite.com/build.json): verified matching revision and `hostinger-staging` target over HTTPS.
- Archive: `tmp/dist_20260920_004411.zip`, 5,904,550 bytes, 132 entries, with `index.html` and `.htaccess` at the archive root.
- Archive SHA-256: `011AD138535C44F0E92A20887F98D743CACC94DED4FB29771FAFBFDDA74AA798`.
- Post-deployment Chromium verification: **95 passed**, no failures, skips, or flaky tests. Hosted revision, canonical/noindex metadata, controls, accessibility, mobile layouts, and no-JavaScript behavior were verified. A cached in-app tab initially showed the previous HTML; a normal reload fetched the new timeline and corrected role targets.
- The previous preview artifact `tmp/dist_20260920_002652.zip` at revision `be38424335a4144a45b4616e0da4dc41b0dd9fc4` remains available for rollback.
- [Draft PR #5](https://github.com/smgpulse007/smgpulse007.github.io/pull/5) is stacked on the existing V2.3 branch; it does not merge or deploy production.
- GitHub CI was still running its external-link validation at handoff. The local and hosted results above are completed, not inferred from CI.
- The subsequent documentation-only receipt commit does not change deployed application code.

For local preview, use `npm run dev -- --host 127.0.0.1 --port 4381`. For release verification, use the built output with `npm run preview`. Rollback means redeploying the previously accepted artifact; no production rollback is needed for this unshipped branch.
