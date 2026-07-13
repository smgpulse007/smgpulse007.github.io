# Hostinger Production Inventory

Status: authenticated read-only inventory complete; no-index Builder rollback copy published and restore control verified
Captured: 2026-07-13 04:13–04:26 UTC

This is a privacy-safe launch record. DKIM targets, complete SPF/DMARC payloads, verification values, account contacts, and credentials are intentionally omitted. No token value was read or printed. The authoritative full values remain in Hostinger; this document records the fields required to detect unsafe structural changes.

## Approved surfaces and identifiers

| Item | Verified value |
| --- | --- |
| Repository | `smgpulse007/smgpulse007.github.io` |
| Implementation branch | `codex/portfolio-v2-hostinger` |
| Last live staging SHA before this documentation checkpoint | `8ff708b9e5b81434bd89bedf6ba60d865c11cd07` |
| Hosting order | `201333978`; active Hostinger Business plan |
| Hosting account | `u380810059`; Boston datacenter |
| Static staging website identifier | `aquamarine-mole-482437.hostingersite.com` |
| Legacy Builder website identifier | `shaileshdudala.com` |
| Builder rollback copy | `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com` |

The Hosting API lists the isolated static staging website. Website Builder is a separate control surface and is visible in hPanel, not in the Hosting API website list.

## Domain registration and attachment state

| Field | Verified value |
| --- | --- |
| Domain | `shaileshdudala.com` |
| Registrar status | Active |
| Registration record ID | `11469793` |
| Expires | 2028-01-30 |
| Registrar lock | Enabled |
| WHOIS privacy | Enabled |
| Nameservers | `ns1.dns-parking.com`, `ns2.dns-parking.com` |
| Domain forwarding product | None configured |
| Current application | Hostinger Website Builder; public title `Shailesh | Data Scientist` |
| Current apex behavior | HTTP permanently redirects to HTTPS; HTTPS returns 200 |
| Current `www` behavior | HTTP/HTTPS permanently redirect to HTTPS apex; current Builder redirect does not preserve paths |
| Current certificate | TLS 1.3; apex and `www` SANs; Let's Encrypt R13; expires 2026-08-18 |

## Authoritative DNS zone

| Name | Type | TTL | Classification | Safe value/status |
| --- | --- | ---: | --- | --- |
| `@` | `ALIAS` | 300 | Web routing | `shaileshdudala.com.cdn.hstgr.net.` |
| `www` | `CNAME` | 300 | Web routing | `www.shaileshdudala.com.cdn.hstgr.net.` |
| `@` | `MX` | 14400 | Email critical | preference 5 `mx1.hostinger.com.`; preference 10 `mx2.hostinger.com.` |
| `@` | `TXT` | 3600 | Email critical — SPF | Present; Hostinger include confirmed; full payload withheld |
| `_dmarc` | `TXT` | 3600 | Email critical — DMARC | Present; policy `none`; full payload withheld |
| `hostingermail-a._domainkey` | `CNAME` | 300 | Email critical — DKIM | Present; target withheld |
| `hostingermail-b._domainkey` | `CNAME` | 300 | Email critical — DKIM | Present; target withheld |
| `hostingermail-c._domainkey` | `CNAME` | 300 | Email critical — DKIM | Present; target withheld |
| `autodiscover` | `CNAME` | 300 | Email critical | `autodiscover.mail.hostinger.com.` |
| `autoconfig` | `CNAME` | 300 | Email critical | `autoconfig.mail.hostinger.com.` |

Hostinger stores the apex as an `ALIAS`; public authoritative resolution returns two geo-rotating A records and two geo-rotating AAAA records with 60-second TTLs. At capture time the authoritative answers were:

- `ns1`: A `191.101.104.249`, `191.96.144.71`; AAAA `2a02:4780:1e:a7f5:828e:1729:9c7:98d3`, `2a02:4780:22:26f5:690a:73a2:a6cb:ab32`.
- `ns2`: A `191.101.104.71`, `191.96.144.189`; AAAA `2a02:4780:1e:4911:c9a6:3496:36d3:510a`, `2a02:4780:21:50d3:1dca:b364:92b3:fdc2`.

The address values are edge-dependent; record count, TTL, Hostinger ownership, and the stored `ALIAS`/`www` CNAME are the stable comparison signals.

## DNS rollback points

