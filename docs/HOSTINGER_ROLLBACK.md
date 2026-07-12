# Hostinger Rollback Runbook

Status: planning document; verify against Hostinger inventory before cutover
Last reviewed: 2026-07-12

Rollback protects the portfolio and domain email. Do not improvise DNS edits or edit application files directly in Hostinger.

## Required rollback evidence before cutover

- Full approved and previous known-good commit SHAs.
- Staging URL that remains available during verification where Hostinger permits.
- Export or screenshots of all current DNS records, nameservers, TTLs, and domain attachments.
- Confirmation of MX, SPF, DKIM, DMARC, verification, and unrelated records.
- Email provider and backup confirmation.
- Website Builder site identifier and archive/duplicate status.
- Verified Hostinger operations for detaching and reattaching the domain.
- Minimal static holding-page artifact and deployment instructions if the Builder site cannot be restored.

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

1. select the previous known-good repository commit or release tag through the verified Git deployment control;
2. redeploy using the same production environment variables;
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
3. detach the domain from the new application only through the previously verified safe operation;
4. restore the prior Website Builder attachment if the archived/duplicated site can be safely republished;
5. if Builder restoration is unavailable, publish the prebuilt minimal static holding page while the staging URL remains available;
6. restore only the web-routing records proven to have changed; do not overwrite MX, SPF, DKIM, DMARC, verification, or unrelated records;
7. verify apex, `www`, SSL, and email health;
8. keep the Portfolio V2 staging deployment for diagnosis without connecting the production domain;
9. report the exact restored state and owner follow-up.

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
| Current staging | Pending |
