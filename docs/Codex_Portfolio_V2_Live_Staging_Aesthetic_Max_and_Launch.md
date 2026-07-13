# Portfolio V2 Autonomous Staging, Aesthetic Maximization, SEO, and Controlled Launch

- Status: master execution specification
- Repository: `smgpulse007/smgpulse007.github.io`
- Implementation branch: `codex/portfolio-v2-hostinger`
- Expected starting commit: `a594411531a11ebb1246fea0b418d476a4cb34ab`
- Canonical production origin: `https://shaileshdudala.com`
- Prepared: 2026-07-12

## Document authority and source-completeness note

This is the self-contained master specification for live Hostinger staging, further aesthetic development, remote QA, SEO hardening, a privacy-cleared public résumé, GitHub review, and the later controlled production cutover.

It consolidates every execution detail available in:

- the 314-line attachment titled “Use this as the next Codex directive”;
- `AGENTS.md`;
- workspace-level `../../docs/Codex_Portfolio_V2_Master_Prompt.md`;
- workspace-level `../../docs/Portfolio_V2_Hostinger_Production_Addendum.md`;
- workspace-level `../../docs/Portfolio_V2_Autonomous_Execution_Playbook.md`;
- `docs/HOSTING_ARCHITECTURE.md`;
- `docs/HOSTINGER_STAGING.md`;
- `docs/HOSTINGER_CUTOVER.md`;
- `docs/HOSTINGER_ROLLBACK.md`;
- `docs/DEPLOYMENT.md`;
- `docs/CUSTOM_DOMAIN.md`;
- `docs/QA_REPORT.md`;
- `docs/CONTENT_PROVENANCE.md`; and
- the current branch implementation and CI evidence.

The attachment referred to a separate 5,534-word file through a `sandbox:/mnt/data/...` download link. That separate file was not present in the attachment directory, workspace, downloads folder, or temporary directory when this master spec was authored. This document therefore preserves every accessible detail and turns the overview into an executable, self-contained directive. It does not claim to reproduce unseen text. If the separate source is later supplied, reconcile it against this file before execution and retain whichever instruction is more explicit without weakening the protected production invariants below.

The Hostinger production addendum supersedes conflicting hosting, domain, and deployment instructions. The latest user directive may broaden repository and staging authority, but production changes still require the exact cutover authorization defined in this document.

## Operating principle: maximum autonomy with a narrow blast radius

“Full access” applies to:

- the Portfolio V2 repository and implementation branch;
- local shell, package management, build tools, and browser automation;
- web and design-reference research;
- content, information architecture, visual design, interaction, motion, typography, diagrams, and authored synthetic artifacts;
- accessibility, privacy, evidence, SEO, performance, and visual testing;
- Git commits and pushes on `codex/portfolio-v2-hostinger`;
- an isolated Hostinger staging website on a temporary `*.hostingersite.com` origin;
- the enabled `hostinger-hosting` MCP server; and
- creation, deployment, cache control, and inspection operations whose target is the verified isolated staging website.

It does not apply during Sections 1–20 to:

- `shaileshdudala.com` or `www.shaileshdudala.com`;
- the current Website Builder site;
- any existing production website or production application;
- DNS, nameservers, domains, email, MX, SPF, DKIM, DMARC, billing, subscriptions, renewals, payments, ecommerce, Reach/email marketing, VPS, WordPress, Horizons, or unrelated Hostinger resources;
- `main`;
- GitHub Pages deployment; or
- destructive deletion, replacement, migration, detachment, or domain reassignment.

This boundary is intentionally specific. It does not restrict creative or engineering ambition. It prevents staging experimentation from acquiring control over the domain, email, billing, or existing production site.

## Minimal-human-intervention model

Codex must not stop for routine design choices, naming, layout decisions, reversible code changes, recoverable build failures, ordinary package issues, screenshot iteration, copy refinement, or staging-only defects. Use professional judgment, document material decisions, and continue.

Human intervention is limited to external state that cannot safely or technically proceed without it:

1. Restart Codex once so the process loads the hardened user-level MCP configuration and inherits `HOSTINGER_API_TOKEN`.
2. Approve only the small number of Hostinger staging writes surfaced by `default_tools_approval_mode = "writes"`.
3. If production is desired, provide the exact phrase `CUTOVER APPROVED` and complete any unavoidable restart required to activate Domains/DNS tooling.
4. Resolve a genuinely ambiguous Hostinger operation if the tool or UI cannot distinguish an isolated staging action from deleting, replacing, or detaching an existing production resource.

No separate human aesthetic review is required before cutover when the owner intentionally chooses one-touch production mode and supplies `CUTOVER APPROVED` in advance. In that mode, Codex may continue automatically only after every staging, privacy, accessibility, SEO, performance, rollback, and release gate passes. Without that exact phrase, the default run ends after Section 20 with a staging URL and draft PR.

