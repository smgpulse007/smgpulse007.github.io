# Portfolio V2.1 â€” Controlled Production Cutover Prompt

Do not use this prompt until live staging has been reviewed and approved.

Before pasting it into Codex, replace:

- `<APPROVED_STAGING_URL>`
- `<APPROVED_STAGING_SHA>`
- `<DRAFT_PR_URL>`

with the real values.

```text
V2.1 CUTOVER APPROVED

Resume the Portfolio V2.1 project from the approved live staging release.

Approved staging:
- URL: <APPROVED_STAGING_URL>
- SHA: <APPROVED_STAGING_SHA>
- Draft PR: <DRAFT_PR_URL>

Read before acting:
1. AGENTS.md
2. docs/Portfolio_V2_1_Experience_Evidence_Revamp_Spec.md
3. docs/Portfolio_V2_1_Handoff_Instructions.md
4. docs/V2_1_QA_REPORT.md
5. docs/V2_1_RELEASE_PLAN.md
6. docs/HOSTINGER_CUTOVER.md
7. docs/HOSTINGER_ROLLBACK.md
8. docs/CONTENT_PROVENANCE.md
9. docs/PROJECT_EVIDENCE_MANIFEST.md
10. the approved draft PR and all final staging evidence

Production objective:
- merge only the exact approved V2.1 release;
- publish it at shaileshdudala.com;
- cleanly neutralize every residual Hostinger Website Builder route/file;
- preserve domain registration and email;
- deploy the GitHub Pages no-index mirror from the same release SHA;
- verify production and rollback.

Do not use billing, subscriptions, ecommerce, VPS, WordPress, Horizons, Reach, or email-marketing tools.

Before changing production:
1. verify the approved staging SHA still passes all checks;
2. verify the production baseline and current document root;
3. inventory and back up the production root;
4. inventory current legacy Builder remnants;
5. inventory current DNS, MX, SPF, DKIM, DMARC, verification, and unrelated records if domain/DNS access is required;
6. verify the rollback path;
7. confirm no private application rÃ©sumÃ© or private asset is in the build;
8. confirm the public rÃ©sumÃ© is the approved privacy-cleared edition;
9. confirm the production build contains the correct canonical, index/follow behavior, sitemap, structured data, social images, and /build.json;
10. explain the exact destructive or replacing operations before invoking them.

Safety:
- Never delete the domain registration.
- Never delete or disable domain email.
- Preserve MX, SPF, DKIM, DMARC, verification, and unrelated DNS records.
- Do not change nameservers unless a separately verified plan proves it is required.
- Do not alter billing, subscription, renewal, or payment settings.
- Do not deploy an unapproved SHA.
- Do not leave old Builder files overlaid under historical routes.
- If Hostinger presents an ambiguous destructive action, stop and request one exact owner click rather than guessing.

Production sequence:
1. merge the approved branch to main without unrelated commits;
2. tag `portfolio-v2.1.0`;
3. build the exact approved source for Hostinger production;
4. verify the static output locally;
5. inventory whether Hostinger deployment replaces or overlays files;
6. clean or replace the production document root according to the verified rollback-safe plan;
7. deploy the approved V2.1 output;
8. implement or verify permanent behavior for every legacy route, including:
   - /contact
   - /contact/
   - /my-ai-app-library
   - /my-ai-app-library/
   - every additional historical route discovered during V2.1
9. verify no legacy branding, phone number, old location, or Builder HTML remains public;
10. verify apex and www behavior;
11. verify SSL;
12. verify all primary routes, compatibility routes, and 404;
13. verify raw HTML contains real metrics and no private content;
14. verify canonical, robots, sitemap, social metadata, structured data, machine-readable endpoints, and public rÃ©sumÃ©;
15. verify the production /build.json matches the approved SHA;
16. run Chromium, Firefox, WebKit, accessibility, keyboard, reduced-motion, raw-HTML, link, privacy, legacy-route, and Lighthouse checks against production;
17. deploy the GitHub Pages mirror from the same SHA with:
    - canonical: https://shaileshdudala.com
    - robots: noindex,follow
18. verify the mirror build SHA, canonical, noindex behavior, routes, and graceful fallbacks;
19. update GitHub profile website to the canonical domain when authorized;
20. publish or prepare the concise GitHub profile README;
21. update deployment, QA, provenance, legacy-cleanup, rollback, and release documentation;
22. produce the Search Console and Bing reindex action list;
23. disable Domains/DNS MCP again after any required domain verification;
24. publish release notes.

Do not declare success until:
- the canonical site is live on the approved SHA;
- the old Builder routes no longer expose old branding or personal information;
- SSL and www/apex behavior pass;
- the public rÃ©sumÃ© passes;
- the mirror uses the same SHA and remains no-index;
- email-related records remain intact;
- rollback steps are verified.

Return:
- production URL;
- production SHA;
- release tag;
- Hostinger deployment identifier;
- production-root cleanup performed;
- legacy routes and final behavior;
- DNS/domain actions, if any;
- email-preservation result;
- browser/accessibility/performance results;
- mirror result;
- final screenshot paths;
- GitHub alignment result;
- search reindex actions;
- rollback procedure;
- explicit confirmation that billing and subscriptions were untouched.
```

