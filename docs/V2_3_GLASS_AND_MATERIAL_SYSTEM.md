# Portfolio V2.3 glass and material system

Status: implemented material contract  
Primary source: `src/styles/v23/main.css`  
Recorded: 2026-07-17

## Material objective

V2.3 uses glass to identify navigation, controls, instruments, and temporary readouts. It does not make every body surface transparent. Long-form case copy, project ledgers, experience chronology, and research records use stable opaque or paper-like surfaces so the information remains readable independently of the background.

The system is sci-fi-inspired through depth, fields, precise lines, and instrument behavior—not through neon cyberpunk, game HUDs, particles, terminals, crypto styling, or a generic neural mesh.

## Core tokens

| Token | Value | Role |
| --- | --- | --- |
| `--v23-bg` | `#080a10` | Primary night background |
| `--v23-bg-2` | `#0c1018` | Raised section background |
| `--v23-panel` | `rgba(16, 21, 30, .82)` | General translucent panel |
| `--v23-panel-solid` | `#111720` | Solid fallback and stable instrument body |
| `--v23-ink` | `#f1f3ef` | Primary text |
| `--v23-muted` | `#a7b0ae` | Secondary readable text |
| `--v23-dim` | `#78817f` | Tertiary metadata |
| `--v23-line` | `rgba(223, 234, 229, .15)` | Quiet structure |
| `--v23-line-strong` | `rgba(223, 234, 229, .27)` | Interactive and higher-emphasis structure |
| `--v23-mint` | `#7ce5c0` | Primary signal and action |
| `--v23-cyan` | `#82c9ff` | Data, path, and informational state |
| `--v23-violet` | `#d6a9ff` | Agent/current-system accent |
| `--v23-amber` | `#ffc879` | Authority, caution, and human-decision boundary |
| `--v23-coral` | `#ff917d` | Exception and instrumentation accent |
| `--v23-radius` | `18px` | Instrument radius |

Typography uses a system sans stack for decisive display and interface copy, Georgia for authored editorial passages, and a system monospace stack for state, provenance, and small instrument labels. It does not preserve the V2.2 typography system out of continuity alone.

## Glass roles

| Token | Value | Intended role |
| --- | --- | --- |
| `--v23-glass-navigation` | `rgba(8, 12, 17, .76)` | Sticky navigation and orientation |
| `--v23-glass-instrument` | `rgba(15, 21, 29, .74)` | Claims run, Project Lab workbench, and evidence instruments |
| `--v23-glass-overlay` | `rgba(7, 10, 15, .91)` | High-opacity overlay material when content must remain dominant |
| `--v23-glass-ambient` | `rgba(125, 194, 238, .08)` | Non-reading ambient depth only |
| `--v23-panel-solid` | `#111720` | Reduced-transparency, reduced-tier, and content fallback |

Defined tokens are a material vocabulary, not a requirement that every token appear on every page.

## Material hierarchy

### 1. Navigation glass

The desktop header uses:

- `--v23-glass-navigation`;
- a one-pixel quiet border;
- `blur(22px) saturate(1.25)` in the full material state;
- a restrained signal line below the header;
- opaque text and conventional links.

The standard tier reduces this to `blur(12px) saturate(1.1)`. The reduced tier and reduced-transparency preference use a solid `#090d13` surface.

### 2. Instrument glass

Instrument material is reserved for surfaces where state changes in place:

- homepage hero instrument — gradient glass, 26px blur, modest saturation, inner highlight, deep shadow;
- claims run — `--v23-glass-instrument`, 22px blur;
- Project Lab workbench — `--v23-glass-instrument`, 22px blur;
- case cover — instrument glass with 18px blur;
- research hero readout and filter/control surfaces — high-opacity raised panels with restrained translucency.

The standard tier reduces primary instrument blur to 12px. The reduced tier replaces these surfaces with `--v23-panel-solid`.

### 3. Opaque editorial surfaces

Professional case copy, impact records, role chronology, project ledgers, and the Research atlas do not sit on fully transparent cards. They use dark opaque sections, paper-like research panels, borders, and whitespace so meaning is independent of the ambient layer.

### 4. Ambient depth

Grid lines, radial gradients, field orbits, and low-opacity halos establish depth behind content. They are non-semantic and pointer-inert. The reduced tier removes the main ambient layer entirely.

