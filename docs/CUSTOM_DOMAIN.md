# Custom Domain Plan

Status: Hostinger production cutover complete and verified
Last reviewed: 2026-07-13

## Canonical decision

- Canonical public origin: `https://shaileshdudala.com`
- Canonical host: Hostinger Business Web Hosting
- GitHub Pages: `https://smgpulse007.github.io` no-index static mirror/fallback
- The custom domain does not and must never point to GitHub Pages.

The HTTPS apex is the only indexed production origin. `https://www.shaileshdudala.com` returns one permanent redirect to the corresponding apex path and preserves the query string. TLS is valid for both apex and `www`.

## Current domain state

| Item | Verified value |
| --- | --- |
| Domain | `shaileshdudala.com`; active |
| Canonical application | Static Portfolio V2 release `1ae06ad45315baffaef6d1564aae0da4d4051a53` |
| Hosting order/account | `201333978`; `u380810059` |
| Document root | `/home/u380810059/domains/shaileshdudala.com/public_html` |
| Nameservers | `ns1.dns-parking.com`, `ns2.dns-parking.com`; unchanged |
| Registration | Locked; WHOIS privacy enabled; expires 2028-01-30 |
| Apex web routing | `@ ALIAS` TTL 300 to Hostinger CDN |
| `www` routing | `www CNAME` TTL 300 to Hostinger CDN; one path/query-preserving 301 to apex |
| TLS | Valid for apex and `www` |
| Email | Hostinger Free Business Email active; auto-renew On; expires 2028-04-29; 0/100 mailboxes |
| Builder rollback copy | `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com` |

The original Builder website was deleted after the owner's exact action-time approval. The independent optional email/mailbox deletion setting remained unchecked. Domain registration, nameservers, email service, billing, and subscriptions were not changed.

## DNS baseline and reconciled state

The pre-cutover privacy-safe baseline is in `HOSTINGER_PRODUCTION_INVENTORY.md`. It contained 10 stored record groups:

| Class | Current verified state |
| --- | --- |
| Apex and `www` web routing | Present with baseline names and TTLs |
| MX | Hostinger preferences 5 and 10; TTL 14400; present |
| SPF | Apex TXT restored from snapshot `150089457`; TTL 3600; exact payload withheld |
| DKIM | Three Hostinger selector CNAMEs; TTL 300; present; targets withheld |
| DMARC | `_dmarc` TXT restored from snapshot `150089457`; TTL 3600; policy `none`; full payload withheld |
| Autodiscover/autoconfig | Present at TTL 300 |
| Additional platform record | `ftp A 88.223.85.139`, TTL 1800; added by Hostinger during static-site creation |

The current zone contains all 10 baseline groups plus the separately classified `ftp` A record.

## Protected TXT incident

Post-cutover comparison found that the apex SPF and `_dmarc` TXT groups had disappeared. The Hostinger DNS API showed nine groups, while public DNS returned no apex TXT and NXDOMAIN for `_dmarc`. This violated the protected email-state invariant.

The exact prior values were recovered from snapshot `150089457`. Only the two missing TXT RRsets were restored, both with TTL 3600. No whole-zone restore was performed. The final state was verified through:

- the Hostinger DNS API;
- Cloudflare resolver `1.1.1.1`;
- Google resolver `8.8.8.8`.

Snapshot `143071414` contains obsolete Builder-era web routing and must not be broadly restored over the static production site.

## Email preservation

MX, SPF, DKIM, DMARC, autodiscover, and autoconfig are protected. Hostinger Free Business Email remains active with automatic renewal On, expiration 2028-04-29, and 0/100 mailboxes. There was no mailbox content to back up, and no email-deletion control was selected during Builder or static-site operations.

Never select an email/mailbox deletion option, delete the domain registration, or change nameservers as part of routine application deployment or rollback.

## Completed cutover behavior

1. Published the legacy Builder duplicate and verified page-level `noindex` on its real routes `/`, `/projects/`, `/about/`, `/my-ai-app-library/`, and `/contact/`.
2. Received exact approval and deleted only the original Builder website with optional email/mailbox deletion unchecked.
3. Created the apex static website on order `201333978`.
4. Deployed the exact production archive for SHA `1ae06ad45315baffaef6d1564aae0da4d4051a53`.
5. Purged stale CDN state and verified identical content across 10 observed apex CDN IPs and identical redirects across 10 observed `www` CDN IPs.
6. Verified valid TLS and a one-hop, path/query-preserving `www` redirect.
7. Detected and repaired the protected SPF/DMARC regression with two targeted TXT restorations.
8. Verified production metadata, indexing, structured data, routes, resume, assets, and all browser matrices.

Production archive SHA-256:

```text
25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B
```

## SEO behavior

| Surface | Canonical | Robots | Result |
| --- | --- | --- | --- |
| Production apex | `https://shaileshdudala.com/...` | `index,follow` | Verified |
| Production `www` | Redirect to the corresponding apex URL | Not a separate indexed site | Verified |
| Hostinger staging | Temporary staging URL | `noindex,nofollow` | Retained as isolated QA origin |
| GitHub Pages mirror | Production URL | `noindex,follow` | Must remain without a custom domain |
| Builder rollback copy | Its temporary Builder URL | Page-level `noindex` on the five verified real routes | Verified rollback asset |

Search Console or Bing ownership can be configured separately. It is not required for the canonical site to be technically indexable.

## Rollback

Rollback uses the captured inventory and verified Hostinger controls. The apex must be released from a failed static website **before** the Builder duplicate can reconnect it:

1. optionally deploy the prepared no-index holding page while the failed static website remains attached;
2. delete/release only that failed static website, leaving optional email/mailbox deletion unchecked;
3. confirm the apex is free;
4. connect `shaileshdudala.com` to the published Builder duplicate and publish/update;
5. verify apex, `www`, TLS, all protected DNS groups, and email state.

Never use broad DNS replacement or nameserver changes as an improvised rollback. See `HOSTINGER_ROLLBACK.md`.
