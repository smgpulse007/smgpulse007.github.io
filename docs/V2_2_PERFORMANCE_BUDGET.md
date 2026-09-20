# Portfolio V2.2 performance budget

## Budgets

| Surface | Budget | Verified local result |
|---|---:|---:|
| Homepage initial JavaScript | ≤ 90 KB gzip | 0.0 KB |
| Noninteractive system initial JavaScript | ≤ 45 KB gzip | 0.0 KB |
| All shipped JavaScript combined | Informational | 59.7 KB gzip |
| Required static media | < 1 MB each | Pass for all four validated assets |

## Build inventory

- 112 generated files
- 6,629,672 total bytes uncompressed
- 346,340 bytes HTML
- 89,572 bytes CSS
- 191,646 bytes JavaScript before transport compression
- Largest shipped asset: existing LLM Steering workbench GIF, 1,400,567 bytes

The largest existing GIF is not one of the four required under-1-MB media artifacts and is lazy/noncritical. V2.2 first-fold identity, topology diagrams, and interaction surfaces are HTML/CSS/SVG rather than image-heavy hero media.

## Enforcement

`npm run test:media` calculates gzip JavaScript and validates required artifact size. `npm run build` statically renders all routes. Production performance must be rechecked after Hostinger cutover because CDN, cache headers, TLS, and origin behavior are deployment properties.
