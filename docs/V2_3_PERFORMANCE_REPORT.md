# Portfolio V2.3 performance report

Date: 2026-07-17  
Scope: V2.3 branch and isolated review build  
Status: full local release matrix passed; remote staging measurements to be appended after deployment

## Performance objective

V2.3 keeps the visual character of the portfolio without making animation, glass, or device capability prerequisites for meaning. The release contract therefore measures both payload and behavior:

- static HTML contains the professional narrative, case evidence, project inventory, research records, and widget fallbacks;
- enhanced effects are capability-gated;
- standard mode removes costly ambient motion and lowers blur;
- reduced mode removes animation and backdrop filtering and replaces the career SVG with a semantic list;
- no page depends on WebGL;
- the user can pause decorative motion persistently.

## Final local build inventory

| Measure | Result |
| --- | ---: |
| Generated pages | 54 |
| Required checked-in media over 1 MB | 0 |
| Total shipped JavaScript, gzip | 59.7 KB |
| Externally referenced JavaScript on homepage | 0.0 KB |
| Externally referenced JavaScript on noninteractive case route | 0.0 KB |
| Global CSS | 91,269 B / 18,671 B gzip |
| Shared Layout/V2.3 CSS | 49,680 B / 10,204 B gzip |
| Research CSS | 19,643 B / 4,326 B gzip |
| Prototype shared CSS | 11,426 B / 3,303 B gzip |
| Living Career Atlas CSS | 14,832 B / 3,847 B gzip |

The ordinary V2.3 route receives approximately 28.9 KB gzip of shared CSS. Research receives approximately 32.4 KB gzip. Prototype routes add their isolated direction-specific stylesheet. The combined `dist/_astro` CSS inventory is not a per-route payload: it is 186,850 bytes raw and 40,351 bytes gzip across mutually exclusive route assets.

## Runtime tiers

### Enhanced

Requires a large viewport, fine pointer, at least eight logical cores, at least 8 GB reported device memory, WebGL2 availability, no data-saver constraint, and no reduced-motion or reduced-transparency preference. Enhanced mode permits the complete ambient material and motion treatment.

### Standard

Used when the device is unconstrained but does not meet the full enhanced gate. Ambient orbit animation is stopped and blur is reduced. All content and interaction remain available.

### Reduced/static

Used by default before JavaScript runs and whenever reduced motion, data saver, 2G/slow-2G, or equivalent constraints apply. Animation and transitions are removed, backdrop filters are disabled, surfaces become opaque, and the career map becomes a semantic list.

## Stress-path verification

The three-engine live-mode suite passed 30/30 checks across Chromium, Firefox, and WebKit for:

- no JavaScript;
- WebGL failure;
- `prefers-reduced-motion`;
- forced colors;
- persistent motion pause;
- 320 px reflow;
- slow-network routing;
- device-pixel ratio 2.

The responsive visual matrix also passed 420/420 route-and-viewport checks across the three engines, from 320 × 700 through 2560 × 1440. Exact remote-staging results are recorded in `V2_3_QA_REPORT.md` after deployment.

## Tradeoffs

- V2.3 intentionally spends more CSS than a minimal résumé site to create a distinct editorial/material system.
- Static-first rendering and zero homepage external-script references keep that cost predictable.
- Research uses an additional isolated stylesheet because its light editorial atlas is intentionally different from the dark professional system.
- Seventeen source `backdrop-filter` declarations and thirteen source animation declarations are present, but standard/reduced tier gates neutralize the expensive continuous and full-viewport effects.
- The next worthwhile optimization would be route-level splitting of the shared legacy and V2.3 style layers; it is not required to make the current staging build safe.

## Release gate

Local payload, media, and constrained-mode gates are green. Remote response, asset, and browser measurements must remain green on the isolated Hostinger build before this document is final.
