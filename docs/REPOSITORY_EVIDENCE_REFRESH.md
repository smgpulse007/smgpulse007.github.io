# Repository evidence refresh — November 14, 2026

The Project Lab now describes released public capabilities rather than the July
inventory state. Fourteen repository records link to immutable source commits
and dated validation receipts in `src/data/repositoryReleases.json`. Thirteen
have successful GitHub Actions receipts; AI Cocktail Assistant retains its
local/browser verification and explicitly has no Actions workflow.

The inventory contains 42 records: two portfolio surfaces and 40 authored
projects. This is the site's curated inventory, not a claim that every repository
accessible through GitHub has been modernized. Entries without a new release
record retain their July 17 review date.

The selected project's date, source and verification links move together in the
interactive explorer, its no-JavaScript fallback, and `/projects.json`. Lab
dossiers, legacy AlphaQuant case pages and old concepts use the current public
scope. AlphaQuant exposes an offline citation checker; its old UI image is labeled
historical and removed from the current project explorer. It does not imply a
working public frontend, source-truth verification, market feeds or trading.

The homepage now links to the live Healthcare AI Awards showcase and uses its
actual screenshot. The newly authored showcase, original team awards, synthetic
readmission API and care-gap demo remain distinct. Professional employment,
résumé metrics and historical award attribution are not expanded by this refresh.

## Dependency maintenance

Compatible lockfile updates address nine reported advisories; the subsequent npm
audit returned zero. No forced major-version update or new production dependency
was used. Key versions: Astro 7.3.3 → 7.4.12, Vite 8.1.3 → 8.3.8, Sharp 0.35.4 →
0.35.5 and Undici 8.10.2 → 8.12.4. This is a dated audit result, not a guarantee of
absence of vulnerabilities.

## Validation

- Astro check: 139 files, zero errors, warnings or hints.
- 13 validator unit tests passed; the static build produced 54 pages.
- Content, claim, visual-tier, evidence, copy, legacy, link, media and deployment
  target checks passed. Internal link validation covered 1,074 references.
- A browser regression verifies selection changes preserve the matching release
  record and hide verification links on historical entries. Browser matrix
  execution is recorded by the pull request's CI, separately from local checks.
- The README GIF consists of three actual browser states. Its capture dimensions,
  frame hashes and processing description are in `demos/recording.json`.

## Publication

GitHub source integration, canonical Hostinger production and the no-index Pages
mirror are separate outcomes. A merged commit is not a production deployment
receipt. The existing deployment workflow remains manual and requires verified
canonical production before publishing its mirror. No workflow or infrastructure
permissions are changed by this patch.
