# Portfolio V2.3 design reference audit

Status: reference-to-decision record  
Last source review: 2026-07-17

These sources are quality bars, not templates. V2.3 borrows principles—legibility, meaningful interaction, material hierarchy, authored motion, and inspectable systems—without reproducing another site’s layout, brand, assets, or interaction signature.

## Required benchmark set

| Reference | Principle retained | V2.3 application | Explicit non-copy boundary |
| --- | --- | --- | --- |
| [Bruno Simon](https://bruno-simon.com/) | Navigation can itself become an experience | Career breadth becomes a navigable field | No game controls, driving world, or portfolio-as-game metaphor |
| [Lusion](https://lusion.co/) | Real-time visuals need a narrative role and performance plan | Spatial depth is concentrated in hero/instruments | No decorative 3D scene or asset-heavy first load |
| [Active Theory](https://activetheory.net/) | Story, art, and technology should feel like one system | Editorial pacing and instrument surfaces share one language | No agency-showreel opacity or interaction for spectacle alone |
| [NASA Eyes](https://eyes.nasa.gov/) | Complex systems become understandable through scale, labels, and orientation | Career and workflow maps keep labels and state visible | No literal space simulation or planetary skin |
| [Distill](https://distill.pub/) | Interactive notation can teach an ML idea | Predictive, claims, and research surfaces expose concepts and state | No academic-paper imitation or unlabeled experimental chart |
| [The Pudding](https://pudding.cool/) | A page needs a narrative argument, not a pile of sections | Homepage moves from identity to arc, current work, proof, breadth, and human story | No scrollytelling dependency that hides the static narrative |
| [Observable](https://observablehq.com/) | Exploratory tools should support direct questions | Project Lab and Research behave as inspectors and filtered atlases | No notebook chrome or chart merely because data exists |
| [IBM Quantum Composer](https://quantum.cloud.ibm.com/composer) | A difficult computational system can be made manipulable through a visual grammar | Claims run and project workbench use stages, contracts, state, and readouts | No circuit-builder imitation or quantum metaphor |
| [FIELD.IO × IBM Quantum](https://field.io/work/ibm-quantum-brand-visuals) | Generative identity should derive from the underlying idea | Orbits and fields represent career continuity and bounded system state | No IBM palette, forms, or quantum identity |
| [Apple materials](https://developer.apple.com/design/human-interface-guidelines/materials) and [Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/liquid-glass) | Glass belongs to controls, navigation, overlays, and instruments—not all content | Navigation, hero instrument, claims run, project workbench, and case covers use role-specific glass | No wall of transparent body cards or unreadable blur over motion |
| [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Scroll-linked motion needs scrub control, lifecycle discipline, and a reduced path | The design language uses staged reveal principles, but the current main build remains CSS/SVG-first | No mandatory scroll hijacking or hidden content |
| [Three.js](https://threejs.org/), [WebGPU](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API), and [W3C WebGPU](https://www.w3.org/TR/webgpu/) | Use GPU rendering only when it creates a better explanatory model | Current main build deliberately achieves the intended spatial effect with semantic HTML, CSS, and SVG | No WebGL dependency, neural mesh, or particle wallpaper |
| [Awwwards current collections](https://www.awwwards.com/websites/sites_of_the_day/) | Compare against contemporary craft beyond the previous branch | Typography scale, pacing, detail, and mobile art direction were treated as comparative quality gates | Awards do not override comprehension, accessibility, provenance, or performance |

## Additional current references

These references were checked against their official sources on 2026-07-17 and supplement the controlling benchmark set.

| Current reference | Observed principle | Decision influenced |
| --- | --- | --- |
| [Linear: A calmer interface for a product in motion (2026)](https://linear.app/now/behind-the-latest-design-refresh) | Dense products benefit when secondary navigation recedes, borders soften, and structure is felt rather than shouted | V2.3 uses quiet borders, dim secondary copy, strong task focus, and fewer competing badges |
| [Google DeepMind: Reimagining the mouse pointer for the AI era (2026)](https://deepmind.google/blog/ai-pointer/) | Contextual interaction should preserve flow and make the selected entity obvious | Lab and Research controls change adjacent readouts rather than sending the user into detached tool chrome |
| [Figma: Principles in motion (2026)](https://www.figma.com/blog/principles-in-motion/) | Motion is designed with time: rhythm, sequence, holds, easing, and state changes communicate meaning | V2.3 separates ambient drift, short feedback, guided playback, and checkpoints; motion is not one generic fade |
| [Figma: How to design agentic tools for work (2026)](https://www.figma.com/blog/how-to-design-agentic-tools-for-work/) | High-stakes agent interfaces need visible progress, human intervention, attribution, and persistent shared context | The claims run makes typed steps, deterministic rejection, exception routing, and human authority explicit |
| [Raycast: A technical deep dive into the new Raycast (2026)](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast) | Familiarity, speed, cross-platform consistency, and interaction detail matter together | V2.3 uses restrained feedback and native controls instead of a bespoke interaction model for every surface |
| [Vercel: Teaching agents product design at Vercel (2026)](https://vercel.com/blog/teaching-agents-product-design-at-vercel) | Design quality depends on encoded context, principles, and iterative review—not merely code generation | The V2.3 package, typed content sources, design tokens, prototypes, and browser gates operate as one design context |

## Reference synthesis

Five conclusions survived comparison across the set:

1. **The first read must be literal.** The hero names Shailesh and the exact role before asking the visitor to interpret a visual system.
2. **Interaction must answer a professional question.** Career breadth, current claims architecture, project maturity, and research evidence each receive a different interaction.
3. **Material is hierarchy.** Glass is reserved for controls and instruments; long-form content stays on stable opaque surfaces.
4. **Motion is state communication.** Ambient motion establishes depth, while playback and selection motion explain process. Neither carries exclusive meaning.
5. **The static document is the contract.** JavaScript enhances selection and playback. It does not create the only copy, link, claim, or evidence path.

## Chosen direction

The main experience is a deliberate hybrid:

- **Computational Editorial** supplies professional hierarchy, large case-led typography, sequencing, and legible proof;
- **Signal Field** supplies the career intelligence field, spatial continuity, and restrained scientific futurism;
- **Living Career Atlas** supplies the idea that capability grows through connected stages rather than replacing earlier skills;
- **Evidence Workbench** supplies the Project Lab’s problem/build/proof/limit interaction;
- **Repository Constellation** remains a no-index alternate because it is memorable but less efficient for scanning 39 projects.

The hybrid rejects V2.2’s lime Systems Observatory as the governing visual identity. It retains its best lessons—system legibility, evidence surfaces, and interaction ambition—inside a clearer professional narrative.

## Technical interpretation

No reference required a specific library. The current V2.3 main build uses Astro, semantic HTML, CSS, SVG, and small progressive-enhancement scripts. This choice is not a ban on GSAP, Three.js, WebGL, or WebGPU; it reflects the current finding that the intended interactions can be explained with a lighter, more reliable stack.

Any later GPU enhancement must:

- have a specific explanatory purpose;
- preserve equivalent HTML/SVG meaning;
- fail without blocking navigation or evidence;
- respect reduced motion;
- be measured against the standard tier; and
- survive mobile and low-power review.

## Review boundary

This audit verifies source selection and the design decisions represented in the current source; it does not claim that every external reference was exhaustively interaction-tested. This source audit does not independently reproduce final QA. Completed local and remote results are recorded in `V2_3_ACCESSIBILITY_REPORT.md`, `V2_3_PERFORMANCE_REPORT.md`, and `V2_3_QA_REPORT.md`.
