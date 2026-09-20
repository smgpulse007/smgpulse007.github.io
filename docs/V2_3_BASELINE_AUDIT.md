# Portfolio V2.3 baseline audit

Status: implementation baseline and decision record  
Recorded: 2026-07-17  
Release scope: isolated V2.3 review branch and no-index staging only

This audit records what V2.3 inherited, what the live comparison exposed, and which changes the current implementation makes. It is not a QA completion claim. Browser, accessibility, performance, staging, and release results belong in their dedicated V2.3 reports.

## Verified starting state

| Item | Verified value | Evidence |
| --- | --- | --- |
| V2.2 source | `1eed4c48a762e1dbeb454a318fbe2e7c72b21ae8` | `git merge-base HEAD 1eed4c48...` resolves to the exact SHA |
| V2.2 branch | `codex/portfolio-v2.2-systems-observatory` | Local and origin branch references |
| V2.3 branch | `codex/portfolio-v2.3-creative-expansion` | Current branch |
| First V2.3 checkpoint | `6aaeb9e` | V2.3 controlling package copied into `docs/` |
| Prior reviews | PR #2 and PR #3 remain open and unmerged | Live GitHub review in the implementation session |
| Production authority | Inactive | Exact phrase `V2.3 CUTOVER APPROVED` has not been supplied |

V2.3 was created directly from the required V2.2 staging SHA, not from `main`. Production, the mirror, DNS, nameservers, email, billing, and prior PR state are outside this staging assignment.

## Inputs audited

- the complete V2.3 controlling package in `docs/Portfolio_V2_3_*.md`;
- current Astro pages, components, typed data, styles, validators, and static routes;
- the governed public claim source in `src/data/impactClaims.ts`;
- the V2.2 evidence and release documents;
- live production at `https://shaileshdudala.com/`;
- retained V2.1 staging at `https://aquamarine-mole-482437.hostingersite.com/`;
- retained V2.2 staging at `https://royalblue-wildcat-803695.hostingersite.com/`;
- the public GitHub inventory and repository-health review recorded on 2026-07-17;
- the private career source used only to decide what may be safely published; and
- the generated public résumé at `public/resume/Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf`.

## Baseline findings

### 1. The professional identity was too diffuse

V2.2 made the “Systems Observatory,” context engineering, and harness engineering feel like the destination of the career. That framing compressed a much broader record spanning scientific computing, statistical modeling, predictive healthcare, product leadership, MLOps, interoperability, document intelligence, and production agentic AI.

V2.3 restores the controlling identity:

> Senior Applied AI / ML Engineer

Healthcare and insurance remain the primary proving grounds. Context and harness engineering remain recent capabilities, not the headline or the full career thesis.

### 2. Professional work did not dominate the primary journey

The V2.2 homepage foregrounded the observatory concept and open-source frontier. Work and Experience were not strong first-class navigation anchors. Recruiter-readable role chronology and case-study depth were too far from the first read.

The V2.3 primary navigation is now:

1. Work
2. Experience
3. Projects
4. Research
5. About

The homepage now presents career breadth, current production work, four professional flagship cases, governed impact, supporting engagements, and only then Project Lab and Research.

### 3. Two factual corrections were mandatory

| V2.2 problem | Approved V2.3 wording | Boundary |
| --- | --- | --- |
| `7K documents/day` | `7K-case backlog cleared` | On-premises compliance-review workstream |
| vague “platform/product improvement” around 20% | `20% automated measure-closure improvement` | Healthcare quality-measure evidence workflow |

The typed claim source also keeps the two approximate 90% outcomes separate:

- current insurance engagement: approximately 90% lower document-handling effort in one measured workstream;
- payer document-intelligence engagement: approximately 90% review-time reduction in its measured workflow.

Neither is an enterprise-wide claim.

### 4. Predictive ML and earlier technical depth had been diluted

V2.2 did not adequately show cohort design, feature lineage, interpretable baselines, model comparison, calibration, thresholds, explainability, error analysis, deployment, monitoring, and intervention design. It also underrepresented readmission, length of stay, ED utilization, quality, FWA, hospital operations, provider-data validation, scientific computing, and biomedical work.

V2.3 adds a dedicated predictive-healthcare case in `src/data/v23Work.ts` and restores this breadth across Home, Work, Experience, About, and Research.

### 5. The four professional cases were too generic

The required flagship hierarchy is now explicit:

1. Production agentic claims automation
2. Predictive healthcare ML
3. Healthcare analytics platform
4. On-prem document intelligence

Their public case records distinguish problem, role, architecture, decisions, failure modes, evaluation, outcomes, evidence class, privacy boundary, and limitations. Private data, prompts, APIs, policies, screenshots, model routing, and employer-confidential names remain withheld.

