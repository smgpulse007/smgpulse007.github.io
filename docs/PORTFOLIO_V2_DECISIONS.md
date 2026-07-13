# Portfolio V2 Decisions

Status: accepted, executed, and verified in production
Date: 2026-07-12; launch reconciled 2026-07-13

## Product and hosting

1. Maintain one repository, one content model, one design system, and one portfolio product.
2. Hostinger Business Web Hosting is the canonical production host for `https://shaileshdudala.com`.
3. GitHub remains the source, review, CI, and public engineering-evidence layer.
4. GitHub Pages remains a static fallback built from the same approved commit with `noindex,follow` and canonical URLs pointing to `https://shaileshdudala.com`.
5. Never point the custom domain to GitHub Pages and never create a Hostinger-specific second design.
6. The original Website Builder site remained unchanged through staging, production inventory, and rollback preparation. After `CUTOVER APPROVED` and the owner's separate exact deletion override, it was retired with optional email/mailbox deletion unchecked; its published no-index duplicate remains the platform rollback asset.

## Creative direction

The selected system is **editorial systems engineering**: premium editorial hierarchy, technical-document legibility, and operational artifacts that show how uncertain input becomes accountable action. The portfolio borrows principles rather than layouts or branding. The research ledger, exclusions, and implementation results are recorded in `CREATIVE_DIRECTION_RESEARCH.md`.

## Runtime

The portfolio remains Astro static output. React islands are permitted only for stateful, useful interactions. Essential content, navigation, metrics, evidence labels, and fallbacks must work without JavaScript.

No current requirement justifies a server runtime. Contact uses direct email; content is curated at build time; search and interactions can execute locally; the resume and machine-readable files are static. A future secure endpoint or `labs.shaileshdudala.com` application requires a separate decision and must not become a dependency of the main portfolio.

## Information architecture

Primary navigation is:

- Work
- Experience
- Lab
- About
- Résumé
- Contact

Canonical content routes are `/work/`, `/work/<slug>/`, `/experience/`, `/lab/`, `/about/`, and `/resume/`. `/portfolio.json` and `/llms.txt` provide machine-readable summaries. Existing inbound routes remain compatibility pages with a visible fallback link, immediate client redirect, and canonical pointing to the new destination.

GitHub and LinkedIn are supporting links rather than primary content categories.

## Selected work and classification

Every work item uses one of the governed types:

- Professional system — sanitized
- Public reference implementation
- Research lab
- Team award project
- Historical project
- Archived experiment

The lead stories are intentionally different:

1. Claims Intelligence / Adjudication Support — professional system, sanitized.
2. On-Prem RAG/OCR Compliance Review — professional system, sanitized.
3. Let’s Talk Doc — team award project.
4. LLM Steering Lab — public research engineering.

The Hospital Readmission FHIR API is a deterministic synthetic public reference implementation, not a trained or clinically validated production model. HEDIS/HL7 architecture is separate from Let’s Talk Doc. AlphaQuant, NFL forecasting, older dashboards, templates, and exploratory work belong in the Lab unless stronger evidence later supports promotion.

## Evidence and claims

- The latest accessible `_JRFO` or `_JFRO` résumé is the career source of truth, subject to public privacy and claim-governance rules.
- Resume support does not make private implementation details public.
- Metrics render final values in server HTML and include context, role, evidence status, publication status, and qualification where required.
- Team awards must remain team-attributed.
- Public repositories are never presented as identical to employer systems.
- Unsupported contribution details remain explicitly unresolved rather than inferred.

## Recognition

The verified wording is:

> Team recipient, Global HL7 AI Challenge — Transformative Impact in Healthcare Award (2025), for Let’s Talk Doc.

The official winners page ties the award to Let’s Talk Doc, and HL7’s recipient update includes Shailesh Dudala. Team Re-Admit is the exact Devpost project name for the MeldRx recognition. HiCounselor recognition remains resume-supported and does not use unverified BCBS-NC attribution.

## Signature interaction

Portfolio V2 uses a synthetic, progressive-enhancement system flight recorder to explain ingest, extraction, validation, human review, action, and observation. Its static fallback must contain the complete essential narrative. It must honor reduced motion, support keyboard use, and avoid invented production traces.

## Resume

The reviewed `_JRFO` source remains private and outside `public/`. Portfolio V2 serves a generated, privacy-cleared public edition at `public/resume/Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf`, alongside `/resume/` and its print-friendly governed summary. The generator and public hash are recorded in `CONTENT_PROVENANCE.md`; validation extracts PDF text and rejects governed private-content categories. The site and public PDF do not expose a phone number or precise location field.

## SEO and machine readability

Deployment-target configuration controls site URL, canonical base, robots behavior, sitemap URLs, structured-data URLs, resume URLs, and social images. Public project pages receive appropriate CreativeWork or SoftwareSourceCode metadata and breadcrumbs. The 404 is no-index. The GitHub mirror cannot compete with production for indexing.

## Accessibility and performance

- Semantic HTML and server-rendered content are the default.
- Dialogs require focus transfer, focus containment, Escape close, focus restoration, and a usable static fallback.
- Motion respects `prefers-reduced-motion`; auto-advancing content requires user control.
- Noncritical islands hydrate with `client:idle` or `client:visible` where practical.
- Media uses responsive sizing and optimized formats where practical.
- CI enforces type, content, route, link, accessibility, and browser checks.

## Safety boundaries and executed cutover

The staging and cutover gates remained separate. Authorized staging created the isolated no-index static website. The approved cutover window permitted production inventory and preparation of a published no-index Builder rollback duplicate. The owner then supplied the separate exact override required to delete only the original Builder website. The independent optional email/mailbox deletion control remained unchecked.

Portfolio V2 release `portfolio-v2.0.0` is now canonical on Hostinger. Domain registration, nameservers, email service, billing, subscriptions, ecommerce, VPS, and unrelated resources were not changed. The cutover-time disappearance of the protected SPF and DMARC TXT groups was remediated by restoring only the exact prior values from snapshot `150089457`; no broad zone restore was performed. All 10 baseline DNS groups plus Hostinger's separately classified `ftp` A record are present.

The Builder duplicate's Connect domain path and the static holding artifact remain rollback controls. A platform rollback must release a failed static apex website before reconnecting the Builder duplicate, and every optional email/mailbox deletion control must remain unchecked. Future hosting, domain, DNS, email, or rollback mutations require a new scoped authorization. See `PORTFOLIO_V2_RELEASE_EVIDENCE.md`, `HOSTINGER_PRODUCTION_INVENTORY.md`, `HOSTINGER_CUTOVER.md`, and `HOSTINGER_ROLLBACK.md`.
