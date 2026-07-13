# Deployment Guide

Last reviewed: 2026-07-13

## Current phase

Portfolio V2 is live at `https://shaileshdudala.com` from `main` release `1ae06ad45315baffaef6d1564aae0da4d4051a53`, tagged `portfolio-v2.0.0`. The isolated Hostinger staging origin and `https://smgpulse007.github.io` mirror expose the same SHA. Production is canonical and indexable; the mirror is `noindex,follow`, uses production canonicals, publishes no sitemap, and has no custom domain.

## Completed release record

| Surface or artifact | Verified result |
| --- | --- |
| Hostinger staging | `https://aquamarine-mole-482437.hostingersite.com`; target `hostinger-staging`; final SHA; archive SHA-256 `84DE4CD94F5F95A2B0F7ABA15E70FF134209BB72C243BCCB1E3B249E3578ED94` |
| Hostinger production | `https://shaileshdudala.com`; target `hostinger-production`; built at `2026-07-13T06:45:48.123Z`; production archive SHA-256 `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B` |
| Holding fallback | Prepared but not used; SHA-256 `EBD364C245562A026645794E099C815284549CF5DA3C63C79B05BBC189F8F841` |
| Release CI | [Run 29229851998](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29229851998), success; artifact `8271234263`, digest `sha256:e52d9f240a39e13d9f660598cdad69c959be8fd0a3fd397d1f4f18d1a4aab164` |
| Live staging QA | [Run 29229921553](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29229921553), success; artifact `8271294538`, digest `sha256:5251b19fe8a571bc51c7e1142751df121587a3e4a1461b66406a287a97d49ed9` |
| GitHub Pages mirror | [Run 29231031648](https://github.com/smgpulse007/smgpulse007.github.io/actions/runs/29231031648), success; artifact `8271549578`, digest `sha256:392d07cacb2fdd4f2ff53332ab4102202c41d84b63bdafee22d166c33c0cbb7b` |

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

Confirmed application settings for the prebuilt static deployment path:

| Setting | Value |
| --- | --- |
| Repository | `smgpulse007/smgpulse007.github.io` |
| Release branch | `main` |
| Release SHA/tag | `1ae06ad45315baffaef6d1564aae0da4d4051a53` / `portfolio-v2.0.0` |
| Install | `npm ci` |
| Build | `npm run build` |
| Output | `dist` |
| Entry file | None |
| Node.js | Node 24 LTS |

The release contract uses Node 24, `npm ci`, `npm run build`, and the static `dist` output. Hostinger received root-level prebuilt archives rather than a persistent Node process: hosting order `201333978`, account `u380810059`, staging website `aquamarine-mole-482437.hostingersite.com`, canonical production website `shaileshdudala.com`, and no runtime entry file.

Do not choose a server entry file or start command merely because Hostinger supports Node applications. No current feature requires a server runtime.

## GitHub Pages mirror

The completed GitHub Pages workflow:

1. ran the required validation suite before upload;
2. built with the mirror environment contract;
3. deployed the static `dist/` artifact;
4. preserved `noindex,follow` and production canonicals;
5. used the same approved release SHA as production;
6. emitted no sitemap and exposed no custom-domain CNAME; and
7. completed successfully as run 29231031648.

Live `/build.json` reports commit `1ae06ad45315baffaef6d1564aae0da4d4051a53`, built at `2026-07-13T07:09:11.916Z`, target `github-pages-mirror`. The Pages API reports `cname=null` and HTTPS enforced.

## Build metadata

`/build.json` should expose non-secret build identity:

```json
{
  "commit": "<full-40-character-sha>",
  "builtAt": "<ISO timestamp>",
  "target": "<deploy target>"
}
```

Deployment verification must compare this value with the approved commit.

Final verification matched the release SHA on all three hosted surfaces:

- staging: target `hostinger-staging`, built at `2026-07-13T06:44:16.396Z`;
- production: target `hostinger-production`, built at `2026-07-13T06:45:48.123Z`; and
- mirror: target `github-pages-mirror`, built at `2026-07-13T07:09:11.916Z`.

## Completed release sequence

1. Local implementation, content governance, CI, and five visual QA passes completed.
2. The implementation branch was reviewed through pull request #1 and merged to `main`.
3. The final `main` release SHA passed CI and the isolated live-staging workflow.
4. The Builder rollback duplicate and holding artifact were verified before cutover.
5. The authorized production archive was deployed to `shaileshdudala.com` and `/build.json` matched the release SHA.
6. Apex/`www`, TLS, ten primary routes, custom 404, structured data, social images, public résumé, console/network behavior, accessibility, adverse modes, and the final 300-screenshot matrix passed.
7. Missing SPF and DMARC records were restored exactly from matching snapshot `150089457`; public DNS verification passed and email remained unaffected.
8. The no-index GitHub Pages mirror was deployed from the same SHA and verified without a sitemap or custom domain.
9. The release was tagged `portfolio-v2.0.0`.

## Final deployment proof

| Proof | Result |
| --- | --- |
| Source identity | `main`; `1ae06ad45315baffaef6d1564aae0da4d4051a53`; `portfolio-v2.0.0` |
| Static build | Node 24, `npm ci`, `npm run build`, output `dist`, no entry file or server |
| Automated and visual QA | CI and staging workflows passed; production 138/138 browser checks and 300/300 final screenshots |
| Production SEO | Production canonicals, `index,follow`, sitemap, structured data, and social images passed |
| Public résumé and routes | Public PDF, all ten primary routes, compatibility behavior, and custom 404 passed |
| HTTPS | Apex and `www` TLS edges and canonical redirect behavior passed |
| DNS/email | All 10 baseline record groups plus the separately classified Hostinger-added `ftp` A record verified; SPF/DMARC incident remediated from exact snapshot values; active email unaffected with 0 mailboxes |
| Mirror | Same SHA; production canonicals; `noindex,follow`; no sitemap; `cname=null` |
| Rollback | Published no-index Builder duplicate and holding archive remain available; see `HOSTINGER_ROLLBACK.md` |

## Secret handling

Never commit Hostinger tokens, OAuth material, DNS exports containing private account metadata, API keys, or credentials. Use OAuth and user-level configuration. Public deployment variables are safe to document; secret values are not.
