# Homepage and Professional Systems Refinement - 2026-07-04

## Goal

Refine the public portfolio without changing its core positioning: Shailesh Dudala builds production-aware AI/ML systems with public evidence, sanitized architecture, and cross-domain breadth. This pass focuses on the homepage hook, the proof deck, section transitions, the resume request CTA, and `/professional-systems/`.

## Design Decisions

- Broaden the first-screen story beyond healthcare by naming regulated workflows, local model labs, hackathon-grade experiments, forecasting, document intelligence, and MLOps.
- Keep the hero artifact stack, but make it read as a rotating cross-domain system map instead of a single healthcare animation.
- Replace the evidence masonry grid with a sequential evidence dossier: one large active preview, a vertical list of animated cards, and a larger modal.
- Increase section-heading scale and add light scroll-reveal transitions through shared CSS so the page bifurcations feel intentional.
- Rework `/professional-systems/` as a system atlas: outcomes first, then row-by-row architecture patterns with problem, stack, outcome, and sanitized flow.
- Use one concise enterprise safety note. Do not repeat defensive privacy copy on every card.
- Add a `Request Resume` hero CTA using the direct email extracted from current local resume PDFs.

## Validation Plan

- Run `npm run build`.
- Run `npm audit --audit-level=moderate`.
- Start local preview and test `/` plus `/professional-systems/` across desktop, tablet, and mobile widths.
- Verify hero CTA href, artifact-selector behavior, artifact modal size, broken images, console errors, and horizontal overflow.
- Commit, push to `main`, wait for GitHub Pages deployment, then verify live homepage and `/professional-systems/` content.
