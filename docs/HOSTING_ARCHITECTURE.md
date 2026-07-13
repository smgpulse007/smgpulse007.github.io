# Hosting Architecture

Status: production launch complete; staging and rollback surfaces retained
Last reviewed: 2026-07-13

## One product, four retained surfaces

```text
GitHub repository: smgpulse007/smgpulse007.github.io
  Astro static product + content + tests + documentation
                         |
              GitHub Actions validation
                         |
       +-----------------+------------------+
       |                 |                  |
Hostinger production  Hostinger staging  GitHub Pages mirror
canonical apex        retained QA origin  same-SHA fallback
index,follow          noindex,nofollow    noindex,follow
       |
Website Builder duplicate
rollback asset only
```

There is one portfolio implementation. Hostinger production, retained Hostinger staging, and GitHub Pages consume the same repository and design system. Deployment variables change URLs and indexing behavior; they do not fork the product. The verified release is tag `portfolio-v2.0.0` at `1ae06ad45315baffaef6d1564aae0da4d4051a53`.

## Responsibilities

### GitHub

- Source and version history.
- Pull-request review and CI.
- Content, link, accessibility, browser, and screenshot evidence.
- Public source-code links.
- Static mirror/fallback at `https://smgpulse007.github.io`, built from the release SHA with production canonicals, `noindex,follow`, and Pages `cname=null`.

### Hostinger

- Canonical production host for `https://shaileshdudala.com`.
- Retained temporary-domain staging at `https://aquamarine-mole-482437.hostingersite.com`.
- Root-level prebuilt static archive deployment; no persistent application runtime.
- Valid TLS for apex and `www`; `www` permanently redirects to the corresponding apex path while preserving the query string.
- Domain, DNS, email, billing, and unrelated account state remain outside normal application deployment.

### Website Builder rollback asset

The original Website Builder production site was retired during the approved cutover. A published duplicate remains available only as the platform rollback asset; its address and restoration procedure are recorded in `HOSTINGER_PRODUCTION_INVENTORY.md` and `HOSTINGER_ROLLBACK.md`. It is not a second portfolio or an indexable production surface.

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

## Release identity and deployment contract

| Surface | Verified release behavior |
| --- | --- |
| Hostinger production | `https://shaileshdudala.com`; `1ae06ad45315baffaef6d1564aae0da4d4051a53`; `hostinger-production`; production archive SHA-256 `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B` |
| Hostinger staging | `https://aquamarine-mole-482437.hostingersite.com`; same release SHA; `hostinger-staging`; archive SHA-256 `84DE4CD94F5F95A2B0F7ABA15E70FF134209BB72C243BCCB1E3B249E3578ED94` |
| GitHub Pages mirror | `https://smgpulse007.github.io`; same release SHA; `github-pages-mirror`; production canonicals, `noindex,follow`, no sitemap, no custom domain |

`main` is the production-ready source branch. `codex/portfolio-v2-hostinger` is retained as historical implementation lineage; future reviewed work should branch from current `main`. No uncommitted or unreviewed working tree may be deployed.

## Future Lab

`labs.shaileshdudala.com` is a separate later application for a few synthetic interactive demonstrations. It is not a second portfolio and is not part of this phase.

## Launch closeout

The controlled cutover, same-SHA mirror publication, TLS and redirect verification, and protected DNS/email reconciliation are complete. A cutover-time SPF/DMARC regression was repaired by restoring only the exact prior values from snapshot `150089457` and verifying them through Hostinger and independent public resolvers. Hostinger email remains active with 0/100 mailboxes.

Further hosting, DNS, domain, email, billing, or rollback mutations require a new scoped authorization. See `PORTFOLIO_V2_RELEASE_EVIDENCE.md` for the central closeout record and `HOSTINGER_STAGING.md`, `HOSTINGER_PRODUCTION_INVENTORY.md`, `HOSTINGER_CUTOVER.md`, `HOSTINGER_ROLLBACK.md`, `DEPLOYMENT.md`, and `CUSTOM_DOMAIN.md` for the supporting runbooks.
