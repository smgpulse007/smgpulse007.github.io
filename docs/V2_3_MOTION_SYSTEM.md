# Portfolio V2.3 motion system

Status: implemented motion and tier contract  
Recorded: 2026-07-17  
Primary sources: `src/components/Layout.astro`, `src/styles/v23/main.css`, V2.3 components and concept styles

## Motion objective

Motion in V2.3 has four jobs:

1. establish quiet spatial continuity;
2. show state changing inside a system;
3. guide attention between evidence layers;
4. confirm user input.

It must not carry exclusive meaning, force scroll timing, play essential content automatically, or prevent a user from pausing decorative motion.

## Vocabulary

| Motion role | Meaning | V2.3 example |
| --- | --- | --- |
| Drift | Slow ambient continuity | Hero field orbits |
| Signal flow | A path continues through stages | Career-field dashed path |
| Transform | One state becomes another | Hero instrument shape and selected project readout |
| Step | A discrete process advances | Claims run previous/next and timeline buttons |
| Checkpoint | Motion pauses while state remains visible | Global decorative-motion control and claims Play/Pause |
| Focus response | Input is acknowledged | Button lift, node scale, selected tab or project state |
| Authority state | Human or deterministic boundary is emphasized | Amber authority labels and reviewer step |

## Visual tiers

The root HTML starts in the safe state:

```html
<html data-visual-tier="reduced" data-motion-paused="false">
```

If JavaScript does not run, the document stays reduced/static.

### Reduced

Selected when:

- `prefers-reduced-motion: reduce` is active;
- `navigator.connection.saveData` is true;
- effective connection type is `slow-2g` or `2g`; or
- JavaScript does not execute, leaving the default root state.

Behavior:

- all CSS animation and transition are disabled;
- the main ambient field is hidden;
- glass blur is removed from primary instruments;
- the career SVG is replaced by an ordered text-link grid;
- smooth scrolling is disabled;
- all identity, claims, project evidence, research records, and links remain.

### Standard

Selected when reduced conditions are false but the enhanced capability gate is not met.

Behavior:

- essential state interactions remain available;
- ambient hero orbits and the About monogram do not animate;
- primary glass blur is limited to 12px;
- career signal and user-triggered process changes may remain;
- the global decorative-motion control is available.

### Enhanced

Selected only when all of the following are true:

- at least eight logical processor cores;
- at least 8 GB reported device memory;
- viewport at least 1024px wide;
- a fine pointer is available;
- reduced transparency is not requested;
- WebGL2 capability can be created.

Behavior:

- full intended ambient CSS/SVG motion and material depth are enabled;
- the global decorative-motion control is available;
- semantic content remains identical to standard and reduced tiers.

WebGL2 is used only as a capability signal in the current implementation. The main V2.3 experience does not render a WebGL scene, so WebGL failure falls back to standard without content loss.

## User motion control

A fixed native button appears in standard and enhanced tiers:

- initial label: `Pause motion`;
- paused label: `Resume motion`;
- `aria-pressed` reflects the state;
- accessible label specifies `decorative motion`;
- preference is stored under `portfolio:motion-paused` when local storage is available;
- storage failure leaves the preference active for the current page;
- pausing sets CSS `animation-play-state: paused` globally.

The control pauses decorative CSS animations. User-triggered Claims playback has its own explicit Play/Pause control and does not start automatically.

## Implemented timing

| Element | Timing | Purpose |
| --- | --- | --- |
| Buttons | 240ms ease | Short hover/focus feedback |
| Hero ambient orbit | 18s linear | Slow spatial continuity |
| Secondary hero orbit | 22s reverse linear | Counter-motion and depth |
| Hero instrument shapes | 12s and 9s reverse | Quiet changing system state |
| Career signal | 20s linear | Continuity across stages |
| Career node response | 240ms ease | Hover/focus confirmation |
| About monogram | 14s linear | Slow scientific-origin motif |
| Research controls | 160–180ms ease | Selection and hover feedback |
| Claims playback | 1.5s per step | User-started guided explanation |
| Signal Field concept path | 18s linear | Direction-specific spatial flow |
| Signal Field concept pulse | 3.5s ease-in-out | Direction-specific current node |
| Living Career Atlas route | 18s linear | Direction-specific career continuity |
| Living Career Atlas pulse | 3.4s ease-in-out | Direction-specific frontier emphasis |
| Living Career Atlas orbit | 20s linear | Direction-specific authority field |

These are source timings, not measured frame-rate results.

## Signature interactions

### Career intelligence field

The SVG shows five labeled stages. Motion advances a dashed signal through the field; hover/focus scales the selected node. Each node is a real link to Experience. In reduced tier, the SVG is replaced by a text-link grid containing the same stages and destinations.

Meaning without motion: stage labels, periods, order, links, current-frontier note, and exact Experience chronology.

### Production claims run

The claims run contains eight static steps:

1. packet arrives;
2. intent and document types;
3. evidence assembled;
4. tools execute;
5. contract validated;
6. exception routed;
7. human authority;
8. trace closes.

Previous, Next, direct-step, and Play/Pause controls update the adjacent layer, label, detail, and state code. Playback advances every 1.5 seconds only after the user chooses Play. It stops when the document becomes hidden.

Meaning without JavaScript: the first readout, all eight labeled step buttons, and the authority-boundary explanation remain in the document.

### Project Lab workbench

Project selection updates category, title, status, proof, limit, route, and repository link. Search filters the visible project controls. Motion is limited to short selection/focus feedback; the interaction’s value is information adjacency, not animation.

Meaning without JavaScript: every project control is visible with category, title, and status; the initial inspector and repository links remain.

### Research atlas

JavaScript progressively converts the full stacked document into keyboard-operable tabs and filters. Arrow keys, Home, and End move among tabs. Project-path jumps select the relevant evidence view and use smooth scrolling only when reduced motion is not requested.

Meaning without JavaScript: all four research views, all 35 external records, both authored publications, and every source link remain visible in sequence.

## Motion safety

- no scroll hijacking;
- no essential autoplay;
- no background video required for meaning;
- no flashing or rapid color cycling;
- no parallax attached to reading text;
- continuous motion is slow and decorative;
- user-triggered process playback has an explicit pause state;
- page visibility stops the claims timer;
- reduced-motion media queries remove motion from main, Research, prototypes, and Living Career Atlas;
- forced-color mode removes decorative material assumptions;
- print removes ambient motion and controls.

## No-JavaScript and no-WebGL behavior

No JavaScript:

- root remains reduced;
- career uses the ordered fallback;
- all page copy, cases, claims, project labels, research sources, and links remain;
- interactive filtering and playback are unavailable, but not required for comprehension.

No WebGL:

- enhanced classification resolves to standard;
- the current CSS/SVG visuals continue;
- no canvas error message is needed because no main content depends on a GPU scene.

## Mobile motion behavior

- ambient scale and composition are reduced through responsive CSS;
- wide instruments reflow before any animation is considered;
- the mobile menu is opaque and is not animated over unreadable hero content;
- the fixed pause control respects bottom and right safe-area insets;
- user-triggered state changes remain native-button interactions;
- reduced motion disables smooth scrolling and continuous animation at any viewport.

## Review gates

This document describes source behavior. It does not claim the following have passed:

- sustained frame-rate or compositing measurements;
- CPU-throttled behavior;
- slow-network tier switching;
- automatic response to a live connection change;
- cross-browser reduced-transparency support;
- global motion pause persistence across all navigation paths;
- keyboard review of every control;
- vestibular review;
- remote staging playback and visibility handling.

Those results must be captured in the performance, accessibility, and QA reports from actual test runs.

