# Portfolio V2.3 production cutover plan

Status: plan only — not authorized and not executed  
Required authorization: exact phrase `V2.3 CUTOVER APPROVED`

## Preconditions

- owner accepts V2.3 staging and the draft PR;
- final branch SHA and staging `build.json` match;
- all local and remote QA gates are green;
- owner confirms the public résumé and final copy;
- production backup and rollback locations are available;
- PR #2 and PR #3 disposition is decided separately;
- no DNS, nameserver, email, or billing change is required for the static-file cutover.

## Authorized cutover sequence

Only after the exact approval phrase:

1. Re-verify the production website identity, hosting account, and current build marker.
2. Create a timestamped archive of the complete current production document root.
3. Record production URL, SHA/build metadata, response headers, robots, sitemap, canonical, screenshots, and rollback checksum.
4. Merge the approved V2.3 PR according to the owner’s repository policy.
5. Build the approved merge SHA with `PUBLIC_DEPLOY_TARGET=hostinger-production` and the protected production URL/canonical/robots contract.
6. Run the complete deterministic and browser suite on that production-target build before upload.
7. Deploy only the prebuilt static archive to the production Hostinger website.
8. Verify production HTML, assets, canonical, index/follow, sitemap, OG assets, résumé, machine routes, browser interactions, and build SHA.
9. Verify the GitHub mirror remains untouched unless separately authorized.
10. Observe error logs and primary routes through the defined stabilization window.

## Rollback triggers

Rollback immediately if any of the following occur:

- wrong hostname, target, canonical, robots, or build SHA;
- missing assets or broken primary navigation;
- serious accessibility regression;
- first-fold/mobile layout failure;
- résumé or privacy regression;
- elevated 4xx/5xx response errors;
- production content differs from the approved staging artifact.

## Rollback sequence

1. Stop further deployment actions.
2. Restore the timestamped production archive to the same document root.
3. Clear only the production website cache if required and authorized by the cutover approval.
4. Verify the restored production marker, HTML, canonical, robots, sitemap, assets, and screenshots.
5. Record the failed and restored SHAs, timestamps, checksums, symptom, and follow-up issue.

## Explicit exclusions

The cutover does not include DNS, nameserver, email, billing, subscription, or mirror changes. It does not delete V2.1, V2.2, or V2.3 staging. It does not expose the private application résumé. It does not close PR #2 or PR #3 without separate owner direction.

## Current execution state

No cutover step has been executed. Production, `main`, mirror, DNS, nameservers, email, billing, PR #2, and PR #3 remain outside the authorized staging scope.