## Protected invariants

These invariants are pass/fail, not discretionary security posture:

- Every Hostinger write must target the verified temporary staging website or, during an explicitly authorized cutover, the recorded approved production target.
- Never delete or replace an unidentified or pre-existing website.
- Never delete the Website Builder site or select an option that deletes email.
- Never delete the domain registration.
- Never change nameservers unless an exact, separately approved plan proves it necessary.
- Preserve all MX, SPF, DKIM, DMARC, verification, and unrelated DNS records.
- Never enable or call billing, subscriptions, payments, ecommerce, Reach, VPS, WordPress, Horizons, or agency-hosting tools.
- Never publish a credential, phone number, PHI, payment record, real receipt, private employer artifact, or confidential system detail.
- Never describe a team result as sole authorship or attach the HL7 award to the wrong project.
- Never deploy an uncommitted working tree or a commit that failed the required checks.
- Never deploy the custom domain to GitHub Pages.
- Never maintain a separate Hostinger-specific design.

## Hard-stop conditions

Stop only when at least one of these conditions is true and safe retries or read-only investigation cannot resolve it:

- the target website, hosting order, or domain identity is ambiguous;
- a proposed operation could delete, replace, detach, migrate, or overwrite an existing production resource;
- a tool requires billing, subscription, payment, email, domain, DNS, or nameserver mutation outside the authorized phase;
- the credential is unavailable after restart or appears exposed;
- Hostinger does not expose a safe staging deployment path;
- the deployed commit cannot be proven;
- private or unsupported content is found and cannot be removed safely;
- rollback cannot be prepared before production cutover;
- protected email/DNS state cannot be inventoried before cutover;
- a release-blocking defect remains after the bounded repair loop; or
- a necessary owner action cannot be performed by the available tools.

When blocked, report one precise owner action rather than a broad list of hypothetical concerns.

# STAGING AND AESTHETIC-MAXIMIZATION EXECUTION — SECTIONS 1–20

## Section 1 — Read prerequisites and establish identity

Before any Hostinger call or repository mutation:

1. Read this document in full.
2. Read `AGENTS.md` and every prerequisite listed in the document-authority section. The three controlling brief files currently live in the workspace-level `../../docs/` directory rather than this Git repository; resolve and read those exact files instead of treating their absence under the repository’s own `docs/` directory as permission to skip them.
3. Confirm the repository root and remote are `smgpulse007/smgpulse007.github.io`.
4. Confirm the current branch is `codex/portfolio-v2-hostinger`.
5. Fetch remote state without changing branches.
6. Confirm the expected starting SHA. If the branch has advanced, inspect and record the actual SHA; do not reset or discard legitimate work.
7. Confirm the worktree is clean or identify and preserve inherited changes.
8. Confirm GitHub authentication and branch push access.
9. Confirm only `hostinger-hosting` is enabled; `hostinger-domains` and `hostinger-dns` remain disabled.
10. Confirm the hosting server uses `default_tools_approval_mode = "writes"` and a pinned package version.
11. Confirm the credential is referenced only through `HOSTINGER_API_TOKEN` and never print or inspect its value.
12. Confirm the public application remains Astro static output with `dist/` and no persistent server.

Read-only inventory calls may proceed without human interruption after these checks. Do not call another Hostinger MCP server.

## Section 2 — Build the staging allowlist and denylist

Perform read-only hosting inventory:

- list accessible hosting orders;
- identify the Business Web Hosting order intended for Portfolio V2;
- list all accessible websites;
- record the current Website Builder/production site and any existing Node/static applications;
- identify temporary-domain support, free subdomain capability, application slots, supported Node versions, deployment methods, status/log endpoints, and cache controls; and
- record enough non-secret identifiers to prevent targeting the wrong resource.

Construct an explicit staging allowlist before the first write:

```text
allowed_hosting_order = <verified Business Web Hosting order>
allowed_staging_domain = <new temporary *.hostingersite.com domain>
allowed_staging_website = <new staging website identifier>
allowed_repository = smgpulse007/smgpulse007.github.io
allowed_branch = codex/portfolio-v2-hostinger
```

Construct a denylist:

```text
shaileshdudala.com
www.shaileshdudala.com
all pre-existing website identifiers
the current Website Builder site
main
GitHub Pages
all domain, DNS, email, billing, subscription, payment, ecommerce, Reach, VPS,
WordPress, Horizons, and agency-hosting resources
```

Every later Hostinger call must be checked against these sets. A mismatch is a hard stop.

## Section 3 — Provision the isolated Hostinger staging website

Use only the enabled hosting MCP and the verified hosting order.

The intended path is:

