# Hostinger Rollback Runbook

Status: production rollback controls reconciled and ready
Last reviewed: 2026-07-13

Rollback protects the live portfolio, domain registration, and Hostinger email. Do not improvise DNS edits, broad-restore a DNS snapshot, or edit generated application files directly in Hostinger.

## Current known-good state

| Item | Verified state |
| --- | --- |
| Production SHA | `1ae06ad45315baffaef6d1564aae0da4d4051a53` |
| Production archive | `portfolio-v2-production_20260713_024555_1ae06ad.zip` |
| Archive SHA-256 | `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B` |
| Hosting order/account | `201333978`; `u380810059` |
| Document root | `/home/u380810059/domains/shaileshdudala.com/public_html` |
| Staging | `https://aquamarine-mole-482437.hostingersite.com` |
| Builder rollback copy | `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com` |
| DNS baseline | Snapshot `150089457`; all 10 baseline groups present after targeted TXT remediation |
| Additional DNS record | Hostinger-added `ftp A 88.223.85.139`, TTL 1800 |
| Email | Free Business Email active; auto-renew On; expires 2028-04-29; 0/100 mailboxes |
| Domain | Active, locked, privacy enabled, expires 2028-01-30; nameservers unchanged |

The static production release passed 30/30 accessibility, 84/84 end-to-end, and 24/24 adverse-mode checks across Chromium, Firefox, and WebKit. `/build.json` is the authoritative live release identity.

## Rollback assets

### Static artifacts

- Exact verified Portfolio V2 archive and hash recorded above.
- Minimal no-index holding artifact at `ops/holding-page/index.html`.
- Isolated Hostinger staging remains available for diagnosis.

### Builder duplicate

The legacy Builder duplicate is published and has page-level `noindex` on these verified real routes only:

- `/`
- `/projects/`
- `/about/`
- `/my-ai-app-library/`
- `/contact/`

Do not assume arbitrary duplicate routes exist. The duplicate's **Connect domain** control is the verified platform restoration path.

### DNS evidence

- Snapshot `150089457` exactly represented the 10-group pre-cutover baseline and was used to recover the protected SPF and DMARC TXT payloads.
- Snapshot `143071414` contains obsolete `connect.hostinger.com` web routing and is not a whole-zone rollback target.
- Exact SPF, DMARC, and DKIM payloads remain withheld from public documentation.

## Rollback triggers

Consider immediate rollback when:

- apex or `www` is unavailable or serves the wrong application after a bounded cache purge;
- TLS cannot be established within the accepted outage window;
- production exposes incorrect canonical or indexing behavior;
- the resume or primary routes fail;
- `/build.json` differs from the approved SHA or target;
- confidential or private content is exposed;
- a protected DNS/email record is missing or mail health is impaired;
- a critical accessibility or browser defect prevents basic use.

Minor content defects with a healthy domain may use application rollback instead.

## Level 1: static application rollback

Use when Hostinger hosting, domain attachment, TLS, and protected DNS are healthy but the deployed application is defective.

1. Select the exact previous known-good repository commit or immutable release tag.
2. Rebuild with the production environment contract.
3. Hash and deploy its root-level static archive through the same Hostinger static-deploy operation.
4. Do not edit generated files in Hostinger.
5. Purge Hostinger/CDN cache only when required.
6. Verify `/build.json` reports the rollback SHA and `hostinger-production`.
7. Rerun route, resume, canonical, robots, sitemap, console/network, accessibility, and desktop/mobile checks.
8. Confirm the GitHub Pages mirror separately; do not move it automatically to an unapproved commit.
9. Document the incident and corrective branch before another release.

## Level 2: domain/platform rollback to Builder

Use when the static website, domain attachment, or SSL path is unusable. The order is mandatory because Builder cannot claim a domain still attached to a static website.

1. Stop further changes and compare the zone with `HOSTINGER_PRODUCTION_INVENTORY.md`.
2. Preserve domain registration, nameservers, email service, MX, SPF, DKIM, DMARC, autodiscover, autoconfig, and unrelated records.
3. While the failed static apex website is attached, deploy the no-index holding artifact only if a safe maintenance response is needed during preparation.
4. In hPanel, delete/release **only the failed static apex website**. Leave every optional email/mailbox deletion setting unchecked.
5. Confirm that `shaileshdudala.com` is no longer attached to the failed static website.
6. Open the published Builder duplicate, choose **Connect domain**, select `shaileshdudala.com`, complete the connection, and publish/update.
7. If Builder connection fails, recreate the apex empty static website on order `201333978` and deploy the prebuilt no-index holding archive.
8. Purge stale cache only if the old target remains visible after the attachment is correct.
9. Verify apex, path/query-preserving `www` behavior, TLS, `/`, and the Builder duplicate's real route set.
10. Verify protected DNS and email state, then report the exact restored state and follow-up work.

Never attempt step 6 before steps 4 and 5. Never select email deletion, delete the domain registration, or use a nameserver change as a rollback shortcut.

## DNS/email regression procedure

During the completed cutover, apex SPF and `_dmarc` TXT records disappeared while other email records remained. The incident was repaired by recovering exact values from snapshot `150089457` and restoring only those two TXT RRsets with TTL 3600. The restored state was verified through the Hostinger DNS API, `1.1.1.1`, and `8.8.8.8`.

If protected DNS drifts again:

1. capture the current API and public-resolver state without exposing private payloads;
2. compare group names, types, TTLs, and protected values with snapshot `150089457`;
3. recover only the exact missing or changed protected RRset;
4. obtain explicit DNS-write approval;
5. repair only that RRset;
6. verify through the Hostinger API plus `1.1.1.1` and `8.8.8.8`;
7. do not broad-restore the snapshot over current production web routing.

The current zone contains all 10 baseline groups plus Hostinger's `ftp` A record. Treat `ftp` as a separately classified platform-added record; do not delete it without proving it is unnecessary.

## Privacy or confidential-content rollback

If private data is exposed:

1. remove public access using the safest verified application rollback;
2. preserve forensic details without copying sensitive content into tickets or logs;
3. remove affected deployment artifacts and caches where supported;
4. rotate credentials only if a credential was actually exposed;
5. determine whether Git history contains the material and whether history rewriting is necessary;
6. add a regression validator before republishing.

The removed real receipt is not permitted in any production or mirror artifact.

## Verification checklist

- [ ] Expected rollback SHA or Builder site is live.
- [ ] Apex and `www` behavior is correct and path/query preservation is checked where applicable.
- [ ] TLS is valid.
- [ ] Primary route and resume smoke tests pass.
- [ ] Canonical and robots behavior matches the restored target.
- [ ] No failed essential assets or console errors remain.
- [ ] All 10 baseline DNS groups are present.
- [ ] Any additional platform-created record is separately classified.
- [ ] Email remains active and owner-approved mail health checks pass where applicable.
- [ ] Staging status is documented.
- [ ] Incident, cache actions, and retry conditions are recorded.

## Release identity

| Role | SHA |
| --- | --- |
| Verified Portfolio V2 production | `portfolio-v2.0.0` → `1ae06ad45315baffaef6d1564aae0da4d4051a53` |
| Verified exact-SHA static staging before cutover | `1ae06ad45315baffaef6d1564aae0da4d4051a53` |

`portfolio-v2.0.0` is an immutable annotated tag. Use the same pattern for future verified releases; never move an existing release tag.