### 6. Lab structure flattened maturity

The V2.2 Lab made strong systems, prototypes, red CI, archived work, and learning artifacts too visually similar. V2.3 uses an inventory with explicit `featured`, `explore`, and `archive` editorial tiers. These tiers describe portfolio presentation, not GitHub archive state.

The current inventory contains 41 original public repositories:

- 2 portfolio/profile surfaces;
- 6 featured systems;
- 16 explore records;
- 17 archive records;
- 39 authored repositories shown in the Project Lab after excluding the two surfaces.

### 7. Research over-weighted one recent theme

V2.2’s Research Atlas gave too much first-read weight to context and harness preprints. V2.3 keeps those records but moves them into a clearly labeled Frontier watch. The opening model is now:

- 12 Foundations;
- 11 Applied engineering;
- 12 Frontier watch;
- 2 verified authored publications.

External work is never presented as Shailesh’s work. Conference records, peer-reviewed work, preprints, reporting guidelines, and technical specifications retain distinct labels.

### 8. The visual system was memorable but professionally unstable

The V2.2 lime observatory language had energy, but its dense dark panels, typography, and repeated system framing competed with comprehension. The desktop experience had stronger craft than production, while the mobile menu on the V2.2 staging site was materially broken: opening it produced a transparent overlay with oversized duplicate links over the hero.

The inherited global styling was also difficult to reason about as one release unit. The V2.3 implementation isolates its new system under `src/styles/v23/` and gives mobile navigation an opaque, bounded overlay.

### 9. Evidence registries were fragmented

Career facts, case studies, impact claims, project evidence, Lab records, and research records existed in several data sources. V2.3 introduces a typed V2.3 content layer:

- `src/data/v23.ts` — identity, career stages, professional cases, engagements, project inventory, capability crosswalk;
- `src/data/v23Work.ts` — predictive-healthcare case and V2.3 work routing;
- `src/data/impactClaims.ts` — governed quantitative claims;
- `src/data/publications.ts` — authored publication metadata;
- `src/data/research.ts` — external research records.

This is improved consolidation, not a claim that all legacy registries have been deleted.

## Recorded live comparison summary

| Surface | Strength retained | Defect or risk V2.3 addresses |
| --- | --- | --- |
| Production | Clear, conventional professional structure; working mobile menu | Less distinctive, less spatial, less case depth |
| V2.1 staging | Strong professional hierarchy; correct 7K and 20% wording | More conventional visual language and fewer memorable instruments |
| V2.2 staging | Strong desktop craft; useful Agent, Lab, and Research interactions | Vague first fold, professional hierarchy weakened, open-source frontier too prominent, broken mobile menu |

The detailed observation log is in `docs/V2_3_LIVE_COMPARISON.md`.

## Current V2.3 response

| Baseline gap | Current implementation response | Primary source |
| --- | --- | --- |
| Identity ambiguity | Exact role, broad supporting line, professional-first thesis | `src/data/v23.ts`, `src/pages/index.astro` |
| Career compression | Career field plus exact six-entry chronology | `src/components/v23/CareerField.astro`, `src/pages/experience.astro` |
| Thin professional cases | Four deep case routes with case-specific instruments | `src/data/work.ts`, `src/data/v23Work.ts`, `src/pages/work/[slug].astro` |
| Weak predictive evidence | Dedicated cohort-to-action predictive case | `src/data/v23Work.ts` |
| Open-source dominance | Lab moved after professional work; maturity tiers and limits | `src/pages/lab/index.astro`, `src/data/v23.ts` |
| Research imbalance | Foundations-first atlas and separate publications view | `src/pages/research/index.astro` |
| Generic card systems | Editorial case ledger, interactive workbench, research paths | `src/styles/v23/main.css`, `src/styles/v23/research.css` |
| Mobile menu failure | Opaque viewport-bounded mobile overlay | `src/styles/v23/main.css` |
| Motion without fallback | semantic HTML/SVG first, reduced-motion and forced-color rules | `src/styles/v23/main.css` |

## Open acceptance gates

The following are deliberately not recorded as passed in this audit:

- V2.3 live browser review on local and remote staging;
- Chromium, Firefox, and WebKit matrix;
- mobile, tablet, desktop, ultrawide, 320px, and 200% zoom review;
- reduced motion, no JavaScript, no WebGL, forced colors, slow network, and CPU-throttle review;
- glass contrast and motion-pause review;
- performance measurements and budget tradeoffs;
- screenshot and video capture;
- isolated Hostinger staging deployment and remote verification;
- independent six-perspective comprehension critique;
- draft PR and final SHA.

Those results must be recorded from actual runs in the later V2.3 evidence reports.

