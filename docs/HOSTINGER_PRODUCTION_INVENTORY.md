# Hostinger Production Inventory

Status: production cutover complete; protected domain, DNS, email, TLS, and hosting state verified
Baseline captured: 2026-07-13 04:13-04:26 UTC
Post-cutover reconciliation: 2026-07-13

This is a privacy-safe launch record. Credentials, account contacts, DKIM targets, and complete SPF/DMARC payloads are intentionally omitted. The exact protected TXT values remain in Hostinger DNS history; this document records enough structure and verification evidence to detect and remediate drift without publishing private operational data.

## Approved surfaces and identifiers

| Item | Verified value |
| --- | --- |
| Repository | `smgpulse007/smgpulse007.github.io` |
| Production branch | `main` |
| Production release | `1ae06ad45315baffaef6d1564aae0da4d4051a53` |
| Hosting order | `201333978`; active Hostinger Business plan |
| Hosting account | `u380810059`; Boston datacenter |
| Production document root | `/home/u380810059/domains/shaileshdudala.com/public_html` |
| Production archive | `portfolio-v2-production_20260713_024555_1ae06ad.zip` |
| Production archive SHA-256 | `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B` |
| Static staging website | `aquamarine-mole-482437.hostingersite.com` |
| Builder rollback copy | `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com` |

The production application is the same static Astro portfolio verified on staging. It has no persistent Node or server runtime.

## Domain registration and hosting state

| Field | Verified value |
| --- | --- |
| Domain | `shaileshdudala.com` |
| Registrar status | Active |
| Registration record ID | `11469793` |
| Registration expiration | 2028-01-30 |
| Registrar lock | Enabled |
| WHOIS privacy | Enabled |
| Nameservers | `ns1.dns-parking.com`, `ns2.dns-parking.com`; unchanged |
| Domain forwarding product | None configured |
| Current application | Static Portfolio V2 on Hostinger Business Web Hosting |
| Apex behavior | HTTP redirects to HTTPS; HTTPS serves the verified production release |
| `www` behavior | One permanent redirect to the corresponding HTTPS apex path, preserving the path and query string |
| TLS | Valid for apex and `www` |

The original Website Builder production site was deleted only after the owner's exact action-time approval. The required website-deletion acknowledgement was selected and the independent optional email/mailbox deletion option remained unchecked.

## Current authoritative DNS zone

The current zone contains every one of the 10 pre-cutover baseline groups plus one Hostinger-added `ftp` record:

| Name | Type | TTL | Classification | Safe value/status |
| --- | --- | ---: | --- | --- |
| `@` | `ALIAS` | 300 | Web routing | `shaileshdudala.com.cdn.hstgr.net.` |
| `www` | `CNAME` | 300 | Web routing | `www.shaileshdudala.com.cdn.hstgr.net.` |
| `@` | `MX` | 14400 | Email critical | Hostinger MX preferences 5 and 10; targets unchanged |
| `@` | `TXT` | 3600 | Email critical - SPF | Restored from snapshot `150089457`; exact payload withheld |
| `_dmarc` | `TXT` | 3600 | Email critical - DMARC | Restored from snapshot `150089457`; policy `none`; exact payload withheld |
| `hostingermail-a._domainkey` | `CNAME` | 300 | Email critical - DKIM | Present; target withheld |
| `hostingermail-b._domainkey` | `CNAME` | 300 | Email critical - DKIM | Present; target withheld |
| `hostingermail-c._domainkey` | `CNAME` | 300 | Email critical - DKIM | Present; target withheld |
| `autodiscover` | `CNAME` | 300 | Email critical | `autodiscover.mail.hostinger.com.` |
| `autoconfig` | `CNAME` | 300 | Email critical | `autoconfig.mail.hostinger.com.` |
| `ftp` | `A` | 1800 | Hostinger-added hosting record | `88.223.85.139` |

