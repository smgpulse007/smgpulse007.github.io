# Portfolio V2.2 QA report

Status: **local and isolated Hostinger staging validation passed**.

Staging: `https://royalblue-wildcat-803695.hostingersite.com`

## Local gates

| Gate | Result |
|---|---|
| Secret scan | Pass |
| Astro diagnostics | 0 errors, 0 warnings, 0 hints across 117 files |
| Unit tests | 6/6 pass |
| Static build | 48 pages pass |
| Content/copy/legacy | Pass |
| Local link inventory | 995 references across 48 HTML files; 49 external URLs inventoried |
| Deployment targets | 4/4 pass; nonproduction sitemap suppressed and crawl blocked |
| Media/evidence | Pass |
| Axe Chromium | 18/18 routes pass |
| Cross-browser E2E | 120/120 pass across Chromium, Firefox, and WebKit |
| Cross-browser axe | 54/54 route/browser combinations pass |
| Live modes | 24/24 pass across Chromium, Firefox, and WebKit |
| Required width matrix | Pass from 320 through 2560 px |

## Visual review

Three first-fold prototypes were implemented as real routes. The selected hybrid uses the Observatory world, Evolution spine, and Agent System authority language. Full-page captures cover the homepage, systems index, evolution, claims agents, Meta Harness, LLM Steering, Lab, Research, About, Recognition, and Résumé. Desktop and mobile homepage captures plus four interaction videos are included.

Human inspection found and corrected:

- compact-label WCAG contrast;
- an interactive SVG incorrectly exposed as an image role;
- 320–360 px Agent Trace overflow;
- horizontal compact evolution behavior on mobile;
- small-screen Research/Atlas clipping;
- preservation of legacy Lab fragments.

The live-modes suite covers disabled JavaScript, reduced motion, keyboard-only navigation, forced colors, 200% zoom-equivalent reflow, cold cache, slow-network latency, and device-scale-factor 2 rendering.

## Remote staging proof

- 120/120 E2E checks passed across Chromium, Firefox, and WebKit.
- 54/54 axe route/browser combinations passed.
- 24/24 live-mode checks passed.
- Canonicals resolve to the isolated staging host.
- Meta robots is `noindex,nofollow`; no sitemap is emitted. Hostinger HCDN supplies its own free-subdomain `robots.txt` with a Googlebot block, so the deployment also carries a host-conditional `X-Robots-Tag: noindex, nofollow, noarchive` safeguard.
- `build.json` identifies the expected branch SHA and `hostinger-staging` target.
- PDF, JSON endpoints, legacy routes, custom 404, and social images returned successfully.

## Owner-review boundary

- Review the isolated staging site and the committed staging screenshots/videos.
- Decide whether V2.2 is accepted for a later, separately authorized cutover.

No production, mirror, DNS, or V2.1 staging mutation is authorized.