| Snapshot | Captured | Comparison with current zone |
| --- | --- | --- |
| `150089457` | 2026-05-20 10:45:19 UTC | Exact match across all 10 stored records at inventory time |
| `143071414` | 2026-04-28 23:48:21 UTC | Does not match current web routing (`connect.hostinger.com` was used) |

Do not restore a whole snapshot as the normal cutover or rollback mechanism. Prefer no DNS write at all; if Hostinger changes web routing automatically, compare the protected records and repair only a proven web-routing RRset. Snapshot `150089457` is emergency evidence, not permission for a broad restore.

## Email preservation finding

Hostinger hPanel reports **Free Business Email: Active** and **0/100 mailboxes** for `@shaileshdudala.com`. There is no mailbox content to back up. The email service, MX, SPF, DKIM, DMARC, autodiscover, and autoconfig records remain protected and must survive cutover.

The verified Builder deletion dialog has two independent checkboxes:

1. required acknowledgement that the website and related site data are permanently deleted;
2. optional **“Also delete email and mailboxes for this domain”**.

The optional email checkbox must remain unchecked. The site delete button remains disabled until the required website acknowledgement is selected.

## Builder safety copy and proposed production path

The legacy Builder site was duplicated in hPanel to `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com` before any destructive action, then published successfully. Live HTTPS smoke tests passed for `/`, `/about`, `/my-ai-app-library`, `/projects`, and `/contact`; every route returns `meta name="robots" content="noindex"`, and the homepage returns the legacy title `Shailesh | Data Scientist`. The public original remains live. The duplicate is the platform rollback asset; Builder does not provide a downloadable full-site backup that survives deletion of the original. Hostinger documents that online-store products/settings are not copied; no store was surfaced in the original site's dashboard inventory.

The following is the only technically viable sequence found in the Hosting API and hPanel. It remains a **proposed** production sequence until the owner explicitly overrides the master specification's no-delete invariant for the original Builder website at the action boundary:

1. keep the Builder duplicate available;
2. delete only the original `shaileshdudala.com` Builder website in hPanel, selecting the required website acknowledgement while leaving optional email deletion unchecked;
3. wait until the apex is released from Builder;
4. call Hosting `createWebsite` for `shaileshdudala.com` on order `201333978`;
5. build the exact merged `main` SHA with the production environment contract;
6. deploy the prebuilt static archive to the new apex website;
7. allow Hostinger to apply web routing and issue SSL automatically;
8. compare all protected DNS/email records with this inventory;
9. verify apex, path-preserving `www` redirect behavior, every route, SEO, resume, structured data, and `/build.json`;
10. roll back immediately through the Builder duplicate if a critical gate fails.

Do not use Change domain, domain forwarding, parked-domain aliasing, DNS reset, nameserver changes, or broad snapshot restoration for this launch.

The duplicate's restore control was inspected without submitting a domain mutation: Websites → Website Builder → duplicate → **Connect domain** → enter/select `shaileshdudala.com` → **Next**, then publish/update the site. The duplicate now serves live content. During rollback, first release the apex from the failed static website by deleting only that newly created website with optional email/mailbox deletion unchecked, then use this Connect domain flow. The final **Next** was intentionally not clicked during preflight because the apex is still attached to the live original; Hostinger's official Builder connection documentation identifies that click as the connection action.

## Expected interruption

The destructive interval begins when the original Builder site is deleted and ends when the new apex static website is created, deployed, routed, and serving valid HTTPS. Hostinger web-routing TTLs are 300 seconds and public edge answers use 60 seconds. The temporary staging site and Builder duplicate remain available throughout.

## Official procedure references

- [Duplicate a Website Builder site](https://www.hostinger.com/support/8439478-hostinger-website-builder-how-to-duplicate-a-website/)
- [Connect a domain to Website Builder](https://support.hostinger.com/en/articles/8347449-how-to-connect-a-domain-to-hostinger-website-builder)
- [Delete a website while retaining email](https://www.hostinger.com/support/3624731-how-to-delete-a-website-from-a-hosting-plan-in-hostinger/)
- [Add an empty website](https://support.hostinger.com/en/articles/1583214-how-to-add-a-website)
- [Automatic Lifetime SSL behavior](https://www.hostinger.com/support/5613445-how-to-fix-a-failed-lifetime-ssl-installation-in-hostinger/)

These sources were accessed 2026-07-13. Account-specific controls and inventory take precedence over generic screenshots; no unsupported DNS or email action is inferred from them.
