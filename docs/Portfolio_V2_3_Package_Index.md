# Portfolio V2.3 — Handoff Package Index

Copy every file in this package into the portfolio repository’s existing `docs/` directory.

## Read order

1. `Portfolio_V2_3_Independent_Page_Audit_and_Narrative_Reset.md`
2. `Portfolio_V2_3_Design_Animation_Benchmark_Study.md`
3. `Portfolio_V2_3_Career_Repository_Content_Map.md`
4. `Portfolio_V2_3_Research_Content_Enrichment_Spec.md`
5. `Portfolio_V2_3_Master_Implementation_Spec.md`
6. `Portfolio_V2_3_Handoff_Instructions.md`
7. `Portfolio_V2_3_Codex_Goal_Prompt.md`
8. `Portfolio_V2_3_Owner_Review_Checklist.md`
9. `Portfolio_V2_3_Cutover_Prompt.md`

## New Codex task

Open:

```text
docs/Portfolio_V2_3_Codex_Goal_Prompt.md
```

Copy only the text inside its fenced `text` block into a new Codex chat opened at the repository root.

## Required branch base

Create V2.3 directly from:

```text
1eed4c48a762e1dbeb454a318fbe2e7c72b21ae8
```

Required branch:

```text
codex/portfolio-v2.3-creative-expansion
```

Do not branch from `main`.

Do not merge V2.1 PR #2 or V2.2 PR #3.

## Staging

Preserve:

- V2.1 staging
- V2.2 staging
- production
- GitHub Pages mirror

Prefer a new isolated no-index V2.3 staging site.

## Production

Do not use the cutover prompt until V2.3 staging is reviewed and approved.

Protected phrase:

```text
V2.3 CUTOVER APPROVED
```
