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

## Verification

The required gates are `npm run validate` and the three-engine Playwright suite, including `tests/editorial.spec.ts`. The latter adds search recovery, visible selection, mobile dismissal/focus, actual image loading, first-screen content, and responsive overflow assertions.

Initial QA caught and corrected inherited dark-theme contrast failures, a reduced-motion control override, and the accidentally removed LLM comparison. Testing against Astro's development server also exposed its toolbar headings and build-only social-image routes; acceptance testing uses the static production build instead.

Verified on 2026-09-19 (America/New_York):

| Check | Result |
| --- | --- |
| `npm run validate` | Passed, including 13 validator unit tests, Astro checks, 54-page build, content/claims/evidence/privacy gates, local links, four deployment-target contracts, accessibility, end-to-end, and editorial tests |
| Accessibility + end-to-end + browser modes + editorial suite | 243 passed across Chromium, Firefox, and WebKit; no skipped or flaky tests |
| Editorial + desktop/mobile visual pass | 37 passed |
| Final desktop/mobile screenshot pass after lazy-image capture fix | 28 passed |
| Local link validation | 1,080 references across 54 HTML files; 83 external URLs inventoried, not re-audited locally |
| Media budget | Validator passed; 59.7 KB gzip across shipped JavaScript |

The new editorial interaction checks also run in GitHub CI. Automated accessibility checks found no WCAG A/AA violations on the 19 tested routes; this is not a claim of complete manual accessibility certification.

Review captures: [desktop home](editorial-refresh/home-desktop.png), [mobile home](editorial-refresh/home-mobile.png), [project explorer](editorial-refresh/projects-desktop.png), and [mobile research](editorial-refresh/research-mobile.png).

## Deployment boundary and recovery

Hostinger authentication was restored using a fresh task-local MCP connection and the user's corrected Windows credential. Codex and the other running agents were not restarted. Never put credentials in this repository, this report, or chat.

The isolated preview allocated for this revision is `https://paleturquoise-loris-684693.hostingersite.com/`. Deployment and live smoke verification are pending in this source checkpoint. The previous staging site is preserved for comparison. Production cutover still requires the repository's explicit approval gate.

For local preview, use `npm run dev -- --host 127.0.0.1 --port 4381`. For release verification, use the built output with `npm run preview`. Rollback means redeploying the previously accepted artifact; no production rollback is needed for this unshipped branch.
