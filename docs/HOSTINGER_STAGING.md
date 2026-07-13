# Hostinger Staging Runbook

Status: completed and retained as the no-index release/QA origin
Last reviewed: 2026-07-13

The isolated static staging site remains live at `https://aquamarine-mole-482437.hostingersite.com` with `noindex,nofollow`. It serves the same verified release SHA as production while retaining the `hostinger-staging` target. It is a QA and rollback-diagnosis surface, not a second portfolio or a production canonical.

## Executed configuration

The staging session used the user-level pinned `hostinger-api-mcp@1.5.1` configuration. The credential was sourced only from the Windows user environment variable `HOSTINGER_API_TOKEN`; no value was printed or committed. For staging, only Hosting was enabled and its `default_tools_approval_mode` was `writes`; Domains and DNS remained disabled in prompt mode.

The intended minimum staging posture is:

1. source the Hostinger credential from the Windows user environment only;
2. enable Websites/Hosting only with write approval retained;
3. leave Domains/DNS, billing, subscriptions, email marketing, VPS, and ecommerce disabled;
4. authorize a staging deployment, preferably with the phrase `STAGING AUTHORIZED`.

The first Hostinger session was read-only inventory. It confirmed the Business hosting order, empty Hosting API website list, temporary-domain availability, and static archive path before the authorized staging website creation. Domains and DNS were enabled later for the separately authorized production-readiness inventory and the narrowly targeted cutover-time SPF/DMARC remediation, then disabled again during post-launch lockdown.

## Reuse prerequisites

- A new reviewed branch starts from the current `main` release and is pushed and clean. The historical `codex/portfolio-v2-hostinger` branch is provenance, not the base for new work.
- The candidate branch has an identified commit SHA.
- Local validation is complete and recorded in `QA_REPORT.md`.
- The public résumé resolves from the built site.
- Final values, not zero animation placeholders, exist in server HTML.
- The removed real-receipt asset and all references are absent.
- No confidential term, credential, PHI, PII, payment data, or unsupported award claim is present.
- The published Website Builder rollback duplicate remains unchanged.

## Expected static application settings

Verify Hostinger’s current framework detection before saving these values:

```text
Repository: smgpulse007/smgpulse007.github.io
Revision: exact reviewed commit from a fresh branch based on current main
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
2. inspect any deployment log Hostinger exposes for warnings and fallback behavior; the current static-deploy API provides response and live-identity evidence rather than a separate log endpoint;
3. verify `/build.json` contains the expected commit and `hostinger-staging` target;
4. verify all primary and compatibility routes return successfully;
5. verify résumé and social images return successful responses;
6. inspect raw homepage HTML for final metric strings and reject `0K`, `$0M`, or zero-percentage placeholders;
7. verify staging canonical URLs use the temporary URL;
8. verify meta robots is `noindex,nofollow`, compare repository `robots.txt` output with the live temporary-domain response, and document any Hostinger edge override (the current origin adds `Googlebot Disallow: /`);
9. verify sitemap output is suppressed on staging and `robots.txt` does not advertise one;
10. validate JSON-LD, `portfolio.json`, `llms.txt`, and the 404;
11. run the complete Playwright, accessibility, content, and link suites against the staging URL;
12. perform five intentional visual QA passes at every required viewport and browser engine;
13. inspect console errors, failed network requests, horizontal overflow, keyboard flow, reduced motion, and dialog focus behavior;
14. review Hostinger logs and resource use if exposed.

Fix repository defects on the implementation branch, push them, and let staging redeploy. Do not patch files directly in Hostinger.

## Completed staging proof

| Field | Verified result |
| --- | --- |
| Origin | `https://aquamarine-mole-482437.hostingersite.com` |
| Final release | `1ae06ad45315baffaef6d1564aae0da4d4051a53`; live `/build.json` target `hostinger-staging` |
| Initial staging release | `0d3ef553703eb7231bf7fc61916fdd83b5ee0d4f` |
| Archive | Root-level `dist/` static artifact; SHA-256 `84DE4CD94F5F95A2B0F7ABA15E70FF134209BB72C243BCCB1E3B249E3578ED94` |
| Expected Hostinger Git-build contract | Node 24 LTS; `npm ci`; `npm run build`; output `dist`; no entry file |
| Runtime | None; Hostinger serves static files |
| Automated QA | 84/84 E2E, 30/30 accessibility, and 24/24 adverse-mode checks |
| Visual QA | Five passes; 1,500/1,500 screenshots across 10 viewports and 3 engines; aesthetic rubric 93/100 |
| Lighthouse | Live staging 100/100/100 with SEO intentionally 66 because of `noindex`; production-profile mobile and desktop 100/100/100/100 |
| Canonical/indexing | Temporary-origin canonicals, page-level `noindex,nofollow`, no sitemap; the temporary-domain edge also adds a Googlebot-specific disallow |
| Workflow evidence | GitHub Actions run `29229921553`; artifact `8271294538`; digest `sha256:5251b19fe8a571bc51c7e1142751df121587a3e4a1461b66406a287a97d49ed9` |
| Retention | Retained after launch for regression comparison and rollback diagnosis; never canonical |

Future staging changes must repeat the release gates and do not authorize production, domain, DNS, email, or rollback mutations. Creative-direction research is in `CREATIVE_DIRECTION_RESEARCH.md`; final release proof is in `PORTFOLIO_V2_RELEASE_EVIDENCE.md`.
