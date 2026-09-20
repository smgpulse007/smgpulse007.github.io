# Portfolio V2.3 creative directions

Status: working directions retained for no-index review  
Recorded: 2026-07-17

V2.3 includes three materially different homepage systems and two Project Lab systems. They are implemented as real Astro routes, not static mood boards. Every route passes `noIndex` to the shared layout and is intended for isolated review only.

## Homepage direction 01 — Signal Field

Route: `/concepts/v23-signal-field/`  
Source: `src/pages/concepts/v23-signal-field.astro`

**Proposition:** “Signals become systems people can trust.”

The direction treats the career as a scientific field. A large, labeled SVG path connects biomedical data, prediction, product, document intelligence, and bounded agents. A public-safe proof panel keeps the first read concrete: 7K cases cleared, 20% measure-closure improvement, nine healthcare contexts, and current claims-agent work.

Strengths:

- strongest visual expression of career continuity;
- scientific and spatial without using a generic neural mesh;
- facts and labels remain readable before interaction;
- semantic SVG includes a title and description;
- reduced motion removes path and node animation.

Risks:

- the field can become abstract if used without an editorial case hierarchy;
- wide SVG layouts need deliberate mobile handling;
- spatial form must not imply that the career ends in one fashionable technique.

## Homepage direction 02 — Computational Editorial

Route: `/concepts/v23-computational-editorial/`  
Source: `src/pages/concepts/v23-computational-editorial.astro`

**Proposition:** “AI, after the demo.”

This is a cinematic editorial system: light paper surface, serif display typography, large numbered professional cases, concise summaries, and attached measures. It makes the professional work immediately scannable and deliberately avoids dark interface chrome.

Strengths:

- strongest recruiter and hiring-manager first read;
- professional cases dominate;
- proof remains attached to its case rather than collected in a detached metric wall;
- visually distinct from V2.2 and from the other V2.3 directions;
- can remain compelling with no animation.

Risks:

- by itself it under-expresses the owner’s spatial sci-fi ambition;
- the paper direction can feel like a magazine rather than a working AI portfolio;
- requires careful type scaling on narrow screens.

## Homepage direction 03 — Living Career Atlas

Route: `/concepts/v23-living-career-atlas/`  
Source: `src/pages/concepts/v23-living-career-atlas.astro`  
Style source: `src/styles/v23/concept-atlas.css`

**Proposition:** a living field map of increasing system responsibility.

The atlas presents stages, routes, evidence coordinates, and an authority principle. It is the most complete articulation of growth: scientific foundations remain present as Shailesh moves through prediction, product, context, bounded agents, and recent harness work.

Strengths:

- strongest long-form career narrative;
- turns breadth into an inspectable system rather than a résumé list;
- makes authority and accountability a constant coordinate;
- desktop and narrow layouts are independently defined;
- reduced motion removes route flow, halo pulse, orbit animation, and hover displacement.

Risks:

- its six-stage abstraction can compete with exact role chronology;
- “harness” can appear like the career endpoint if not kept subordinate;
- the map is more demanding than a first-fold recruiter scan.

## Project Lab direction 01 — Evidence Workbench

Route: `/concepts/v23-evidence-workbench/`  
Source: `src/pages/concepts/v23-evidence-workbench.astro`

**Proposition:** “Inspect the work, not the card.”

The workbench pairs project selection with a system canvas and an evidence inspector. Each selection keeps the problem, built artifact, proof, status, and limitation together.

Strengths:

- directly addresses the evidence-maturity problem;
- supports keyboard-operable native buttons;
- status and limits remain visible;
- selection changes a local readout rather than hiding the inventory;
- degrades to visible controls and initial evidence when JavaScript is unavailable.

Risks:

- a three-pane layout needs careful tablet and mobile reflow;
- the interaction cannot substitute for real media and repository links;
- visual resemblance to a developer tool must not turn the portfolio into a terminal theme.

## Project Lab direction 02 — Repository Constellation

Route: `/concepts/v23-repository-constellation/`  
Source: `src/pages/concepts/v23-repository-constellation.astro`

**Proposition:** “A field of systems, not a shelf of cards.”

The constellation groups repositories by method and evidence relationship. Spatial proximity communicates shared technical territory while a readout preserves project name, group, and proof.

Strengths:

- most memorable project overview;
- makes cross-project relationships visible;
- avoids a conventional dark card grid;
- creates a credible spatial Lab alternate without WebGL.

Risks:

- position is not a sufficient information architecture for 39 projects;
- spatial proximity can imply a false quantitative relationship;
- mobile scanning is weaker than a ledger or inspector;
- a constellation can drift toward generic sci-fi decoration.

## Comparative decision matrix

| Direction | First-glance clarity | Professional hierarchy | Spatial distinction | Evidence inspection | Mobile efficiency | Role in final hybrid |
| --- | --- | --- | --- | --- | --- | --- |
| Signal Field | High | Medium | High | Medium | Medium | Career field and scientific-spatial layer |
| Computational Editorial | Very high | Very high | Low | High | High | Governing page hierarchy and case presentation |
| Living Career Atlas | Medium | High | Very high | High | Medium | Career-continuity and authority principles |
| Evidence Workbench | High | High | Medium | Very high | Medium | Governing Project Lab interaction |
| Repository Constellation | Medium | Medium | Very high | Medium | Low | Retained no-index alternate |

The ratings are design judgments, not user-study scores.

## Chosen hybrid

The current main implementation uses Computational Editorial as the governing structure, Signal Field and Living Career Atlas for meaningful spatial continuity, and Evidence Workbench for the Project Lab.

This combination was chosen because it answers the first three visitor questions in order:

1. Who is Shailesh and what level is he operating at?
2. What professional systems has he built and what changed?
3. How do the career, projects, and research support that claim?

The main homepage therefore starts with literal identity and proposition, then moves through career breadth, current production architecture, flagship professional work, governed impact, supporting engagements, Lab, Research, human story, recognition, and contact.

## Material and motion treatment

- glass is limited to navigation, hero instruments, process instruments, controls, and inspectors;
- long-form editorial surfaces remain opaque;
- ambient orbits and field lines establish continuity;
- selection and playback change visible state;
- all important copy and links exist in the static document;
- `prefers-reduced-motion` removes continuous animation and shortens transitions;
- `prefers-reduced-transparency` replaces primary glass with solid panels;
- forced-colors rules remove decorative material assumptions.

## Review status

The five routes are present, buildable, and no-index in source. The Living Career Atlas received source-level desktop/mobile validation during implementation. This document does not claim a complete live browser or cross-engine review of all five directions. Final screenshots, recordings, interaction findings, and any revisions must be recorded after actual local and staging review.

