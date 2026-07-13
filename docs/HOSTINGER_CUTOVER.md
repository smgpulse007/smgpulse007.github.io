# Hostinger Production Cutover Runbook

Status: production cutover complete and verified
Completed: 2026-07-13

Portfolio V2 is the canonical production application at `https://shaileshdudala.com`. The owner supplied `CUTOVER APPROVED` and then gave the exact action-time approval required to delete the original Website Builder site. The optional email/mailbox deletion control remained unchecked. The replacement is the same static Astro product verified on staging; no server runtime was introduced.

## Completed safety gates

- The final implementation was merged to `main` and identified by full SHA.
- Staging passed content, privacy, accessibility, browser, SEO, performance, and visual release gates.
- The production archive was built from the approved SHA and hashed before upload.
- The legacy Builder site was duplicated and published as a no-index rollback asset before the original was deleted.
- Domain registration, nameservers, email service, billing, and subscriptions were not changed.
- The deletion dialog's independent optional email/mailbox deletion setting remained unchecked.
- The protected DNS baseline and rollback snapshots were recorded before cutover.
- A post-cutover protected-DNS regression was detected, repaired with two targeted TXT writes, and independently verified.
- The final static production release passed all required live checks across Chromium, Firefox, and WebKit.

## Production release settings

```text
Repository: smgpulse007/smgpulse007.github.io
Branch: main
Commit: 1ae06ad45315baffaef6d1564aae0da4d4051a53
Hosting order: 201333978
Hosting account: u380810059
Document root: /home/u380810059/domains/shaileshdudala.com/public_html
Install: npm ci
Validation: repository check and test scripts
Build: npm run build
Output: dist
Entry file: none
PUBLIC_DEPLOY_TARGET=hostinger-production
PUBLIC_SITE_URL=https://shaileshdudala.com
PUBLIC_CANONICAL_URL=https://shaileshdudala.com
PUBLIC_ROBOTS=index,follow
NODE_ENV=production
```

Production archive:

```text
portfolio-v2-production_20260713_024555_1ae06ad.zip
SHA-256: 25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B
```

The archive contents were deployed at the website root. Node is a build tool only; production serves prebuilt static files.

## Executed sequence

1. Reconfirmed the approved branch, exact SHA, clean release artifact, staging result, domain inventory, email state, and rollback duplicate.
2. Received the owner's exact action-time approval to retire the original Builder site.
3. Deleted only the original `shaileshdudala.com` Builder website in hPanel; selected the required website acknowledgement and left optional email/mailbox deletion unchecked.
4. Waited until the apex was released from Builder.
5. Created the `shaileshdudala.com` static website on hosting order `201333978`.
6. Deployed the exact prebuilt production archive to `/home/u380810059/domains/shaileshdudala.com/public_html`.
7. Purged stale Hostinger/CDN state and confirmed the apex and both Hostinger edge addresses served Portfolio V2.
8. Verified valid TLS and a single permanent `www`-to-apex redirect that preserves the requested path and query string.
9. Compared the post-cutover DNS zone with the 10-group pre-cutover baseline.
10. Detected that apex SPF and `_dmarc` TXT groups had disappeared, recovered their exact prior values from snapshot `150089457`, and restored only those two RRsets at TTL 3600.
11. Verified the restored records through the Hostinger DNS API, `1.1.1.1`, and `8.8.8.8`.
12. Reran production identity, route, metadata, asset, accessibility, browser, reduced-motion, no-JavaScript, reflow, and adverse-mode checks against the final SHA.

No nameserver, registration, billing, subscription, mailbox, MX, DKIM, autodiscover, or autoconfig mutation was part of the cutover.

## DNS incident and remediation

The pre-cutover baseline contained 10 stored record groups. Immediately after the static website was created, the Hostinger DNS API returned nine groups: protected SPF and DMARC TXT records were missing and a Hostinger-added `ftp` A record was present. Public DNS corroborated the missing TXT state. Because these records were classified as email-critical and protected, the absence was a release incident rather than an acceptable propagation delay.

The remediation did not restore the whole zone. Exact TXT payloads were read from snapshot `150089457`, then only these RRsets were restored:

- `@ TXT`, TTL 3600 - SPF payload withheld from this public document;
- `_dmarc TXT`, TTL 3600 - DMARC policy `none`; full payload withheld.

Current DNS contains all 10 baseline groups plus `ftp A 88.223.85.139` at TTL 1800. Snapshot `143071414` remains an obsolete web-routing state and must not be restored broadly.

## Production verification result

| Gate | Result |
| --- | --- |
| Live identity | `/build.json` reports `1ae06ad45315baffaef6d1564aae0da4d4051a53` and `hostinger-production` |
| Archive integrity | SHA-256 matched `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B` |
| Apex | HTTPS serves Portfolio V2 |
| `www` | One 301 to the corresponding apex path; query preserved |
| TLS | Valid for apex and `www` |
| SEO | Production canonical, `index,follow`, production sitemap, structured data, and social metadata verified |
| Content | Primary routes, compatibility routes, machine-readable endpoints, resume, and real 404 verified |
| Accessibility | 30/30 live axe route scans passed across Chromium, Firefox, and WebKit |
| End to end | 84/84 live tests passed across Chromium, Firefox, and WebKit |
| Adverse modes | 24/24 live tests passed across Chromium, Firefox, and WebKit |
| DNS | All 10 baseline groups present; targeted SPF/DMARC remediation verified through API and two public resolvers |
| Email | Free Business Email active; auto-renew On; expires 2028-04-29; 0/100 mailboxes |
| Registration | Active, locked, privacy enabled, expires 2028-01-30; nameservers unchanged |

## Builder rollback control

The published rollback copy is `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com`. Page-level `noindex` is verified only for its real routes `/`, `/projects/`, `/about/`, `/my-ai-app-library/`, and `/contact/`.

If platform rollback becomes necessary, do not try to connect Builder while the failed static website still owns the apex. Follow this order exactly:

1. optionally deploy the prepared no-index holding page while diagnosing the attached static website;
2. delete/release only the failed static apex website, leaving optional email/mailbox deletion unchecked;
3. confirm the apex is free;
4. use the published Builder duplicate's **Connect domain** control to attach `shaileshdudala.com`;
5. publish/update the duplicate and reverify DNS, email, TLS, apex, and `www`.

Never delete the domain registration, select email deletion, change nameservers as a rollback shortcut, or broad-restore a DNS snapshot over the verified production zone.

## Cutover record

| Field | Result |
| --- | --- |
| Owner cutover authorization | `CUTOVER APPROVED` received |
| Original Builder deletion authorization | Exact action-time approval received |
| Original Builder deletion | Completed; optional email/mailbox deletion unchecked |
| Approved production SHA | `1ae06ad45315baffaef6d1564aae0da4d4051a53` |
| Staging result | `https://aquamarine-mole-482437.hostingersite.com`; release gates passed |
| Production deployment | Completed on order `201333978`, account `u380810059` |
| Builder rollback copy | Published and no-index on the five verified real routes |
| DNS incident | Missing SPF/DMARC detected, recovered from snapshot `150089457`, and restored as two targeted TXT RRsets |
| DNS verification | Hostinger API, `1.1.1.1`, and `8.8.8.8` passed |
| SSL and redirect | Valid TLS; path/query-preserving `www` 301 passed |
| Production verification | Complete; 138/138 browser checks passed |

The GitHub Pages mirror remains a separate no-index release surface and must never receive the custom domain.