## Surface-specific decisions

| Surface | Material | Why |
| --- | --- | --- |
| Header | Navigation glass | Keeps page context present while content scrolls |
| Hero copy | No glass body card | Identity and proposition must read directly |
| Hero instrument | Deep instrument glass | Represents current system state without hiding copy |
| Career field | Opaque scientific field | Map labels need stable contrast over a grid |
| Claims run | Instrument glass with opaque child readouts | Selection and state are the interaction |
| Professional cases | Editorial rows and small proof instruments | Avoid a wall of interchangeable cards |
| Project Lab | Three-pane workbench glass | Makes selection, system, proof, and limit feel connected |
| Research | Night hero plus paper/dark atlas surfaces | Separates reading modes and evidence maturity |
| Mobile navigation | Opaque `#0b1017` menu with dark page veil | Prevents the transparent duplicate-link failure observed in V2.2 |

## Research material family

Research uses a related but distinct editorial palette:

| Token | Value |
| --- | --- |
| `--research-night` | `#071114` |
| `--research-night-raised` | `#0c1a1f` |
| `--research-night-soft` | `#102229` |
| `--research-paper` | `#efede5` |
| `--research-paper-soft` | `#e5e1d6` |
| `--research-ink` | `#132126` |
| `--research-mint` | `#c8f6a4` |
| `--research-cyan` | `#91e2df` |
| `--research-coral` | `#ff9a78` |
| `--research-amber` | `#f2c776` |

The paper/night alternation gives source reading a distinct editorial rhythm without returning to V2.2’s lime observatory language.

## Fallback ladder

| Condition | Material response | Meaning response |
| --- | --- | --- |
| Enhanced tier | Full intended blur, ambient motion, and material depth | Complete semantic HTML/SVG remains present |
| Standard tier | 12px primary blur; selected continuous ambient motion removed | Same copy, links, state labels, and controls |
| Reduced tier | No backdrop blur; solid instrument panels; ambient layer hidden | Career SVG becomes a text-link grid; all core content remains |
| `prefers-reduced-transparency` | Solid header and primary instrument panels | No information change |
| `prefers-reduced-motion` | Animation and transitions effectively removed; blur removed from primary instruments | No information change; scroll behavior becomes automatic |
| Forced colors | Canvas/CanvasText surfaces and explicit borders; glass removed | Native high-contrast text and controls carry the experience |
| No JavaScript | Root remains `data-visual-tier="reduced"` | Safe static tier is the default contract |
| No WebGL | Enhanced classifier falls back to standard | Current main build has no GPU-rendered content to lose |
| Print | Navigation, footer, staging banner, ambient motion, and controls hidden; white page/black text | Long-form content and links remain |

## Mobile material behavior

- the shell tightens independently rather than shrinking desktop glass;
- the header uses reduced blur;
- opening the menu adds an `rgba(3,6,9,.82)` page veil with 10px blur;
- the menu body itself is solid `#0b1017`, scroll-bounded to the viewport, and separated by strong borders;
- wide instruments reflow or become horizontally inspectable without placing text over animated surfaces;
- fixed motion controls respect safe-area insets.

## Contrast and legibility rules

- body copy never depends on a low-opacity colored glow;
- large ambient geometry is decorative and cannot be the only boundary;
- interactive state uses text, border, position, or shape in addition to color;
- proof and limitations remain visible before hover;
- text is not placed directly over moving imagery;
- glass controls use high-opacity fills and quiet backgrounds;
- focus-visible treatment uses a three-pixel amber outline where defined;
- forced-color rules remove custom material styling rather than fighting the user palette.

## Anti-patterns rejected

- one transparent card for every section;
- blur as the only sign of hierarchy;
- light gray text over uncontrolled moving gradients;
- nested glass panels with unclear ownership;
- large transparent mobile menus;
- neon lime as the universal accent;
- particles, crypto grids, neural meshes, or terminal windows as identity shorthand;
- GPU rendering without explanatory value and a static equivalent.

## Validation boundary

This document records the implemented material tokens and fallbacks. It does not assert that final contrast, zoom, browser blur behavior, GPU compositing cost, or remote staging appearance has passed. The final accessibility, performance, and QA reports must contain actual measurements and screenshots across enhanced, standard, reduced, forced-colors, and mobile states.