```text
List hosting orders
        ↓
Identify Business Web Hosting
        ↓
List current websites
        ↓
Record and denylist every pre-existing website
        ↓
Generate a free *.hostingersite.com subdomain
        ↓
Create a new isolated staging website
        ↓
Record its website identifier and temporary HTTPS origin
```

Approve or request approval only for writes whose purpose clearly matches:

```text
generate a free staging subdomain
create a new staging website
upload or deploy the staging build
clear the staging cache
toggle staging cacheless mode
```

Reject and stop before any operation mentioning:

```text
shaileshdudala.com
delete website
replace website
detach domain
DNS
nameserver
email
billing
subscription
payment
renewal
Website Builder migration
main branch merge
GitHub Pages deployment
```

After creation, refresh the read-only website inventory and prove that the new identifier belongs to the temporary domain and that all pre-existing websites remain unchanged.

## Section 4 — Establish the real staging deployment contract

Use the assigned temporary HTTPS URL exactly:

```text
PUBLIC_DEPLOY_TARGET=hostinger-staging
PUBLIC_SITE_URL=https://<assigned-temporary-hostinger-domain>
PUBLIC_CANONICAL_URL=https://<assigned-temporary-hostinger-domain>
PUBLIC_ROBOTS=noindex,nofollow
NODE_ENV=production
```

Expected build shape:

```text
Framework: Astro
Package manager: npm
Node.js: 24 LTS when Hostinger supports it
Install: npm ci
Validation: repository checks and tests
Build: npm run build
Output: dist
Entry file: none
Persistent server: none
```

Do not invent a server entry file, Astro Node adapter, `PORT`, or start command. The portfolio remains static unless a concrete feature added during this work genuinely requires a server and is separately justified. Visual sophistication does not require a server.

## Section 5 — Build locally with staging metadata

1. Install exactly from the committed lockfile with `npm ci`.
2. Run type, unit, content, privacy, target, link, accessibility, and browser tests.
3. Build with the real temporary staging values.
4. Confirm `dist/index.html` exists at the artifact root.
5. Confirm all primary, compatibility, machine-readable, social-image, résumé, and 404 artifacts exist.
6. Inspect raw generated homepage HTML for final metric values and reject `0K`, `$0M`, or zero-percentage placeholders.
7. Confirm the removed receipt asset and sensitive receipt identifiers are absent.
8. Confirm staging canonical and robots metadata are generated from the real temporary origin.
9. Confirm `/build.json` reports the expected target and commit identity.
10. Record artifact count, total bytes, largest assets, and JavaScript shipped per route.

Do not deploy source files. Do not place `dist` inside a nested `dist/` directory on the host.

## Section 6 — Deploy prebuilt static output

Prefer Hostinger’s static deployment path for prebuilt HTML, CSS, JavaScript, SVG, images, fonts, and related assets.

Upload the contents of `dist/` so `index.html` is at the website document root. Do not use a JavaScript application archive unless the static path is unavailable or broken and the alternative is verified safe. Do not deploy an unnecessary persistent Node process.

After the write:

- poll deployment/build status until completion or a bounded failure;
- retrieve deployment logs when available;
- verify the deployed website identifier and temporary origin again;
- verify HTTPS;
- verify `/build.json` and the expected SHA;
- verify the document root is not nested incorrectly;
- clear only the staging cache if stale output is proven; and
- retain exact deployment commands/tool calls and response identifiers without credentials.

## Section 7 — Live-origin technical review

Audit the real temporary origin, not only localhost.

Required viewport matrix:

```text
320×700
360×800
390×844
430×932
768×1024
1024×900
1280×800
1440×1000
1920×1080
2560×1440
```

Required browser and mode coverage:

- Chromium;
- Firefox;
- WebKit;
- JavaScript enabled;
- essential routes with JavaScript disabled;
- `prefers-reduced-motion: reduce`;
- keyboard-only navigation;
- forced-colors mode;
- 200% zoom/reflow;
- cold cache;
- a slow-network profile;
- mobile portrait, tablet, desktop, and ultrawide composition; and
- representative high-density display rendering when available.

Verify:

- every primary and compatibility route;
- custom 404 status and presentation;
- navigation, skip link, focus, headings, landmarks, and dialog/control semantics;
- no failed essential requests or console errors;
- no horizontal overflow;
- stable fonts and layouts;
- responsive images and authored artifacts;
- meaningful no-JavaScript fallbacks;
- System Flight Recorder behavior;
- evidence-mode persistence and keyboard operation;
- raw HTML metrics and essential copy;
- JSON-LD, canonical, robots, sitemap policy, Open Graph, and machine-readable files;
- public résumé status; and
- caching behavior after redeployment.

Save complete screenshots and machine-readable results under ignored QA artifact directories. CI should upload the final set.

## Section 8 — Creative-direction research

