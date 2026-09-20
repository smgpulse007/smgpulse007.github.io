# Portfolio V2.3 — Controlled Production Cutover Prompt

Do not use this prompt until live V2.3 staging has been reviewed and approved.

Replace:

- `<APPROVED_V2_3_STAGING_URL>`
- `<APPROVED_V2_3_SHA>`
- `<V2_3_DRAFT_PR_URL>`

before pasting.

```text
V2.3 CUTOVER APPROVED

Resume Portfolio V2.3 from the approved staging release.

Approved:
- Staging URL: <APPROVED_V2_3_STAGING_URL>
- SHA: <APPROVED_V2_3_SHA>
- Draft PR: <V2_3_DRAFT_PR_URL>

Read:

1. AGENTS.md
2. all Portfolio V2.3 specification, audit, design, content, research, handoff, QA, performance, accessibility, evidence, release, and cutover documents
3. all current Hostinger production and rollback documents
4. the approved V2.3 PR
5. final staging screenshots, videos, tests, and public résumé

Do not merge V2.1 PR #2 or V2.2 PR #3.

V2.3 supersedes them only after the approved V2.3 merge succeeds.

PRODUCTION OBJECTIVE

Publish the exact approved V2.3 release at:

https://shaileshdudala.com

Publish the same release identity to:

https://smgpulse007.github.io

The GitHub Pages mirror must:

- use the same approved SHA;
- canonicalize to https://shaileshdudala.com;
- use noindex,follow;
- provide a complete standard/static experience;
- gracefully fall back from Hostinger-enhanced features.

PROTECTED SYSTEMS

Do not modify:

- billing;
- subscriptions;
- renewals;
- payment methods;
- ecommerce;
- VPS;
- unrelated websites;
- domain registration;
- domain email.

Never delete or disable email.

Never expose credentials.

BEFORE PRODUCTION

1. Verify the approved staging SHA.
2. Verify staging still serves that SHA.
3. Run the complete local suite.
4. Run the complete remote staging suite.
5. Verify all owner-review Must Fix items are closed.
6. Verify the public résumé.
7. Verify Research citations and status labels.
8. Verify all public repository source commits.
9. Verify claim corrections:
   - 7K-case backlog cleared
   - no 7K documents/day
   - 20% automated measure-closure improvement
10. Verify Meta Harness is not used as the overall brand.
11. Verify no private application résumé is built.
12. Verify no PHI/PII or employer-confidential material is built.
13. Verify no private prompts, APIs, policies, model routing, payloads, or screenshots are built.
14. Verify production canonical/index settings.
15. Verify the standard/static mirror build.
16. Inventory and back up the production document root.
17. Determine whether Hostinger replaces or overlays files.
18. Inventory legacy Builder remnants and old routes.
19. Verify rollback.
20. Inventory DNS/email records only when required.
21. Preserve MX, SPF, DKIM, DMARC, verification, and unrelated records.
22. Explain any destructive/replacement action before invoking it.

If Hostinger presents an ambiguous destructive action, stop and request one exact owner click.

Do not guess.

MERGE

1. Confirm the V2.3 branch descends from:
   1eed4c48a762e1dbeb454a318fbe2e7c72b21ae8
2. Confirm the PR includes the intended V2.2 base and V2.3 commits.
3. Merge only the approved V2.3 PR to main.
4. Do not separately merge V2.1 or V2.2.
5. Mark PR #2 and PR #3 superseded only after successful V2.3 merge.
6. Tag:
   portfolio-v2.3.0
7. Publish release notes.

HOSTINGER PRODUCTION

1. Build the approved source with:
   PUBLIC_DEPLOY_TARGET=hostinger-production
   PUBLIC_SITE_URL=https://shaileshdudala.com
   PUBLIC_CANONICAL_URL=https://shaileshdudala.com
   PUBLIC_ROBOTS=index,follow
   NODE_ENV=production
2. Verify the output locally.
3. Deploy using the verified clean/replace strategy.
4. Ensure stale files are not overlaid.
5. Verify:
   - apex;
   - www;
   - SSL;
   - canonical;
   - robots;
   - sitemap;
   - structured data;
   - social assets;
   - public résumé;
   - machine-readable endpoints;
   - build.json;
   - Research data;
   - project manifest;
   - all routes;
   - redirects/compatibility;
   - 404.
6. Verify all historical Builder routes.
7. Verify no old branding, phone, old location, or Builder HTML remains.
8. Verify enhanced mode.
9. Verify standard mode.
10. Verify reduced-motion mode.
11. Verify no-WebGL mode.
12. Verify no-JavaScript content.
13. Verify glass contrast.
14. Verify all signature interactions.
15. Verify research links.
16. Verify award links.
17. Verify repository links.
18. Run Chromium, Firefox, and WebKit.
19. Run accessibility.
20. Run performance by tier.
21. Run privacy/PII checks.
22. Verify build.json equals the approved SHA.

GITHUB PAGES MIRROR

1. Build the same SHA with:
   PUBLIC_DEPLOY_TARGET=github-pages-mirror
   PUBLIC_SITE_URL=https://smgpulse007.github.io
   PUBLIC_CANONICAL_URL=https://shaileshdudala.com
   PUBLIC_ROBOTS=noindex,follow
2. Deploy.
3. Verify:
   - same SHA;
   - canonical custom domain;
   - noindex,follow;
   - complete standard/static design;
   - no broken Hostinger-only features;
   - all semantic content;
   - Projects;
   - Research;
   - résumé;
   - redirects/compatibility.

GITHUB ALIGNMENT

When authorized:

1. Set GitHub profile website to:
   https://shaileshdudala.com
2. Publish/update concise profile README.
3. Apply or document approved pins.
4. Do not archive repositories automatically.

SEARCH

1. Generate final sitemap.
2. Verify canonical indexability.
3. Verify mirror noindex.
4. Update Search Console/Bing instructions.
5. List owner actions for:
   - sitemap submission;
   - URL inspection;
   - legacy URL removal;
   - reindex request.
6. Do not claim search-engine recrawl before it happens.

POST-DEPLOYMENT

1. Capture production screenshots.
2. Record production interaction videos.
3. Compare production to staging.
4. Verify email-related records.
5. Verify rollback artifact.
6. Update:
   - QA;
   - release;
   - deployment;
   - rollback;
   - evidence;
   - research verification;
   - project manifest;
   - legacy cleanup;
   - search documentation.
7. Disable Domains/DNS MCP servers after any required use.
8. Keep billing/subscription servers disabled.

Do not declare success until:

- canonical production serves approved SHA;
- professional hierarchy is correct;
- factual corrections are live;
- signature interactions work;
- standard/reduced fallbacks work;
- Research and Projects work;
- legacy routes are clean;
- public résumé is correct;
- mirror serves same SHA;
- email is preserved;
- rollback is verified.

RETURN

- production URL;
- production SHA;
- release tag;
- Hostinger deployment identifier;
- production-root cleanup;
- legacy route behavior;
- SSL/apex/www;
- enhanced/standard/reduced results;
- browser results;
- accessibility;
- performance;
- no-JS/no-WebGL/reduced-motion;
- Research validation;
- project-manifest validation;
- public résumé;
- mirror result;
- GitHub alignment;
- search owner actions;
- email preservation;
- rollback;
- confirmation billing/subscriptions were untouched.
```
