# Custom Domain Plan

Status: documentation only; no domain or DNS action authorized
Last reviewed: 2026-07-12

## Canonical decision

- Canonical public origin: `https://shaileshdudala.com`
- Canonical host after cutover: Hostinger Business Web Hosting
- GitHub Pages: `https://smgpulse007.github.io` no-index static mirror/fallback
- The custom domain must never point to GitHub Pages.

The preferred canonical URL is the HTTPS apex domain. After Hostinger inventory confirms supported routing, `https://www.shaileshdudala.com` should redirect permanently to the apex without a redirect chain. Do not assume the record or redirect mechanism before inventory.

## Current safety boundary

During design, implementation, local QA, and staging:

- keep the current Website Builder attachment unchanged;
- do not create, delete, or edit DNS records;
- do not change nameservers;
- do not connect the apex or `www` domain to the new application;
- do not change domain registration, renewal, billing, or subscriptions;
- do not modify email;
- do not add a repository `CNAME` file.

## Pre-cutover inventory

Before any write, capture:

| Item | Verified value |
| --- | --- |
| Nameservers | Pending read-only inventory |
| Apex web record/attachment | Pending |
| `www` record/redirect | Pending |
| MX records | Pending |
| SPF | Pending |
| DKIM | Pending |
| DMARC | Pending |
| Other TXT verification | Pending |
| Unrelated subdomains | Pending |
| TTLs | Pending |
| Email provider and backup | Pending |
| Current SSL | Pending |
| Builder site archive/duplicate | Pending |

Classify every record as web-routing, email-critical, verification, or unrelated. Only verified web-routing entries needed for the application connection may change.

## Email preservation

MX, SPF, DKIM, DMARC, verification, and unrelated records are protected. Never select “delete email service.” Never delete the domain registration. Confirm an owner-controlled email backup before cutover if domain email exists, and verify mail health after the domain switch.

## Cutover behavior

After all staging gates pass and the owner issues `CUTOVER APPROVED`:

1. archive or duplicate the old Builder site where safely supported;
2. release the domain from Builder through the verified Hostinger operation without deleting email;
3. attach the apex to the approved static Astro application;
4. establish the verified `www` to apex redirect;
5. allow Hostinger to issue SSL;
6. verify canonical production metadata and indexing;
7. compare all protected DNS records with the captured inventory;
8. retain the staging URL and rollback evidence where supported.

If Hostinger requires nameserver changes or presents an ambiguous deletion option, stop and obtain separate approval for that exact action.

## Target SEO behavior

| Surface | Canonical | Robots |
| --- | --- | --- |
| Production apex | `https://shaileshdudala.com/...` | `index,follow` |
| Production `www` | Redirect to apex | Not a separate indexed site |
| Hostinger staging | Temporary staging URL | `noindex,nofollow` |
| GitHub Pages mirror | Production URL | `noindex,follow` |
| Local | Local URL | `noindex,nofollow` |

After launch, verify Search Console/indexing only for the canonical origin if the owner elects to configure it. The mirror must not appear as a competing canonical site.

## Rollback

Rollback uses the captured domain/DNS inventory and the verified Hostinger attachment controls. Restore the previous Builder attachment when safe and available; otherwise use the prepared holding page. Never use broad DNS replacement or nameserver changes as an improvised rollback. See `HOSTINGER_ROLLBACK.md`.