Research current, high-quality references for editorial portfolios, systems storytelling, technical case studies, typography, motion restraint, interactive traces, data/AI engineering artifacts, and mobile composition.

Use references for principles, not imitation. Record:

- reference URL and date accessed;
- the specific principle worth borrowing;
- why it fits this portfolio’s positioning;
- what should not be copied; and
- the resulting implementation hypothesis.

Choose one coherent creative direction. The baseline is technically validated but is not visually protected. Codex may replace the hero, Flight Recorder, layout system, typography, motion language, diagrams, artifact treatment, and component styling when evidence from the live review shows a stronger solution.

Do not add spectacle without explanatory value. Every signature interaction must improve understanding of how Shailesh builds reliable AI systems.

## Section 9 — Visual pass 1: identity and hierarchy

Review the site in five seconds, thirty seconds, and five minutes.

Improve as needed:

- immediate role and positioning clarity;
- distinctive but credible visual identity;
- hero composition and first-fold usefulness;
- selected-work ordering and contrast;
- page-level hierarchy;
- editorial pacing;
- transition from headline to evidence;
- recruiter scanability;
- desktop, mobile, and ultrawide authorship; and
- footer/contact closure.

Do not preserve an oversized or vague hero simply because it passed automated tests. The first viewport should reveal both positioning and credible evidence or a clear route to it.

## Section 10 — Visual pass 2: signature interaction

Rebuild or refine the System Flight Recorder until it is a memorable explanatory system rather than decoration.

It should communicate:

```text
ingest → extraction → validation → human review → action → observation
```

Requirements:

- complete server-rendered fallback;
- synthetic scenarios only;
- explicit system state and provenance;
- keyboard-operable controls;
- readable focus and labels;
- reduced-motion behavior;
- no automatic motion that impairs comprehension;
- mobile-specific interaction and composition;
- no invented production telemetry; and
- direct relevance to the engineering narrative.

The interaction may use SVG, Canvas, WebGL, React islands, or authored motion when the static fallback remains complete and performance budgets pass.

## Section 11 — Visual pass 3: editorial depth

Strengthen the four flagship case studies and supporting routes.

Each flagship must make the engineering story concrete through:

- context and user need;
- Shailesh’s role and team boundary;
- constraints and failure modes;
- system architecture;
- consequential engineering decisions;
- alternatives rejected and why;
- evaluation method;
- human review and accountability;
- observability and release controls;
- outcome and evidence classification;
- limitations; and
- what would be improved next.

Differentiate evidence forms rather than repeating one panel:

- claims intelligence: validation ledger or adjudication-support trace;
- on-prem RAG/OCR: retrieval/evidence trace and review contract;
- Let’s Talk Doc: FHIR-enabled communication flow and team attribution;
- LLM Steering Lab: baseline-versus-steered comparison and limitation envelope.

Professional systems remain sanitized. Public repositories remain adjacent evidence, not representations of employer code.

## Section 12 — Visual pass 4: craft and microdetail

Inspect and improve:

- typography and font loading;
- optical scale and line length;
- vertical rhythm;
- borders, radii, shadows, texture, and color discipline;
- microtype legibility at 320 and 390 pixels;
- focus, hover, active, selected, loading, error, and disabled states;
- icon consistency;
- diagram labeling;
- code and artifact authenticity;
- image sharpness and crop behavior;
- motion timing and easing;
- link affordances;
- print styles;
- résumé visual alignment; and
- metadata, favicon, and share-card polish.

Small text must remain comfortably readable. Use hierarchy, weight, case, and tracking instead of shrinking critical evidence labels below usable sizes.

## Section 13 — Visual pass 5: restraint and memorability

Remove anything that is generic, redundant, performative, or visually noisy.

Ask:

- Is the portfolio recognizable after the browser closes?
- Does the signature interaction explain real engineering thinking?
- Is every visual artifact legible and necessary?
- Does motion clarify state rather than advertise itself?
- Are the strongest claims easy to find and properly qualified?
- Does mobile feel authored rather than collapsed?
- Is the homepage concise enough to maintain momentum?
- Can a recruiter understand role, level, evidence, and contact path quickly?
- Can a technical reviewer find architecture, evaluation, and limitations without hunting?

Prefer one strong memorable system over many unrelated effects.

## Section 14 — Aesthetic release rubric

Score the final staging result out of 100:

| Category | Weight |
| --- | ---: |
| Positioning clarity | 8 |
| Originality | 10 |
| Memorability | 8 |
| Typography | 10 |
| Composition | 10 |
| Artifact quality | 10 |
| Case-study storytelling | 10 |
| Signature interaction | 8 |
| Recruiter scanability | 8 |
| Technical depth | 8 |
| Mobile authorship | 6 |
| Micro-polish | 4 |
| **Total** | **100** |

