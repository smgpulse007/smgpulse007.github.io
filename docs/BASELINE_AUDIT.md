# Portfolio V2 Baseline Audit

Audit date: 2026-07-12
Baseline commit: `f5de5a4`
Baseline branch: `main`
Implementation branch: `codex/portfolio-v2-hostinger`

This document records the repository state before the Portfolio V2 refactor. It is evidence for the refactor, not a statement that the baseline met the release criteria.

## Baseline architecture

- Astro 7 static output with Tailwind CSS, React islands, Motion, and Lucide icons.
- npm with a committed `package-lock.json`.
- GitHub Pages deployment from `.github/workflows/deploy.yml` using Node.js 22, `npm ci`, and `npm run build`.
- Sixteen sitemap routes plus a static 404 page.
- Fifteen project records and eight detailed case-study records.
- One generic case-study layout, typed project data, a shared layout, and reusable architecture/evidence components.

The baseline required no server runtime. Every product capability was static HTML, CSS, media, or client-side enhancement.

## Route inventory

The baseline exposed:

- `/`
- `/experience/`
- `/projects/` and eight `/projects/<slug>/` pages
- `/systems/`
- `/professional-systems/`
- `/quant-forecasting/`
- `/research-archive/`
- `/data-science-lab/`
- `/404/`

Missing from the intended Portfolio V2 information architecture were `/work/`, `/lab/`, `/about/`, `/resume/`, `/portfolio.json`, and `/llms.txt`. The Experience route was not linked from the active primary or footer navigation. The Research Archive and Data Science Lab routes substantially duplicated one another.

## Release-blocking baseline defects

### Canonical and robots behavior

`astro.config.mjs`, `src/data/profile.ts`, `src/components/Layout.astro`, and `public/robots.txt` hard-coded GitHub Pages as the canonical, indexable site. There was no behavior for local builds, Hostinger staging, Hostinger production, or a no-index GitHub Pages mirror.

### Zero-valued server HTML

`src/components/visual/AnimatedMetricStrip.tsx` initialized its animated values at zero. The generated homepage HTML contained `0K`, `$0M`, and zero percentages until JavaScript hydrated. This failed crawler, no-JavaScript, and reduced-motion expectations even though browser screenshots captured the final values after hydration.

### Award attribution

The baseline associated “challenge-winning” wording with a HEDIS/HL7 architecture artifact. That is not the verified award project. The correct public claim is a team award for **Let’s Talk Doc**. The HEDIS/HL7 repository must remain a separate standards-oriented reference implementation.

### Project classification

- The deterministic synthetic Hospital Readmission FHIR demonstration was labeled a flagship rather than a public reference implementation.
- AlphaQuant and NFL forecasting were promoted as featured work despite fitting the Lab better.
- Professional systems, public reference implementations, research labs, team award work, historical work, and archived experiments were not modeled as distinct types.

### Privacy incident and removal

The baseline tracked `public/assets/case-studies/freshtrack/screenshots/sample-receipt.jpg` and described it as synthetic. Visual inspection showed a real retail receipt containing a manager name, store contact/address information, transaction identifiers, partial payment-account information, authorization/reference data, and a timestamp.

The file has been removed from the Portfolio V2 working tree. It must not be restored, copied to QA artifacts, or replaced with another real receipt. Any future document-extraction visual must be generated synthetic data with no person, payment, transaction, or account identifiers. Legacy source references to the removed filename must also be eliminated so asset and privacy validation can fail closed.

### Resume friction

The baseline used a `mailto:` “Request Resume” action and did not serve a public PDF. Portfolio V2 requires a direct, descriptive PDF download plus a visible resume page.

### Evidence and provenance

Impact metrics and project claims were repeated in multiple files without structured evidence status, publication status, role, context, timeframe, or source. Recognition had no source links. Case studies omitted role, timeframe, team context, and evidence classification.

### Test and CI coverage

Playwright was installed, but there was no Playwright config, committed test suite, screenshot generator, content validator, link test, accessibility test, or npm test script. The Pages workflow built and deployed without a pull-request validation gate.

## Baseline validation observations

- Existing generated output had unique titles and descriptions and no missing internal built `href` or `src` targets.
- `npm audit --json` reported zero known vulnerabilities across 446 dependencies on 2026-07-12.
- Existing `qa-screenshots/` held 168 ignored images and five JSON reports from 2026-07-04, covering several routes and viewports. Those artifacts predated Portfolio V2 and had no committed generator scripts.
- Two baseline screenshots were retained under `docs/screenshots/baseline/` for before/after comparison.

## Reusable strengths

- Static-first Astro is the correct foundation.
- The generic case-study layout, architecture diagrams, typed lookups, synthetic FHIR response, and public repository links provide reusable evidence surfaces.
- The dark technical visual language, artifact stack, evidence dossier, focus indicators, skip link, and reduced-motion CSS provide a useful starting point.
- Privacy and limitation language already existed in many project records, although enforcement and provenance were incomplete.

## Refactor implications

Portfolio V2 should keep one repository and one product, consolidate content into a typed source of truth, render essential facts in HTML, preserve old URLs through compatibility pages, classify every surfaced work item honestly, and treat Hostinger production and the GitHub Pages mirror as deployment targets of the same build—not separate designs.
