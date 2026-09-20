# Shailesh Dudala Portfolio V2.3

Static-first Astro portfolio for Shailesh Dudala, Senior Applied AI / ML Engineer.

The product has one source and design system with two release surfaces:

- [`shaileshdudala.com`](https://shaileshdudala.com) on Hostinger as the canonical production site;
- [`smgpulse007.github.io`](https://smgpulse007.github.io) as a no-index static mirror built from the same release.

The editorial refresh is deployed from `main` release
`b258345e18ad99682fe3952a603a37e7b6557caf`, tagged `portfolio-v2.3.0`.
The canonical Hostinger site and GitHub Pages mirror expose the same release
identity. Production is `index,follow`; the mirror is `noindex,follow`, uses
production canonicals, publishes no sitemap, and has no custom domain.
Documentation-only closeout commits may advance `main`; the immutable tag and
live `/build.json` identify the deployed application release.

The owner-approved release includes the full career arc, refined timelines,
professional case studies, Project Lab, Research, and a privacy-cleared public
resume. Historical staging sites remain no-index and preserved. See the
[production receipt](docs/EDITORIAL_PRODUCTION_RELEASE.md) and the requested
[homepage presentation assessment](docs/HOMEPAGE_PRESENTATION_ASSESSMENT.md).

## Primary routes

- `/` — name-led introduction, selected professional work, qualified outcomes, real project artifacts, and contact
- `/work/` and `/work/[slug]/` — four professional flagships plus compatibility case routes
- `/experience/` — exact chronology, career stages, methods, outcomes, education, and credentials
- `/lab/` — evidence workbench over the audited authored-repository inventory
- `/research/` — Foundations, Applied engineering, Frontier watch, and verified authored publications
- `/about/` — scientific origin, leadership, and working principles
- `/resume/` — print-friendly résumé summary and current PDF availability
- `/portfolio.json`, `/projects.json`, `/research.json`, and `/llms.txt` — machine-readable portfolio guides

Historical routes under `/projects/`, `/systems/`, `/professional-systems/`, and the former lab taxonomy remain as static compatibility surfaces.

## Local development

Requires Node.js 24 LTS (the package contract also accepts compatible Node 22.19+ releases).

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run check
npm test
npm run build
npm run test:content
npm run test:links
npm run test:targets
npm run test:a11y
npm run test:e2e
```

Generate the five intentional visual QA passes with:

```bash
npm run screenshots
```

## Deployment targets

The build reads `PUBLIC_DEPLOY_TARGET`, `PUBLIC_SITE_URL`, `PUBLIC_CANONICAL_URL`, and `PUBLIC_ROBOTS`. See `docs/HOSTING_ARCHITECTURE.md`, `docs/DEPLOYMENT.md`, and the Hostinger staging/cutover/rollback runbooks for the complete contract.

The site requires no server runtime. Astro emits static files to `dist`.
Hostinger uses Node.js 24, `npm ci`, `npm run build`, output directory `dist`,
and no entry file or server command.
