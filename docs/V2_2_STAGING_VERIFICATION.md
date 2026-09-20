# Portfolio V2.2 isolated staging verification

## Identity

- URL: `https://royalblue-wildcat-803695.hostingersite.com`
- Hostinger vhost type: separate addon website
- Hosting account: same authorized order, distinct root directory
- Initial deployed source SHA: `a0fe5ff7ffeab8a23ee3f92fd1fe7488a7e58e71`
- Deployment target: `hostinger-staging`

## Isolation proof

- V2.2 staging: `royalblue-wildcat-803695.hostingersite.com`
- Preserved V2.1 staging: `aquamarine-mole-482437.hostingersite.com`
- Preserved production: `shaileshdudala.com`
- No domain, DNS, email, certificate, mirror, production, or V2.1 staging setting was changed.

## Crawl and identity proof

- Page metadata: `noindex,nofollow`
- Built `robots.txt`: `User-agent: *` plus `Disallow: /`
- Live HCDN `robots.txt`: Hostinger-controlled free-subdomain response blocks Googlebot and allows other agents.
- Independent response safeguard: host-conditional `X-Robots-Tag: noindex, nofollow, noarchive` for `*.hostingersite.com`.
- Sitemap: absent
- Canonical/OG origin: isolated V2.2 staging host
- Build endpoint: exact staging target and deployed source SHA

## Remote automated proof

| Suite | Chromium | Firefox | WebKit | Total |
|---|---:|---:|---:|---:|
| E2E/route/metadata/overflow | 40 | 40 | 40 | 120/120 |
| Axe WCAG A/AA | 18 | 18 | 18 | 54/54 |
| Live modes | 8 | 8 | 8 | 24/24 |

Live modes include JavaScript disabled, reduced motion, keyboard navigation, forced colors, 200% zoom-equivalent reflow, cold cache, slow-network latency, and high-density rendering.

## Review artifacts

- Remote full-page screenshots: `docs/screenshots/v2.2-staging/`
- Remote interaction recordings: `docs/videos/v2.2-staging/`
- Local/prototype comparison evidence remains under the corresponding `v2.2-review` and `v2.2-prototypes` directories.

## Boundary

This is review staging only. Production remains unauthorized until the exact phrase `V2.2 CUTOVER APPROVED` is supplied after owner review.
