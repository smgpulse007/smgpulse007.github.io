# Hostinger Staging Runbook

Status: not authorized and not executed
Last reviewed: 2026-07-12

This runbook begins only after local implementation is complete, the branch is pushed, and the owner explicitly authorizes staging. The design/implementation phase does not authorize Hostinger access or writes.

## Owner gate

Before work begins, the owner must:

1. connect Hostinger Connector using OAuth;
2. enable Websites/Hosting only;
3. leave Domains/DNS, billing, subscriptions, email marketing, VPS, and ecommerce disabled;
4. authorize a staging deployment, preferably with the phrase `STAGING AUTHORIZED`.

The first Hostinger session is read-only inventory. Confirm the Website Builder site, Business Web Hosting plan, Node.js/Astro capability, temporary-domain availability, application slots, supported Node versions, and GitHub connection without creating or modifying anything.

## Prerequisites

- Branch `codex/portfolio-v2-hostinger` is pushed and clean.
- The branch has an identified commit SHA.
- Local validation is complete and recorded in `QA_REPORT.md`.
- The public résumé resolves from the built site.
- Final values, not zero animation placeholders, exist in server HTML.
- The removed real-receipt asset and all references are absent.
- No confidential term, credential, PHI, PII, payment data, or unsupported award claim is present.
- The current Website Builder site remains unchanged.

## Expected static application settings

Verify Hostinger’s current framework detection before saving these values:

```text
Repository: smgpulse007/smgpulse007.github.io
Branch: codex/portfolio-v2-hostinger
Framework: Astro
Package manager: npm
Install command: npm ci
Validation: npm run check and the repository test scripts
Build command: npm run build
Output directory: dist
Entry file: none
Node.js: Node 24 LTS
```

Do not invent an entry file or start command for a static build.

## Environment variables

```text
PUBLIC_DEPLOY_TARGET=hostinger-staging
PUBLIC_SITE_URL=https://<hostinger-temporary-domain>
PUBLIC_CANONICAL_URL=https://<hostinger-temporary-domain>
PUBLIC_ROBOTS=noindex,nofollow
NODE_ENV=production
```

Use the exact assigned HTTPS temporary URL. Do not use localhost defaults in a staging deployment. These variables are public configuration, not secrets.

## Prohibited staging actions

- Do not connect `shaileshdudala.com` or `www.shaileshdudala.com`.
- Do not modify or delete the Website Builder site.
- Do not change DNS, nameservers, MX, SPF, DKIM, DMARC, verification, email, billing, subscriptions, renewals, ecommerce, VPS, or marketing resources.
- Do not enable Domains/DNS tools.
- Do not publish from `main` unless the owner has separately approved a release workflow.

## Deployment verification

After Hostinger reports a successful build:

1. record the temporary URL, connected branch, deployed full SHA, build command, output directory, and Node version;
2. inspect the complete deployment log for warnings and fallback behavior;
3. verify `/build.json` contains the expected commit and `hostinger-staging` target;
4. verify all primary and compatibility routes return successfully;
5. verify résumé and social images return successful responses;
6. inspect raw homepage HTML for final metric strings and reject `0K`, `$0M`, or zero-percentage placeholders;
7. verify staging canonical URLs use the temporary URL;
8. verify meta robots is `noindex,nofollow` while `robots.txt` permits crawling so crawlers can read the directive;
9. verify sitemap output is suppressed on staging and `robots.txt` does not advertise one;
10. validate JSON-LD, `portfolio.json`, `llms.txt`, and the 404;
11. run the complete Playwright, accessibility, content, and link suites against the staging URL;
12. perform three visual QA passes at every required viewport;
13. inspect console errors, failed network requests, horizontal overflow, keyboard flow, reduced motion, and dialog focus behavior;
14. review Hostinger logs and resource use if exposed.

Fix repository defects on the implementation branch, push them, and let staging redeploy. Do not patch files directly in Hostinger.

## Staging proof record

Fill these fields only after execution:

| Field | Result |
| --- | --- |
| Staging URL | Pending staging authorization |
| Connected branch | `codex/portfolio-v2-hostinger` expected |
| Deployed commit | Pending |
| Node.js version | Pending Hostinger inventory |
| Build command | `npm run build` expected |
| Output directory | `dist` expected |
| Entry file | None expected |
| Build log | Pending |
| Automated tests | Pending |
| Visual QA | Pending |
| Canonical/robots | Pending |
| Owner visual approval | Pending |

Staging success does not authorize production cutover.
