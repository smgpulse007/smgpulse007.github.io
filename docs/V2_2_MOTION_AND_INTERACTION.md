# Portfolio V2.2 motion and interaction

## Principle

Motion explains state; it does not decorate empty space. The static document remains complete without JavaScript.

## Implemented interactions

- **Observatory map:** semantic SVG links connect the six evolution stages.
- **Agent Trace:** previous, play/pause, and next controls update one of nine synthetic steps and `aria-current="step"`.
- **Meta Harness chamber:** static execution topology exposes work order, checkpoints, proof, and continuation.
- **Latent Lens:** checked-in model/output comparison; no network generation.
- **Research Atlas:** keyboard-accessible tabs switch constellation, timeline, and reading list; filters preserve source links.
- **Systems Lab:** search and stage filters update an `aria-live` count.
- **Mobile navigation:** native disclosure control; all primary routes remain ordinary links.

## Timing

- Small state transitions: 150–250 ms.
- Agent trace autoplay: 1,200 ms per step.
- Evidence recordings pause 600–1,200 ms at meaningful states so reviewers can inspect the result.

## Reduced motion and no-JavaScript

`prefers-reduced-motion: reduce` collapses animation and transition durations. The complete Agent Trace, system evidence, research records, and calls to action are server-rendered. JavaScript adds navigation between already-present states; it does not carry the only copy or proof.

## Review evidence

Four deterministic recordings live in `docs/videos/v2.2-review/`: homepage to current frontier, Meta Harness chamber, Research Atlas views, and mobile Observatory navigation.
