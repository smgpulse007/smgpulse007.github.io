# Portfolio V2.1 baseline audit

Recorded: 2026-07-13 (America/New_York)

## Release and safety baseline

- Repository baseline: `9ba3e65c56d043c8af0dcbdccc764c5fb1fc2951` on `main`.
- Verified production release: `1ae06ad45315baffaef6d1564aae0da4d4051a53` (`portfolio-v2.0.0`).
- Working branch: `codex/portfolio-v2.1-experience-evidence`.
- Protected surfaces: canonical production, GitHub Pages mirror, `main`, DNS, nameservers, email, billing, subscriptions, and domain registration.
- Release gate: no protected-surface mutation before the exact phrase `V2.1 CUTOVER APPROVED`.

## Live surface baseline

| Surface | Build | Robots | Canonical | State |
|---|---|---|---|---|
| `https://shaileshdudala.com` | `1ae06ad` | `index,follow` | canonical origin | V2.0 production |
| `https://smgpulse007.github.io` | `1ae06ad` | `noindex,follow` | canonical production | same-SHA mirror |
| retained Hostinger staging | `1ae06ad` | `noindex,nofollow` | temporary origin | isolated V2.0 staging |

No production, mirror, domain, or account mutation was made during discovery.

## Product baseline

- The five-second identity is clear: Senior Applied AI Engineer in healthcare and insurance.
- The visual system is coherent but overuses dark terminal and code-panel grammar.
- The hero interaction exposes system states but does not make the causal packet-to-review story memorable.
- Internal terms such as evidence classifications and portfolio-governance vocabulary are visible during ordinary reading.
- Let’s Talk Doc occupies a flagship slot even though its most defensible treatment is team recognition.
- The 0-to-1 healthcare analytics platform story is absent from selected work.
- The About page states principles but does not yet tell a professional origin story.
- The public résumé is ATS-readable and privacy-cleared, but its short second page is mostly empty.

## Legacy baseline

The canonical origin does not currently serve the old Hostinger Builder pages. The retained Builder duplicate still exposes the historic brand and content at its temporary domain.

| Route | Canonical V2.0 | Builder duplicate | V2.1 staging requirement |
|---|---|---|---|
| `/` | current V2.0 | old Data Scientist brand | current V2.1 home |
| `/about` | current About | old biography | current About |
| `/projects` | controlled compatibility | old project gallery | controlled compatibility |
| `/contact` | branded 404 | old contact page | canonical Contact or redirect |
| `/my-ai-app-library` | branded 404 | old app library | no-index compatibility to Lab |
| `/work/lets-talk-doc/` | indexable case study | n/a | no-index compatibility to Recognition |

Known Builder signals include `Legendary Data Scientist`, `My Highlghts`, `competitive coder`, `Suffering from skill issues`, `Los Angeles`, and the 2024-era brand. These phrases are denylisted for V2.1 output.

## Search observation

The available search provider returned no indexed results for targeted queries covering the canonical domain and known Builder phrases. This is an observation, not proof of de-indexing. The remediation and verification sequence is in `docs/SEARCH_REINDEX.md`.

## Baseline artifacts

- Screenshots: `qa-screenshots/v2.1-baseline/`
- Rendered résumé pages: `tmp/pdfs/v2.0-resume/`
- Live route and build evidence: captured in this audit and the final V2.1 QA report.
