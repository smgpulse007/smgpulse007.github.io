# Portfolio V2.1 release plan

## Current allowed scope

- implement and validate on `codex/portfolio-v2.1-experience-evidence`;
- push the branch;
- deploy only `dist` to the isolated no-index Hostinger staging origin;
- open a draft PR titled `Portfolio V2.1 — staging review (DO NOT MERGE)`;
- stop before merge or cutover.

## Staging gate

The staging build must prove its branch SHA, temporary-origin canonical, `noindex,nofollow`, absent sitemap, raw HTML meaning, compatibility routes, public résumé, media, browser matrix, accessibility, and performance budgets.

## Production gate

No production, mirror, `main`, tag, DNS, email, billing, subscription, or domain-registration change is allowed before the exact owner phrase:

`V2.1 CUTOVER APPROVED`

After that phrase, production and mirror must be released from the same approved SHA, with the mirror retaining production canonicals and `noindex,follow`.
