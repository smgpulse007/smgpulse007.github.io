# Hostinger Rollback Runbook

Status: inventory reconciled; published Builder duplicate and apex restoration control verified
Last reviewed: 2026-07-13

Rollback protects the portfolio and domain email. Do not improvise DNS edits or edit application files directly in Hostinger.

Pinned Hosting MCP has no Website Builder restore, primary-domain switch, SSL, or static release-history operation. Platform rollback therefore requires a verified hPanel detach/reattach path or owner action; broad DNS snapshot restoration is not an acceptable substitute. A minimal no-index holding artifact is versioned at `ops/holding-page/index.html` for use only if the legacy Builder site cannot be safely republished.

## Required rollback evidence before cutover

- Final approved `main` SHA: recorded after merge and exact-SHA staging verification.
- Current verified staging SHA: `8ff708b9e5b81434bd89bedf6ba60d865c11cd07`; staging remains at `https://aquamarine-mole-482437.hostingersite.com`.
- DNS/domain evidence: `HOSTINGER_PRODUCTION_INVENTORY.md`; current exact-match snapshot `150089457`; older nonmatching snapshot `143071414`.
- Protected records: MX, SPF, DKIM, DMARC, autodiscover, autoconfig, and unrelated records recorded by structure and TTL.
- Email: Hostinger Free Business Email active; 0/100 mailboxes; no mailbox content exists to back up.
- Legacy Builder: original `shaileshdudala.com`; live duplicate `palegoldenrod-fish-builder-nfhz3v9lxfzda19t.hostingersite.com`; all five duplicate routes verified with page-level `noindex`.
- Apex restoration: after releasing the apex from the failed static site with optional email deletion unchecked, use Websites → Website Builder → published duplicate → **Connect domain** → enter/select `shaileshdudala.com` → **Next**, then publish/update. This control was inspected up to the final connection action without mutating production.
- Holding fallback: `ops/holding-page/index.html`; package as a root-level static archive before cutover so it can replace a failed Portfolio V2 release immediately.

## Rollback triggers

Consider immediate rollback when:

- the apex or `www` site is unavailable or serves the wrong application;
- SSL cannot be established within the verified Hostinger window;
- production exposes incorrect canonical or indexing behavior;
- the résumé or primary routes fail;
- the deployed SHA differs from the approved SHA;
- confidential or private content is exposed;
- DNS/email records are missing or domain email is impaired;
- a critical accessibility or browser defect prevents basic use.

Minor content defects with a healthy domain may use application rollback instead.

## Level 1: application rollback

Use when the domain and Hostinger application are healthy but the new release is defective.

1. select the exact previous known-good repository commit or immutable release tag;
2. rebuild it with the production environment contract and redeploy its root-level static archive through the same Hosting static-deploy operation;
3. do not edit generated files in Hostinger;
4. clear Hostinger/CDN cache only when necessary and supported;
5. verify `/build.json` reports the rollback SHA and `hostinger-production`;
6. rerun route, résumé, canonical, robots, console, and desktop/mobile smoke tests;
7. confirm the GitHub Pages mirror state separately—do not automatically move it to an unapproved commit;
8. document the incident and corrective branch before another release.

## Level 2: domain/platform rollback

Use when the new Hostinger app, domain attachment, or SSL path is unusable.

1. stop further changes and compare current DNS/domain state with the captured inventory;
2. preserve all email and verification records;
3. while the failed apex static website is still attached, deploy the no-index holding artifact if a safe maintenance response is needed during preparation;
4. delete/release only the newly created failed apex static website through hPanel, leaving every email/mailbox deletion option unchecked, because Builder cannot claim a domain that remains attached elsewhere;
5. restore the prior Website Builder content through the verified published-duplicate Connect domain flow and publish/update it;
6. if Builder connection fails, recreate the apex empty static website on order `201333978` and deploy the prebuilt no-index holding archive;
7. restore only the web-routing records proven to have changed; do not overwrite MX, SPF, DKIM, DMARC, verification, or unrelated records;
8. verify apex, `www`, SSL, and email health;
9. keep the Portfolio V2 staging deployment for diagnosis without connecting the production domain;
10. report the exact restored state and owner follow-up.

Nameserver changes are not a routine rollback mechanism.

## Privacy or confidential-content rollback

If private data is exposed:

1. remove public access to the affected release using the safest verified application rollback;
2. preserve forensic details without copying the sensitive content into tickets or logs;
3. delete generated deployment artifacts and caches where the hosting platform supports it;
4. rotate credentials only if a credential was actually exposed;
5. determine whether Git history contains the material and whether history rewriting is necessary;
6. add a regression validator before republishing.

The removed real receipt is not permitted in any production or mirror artifact.

## Verification checklist

- [ ] Expected rollback SHA is live.
- [ ] Apex and `www` behavior is correct.
- [ ] SSL is valid.
- [ ] Primary route and résumé smoke tests pass.
- [ ] Canonical and robots behavior matches the restored target.
- [ ] No failed essential assets or console errors.
- [ ] Email DNS records match the pre-cutover inventory.
- [ ] Owner confirms email health where applicable.
- [ ] Staging remains available or its status is documented.
- [ ] Incident and retry conditions are recorded.

## Release tags

Use immutable, annotated release tags after verification, for example:

```text
portfolio-v2.0.0
portfolio-v2.0.1
```

Record actual tags and SHAs here only after they exist.

| Role | Tag/SHA |
| --- | --- |
| Previous known-good production | Pending |
| Portfolio V2 approved production | Pending |
| Current staging | `8ff708b9e5b81434bd89bedf6ba60d865c11cd07` at `https://aquamarine-mole-482437.hostingersite.com` |