Release threshold: at least 90/100, with written evidence for each score.

Accessibility, privacy, factual accuracy, target safety, and performance are separate pass/fail gates. They cannot be traded for aesthetic points. Do not inflate the score to avoid another iteration.

## Section 15 — Content, evidence, and privacy governance

Preserve and revalidate:

- final metric values in server HTML;
- context, role, evidence status, publication status, and qualification for public claims;
- team attribution for Let’s Talk Doc;
- correct separation of the HL7/HEDIS reference implementation from the award project;
- exact Team Re-Admit classification;
- absence of unsupported BCBS-NC attribution;
- deterministic/synthetic labeling for public FHIR references;
- sanitized professional-system narratives;
- no real receipts or sensitive identifiers;
- no phone number, current internal platform name, private model-routing detail, private volume, or confidential business-line claim;
- clear research limitations; and
- honest public-repository maturity labels.

Use official sources first, then the latest governed résumé, then public repository evidence. Unverified claims stay hidden or explicitly unresolved.

## Section 16 — Generate the portfolio-safe public résumé

Do not publish the source job-application PDF.

Generate a separate public PDF from the governed `/resume/` content only after the page content is approved by automated privacy and evidence checks.

The public PDF must:

- omit the telephone number;
- omit detailed location when not necessary;
- omit internal system and platform names;
- omit exact private model-routing, volume, infrastructure, and confidential business-line details;
- use only approved or qualified public claims;
- preserve team/program attribution;
- use selectable, ATS-readable text;
- contain working, public-safe links;
- visually match the portfolio without harming parsing;
- include a descriptive filename;
- print cleanly at common paper sizes;
- pass `pdftotext` or equivalent extraction checks;
- pass banned-content and credential scans;
- pass a rendered-page visual review; and
- avoid metadata that exposes local paths or private source filenames.

Preferred public path:

```text
/resume/Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf
```

Update `/resume/`, link validation, `portfolio.json`, social metadata where appropriate, provenance documentation, and QA evidence only after the PDF passes. If the host supports response headers, prefer `X-Robots-Tag: noindex` for the PDF and keep `/resume/` as the indexable canonical narrative.

## Section 17 — SEO and discoverability hardening

SEO must improve truthful discovery, not weaken privacy or duplicate the portfolio.

### Production indexing contract

Production must provide:

- one HTTPS apex canonical origin: `https://shaileshdudala.com`;
- a permanent `www` → apex redirect without a chain;
- HTTP → HTTPS redirects;
- self-referential canonical URLs on indexable pages;
- `index,follow` on production pages;
- a production-only sitemap containing canonical, indexable URLs;
- accurate `lastmod` values only when content actually changed;
- a robots file that allows required production crawling and advertises only the production sitemap;
- a real 404 HTTP status for the custom 404;
- consistent trailing-slash behavior;
- permanent redirects for retired routes where Hostinger supports them; and
- no custom-domain CNAME in GitHub Pages.

Do not include staging, mirror, compatibility-only `noindex`, or noncanonical duplicate URLs in the production sitemap. Do not emit a mirror-origin sitemap whose URLs conflict with production canonicals.

### Staging and mirror indexing contract

Hostinger staging:

- `noindex,nofollow` in server-rendered HTML;
- `X-Robots-Tag: noindex, nofollow` when Hostinger supports it;
- password protection when available and compatible with automated QA;
- no public sitemap submission;
- no external linking or discoverability work; and
- no reliance on `robots.txt` alone as an indexing control.

GitHub Pages mirror:

- production canonicals;
- `noindex,follow` in server-rendered HTML;
- crawler access sufficient for the `noindex` directive to be seen;
- no competing custom domain;
- no mirror-origin sitemap advertised to search engines; and
- the same approved release SHA as production.

Search crawlers must be able to fetch a page to process its robots meta directive. Do not combine a critical `noindex` strategy with a blanket crawl block that prevents the directive from being read.

### Page metadata and information architecture

- Keep titles unique, concise, descriptive, and aligned with actual page intent.
- Use one clear H1 per page and logical nested headings.
- Write unique descriptions for humans; do not keyword-stuff.
- Use descriptive internal link text and connect related work, experience, lab, and résumé content.
- Keep core positioning, claims, and case-study narratives server-rendered.
- Ensure important content does not depend on interaction or hydration.
- Provide stable, descriptive URLs.
- Keep contact, GitHub, LinkedIn, award, and repository links crawlable and valid.
- Generate absolute Open Graph and social-card URLs for the active target.
- Provide favicon and site-name assets at required sizes.

### Structured data

Validate accurate JSON-LD for:

- `WebSite` on the canonical site;
- `ProfilePage` with `Person` as `mainEntity` on the most appropriate profile/about route;
- `Person` with only truthful public fields and authoritative `sameAs` links;
- `BreadcrumbList` on work details;
- `CreativeWork` or `SoftwareSourceCode` where accurate; and
- page URLs, images, descriptions, authorship, and dates that match visible content.

