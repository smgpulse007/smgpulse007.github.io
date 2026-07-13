# Hosting Architecture

Status: staging verified; production cutover inventory and rollback preparation complete
Last reviewed: 2026-07-13

## One product, three delivery surfaces

```text
GitHub repository: smgpulse007/smgpulse007.github.io
  Astro static product + content + tests + documentation
                         |
              GitHub Actions validation
                         |
          +--------------+----------------+
          |                               |
Hostinger temporary domain       GitHub Pages mirror
staging, noindex,nofollow         noindex,follow
          |
Hostinger production
shaileshdudala.com
index,follow
```

There is one portfolio implementation. Hostinger staging, Hostinger production, and GitHub Pages consume the same repository and design system. Deployment variables change URLs and indexing behavior; they do not fork the product.

## Responsibilities

### GitHub

- Source and version history.
- Pull-request review and CI.
- Content, link, accessibility, browser, and screenshot evidence.
- Public source-code links.
- Static mirror/fallback at `https://smgpulse007.github.io`.

### Hostinger

- Canonical production host for `https://shaileshdudala.com` after controlled cutover.
- Verified temporary-domain staging at `https://aquamarine-mole-482437.hostingersite.com`.
- Root-level prebuilt static archive deployment; no persistent application runtime.
- SSL, logs, and resource monitoring.
- Domain/DNS control only during an explicitly approved cutover window.

### Existing Website Builder site

The existing Hostinger Website Builder site is the legacy production implementation. It remained online and unchanged throughout design, local QA, staging, and read-only inventory. The owner has issued `CUTOVER APPROVED`; the legacy site has been duplicated to the rollback-safe temporary Builder origin recorded in `HOSTINGER_PRODUCTION_INVENTORY.md`. The original is retired only inside the controlled cutover window after the final reviewed SHA and rollback record are ready.

The verified deletion dialog exposes an independent optional email/mailbox checkbox. It must remain unchecked. Domain registration is never deleted.

## Static-first decision

The project uses Astro static output. The expected artifact is `dist/`; there is no application entry file and no persistent Node process. Node.js is a build tool only.

No current feature requires a server. The flight recorder, filtering, command navigation, diagrams, contact links, résumé, structured data, and machine-readable files can all be static or client-side progressive enhancement.

If a later feature genuinely needs a server, it requires a separate documented decision, a compatible Astro Node adapter, Hostinger `PORT`/`0.0.0.0` handling, observability, abuse controls, and a graceful static fallback. It must not make core portfolio navigation dependent on the server.

## Deployment-target contract

| Target | Site URL | Canonical base | Robots |
| --- | --- | --- | --- |
| Local | `http://localhost:4321` | local URL | `noindex,nofollow` |
| Hostinger staging | temporary Hostinger URL | same temporary URL | `noindex,nofollow` |
| Hostinger production | `https://shaileshdudala.com` | `https://shaileshdudala.com` | `index,follow` |
| GitHub Pages mirror | `https://smgpulse007.github.io` | `https://shaileshdudala.com` | `noindex,follow` |

Environment variables:

```text
PUBLIC_DEPLOY_TARGET
PUBLIC_SITE_URL
PUBLIC_CANONICAL_URL
PUBLIC_ROBOTS
```

The contract controls canonical tags, Open Graph URLs, sitemap and robots output, structured data, absolute résumé/social URLs, and mirror/staging indicators. Sitemap artifacts are production-only. The application emits crawlable staging and mirror `robots.txt` files so page-level `noindex` directives can be observed, but Hostinger's temporary-domain edge currently adds a Googlebot-specific disallow on live staging. Page-level `noindex,nofollow` remains present and no sitemap is advertised. Production and mirror behavior must be verified on their actual origins.

Public build variables are not secrets. Tokens, credentials, and private Hostinger data must never enter the repository.

## Branch and release model

- `codex/portfolio-v2-hostinger`: current implementation and eventual Hostinger staging branch.
- `main`: production-ready source after human review and merge.
- Hostinger production and the GitHub Pages mirror must use the same approved release commit.
- No uncommitted or unreviewed working tree may be deployed.

Current staging execution record: branch `codex/portfolio-v2-hostinger`; last verified SHA `8ff708b9e5b81434bd89bedf6ba60d865c11cd07`; hosting order `201333978`; account `u380810059`; website identifier `aquamarine-mole-482437.hostingersite.com`. The final merged `main` SHA will replace this staging identity before production cutover.

## Future Lab

`labs.shaileshdudala.com` is a separate later application for a few synthetic interactive demonstrations. It is not a second portfolio and is not part of this phase.

## Current authorization boundary

The isolated staging app was created and deployed after authorization. Read-only Hosting, Domains, and DNS inventory was completed for cutover; the legacy Builder site was duplicated as a rollback asset. Production routing, DNS records, nameservers, email, billing, subscriptions, ecommerce, VPS, and the original Builder site remain unchanged pending the final controlled cutover operation.

See `HOSTINGER_STAGING.md`, `HOSTINGER_PRODUCTION_INVENTORY.md`, `HOSTINGER_CUTOVER.md`, `HOSTINGER_ROLLBACK.md`, `DEPLOYMENT.md`, and `CUSTOM_DOMAIN.md` for the evidence and gated procedures.
