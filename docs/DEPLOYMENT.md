# Deployment Guide

Last reviewed: 2026-07-12

## Current phase

Portfolio V2 is live on an isolated Hostinger temporary origin from `codex/portfolio-v2-hostinger` and has passed live staging QA. Production domain/DNS work remains pending the read-only domain/email inventory and the exact safe Website Builder release/application-attachment path.

## Application shape

- Framework: Astro 7.
- Output: static.
- Package manager: npm with committed lockfile.
- Build artifact: `dist/`.
- Runtime entry file: none.
- Persistent server: none required.
- Expected build Node version: Node.js 24 LTS.

## Local workflow

Install exactly from the lockfile:

```powershell
npm ci
```

Run the complete validated script set exposed by the final `package.json`:

```powershell
npm run check
npm run test:secrets
npm run test:content
npm run test:links
npm run test:a11y:all
npm run test:e2e:all
npm run test:live-modes
npm run test
npm run build
```

Then preview the static artifact:

```powershell
npm run preview -- --host 127.0.0.1
```

If the final script names differ, update this file and `QA_REPORT.md` together. A documented command must not be claimed successful until it exists and has been run.

## Target environments

### Local

```text
PUBLIC_DEPLOY_TARGET=local
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_CANONICAL_URL=http://localhost:4321
PUBLIC_ROBOTS=noindex,nofollow
```

### Hostinger staging

```text
PUBLIC_DEPLOY_TARGET=hostinger-staging
PUBLIC_SITE_URL=https://<temporary-hostinger-url>
PUBLIC_CANONICAL_URL=https://<temporary-hostinger-url>
PUBLIC_ROBOTS=noindex,nofollow
```

### Hostinger production

```text
PUBLIC_DEPLOY_TARGET=hostinger-production
PUBLIC_SITE_URL=https://shaileshdudala.com
PUBLIC_CANONICAL_URL=https://shaileshdudala.com
PUBLIC_ROBOTS=index,follow
```

### GitHub Pages mirror

```text
PUBLIC_DEPLOY_TARGET=github-pages-mirror
PUBLIC_SITE_URL=https://smgpulse007.github.io
PUBLIC_CANONICAL_URL=https://shaileshdudala.com
PUBLIC_ROBOTS=noindex,follow
```

The mirror must not receive a `CNAME` for `shaileshdudala.com`.

## Hostinger static settings

Expected values, to be confirmed during read-only inventory:

| Setting | Value |
| --- | --- |
| Repository | `smgpulse007/smgpulse007.github.io` |
| Staging branch | `codex/portfolio-v2-hostinger` |
| Production branch | `main` after approval |
| Install | `npm ci` |
| Build | `npm run build` |
| Output | `dist` |
| Entry file | None |
| Node.js | Node 24 LTS |

Do not choose a server entry file or start command merely because Hostinger supports Node applications.

## GitHub Pages mirror

The GitHub workflow must:

1. run the required validation suite before upload;
2. build with the mirror environment contract;
3. deploy the static `dist/` artifact;
4. preserve `noindex,follow` and production canonicals;
5. use the same approved release SHA as production;
6. expose no custom-domain CNAME;
7. fail rather than deploy when content, route, accessibility, link, or browser checks fail.

## Build metadata

`/build.json` should expose non-secret build identity:

```json
{
  "commit": "<short-sha>",
  "builtAt": "<ISO timestamp>",
  "target": "<deploy target>"
}
```

Deployment verification must compare this value with the approved commit.

## Release sequence

1. Complete local implementation and QA.
2. Commit logical checkpoints and push the implementation branch.
3. Obtain staging authorization and follow `HOSTINGER_STAGING.md`.
4. Iterate on the branch until staging and visual review pass.
5. Merge the approved branch to `main` without unrelated changes.
6. Prepare cutover read-only and reconcile `HOSTINGER_CUTOVER.md` and `HOSTINGER_ROLLBACK.md` with the actual account.
7. Wait for `CUTOVER APPROVED`.
8. Perform controlled cutover and production verification.
9. Deploy and verify the GitHub Pages mirror from the same SHA.
10. Record results in `QA_REPORT.md`, tag the verified release, and disable DNS tooling.

## Required deployment proof

- branch and commit SHA;
- build commands and logs;
- output directory or entry file;
- Node.js version;
- automated test results;
- screenshots at required viewports;
- canonical and robots behavior per target;
- résumé and social-image status;
- staging and production URLs;
- SSL and production response status;
- DNS/email preservation result;
- GitHub Pages mirror result;
- rollback instructions.

## Secret handling

Never commit Hostinger tokens, OAuth material, DNS exports containing private account metadata, API keys, or credentials. Use OAuth and user-level configuration. Public deployment variables are safe to document; secret values are not.
