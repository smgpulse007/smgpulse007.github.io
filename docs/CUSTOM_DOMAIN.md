# Custom Domain Plan

Status: cutover authorized; read-only inventory complete; production writes not started
Last reviewed: 2026-07-13

## Canonical decision

- Canonical public origin: `https://shaileshdudala.com`
- Canonical host after cutover: Hostinger Business Web Hosting
- GitHub Pages: `https://smgpulse007.github.io` no-index static mirror/fallback
- The custom domain must never point to GitHub Pages.

The preferred canonical URL is the HTTPS apex domain. `https://www.shaileshdudala.com` must redirect permanently to the corresponding apex path without a redirect chain. The current Builder redirect collapses paths to the apex homepage, so path preservation is an explicit production verification gate.

## Current safety boundary

Design, implementation, staging, and read-only production inventory are complete. Until the controlled cutover begins:

- keep the current Website Builder attachment unchanged;
- do not create, delete, or edit DNS records;
- do not change nameservers;
- do not connect the apex or `www` domain to the new application;
- do not change domain registration, renewal, billing, or subscriptions;
- do not modify email;
- do not add a repository `CNAME` file.

## Pre-cutover inventory

Captured 2026-07-13; privacy-safe detail and snapshot identifiers are in `HOSTINGER_PRODUCTION_INVENTORY.md`:

| Item | Verified value |
| --- | --- |
| Nameservers | `ns1.dns-parking.com`, `ns2.dns-parking.com`; unchanged |
| Apex web record/attachment | `@ ALIAS` TTL 300 to Hostinger CDN; attached to the legacy Builder site |
| `www` record/redirect | `www CNAME` TTL 300 to Hostinger CDN; Builder redirects to apex but collapses paths |
| MX records | Hostinger MX preferences 5 and 10; TTL 14400 |
| SPF | Present with Hostinger include; TTL 3600; full value withheld |
| DKIM | Three Hostinger selector CNAMEs; TTL 300; targets withheld |
| DMARC | Present with policy `none`; TTL 3600; full value withheld |
| Other email records | Hostinger autodiscover and autoconfig CNAMEs; TTL 300 |
| Unrelated/verification records | No additional stored records in the 10-record inventory |
| Email provider and backup | Hostinger Free Business Email active; 0/100 mailboxes; no mailbox content exists to back up |
| Current SSL | TLS 1.3; valid apex and `www` SAN certificate; automatic Hostinger issuance expected after cutover |
| Builder site archive/duplicate | Published live duplicate at `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com`; Connect domain restoration control inspected |

Classify every record as web-routing, email-critical, verification, or unrelated. Only verified web-routing entries needed for the application connection may change.

## Email preservation

MX, SPF, DKIM, DMARC, verification, and unrelated records are protected. Never select “delete email service.” Never delete the domain registration. Confirm an owner-controlled email backup before cutover if domain email exists, and verify mail health after the domain switch.

## Cutover behavior

After all staging gates pass and the owner issues `CUTOVER APPROVED`:

1. reconfirm the published Builder duplicate and its verified Connect domain apex restoration control;
2. after a narrow owner override of the master no-delete invariant, delete only the original Builder website in the verified hPanel dialog while leaving optional email/mailbox deletion unchecked;
3. create the apex static website on hosting order `201333978` and deploy the exact approved Astro archive;
4. establish the verified `www` to apex redirect;
5. allow Hostinger to issue SSL;
6. verify canonical production metadata and indexing;
7. compare all protected DNS records with the captured inventory;
8. retain the staging URL and rollback evidence where supported.

The deletion dialog is not ambiguous, but the destructive website action conflicts with the master launch invariant and therefore still requires a separate exact confirmation. If Hostinger requires nameserver changes or any email/domain-registration action, stop without proceeding.

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
