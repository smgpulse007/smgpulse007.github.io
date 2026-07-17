# Portfolio V2.3 live comparison

Status: automated comparison extended through live V2.3 staging; owner qualitative acceptance remains pending
Review date: 2026-07-17

This document records the manual browser observations made against production, V2.1 staging, V2.2 staging, and the final local V2.3 release candidate, plus the completed automated review of the isolated V2.3 staging origin. Automated DOM inspection and screenshots support the remote results; owner qualitative acceptance remains separate.

## Reviewed surfaces

| Version | URL | Review state |
| --- | --- | --- |
| Production / V2.0 | `https://shaileshdudala.com/` | Manually reviewed on desktop and 390×844 mobile |
| V2.1 staging | `https://aquamarine-mole-482437.hostingersite.com/` | Manually reviewed on desktop and mobile |
| V2.2 staging | `https://royalblue-wildcat-803695.hostingersite.com/` | Manually reviewed on desktop and 390×844 mobile; Home, Lab, Research, and interactions inspected |
| V2.3 local | Final local release candidate | Manually reviewed on desktop and 390×844 mobile; primary pages, cases, Lab, Research, navigation, motion, and decision surfaces inspected |
| V2.3 staging | `https://lightgrey-bat-510306.hostingersite.com/` | Deployed; 147/147 functional, 57/57 axe, 30/30 live-mode, 420/420 visual, and 5/5 capture checks passed |

## Production

Observed strengths:

- professional structure is immediately understandable;
- conventional navigation makes the site easy to orient in;
- mobile menu opens with an opaque, usable overlay;
- the work reads as a career portfolio rather than an experiment index.

Observed weaknesses:

- visual language is conventional and less memorable;
- the hero does not express the full scientific-to-agentic arc;
- case-study and project interactions are less distinctive;
- the portfolio communicates competence more readily than a unique operating perspective.

V2.3 decision: keep the literal professional clarity and mobile reliability, then add a more distinctive material, spatial, and editorial system.

## V2.1 staging

Observed strengths:

- strongest professional hierarchy of the three reviewed live versions;
- first read is recruiter-friendly;
- the 7K and 20% claims use the correct scoped language;
- case-study order and supporting evidence are clearer than V2.2.

Observed weaknesses:

- visual direction remains relatively conventional;
- memorable interaction and material depth are limited;
- career breadth is described more than experienced;
- Lab and Research feel less like exploratory professional tools.

V2.3 decision: use V2.1 as the professional-narrative floor, not the visual ceiling.

## V2.2 staging

Observed strengths:

- strongest desktop craft and visual ambition;
- the agent trace is a meaningful process interaction;
- the Lab filter works and can reduce the visible system set from seven to one;
- Meta Harness is inspectable as a project;
- the Research surface is richer and more ambitious than production;
- the desktop composition has strong authored detail.

Observed interaction checks:

- Agent trace Play and Pause were exercised; the active step advanced;
- Lab filtering was exercised;
- Home, Lab, and Research were scrolled and inspected;
- the mobile menu was opened at 390×844.

Observed weaknesses:

- the first fold is visually intriguing but professionally vague;
- Work and Experience are not strong primary anchors;
- open source, context engineering, harness engineering, and the “current frontier” dominate too early;
- the V2.2 story under-represents predictive ML, product leadership, hospital/provider analytics, biomedical work, and scientific computing;
- a false `7K documents/day` claim appeared in the homepage system;
- the 20% measure-closure outcome was expressed too vaguely;
- at 390×844, opening the mobile menu produced a transparent overlay with oversized duplicate links across the hero, making the state materially broken;
- repeated dark panels and observatory language reduce differentiation between professional work, experiments, and research.

V2.3 decision: preserve the ambition, agent-process clarity, Lab interactivity, and research depth while replacing the governing narrative, palette, typography, card system, and mobile-menu behavior.

## Comparative scorecard

These are qualitative design judgments from the live review, not benchmark measurements.

| Dimension | Production | V2.1 | V2.2 | V2.3 staging |
| --- | --- | --- | --- | --- |
| First-glance role clarity | Strong | Strongest | Weak | Strongest plus distinctive |
| Professional work dominance | Strong | Strong | Weak/medium | Strong |
| Career breadth | Medium | Strong | Weak/medium | Strong and interactive |
| Visual distinction | Medium | Medium | Strong | Strong with restraint |
| Meaningful interaction | Low | Medium | Strong | Strong and case-specific |
| Project maturity clarity | Medium | Medium | Medium | Strong |
| Research balance | Medium | Medium | Context/harness-heavy | Foundation/applied/frontier balance |
| Mobile menu | Working | Working | Broken in reviewed state | Opaque, bounded, and remotely verified |

## Changes traced into V2.3 source

- exact role and broad support line are defined in `src/data/v23.ts`;
- Work and Experience lead the primary navigation in `src/components/Header.astro`;
- Home is reordered around professional proof in `src/pages/index.astro`;
- four flagship cases and supporting engagements are defined in `src/data/v23.ts`;
- predictive-healthcare depth is restored in `src/data/v23Work.ts`;
- exact career chronology appears in `src/pages/experience.astro`;
- project status and limitations appear in `src/pages/lab/index.astro`;
- the research balance and authored-publication split appear in `src/pages/research/index.astro`;
- V2.3 mobile navigation uses an opaque, viewport-bounded overlay in `src/styles/v23/main.css`;
- the two factual corrections are enforced by the typed content and claim validators.

## V2.3 live-review gate

The deployed V2.3 origin completed the automated remote gate across functional, accessibility, constrained-mode, responsive-visual, and capture suites. The reviewed scope included:

- all primary navigation and the mobile menu;
- homepage scroll, hover, focus, ambient motion, career field, and claims run;
- all four flagship cases and their controls;
- Project Lab search, selection, links, media, and maturity labels;
- Research tabs, keyboard behavior, filters, source links, and authored publications;
- Experience, About, recognition, contact, résumé route, and PDF;
- no-JavaScript, reduced-motion, no-WebGL, forced-colors, and narrow layouts;
- desktop, tablet, mobile, and ultrawide screenshots;
- remote noindex, canonical, robots, build, and asset behavior.

Remote automated completion establishes review readiness; it does not itself constitute owner acceptance or production authorization.