Use fewer complete, accurate properties instead of speculative markup. Passing a validator does not justify an unsupported rich-result claim.

### Search and performance validation

- Run Google Rich Results Test-compatible validation or schema validation for representative pages.
- Run a production-profile build locally with `index,follow` and production canonicals.
- Expect live staging Lighthouse SEO to reflect intentional `noindex`; do not weaken staging safety to force a score of 100.
- Require production-profile Lighthouse SEO of 100 before cutover.
- After production, run remote Lighthouse and inspect rendered HTML.
- Target lab Core Web Vitals of LCP ≤ 2.5 s, INP ≤ 200 ms where measurable, and CLS ≤ 0.1.
- Treat field data as unavailable until sufficient real traffic exists; do not mislabel lab results as field performance.
- Keep JavaScript, fonts, image payloads, and interaction work proportional to explanatory value.

### Post-launch discovery

After production verification:

- expose the production sitemap at a stable URL;
- optionally verify Google Search Console and Bing Webmaster Tools when owner credentials/verification are available;
- submit only the canonical production sitemap;
- request indexing for the homepage and flagship pages when appropriate;
- monitor coverage, canonical selection, structured-data reports, Core Web Vitals, and broken links; and
- do not claim ranking improvements without measured evidence.

Search Console ownership is useful but not a launch blocker when the canonical site, redirects, metadata, sitemap, and indexing controls are correct.

## Section 18 — Performance, accessibility, and browser release gates

Required before staging completion:

- Astro check: zero errors and warnings;
- unit, content, privacy, link, target, accessibility, and browser tests: all pass;
- axe: no serious or critical violations on primary routes;
- keyboard-only flows: pass;
- reduced motion: pass;
- forced-colors essential usability: pass;
- 200% zoom/reflow: pass;
- JavaScript-disabled essential navigation/content: pass;
- no essential console errors or failed requests;
- all ten viewports free of horizontal overflow;
- remote Chromium, Firefox, and WebKit smoke suites: pass;
- cold-cache and slow-network experiences remain usable;
- production-profile Lighthouse performance ≥ 90 on mobile and desktop;
- production-profile accessibility, best-practices, and SEO categories ≥ 95, with SEO expected at 100 before cutover;
- no crawler-visible zero metrics;
- no private/publication-policy violations; and
- aesthetic rubric ≥ 90/100.

If a threshold fails, fix the cause or document why the measurement is invalid and rerun. Do not average away a pass/fail failure.

## Section 19 — Autonomous repair, commit, push, and redeploy loop

For each coherent improvement:

1. diagnose from rendered/live evidence;
2. edit the repository, not Hostinger-generated files;
3. run the smallest relevant local checks;
4. run the full validation suite before a release candidate;
5. generate screenshots at required viewports;
6. commit a logical checkpoint;
7. push `codex/portfolio-v2-hostinger`;
8. rebuild with the real staging metadata;
9. redeploy only to the allowlisted staging website;
10. clear only the staging cache when necessary;
11. verify `/build.json` and live behavior; and
12. update the evidence ledger.

Continue until the release gates pass. Use up to three recovery attempts for the same infrastructure operation before treating it as blocked. Design iterations are governed by result quality, not an arbitrary slice limit. Do not preserve weak work merely to minimize diffs.

Never force-push, rewrite unrelated history, reset user changes, deploy a dirty tree, or patch Hostinger files directly.

## Section 20 — Staging closeout and draft PR

When staging passes:

1. record starting and final full SHAs;
2. record staging URL and website identifier;
3. record hosting order identifier in a non-secret evidence artifact if safe;
4. record deployment method, build command, output root, Node version, and deployment/status identifiers;
5. record the selected creative direction and all five visual-pass outcomes;
6. publish the 100-point rubric with evidence;
7. record browser, axe, Lighthouse, link, SEO, privacy, résumé, and performance results;
8. link desktop, mobile, tablet, and ultrawide screenshots;
9. confirm the Website Builder site, production domain, DNS, email, billing, `main`, and GitHub Pages remain untouched;
10. update `QA_REPORT.md`, staging, deployment, provenance, and decision documents;
11. push the final implementation branch;
12. open a draft PR marked `DO NOT MERGE — HOSTINGER STAGING REVIEW`;
13. include staging evidence, risks, owner-action needs, and rollback notes in the PR; and
14. stop unless `CUTOVER APPROVED` has been explicitly supplied for the continuation below.

Expected staging completion output:

