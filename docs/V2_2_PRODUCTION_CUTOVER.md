# Portfolio V2.2 production cutover

Status: **NOT AUTHORIZED**.

The only phrase that authorizes production execution is:

`V2.2 CUTOVER APPROVED`

Owner approval of staging, a PR review, or a similar phrase does not authorize production.

## Preflight after authorization

1. Re-read the approved PR and confirm its exact merge SHA.
2. Re-run the complete validation chain and live staging QA.
3. Confirm the public résumé and build contain no private source material.
4. Archive current production deploy metadata and capture rollback artifacts.
5. Confirm production target variables: canonical `https://shaileshdudala.com`, `index,follow`, production sitemap.
6. Confirm Hostinger site identity before any upload; do not touch domain/DNS/email/certificate settings.

## Controlled sequence after authorization

1. Merge only the approved PR using the owner-approved strategy.
2. Build the exact merged SHA for `hostinger-production`.
3. Deploy static output to the existing production hosting surface.
4. Verify homepage, all primary routes, PDF, JSON endpoints, redirects, 404, canonical, robots, sitemap, social metadata, and structured data.
5. Update the GitHub Pages mirror only if separately in the approved scope; it must remain canonical to the production domain and noindex.
6. Capture production proof and record deploy/rollback identifiers.

## Rollback

Restore the archived V2.0 production artifact and its verified deploy configuration. Re-run canonical/robots/route checks. A rollback must not change DNS or unrelated Hostinger services.

This document is a plan, not authorization, and no cutover action has been taken.