The `ftp` record was not part of the 10-group baseline. It appeared when Hostinger created the static production website and is retained as a separately classified platform-added record; it is not evidence that an email or nameserver setting changed.

## DNS incident and remediation

| Snapshot | Captured | Role |
| --- | --- | --- |
| `150089457` | 2026-05-20 10:45:19 UTC | Exact match to all 10 pre-cutover stored record groups; authoritative source for protected TXT recovery |
| `143071414` | 2026-04-28 23:48:21 UTC | Older nonmatching web-routing state using `connect.hostinger.com`; not a cutover rollback target |

Immediately after the static-site cutover, the Hostinger DNS API returned nine groups: the two protected TXT groups for apex SPF and `_dmarc` were absent, while the new `ftp` A record was present. Public lookups also returned no apex TXT and NXDOMAIN for `_dmarc`. This was treated as a protected-state regression, not as propagation.

Remediation was deliberately narrow:

1. inspect snapshot `150089457` and recover the exact prior SPF and DMARC payloads without publishing them;
2. restore only `@ TXT` and `_dmarc TXT`, each with the baseline TTL of 3600;
3. leave web routing, nameservers, MX, DKIM, autodiscover, autoconfig, and the platform-added `ftp` record untouched;
4. verify both restored RRsets through the Hostinger DNS API and the independent public resolvers `1.1.1.1` and `8.8.8.8`.

Do not perform a whole-zone snapshot restore during normal rollback. A broad restore could replace the verified static-production web routing with an obsolete attachment state.

## Email preservation

Hostinger reports **Free Business Email: Active**, automatic renewal **On**, expiration **2028-04-29**, and **0/100 mailboxes** for `@shaileshdudala.com`. No mailbox content existed to back up. The email service was not deleted, and the complete MX, SPF, DKIM, DMARC, autodiscover, and autoconfig structure is present after the targeted TXT remediation.

## Builder rollback asset

The legacy Builder site remains published at `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com`. Page-level `noindex` was verified on the real published routes:

- `/`
- `/projects/`
- `/about/`
- `/my-ai-app-library/`
- `/contact/`

This list is the verified route inventory; it does not claim that arbitrary Builder paths exist. The duplicate's **Connect domain** control remains the platform rollback path.

Rollback order is mandatory: first delete/release only the failed static apex website with the optional email/mailbox deletion setting unchecked; only after the apex is free may the Builder duplicate reconnect `shaileshdudala.com` and publish/update.

## Production verification

- `/build.json` reports release `1ae06ad45315baffaef6d1564aae0da4d4051a53` and target `hostinger-production`.
- The final production archive hash matches the value recorded above.
- Canonical, robots, sitemap, structured data, social cards, resume, real 404, primary routes, and compatibility routes passed production verification.
- Chromium, Firefox, and WebKit production matrices passed 30/30 accessibility, 84/84 end-to-end, and 24/24 adverse-mode checks.
- Ten observed apex CDN IPs served the same V2 release after cache purge; 10 observed `www` CDN IPs served the same path/query-preserving redirect.
- `www` redirects permanently to apex while preserving paths and queries.
- TLS is valid for apex and `www`.

## Official procedure references

- [Duplicate a Website Builder site](https://www.hostinger.com/support/8439478-hostinger-website-builder-how-to-duplicate-a-website/)
- [Connect a domain to Website Builder](https://support.hostinger.com/en/articles/8347449-how-to-connect-a-domain-to-hostinger-website-builder)
- [Delete a website while retaining email](https://www.hostinger.com/support/3624731-how-to-delete-a-website-from-a-hosting-plan-in-hostinger/)
- [Add an empty website](https://support.hostinger.com/en/articles/1583214-how-to-add-a-website)
- [Automatic Lifetime SSL behavior](https://www.hostinger.com/support/5613445-how-to-fix-a-failed-lifetime-ssl-installation-in-hostinger/)

Account-specific verified state takes precedence over generic procedure screenshots. This record does not authorize nameserver, registration, billing, subscription, or email-service changes.