- live temporary Hostinger URL;
- staging website identifier;
- deployment method;
- starting and final commit SHAs;
- draft PR URL;
- selected creative direction;
- final aesthetic score;
- live desktop and mobile screenshots;
- browser-test results;
- remote and production-profile Lighthouse results;
- accessibility results;
- SEO contract results;
- public résumé status;
- privacy and evidence decisions; and
- explicit confirmation that production and the old site remain untouched.

# CUTOVER CONTINUATION — DO NOT EXECUTE WITHOUT EXACT AUTHORIZATION

## Section 21 — Cutover activation modes

The exact phrase is:

```text
CUTOVER APPROVED
```

Two modes are supported:

### Default staged mode

The owner reviews the staging URL and then sends `CUTOVER APPROVED`. Codex continues from the approved staging SHA.

### One-touch production mode

The owner may include `CUTOVER APPROVED` in the initial execution directive and explicitly request autonomous continuation after staging gates. Codex still performs every staging step and must not cut over unless all release and rollback gates pass, but it does not pause for an intermediate aesthetic review. The owner reviews the final live result and full report after production verification.

The current master-spec authoring task does not itself activate either cutover mode.

## Section 22 — Enable only the temporary cutover tools

At cutover readiness:

1. retain `hostinger-hosting` with `writes` approval mode;
2. set `hostinger-domains` and `hostinger-dns` enabled with `prompt` approval mode;
3. keep billing, subscriptions, ecommerce, VPS, WordPress, Horizons, Reach, agency hosting, and unrelated Hostinger servers absent or disabled;
4. keep the credential in `HOSTINGER_API_TOKEN` only;
5. parse and validate configuration without calling Hostinger;
6. restart Codex if required to load the enabled servers; and
7. confirm the intended servers before any call.

After production verification, disable Domains and DNS again and restart when practical.

## Section 23 — Read-only production inventory and rollback preparation

Before any production write, record:

- approved branch and full SHA;
- successful staging deployment and proof;
- current Website Builder site identifier and domain attachment;
- apex and `www` behavior;
- all A, AAAA, CNAME, ALIAS/ANAME, redirect, MX, SPF, DKIM, DMARC, verification, and unrelated DNS records;
- nameservers and TTLs;
- email provider, service status, and owner-controlled backup confirmation when email exists;
- SSL behavior;
- the exact safe operation for releasing the domain from Builder without deleting email;
- the exact safe operation for attaching the approved Astro site;
- Builder archive/duplicate/restore capability;
- the previous known-good state and rollback target;
- a minimal holding-page fallback; and
- expected interruption and propagation behavior.

Reconcile `HOSTINGER_ROLLBACK.md` with actual controls. If an operation cannot distinguish website release from domain/email deletion, stop with one precise owner action.

## Section 24 — Merge and controlled production cutover

After every gate passes and authorization is active:

1. update the draft PR with final staging evidence;
2. ensure required CI passes on the final SHA;
3. convert or approve the PR for merge under the authorized workflow;
4. merge to `main` without unrelated changes;
5. record the exact resulting `main` SHA;
6. archive or duplicate the Builder site when safely supported;
7. release the custom domain from Builder only through the verified safe operation;
8. preserve domain registration and email;
9. connect `shaileshdudala.com` to the approved static Astro production application;
10. apply the production environment contract;
11. deploy only the approved `main` SHA;
12. establish HTTPS and the verified `www` → apex redirect;
13. change only proven web-routing records when needed;
14. preserve protected DNS records byte-for-byte where possible; and
15. stop and roll back automatically if critical production verification fails.

Production environment:

```text
PUBLIC_DEPLOY_TARGET=hostinger-production
PUBLIC_SITE_URL=https://shaileshdudala.com
PUBLIC_CANONICAL_URL=https://shaileshdudala.com
PUBLIC_ROBOTS=index,follow
NODE_ENV=production
```

## Section 25 — Production verification and automatic rollback triggers

Verify:

- apex and `www` HTTPS responses and redirects;
- SSL chain and expiry;
- all primary and compatibility routes;
- custom 404 status;
- raw HTML final metrics;
- production canonicals and robots;
- production-only sitemap contents;
- Open Graph, favicon, structured data, `portfolio.json`, `llms.txt`, and `/build.json`;
- public résumé route, PDF, content type, privacy policy, and links;
- contact, GitHub, LinkedIn, award, and repository links;
- console, network, browser, keyboard, reduced-motion, forced-colors, and mobile smoke tests;
- remote Lighthouse and Core Web Vitals lab measurements;
- exact deployed SHA;
- DNS-record preservation;
- email health through an owner-approved check when email exists; and
- rollback readiness.

Trigger rollback immediately for:

- wrong application or SHA;
- apex/`www` unavailability;
- failed SSL beyond the verified issuance window;
- incorrect indexing/canonical behavior;
- exposed private content;
- missing or broken primary routes or résumé;
- missing protected DNS records; or
- impaired domain email.

