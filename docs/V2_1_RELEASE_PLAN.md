# Portfolio V2.1 release plan

Status: `complete_pending_owner_review`

Staging review origin: <https://aquamarine-mole-482437.hostingersite.com/>

## Current allowed scope

- implement and validate on `codex/portfolio-v2.1-experience-evidence`;
- push the branch;
- deploy only `dist` to the isolated no-index Hostinger staging origin;
- open a draft PR titled `Portfolio V2.1 — staging review (DO NOT MERGE)`;
- stop before merge or cutover.

## Staging gate

The staging build must prove its branch SHA, temporary-origin canonical, `noindex,nofollow`, absent sitemap, raw HTML meaning, compatibility routes, public résumé, media, browser matrix, accessibility, and performance budgets.

This gate has passed. The draft review PR is the final action in the current authorization window.

## Production gate

No production, mirror, `main`, tag, DNS, email, billing, subscription, or domain-registration change is allowed before the exact owner phrase:

`V2.1 CUTOVER APPROVED`

After that phrase, production and mirror must be released from the same approved SHA, with the mirror retaining production canonicals and `noindex,follow`.

## Exact future production change list

Only after the approval phrase:

1. Rebuild the approved SHA with `hostinger-production`, `https://shaileshdudala.com`, and `index,follow`.
2. Inventory/back up the current production root and deploy only the prebuilt `dist` archive.
3. Verify production build identity, canonicals, sitemap, robots, routes, résumé, browser matrix, accessibility, and Lighthouse.
4. Build the same approved SHA for `github-pages-mirror` with production canonicals and `noindex,follow`.
5. Verify the mirror, then tag `portfolio-v2.1.0` and update release evidence.

DNS, nameservers, email, billing, subscriptions, and domain registration remain out of scope even after content cutover unless separately authorized for a demonstrated defect.
