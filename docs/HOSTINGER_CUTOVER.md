# Hostinger Production Cutover Runbook

Status: `CUTOVER APPROVED` received; production inventory and safe manual attachment path still required
Last reviewed: 2026-07-12

The authorization phrase has been received, but no production domain, DNS, Website Builder, email, or production-hosting change has been made. Staging passed. Cutover cannot begin until protected DNS/email inventory and the exact safe Website Builder release/attachment flow are known.

## Verified MCP capability boundary

The pinned `hostinger-api-mcp@1.5.1` Hosting server can create and deploy the isolated static staging website. It does not expose Website Builder archive/duplicate/release/restore, primary-domain reassignment, SSL controls, apex/`www` redirect controls, static release history, email backup/health, or a proven safe custom-domain attachment operation. Domains/DNS tools add DNS reads and record mutations but do not fill those Website Builder/application attachment gaps.

Consequences:

- do not use a parked-domain alias as a substitute for a verified production attachment;
- do not delete the Builder website to free the domain;
- do not infer that DNS writes alone preserve Builder rollback or email;
- perform domain/DNS inventory read-only after the disabled servers are enabled for the cutover window;
- use one precise owner hPanel action for Builder archive/release/application attachment if the UI exposes a safe path, then resume automated verification.

## Required gates

All of the following must be true before cutover:

- Hostinger staging is deployed from the approved commit and passes the release criteria.
- The owner has reviewed staging on desktop and mobile and approved the visual/content result.
- The public résumé, recognition wording, metrics, contact links, and privacy boundaries are approved.
- `QA_REPORT.md` contains final automated and visual results.
- The approved implementation is merged to `main` without additional unreviewed changes.
- The exact production commit SHA is recorded.
- Hostinger Websites and Domains/DNS inventory has been performed read-only.
- Every current DNS record and domain attachment is exported or recorded.
- Domain email existence, provider, and backup status are known.
- The old Website Builder site is duplicated or archived where safely supported.
- `HOSTINGER_ROLLBACK.md` has been reconciled with the actual Hostinger controls.
- The owner issues the exact phrase `CUTOVER APPROVED` and approves any ambiguous or destructive tool prompt.

## Read-only readiness inventory

Record before changing anything:

- current Website Builder site identifier and attached domain;
- current apex and `www` behavior;
- all A, AAAA, CNAME, ALIAS/ANAME, and redirect records;
- all MX, SPF, DKIM, DMARC, verification, and unrelated records;
- nameservers and TTLs;
- active email service and backup confirmation;
- current SSL behavior;
- exact action that releases the domain from Website Builder without deleting email;
- exact action that attaches the approved Astro application;
- whether the Builder site can be duplicated, archived, or republished;
- expected interruption and propagation behavior;
- every Hostinger tool call or owner click required.

Do not guess when the Hostinger UI or connector cannot distinguish website deletion from domain or email deletion. Stop at that exact choice and request one precise owner action.

## Production settings

```text
Repository: smgpulse007/smgpulse007.github.io
Branch: main
Commit: <approved full SHA>
Install: npm ci
Validation: repository check and test scripts
Build: npm run build
Output: dist
Entry file: none
PUBLIC_DEPLOY_TARGET=hostinger-production
PUBLIC_SITE_URL=https://shaileshdudala.com
PUBLIC_CANONICAL_URL=https://shaileshdudala.com
PUBLIC_ROBOTS=index,follow
NODE_ENV=production
```

## Controlled sequence

After `CUTOVER APPROVED`:

1. reconfirm the approved branch, full SHA, successful staging build, and rollback record;
2. reconfirm that email backup exists when domain email is in use;
3. archive or duplicate the Website Builder site if Hostinger safely supports it;
4. release the production domain from the Builder site using the verified operation while preserving the domain registration and email service;
5. attach `shaileshdudala.com` to the approved Astro application;
6. apply production environment values and deploy the approved `main` commit;
7. allow Hostinger to issue SSL and verify the certificate chain;
8. configure the verified apex/`www` behavior without altering unrelated DNS;
9. verify the canonical production site comprehensively;
10. build the GitHub Pages mirror from the same SHA using mirror environment values;
11. verify the mirror is `noindex,follow`, canonicalizes to production, and has no custom domain;
12. disable Domains/DNS tooling after verification;
13. update the QA, deployment, and rollback records and create the approved release tag.

Never select “delete email service.” Never delete the domain registration. Never change nameservers unless the verified plan requires it and the owner separately approves that exact change.

## Production verification

Verify and record:

- apex and `www` HTTPS responses and redirect behavior;
- SSL validity;
- primary and compatibility route status;
- raw HTML final metrics;
- canonical, robots, sitemap, Open Graph, structured data, `portfolio.json`, `llms.txt`, and 404 behavior;
- résumé status and content type;
- contact, GitHub, LinkedIn, recognition, and repository links;
- expected `/build.json` SHA and target;
- console and failed-request results at desktop and mobile widths;
- accessibility and reduced-motion smoke tests;
- MX, SPF, DKIM, DMARC, verification, and unrelated DNS record preservation;
- email send/receive health through an owner-approved check if email exists;
- GitHub Pages mirror canonical/noindex behavior;
- rollback readiness.

If a release criterion fails, use `HOSTINGER_ROLLBACK.md`. Do not call the launch successful while verification is incomplete.

## Cutover record

| Field | Result |
| --- | --- |
| Owner approval phrase | `CUTOVER APPROVED` received |
| Approved commit SHA | Pending |
| Staging URL and result | `https://aquamarine-mole-482437.hostingersite.com`; release gates passed |
| DNS inventory artifact | Pending |
| Email backup confirmation | Pending |
| Legacy Builder archive | Pending |
| Production deployment | Pending |
| SSL | Pending |
| Production verification | Pending |
| Mirror verification | Pending |
| Release tag | Pending |
