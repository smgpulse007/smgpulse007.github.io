# Search reindex and legacy URL plan

## Current observation

Targeted search queries returned no indexed results for the canonical domain combined with known Builder phrases. Search coverage is incomplete by nature, so production verification remains required after an approved cutover.

## Before cutover

- Keep V2.1 staging `noindex,nofollow` with no sitemap.
- Verify every known legacy route on staging.
- Confirm compatibility pages contain no Builder copy or personal information.
- Prepare permanent redirects in `.htaccess` and verify them on the actual Apache staging origin.
- Keep production sitemap and canonical behavior unchanged.

## After `V2.1 CUTOVER APPROVED`

1. Inventory and back up the production document root.
2. Deploy the approved V2.1 `dist` cleanly and remove or shadow legacy Builder files.
3. Verify `/contact`, `/my-ai-app-library`, every discovered Builder route, and trailing-slash variants.
4. Confirm the canonical sitemap contains only approved canonical pages.
5. Request recrawl/indexing for the canonical home, Work, four flagship studies, Recognition, Experience, Lab, About, Résumé, and Contact.
6. Request removal of any legacy URLs that still surface old snippets.
7. Re-run phrase queries after search systems have had time to recrawl.
8. Record dates, observed snippets, removal requests, and final status in the release evidence.

Do not block an otherwise safe release on immediate search-cache convergence, but do not call legacy cleanup complete until old public content and snippets are no longer discoverable.