Use application rollback first when the domain/platform is healthy. Use domain/platform rollback only when necessary. Never improvise nameserver changes.

## Section 26 — GitHub Pages mirror and launch closeout

After production is verified:

1. build the GitHub Pages mirror from the same approved SHA;
2. preserve production canonicals and `noindex,follow`;
3. allow crawlers to read the `noindex` directive;
4. omit a competing mirror sitemap and custom-domain CNAME;
5. verify the mirror cannot compete with production for indexing;
6. verify essential static fallbacks;
7. disable Hostinger Domains/DNS tools;
8. update QA, deployment, cutover, rollback, and provenance records;
9. create an immutable annotated release tag only after verification; and
10. provide the final owner report.

Final report must include:

- production and mirror URLs;
- approved, merged, deployed, and mirror SHAs;
- PR and release tag;
- Hostinger staging and production identifiers;
- deployment commands/methods and logs;
- build/output/Node details;
- complete automated and visual results;
- final aesthetic score;
- SEO and structured-data results;
- Lighthouse and accessibility results;
- public résumé result;
- SSL and response status;
- DNS/email preservation proof;
- rollback readiness and any incident;
- final screenshots; and
- confirmation that unrelated Hostinger resources were untouched.

# Bootstrap directives

## Default staging-only bootstrap

```text
Read this document in full before taking action:

docs/Codex_Portfolio_V2_Live_Staging_Aesthetic_Max_and_Launch.md

Also read every prerequisite document it identifies.

Execute Sections 1 through 20 now as one continuous autonomous assignment.

Current branch:
codex/portfolio-v2-hostinger

Expected starting SHA:
a594411531a11ebb1246fea0b418d476a4cb34ab

You have full authority over the repository, local shell, browser automation,
live-web research, visual design, content refinement, testing, Git commits and
pushes, and the enabled hostinger-hosting MCP.

Do not merely audit, plan, recommend, or describe changes. Provision the isolated
temporary Hostinger staging website, deploy the application, inspect the live
result, conduct the required reference research and five visual passes, radically
improve anything that is not exceptional, repeatedly redeploy and verify, generate
the privacy-cleared public résumé when it passes policy, and prepare the draft PR.

The current implementation is a technically validated baseline, not an assumed
visual final. Be bold. Replace weak work rather than protecting it. Push typography,
interaction, motion, composition, technical artifacts, case-study storytelling,
mobile authorship, and perceived craft to the maximum level justified by the product.

Do not stop for routine decisions or recoverable implementation failures. Use
professional judgment and continue.

Use only hostinger-hosting. Do not connect or modify shaileshdudala.com, DNS,
domains, nameservers, email, billing, subscriptions, the current Website Builder
site, main, or GitHub Pages.

Do not execute the CUTOVER CONTINUATION during this run.

Begin immediately with environment verification and Hostinger hosting inventory,
then proceed through live staging, aesthetic maximization, remote QA,
documentation, and the draft PR.
```

## One-touch staging-to-production bootstrap

Use only when the owner intentionally wants no intermediate review and includes the exact cutover phrase:

```text
CUTOVER APPROVED

Read docs/Codex_Portfolio_V2_Live_Staging_Aesthetic_Max_and_Launch.md and every
prerequisite in full. Execute Sections 1 through 26 as one continuous autonomous
assignment. Complete isolated staging first and proceed to production only if every
staging, privacy, accessibility, SEO, performance, rollback, and release gate passes.
Use the target allowlists and protected invariants exactly. Stop only for a hard-stop
condition or unavoidable owner-only action. Return the final report after production,
domain, SSL, mirror, SEO, résumé, and rollback verification are complete.
```

# Owner-input summary

The repository, GitHub access, local terminal, API token, and hardened MCP configuration are sufficient for staging after Codex restarts.

For the default staging run, the owner should need only to:

1. restart Codex;
2. approve the clearly labeled staging writes; and
3. review the returned staging evidence when convenient.

For one-touch production, the owner additionally must:

1. provide the exact `CUTOVER APPROVED` phrase;
2. allow Domains/DNS to be enabled at cutover readiness and restart Codex if required; and
3. provide a precise manual action only if Hostinger cannot safely expose domain release, Builder archive, email backup confirmation, or another owner-only control.

Google Search Console or Bing ownership may be connected after launch and is not required to make the site technically indexable.

# Primary references

- [Hostinger API MCP server](https://github.com/hostinger/api-mcp-server)
- [Hostinger Node.js/Astro deployment guidance](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/)
- [Codex MCP configuration and approval behavior](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)
- [Google robots meta and X-Robots-Tag guidance](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)
- [Portfolio V2 implementation branch](https://github.com/smgpulse007/smgpulse007.github.io/tree/codex/portfolio-v2-hostinger)
