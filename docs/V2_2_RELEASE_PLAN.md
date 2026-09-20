# Portfolio V2.2 release plan

## Current review release

1. Build from exact V2.1 base `918077d048ea8873c32e13508e5c6a8648842d19` on `codex/portfolio-v2.2-systems-observatory`.
2. Push the complete V2.2 implementation and proof artifacts.
3. Create a **new isolated Hostinger staging site** with crawl blocked, `noindex,nofollow`, staging canonicals, and no sitemap.
4. Run live route, browser, viewport, accessibility, no-JavaScript, PDF, JSON, and legacy checks.
5. Open draft PR: `Portfolio V2.2 — systems observatory staging review (DO NOT MERGE)`.
6. Leave V2.1 PR #2 and its staging deployment intact. State that V2.2 supersedes it for review without closing or merging it.
7. Stop for owner review.

## Release boundaries

- Do not merge the draft PR.
- Do not modify `main`, production Hostinger, GitHub Pages mirror, domains, DNS, certificates, email, redirects, or analytics.
- Do not reuse or overwrite the V2.1 staging site unless capacity is proven unavailable and the owner authorizes the fallback.
- Do not publish private résumé sources or employer/client artifacts.

## Review packet

The draft PR must contain the staging URL, final branch SHA, prototype comparison, evidence/research manifests, QA summary, screenshot/video paths, public résumé, known limitations, rollback/cutover plan, and the exact production authorization boundary.
