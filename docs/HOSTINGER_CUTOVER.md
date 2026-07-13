# Hostinger Production Cutover Runbook

Status: `CUTOVER APPROVED` received; inventory and rollback control complete; final Builder deletion override pending
Last reviewed: 2026-07-13

The authorization phrase has been received, staging passed, and the protected production inventory is complete. No production domain, DNS, original Website Builder, email, or production-hosting change has been made. A rollback Builder duplicate exists. The only verified route for freeing the apex requires deleting the original Builder website; because the master launch specification explicitly prohibits that operation, the final delete requires a narrow action-time owner override after the release artifact and rollback control are ready.

## Verified MCP capability boundary

The pinned `hostinger-api-mcp@1.5.1` Hosting server can create and deploy the isolated static staging website. It does not expose Website Builder archive/duplicate/release/restore, primary-domain reassignment, SSL controls, apex/`www` redirect controls, static release history, email backup/health, or a proven safe custom-domain attachment operation. Domains/DNS tools add DNS reads and record mutations but do not fill those Website Builder/application attachment gaps.

Consequences:

- do not use a parked-domain alias as a substitute for a verified production attachment;
- do not delete the original Builder website unless the owner explicitly overrides the master no-delete invariant for that exact action after reviewing the prepared rollback and email-preservation evidence;
- do not infer that DNS writes alone preserve Builder rollback or email;
- perform domain/DNS inventory read-only after the disabled servers are enabled for the cutover window;
- the verified hPanel dialog requires the website-deletion acknowledgement and exposes a separate optional email/mailbox deletion checkbox; the optional checkbox must remain unchecked;
- resume automated application creation, deployment, and verification only after the apex is released.

## Required gates

All of the following must be true before cutover:

- Hostinger staging is deployed from the approved commit and passes the release criteria.
- The active one-touch autonomous release gate remains in force; objective desktop/mobile visual, content, privacy, and accessibility gates have passed.
- The public résumé, recognition wording, metrics, contact links, and privacy boundaries are approved.
- `QA_REPORT.md` contains final automated and visual results.
- The approved implementation is merged to `main` without additional unreviewed changes.
- The exact production commit SHA is recorded.
- Hostinger Websites and Domains/DNS inventory has been performed read-only and recorded in `HOSTINGER_PRODUCTION_INVENTORY.md`.
- Every current DNS record class, domain attachment, nameserver, TTL, and SSL state is recorded without publishing protected values.
- Hostinger email is active with 0/100 mailboxes; there is no mailbox content to back up, and all email-critical DNS remains protected.
- The old Website Builder site is duplicated at `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com`, published, and protected by verified page-level `noindex` across all five routes.
- `HOSTINGER_ROLLBACK.md` is reconciled with the actual account; the published duplicate exposes the verified Connect domain restoration control.
- The owner has issued `CUTOVER APPROVED` and must separately approve the exact original-Builder deletion because it overrides an explicit invariant in the master specification.

## Read-only readiness inventory

Completed 2026-07-13. The authoritative privacy-safe evidence is `HOSTINGER_PRODUCTION_INVENTORY.md`. It records registration ID `11469793`, nameservers, all 10 DNS record classes and TTLs, protected email records, current TLS and redirect behavior, DNS snapshots `150089457` and `143071414`, hosting order `201333978`, staging identifier, 0/100 mailboxes, and the Builder duplicate.

The inventory covered:

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

The hPanel dialog distinguishes website deletion from optional email/mailbox deletion. Stop immediately before confirming website deletion and request the one precise override required by the master launch invariant. The optional email checkbox must stay unchecked.

## Production settings

```text
Repository: smgpulse007/smgpulse007.github.io
Branch: main
Commit: the exact merged and staging-verified `main` SHA recorded immediately before cutover
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
2. reconfirm Hostinger email remains active with 0 mailboxes and compare the protected DNS structure with `HOSTINGER_PRODUCTION_INVENTORY.md`;
3. reconfirm the published rollback Builder duplicate is live and its Connect domain restoration control is available;
4. after the explicit action-time override, delete only the original `shaileshdudala.com` Builder website in hPanel, selecting the required website acknowledgement while leaving optional email/mailbox deletion unchecked;
5. create the `shaileshdudala.com` static website on hosting order `201333978` through Hosting `createWebsite`;
6. deploy the prebuilt Hostinger-production archive from the approved `main` SHA;
7. allow Hostinger to issue SSL and verify the certificate chain;
8. configure the verified apex/`www` behavior without altering unrelated DNS;
9. verify the canonical production site comprehensively;
10. build the GitHub Pages mirror from the same SHA using mirror environment values;
11. verify the mirror is `noindex,follow`, canonicalizes to production, and has no custom domain;
12. disable Domains/DNS tooling after verification;
13. update the QA, deployment, and rollback records and create the approved release tag.

Never select “delete email service.” Never delete the domain registration. Never change nameservers unless the verified plan requires it and the owner separately approves that exact change.

## Bounded execution and rollback thresholds

- Poll original-Builder deletion every 30 seconds for at most 15 minutes, matching Hostinger's documented 10-minute typical removal window with buffer. If the apex is not released, stop; do not repeat deletion or touch DNS/domain registration.
- After Hosting `createWebsite`, poll the Hosting website inventory every 30 seconds for at most 10 minutes. If the apex website is not created, start the published-Builder rollback flow.
- Allow the static deployment request and `/build.json` identity to converge for at most 10 minutes, checking every 15 seconds. A wrong SHA/target is an immediate rollback trigger.
- Allow automatic web routing for at most 15 minutes (three 300-second stored web-routing TTLs). Missing or changed protected DNS/email records trigger immediate rollback; never wait for propagation to excuse protected-record drift.
- Accept HTTPS immediately if the already valid apex/`www` certificate continues to serve correctly. If TLS becomes invalid, observe automatic issuance for at most 15 minutes, then restore the Builder site rather than leaving an insecure canonical origin. Hostinger documents that new Lifetime SSL can take 1–2 hours, but this release chooses the shorter public-outage budget.
- Any confidential-content exposure, non-production canonical, index-safety failure, inaccessible primary route/résumé, or inability to serve a real 404 triggers immediate rollback under `HOSTINGER_ROLLBACK.md`.

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
| Approved commit SHA | Pending final merge and exact-SHA staging redeploy |
| Staging URL and result | `https://aquamarine-mole-482437.hostingersite.com`; release gates passed |
| DNS inventory artifact | `HOSTINGER_PRODUCTION_INVENTORY.md`; 10 protected record structures recorded; no DNS write performed |
| Email backup confirmation | Hostinger email active; 0/100 mailboxes, so no mailbox content exists to back up; email service and DNS remain protected |
| Legacy Builder archive | Live duplicate: `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com` |
| Original Builder deletion override | Pending exact action-time owner confirmation due master-spec invariant |
| Apex-to-duplicate rollback control | Verified in hPanel without submission: published duplicate → Connect domain → select apex → Next; final mutation reserved for rollback |
| Production deployment | Pending |
| SSL | Pending |
| Production verification | Pending |
| Mirror verification | Pending |
| Release tag | Pending |
