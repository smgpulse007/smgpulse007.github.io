# Shailesh Dudala Portfolio V2

Static-first Astro portfolio for Shailesh Dudala, Senior Applied AI Engineer.

The product has one source and design system with two release surfaces:

- `shaileshdudala.com` on Hostinger as the canonical production site after the approved cutover;
- `smgpulse007.github.io` as a no-index static mirror built from the same release.

The release candidate is verified on the isolated Hostinger staging origin at
`https://aquamarine-mole-482437.hostingersite.com`. Production and the GitHub
Pages mirror are released only from the same reviewed `main` commit.

## Primary routes

- `/` — positioning, flight recorder, outcomes, selected work, experience, and contact
- `/work/` and `/work/[slug]/` — four evidence-governed engineering case studies
- `/experience/` — career throughline and scoped outcomes
- `/lab/` — progressively enhanced public project library
- `/about/` — professional narrative, principles, education, and credentials
- `/resume/` — print-friendly résumé summary and current PDF availability
- `/portfolio.json` and `/llms.txt` — machine-readable portfolio guides

Historical routes under `/projects/`, `/systems/`, `/professional-systems/`, and the former lab taxonomy remain as static compatibility pages with new canonicals.

## Local development

Requires Node.js 24 LTS (the package contract also accepts compatible Node 22.12+ releases).

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
