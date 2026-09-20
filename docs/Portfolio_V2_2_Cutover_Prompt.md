# Portfolio V2.2 — Controlled Production Cutover Prompt

Do not use this prompt until the live V2.2 staging release has been independently reviewed and approved.

Replace:

- `<APPROVED_V2_2_STAGING_URL>`
- `<APPROVED_V2_2_SHA>`
- `<V2_2_DRAFT_PR_URL>`

before pasting it into Codex.

```text
V2.2 CUTOVER APPROVED

Resume Portfolio V2.2 from the approved staging release.

Approved:
- Staging URL: <APPROVED_V2_2_STAGING_URL>
- SHA: <APPROVED_V2_2_SHA>
- Draft PR: <V2_2_DRAFT_PR_URL>

Read:
1. AGENTS.md
2. all V2.2 specification, audit, research, handoff, QA, release, evidence, accessibility, performance, and production documents
3. all current Hostinger cutover and rollback documents
4. the approved V2.2 draft PR
5. the final staging artifacts and interaction recordings

Do not use the V2.1 SHA or PR by accident.

PRODUCTION OBJECTIVE

Publish the exact approved V2.2 release to:
- https://shaileshdudala.com

Publish the same release identity to:
- https://smgpulse007.github.io

The GitHub Pages build remains:
- canonicalized to https://shaileshdudala.com
- noindex,follow
- complete in standard/static mode
- gracefully degraded for Hostinger-enhanced features

PROTECTED SYSTEMS

Do not modify:
- billing;
- subscriptions;
- payment methods;
- renewal settings;
- ecommerce;
- VPS;
- unrelated websites;
- domain registration;
- domain email;

except where a separately verified domain attachment action is essential.

Never delete email.

Never expose credentials.

BEFORE PRODUCTION

1. Verify the approved SHA.
2. Verify staging still serves that SHA.
3. Run the complete local suite.
4. Run the complete remote staging suite.
5. Verify the public résumé.
6. Verify the Research Atlas citations and status labels.
7. Verify the Meta Harness name-collision disclosure.
8. Verify no private application résumé is built.
9. Verify no confidential claims artifacts, prompts, payloads, APIs, or rules are built.
10. Verify the production build target and canonical.
11. Inventory the current production document root.
12. Determine whether Hostinger replaces or overlays files.
13. Back up current production.
14. Inventory all legacy Website Builder remnants.
15. Inventory current compatibility routes and redirects.
16. Verify rollback.
17. Inventory DNS/email records only when required.
18. Preserve MX, SPF, DKIM, DMARC, verification, and unrelated DNS records.
19. Explain any destructive or replacement action before invoking it.

If Hostinger presents an ambiguous destructive action, stop and request one exact owner click.

Do not improvise.

MERGE AND RELEASE

1. Confirm the V2.2 branch descends from the approved V2.1 staging SHA.
2. Confirm the V2.2 PR contains the intended V2.1 base and V2.2 commits.
3. Merge only the approved V2.2 PR to main.
4. Do not separately merge V2.1 PR #2.
5. Close or mark V2.1 PR #2 superseded only after V2.2 merge succeeds.
6. Tag:
   portfolio-v2.2.0
7. Generate release notes.

HOSTINGER PRODUCTION

1. Build the exact approved source with:
   PUBLIC_DEPLOY_TARGET=hostinger-production
   PUBLIC_SITE_URL=https://shaileshdudala.com
   PUBLIC_CANONICAL_URL=https://shaileshdudala.com
   PUBLIC_ROBOTS=index,follow
   NODE_ENV=production
2. Verify output.
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
   - social media assets;
   - public résumé;
   - portfolio.json;
   - llms.txt;
   - build.json;
   - research data;
   - all routes;
   - all compatibility routes;
   - 404.
6. Verify all historical Builder routes.
7. Verify no old branding, phone number, old location, or legacy Builder HTML remains.
8. Verify enhanced, standard, and reduced modes.
9. Verify WebGL-disabled behavior.
10. Verify no-JavaScript behavior.
11. Verify reduced motion.
12. Verify all signature interactions.
13. Verify research citations and external links.
14. Verify official award proof links.
15. Run Chromium, Firefox, and WebKit.
16. Run accessibility.
17. Run performance.
18. Run privacy and PII checks.
19. Verify build.json equals the approved SHA.

GITHUB PAGES MIRROR

1. Build from the same release SHA with:
   PUBLIC_DEPLOY_TARGET=github-pages-mirror
   PUBLIC_SITE_URL=https://smgpulse007.github.io
   PUBLIC_CANONICAL_URL=https://shaileshdudala.com
   PUBLIC_ROBOTS=noindex,follow
2. Deploy.
3. Verify:
   - same release identity;
   - noindex,follow;
   - canonical custom domain;
   - standard/static visual mode;
   - no Hostinger-only broken features;
   - full semantic content;
   - résumé;
   - Research Atlas;
   - Systems Lab;
   - compatibility routes.

GITHUB ALIGNMENT

When authorized:

1. Change GitHub profile website to:
   https://shaileshdudala.com
2. Publish/update the concise profile README.
3. Apply or document the approved pinned-repository order with Meta Harness included.
4. Do not archive unrelated repositories automatically.

SEARCH AND INDEXING

1. Generate final sitemap.
2. Verify canonical production indexability.
3. Verify mirror noindex.
4. Update the Search Console/Bing action plan.
5. List exact owner actions for:
   - sitemap submission;
   - URL inspection;
   - legacy URL removal;
   - reindexing.
6. Do not claim recrawl completion before the engines recrawl.

POST-DEPLOYMENT

1. Capture production screenshots and interaction recordings.
2. Compare production to approved staging.
3. Verify email-related records remain intact.
4. Verify rollback package.
5. Update:
   - QA;
   - release;
   - deployment;
   - rollback;
   - evidence;
   - research verification;
   - legacy cleanup;
   - search reindex documentation.
6. Disable Domains/DNS MCP servers after any required use.
7. Keep billing/subscription servers disabled.

Do not declare success until:
- canonical production serves the approved SHA;
- all signature experiences work;
- standard/reduced fallbacks work;
- Research Atlas citations are correct;
- Meta Harness is correctly represented;
- legacy routes are clean;
- public résumé is correct;
- mirror serves the same SHA;
- email is preserved;
- rollback is verified.

RETURN

- production URL;
- production SHA;
- release tag;
- Hostinger deployment identifier;
- production-root cleanup;
- legacy route behavior;
- SSL/apex/www result;
- browser results;
- accessibility;
- performance by capability tier;
- no-JS/reduced-motion/WebGL-disabled result;
- Research Atlas validation;
- public résumé;
- GitHub mirror result;
- GitHub profile alignment;
- search-engine owner actions;
- email-preservation result;
- rollback;
- explicit confirmation that billing and subscriptions were untouched.
```
