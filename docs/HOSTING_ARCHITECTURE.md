# Hosting Architecture

Status: implementation architecture; no Hostinger action taken
Last reviewed: 2026-07-12

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

- Future canonical production host for `https://shaileshdudala.com`.
- Temporary-domain staging after separate authorization.
- GitHub-connected build and deployment.
- SSL, logs, and resource monitoring.
- Domain/DNS control only during an explicitly approved cutover window.

### Existing Website Builder site

The existing Hostinger Website Builder site is the legacy production implementation. It remains online and unchanged throughout design, local QA, and staging. It is retired only after the replacement passes staging QA, the old site is archived or duplicated where possible, DNS/email state is recorded, rollback is ready, and the owner issues `CUTOVER APPROVED`.

The option to delete associated email must never be selected.

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

The contract controls canonical tags, Open Graph URLs, sitemap and robots output, structured data, absolute résumé/social URLs, and mirror/staging indicators. Sitemap artifacts are production-only. Staging and the mirror remain crawlable so their page-level `noindex` directives can be observed, but they do not advertise competing sitemaps.

Public build variables are not secrets. Tokens, credentials, and private Hostinger data must never enter the repository.

## Branch and release model

- `codex/portfolio-v2-hostinger`: current implementation and eventual Hostinger staging branch.
- `main`: production-ready source after human review and merge.
- Hostinger production and the GitHub Pages mirror must use the same approved release commit.
- No uncommitted or unreviewed working tree may be deployed.

## Future Lab

`labs.shaileshdudala.com` is a separate later application for a few synthetic interactive demonstrations. It is not a second portfolio and is not part of this phase.

## Current authorization boundary

No Hostinger tools were used in the design/implementation phase. No temporary app was created, no domain was connected, and no Website Builder, DNS, nameserver, email, billing, subscription, ecommerce, VPS, or production-hosting setting was changed.

See `HOSTINGER_STAGING.md`, `HOSTINGER_CUTOVER.md`, `HOSTINGER_ROLLBACK.md`, `DEPLOYMENT.md`, and `CUSTOM_DOMAIN.md` for gated procedures.
