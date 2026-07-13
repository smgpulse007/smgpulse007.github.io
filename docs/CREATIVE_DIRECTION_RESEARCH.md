# Creative Direction Research Ledger

Status: final staging design evidence
Accessed: 2026-07-13

## Selected direction

Portfolio V2 uses **editorial systems engineering**: premium editorial hierarchy, the legibility of technical documentation, and operational artifacts that explain how an AI system moves from uncertain input to accountable action. The implementation borrows principles, not layouts, components, branding, or source code.

## Live reference ledger

| Reference | Principle worth borrowing | Why it fits this portfolio | What is intentionally not copied | Implementation hypothesis and observed result |
| --- | --- | --- | --- | --- |
| [Linear — A calmer interface for a product in motion](https://linear.app/now/behind-the-latest-design-refresh) | Attention must be earned; page structure should be felt without every boundary competing visually. | The portfolio carries dense evidence, architecture, metrics, and qualifications. Strong hierarchy lets the lead narrative remain calm while technical depth stays available. | Linear's application chrome, navigation model, iconography, palette, and component forms. | Dim supporting metadata, reserve contrast for the current task, and use fine rules instead of a grid of equally loud cards. The final selected-work stack and evidence surfaces use this hierarchy. |
| [Vercel — Design Engineer Principles](https://vercel.com/design/engineer) | Obsess over usefulness, own the whole experience, understand constraints, and make complexity available rather than mandatory. | Recruiters need a fast scan while technical reviewers need architecture, evaluation, and limitations. Both should use the same product without receiving the same density at once. | Vercel's brand language, black-and-white marketing layouts, Geist-specific visual signatures, and interaction patterns. | Keep the first fold decisive, make every interaction explanatory, and progressively disclose proof. The System Flight Recorder, evidence mode, and long-form case studies implement that split. |
| [IBM Carbon — Motion](https://carbondesignsystem.com/elements/motion/overview/) | Use productive motion for state and reserve expressive motion for rare, meaningful moments; always provide a static or reduced-motion alternative. | The signature interaction represents validation and reviewer state, so motion should clarify causality rather than decorate the page. | Carbon components, product styling, exact choreography, and motion tokens as a wholesale visual system. | Animate only scenario/state transitions, keep the server-rendered final state complete, and suppress nonessential motion under `prefers-reduced-motion`. Live adverse-mode tests confirmed the static and reduced-motion paths. |
| [GitHub Primer — Getting started](https://primer.style/product/getting-started/) and [text resizing guidance](https://primer.style/accessibility/design-guidance/text-resize-and-spacing/) | Cohesion, accessibility, responsiveness, and familiar control behavior should be designed in from the start; 200% resizing must preserve content and controls. | The visual identity can be distinctive while navigation, focus, disclosure, and reading behavior stay predictable and inclusive. | GitHub's product shell, control styling, density, colors, and repository-specific interaction metaphors. | Use authored mobile composition, semantic controls, visible focus, fluid type, and layouts that reflow rather than clip. Ten-viewport visual QA and 200% reflow tests passed. |

## Five-pass design outcome

The research led to one coherent system rather than a collage of references:

- the hero and selected work earn the strongest contrast;
- the System Flight Recorder explains the engineering throughline with a complete static fallback;
- evidence mode changes emphasis without hiding essential content;
- case studies use distinct, domain-specific artifacts instead of repeated cards;
- motion communicates state and respects reduced-motion preferences;
- mobile, tablet, desktop, and ultrawide layouts are individually composed;
- borders, labels, texture, and color remain subordinate to content.

The weighted release rubric and screenshot evidence are recorded in `QA_REPORT.md`.
