# Portfolio V2.1 â€” Experience, Evidence, and Identity Revamp

## Autonomous implementation specification for Codex

**Project:** Shailesh Dudala Portfolio  
**Canonical site:** `https://shaileshdudala.com`  
**Static mirror:** `https://smgpulse007.github.io`  
**Source repository:** `smgpulse007/smgpulse007.github.io`  
**Current production release:** `portfolio-v2.0.0` / `1ae06ad45315baffaef6d1564aae0da4d4051a53`  
**Recommended implementation branch:** `codex/portfolio-v2.1-experience-evidence`  
**Status:** Execute as a focused product evolution, not a clean-sheet rewrite.

---

# 1. Role and mandate

Act as the autonomous principal creative director, senior product designer, interaction designer, UX writer, information architect, technical storyteller, Astro/front-end engineer, accessibility specialist, performance engineer, release engineer, and adversarial QA reviewer for Portfolio V2.1.

Do not deliver a critique, mockup, design proposal, or incomplete component experiment.

Inspect the current production site, GitHub Pages mirror, portfolio repository, relevant public repositories, project demos, checked-in media, release documentation, current public rÃ©sumÃ©, and historical routes. Then implement the revamp end to end on a branch, deploy it to isolated staging, inspect the live result, iterate until it meets the acceptance criteria, and prepare a production-ready pull request.

Use professional judgment without asking routine questions. Document assumptions. Ask only when a genuinely unknowable fact, missing private asset, external credential, or destructive production action makes continuation impossible.

The model has permission to be bold with:

- visual direction;
- layout;
- typography;
- interaction design;
- motion;
- page composition;
- content hierarchy;
- public-safe copy;
- public repository asset integration;
- component architecture;
- case-study structure;
- static interactive demonstrations.

Be conservative with:

- factual claims;
- confidential work;
- team attribution;
- personal information;
- production infrastructure;
- domains, DNS, email, and billing;
- third-party media rights.

The finished product should feel less like a portfolio that explains how carefully it was constructed and more like a body of work that makes Shaileshâ€™s judgment self-evident.

---

# 2. Starting point

Portfolio V2.0 is a strong technical foundation.

Preserve unless a measured improvement justifies changing them:

- one repository and one content/design system;
- Astro static output;
- Hostinger as canonical production;
- GitHub Pages as the same-SHA, no-index mirror;
- typed evidence and claim governance;
- public/private project classification;
- server-rendered impact values;
- privacy-cleared public rÃ©sumÃ© strategy;
- target-specific canonical and robots behavior;
- Playwright, axe, content, target, link, privacy, screenshot, and deployment tests;
- release identity through `/build.json`;
- progressive enhancement and no-JavaScript fallbacks;
- production-safe static hosting.

The current implementation is not a failure. It is the baseline.

The goal of V2.1 is to close the remaining gap between:

> a highly competent, governed engineering portfolio

and:

> a visually unmistakable, personally authored body of work that makes senior technical judgment memorable.

Do not throw away the release engineering to chase spectacle.

---

# 3. Core findings that V2.1 must resolve

## 3.1 Residual legacy-site risk

Historical Hostinger Website Builder routes have remained publicly reachable on the canonical domain, including old branding, outdated copy, and personal contact information.

V2.1 must inventory and neutralize every residual legacy route and file.

Known high-risk examples include:

- `/contact`
- `/my-ai-app-library`

Search for additional legacy routes through:

- current and historical sitemaps;
- production crawl;
- search-engine results;
- Wayback-style public indexes when available;
- links in the old Builder duplicate;
- Hostinger document-root inventory;
- source repository history;
- hard-coded old paths;
- pages containing old copy.

Known legacy phrases and signals include:

- `Shailesh | Data Scientist`
- `Legendary Data Scientist`
- `My Highlghts`
- `competitive coder`
- `Suffering from skill issues`
- old phone-number patterns;
- old Los Angeles location copy;
- stock-image Builder markup;
- 2024 copyright;
- old AI App Library navigation.

No production release is acceptable while any legacy route serves the old brand or personal information.

## 3.2 Visual grammar is too repetitive

The current site relies heavily on one visual formula:

- black field;
- thin rule;
- small green monospace label;
- terminal-like code block;
- synthetic JSON/YAML;
- state list.

This creates consistency, but it also makes intellectually different projects feel like variations of the same component.

V2.1 must retain a coherent brand while giving each flagship story a distinct visual metaphor.

## 3.3 The signature interaction explains state but does not yet create a memorable causal experience

The current System Flight Recorder is conceptually sound but visually behaves like a compact developer-tool panel.

V2.1 must show transformation:

> messy input â†’ structured interpretation â†’ validation failure â†’ human decision â†’ traceable action

The visitor should see what changed and why, not merely switch among labeled terminal states.

## 3.4 The visible evidence language is overexposed

Terms such as the following are useful inside the content model but sound defensive in the normal reading experience:

- `resume-supported`
- `public-source`
- `private-evidence`
- `scoped by context`
- `public-safe`
- `evidence stays attached`
- `with the labels left on`

The governance system should remain rigorous. Its internal vocabulary should not dominate the product voice.

## 3.5 The case studies are strong prose but visually under-proven

The current professional case studies explain architecture, failure, evaluation, human review, and outcomes. They need more visual evidence:

- synthetic workflow artifacts;
- state transitions;
- diagrams;
- evaluation matrices;
- reviewer surfaces;
- trace views;
- before/after paths;
- data-boundary maps.

The goal is not decoration. The visual should carry technical meaning that the reader would otherwise have to infer from paragraphs.

## 3.6 Letâ€™s Talk Doc is responsibly attributed but too caveat-heavy for a flagship

The current Letâ€™s Talk Doc page is trustworthy. Its public evidence does not isolate Shaileshâ€™s exact component ownership strongly enough to support a primary individual case study.

Move it from the main four-case-study sequence into a compact Recognition & Collaboration treatment until approved media and a contribution map are available.

Do not remove the page abruptly. Preserve inbound links with a redirect or a short compatibility page.

## 3.7 The 0-to-1 healthcare analytics/product story is underrepresented

The site currently underplays one of the strongest senior-leadership stories:

- building and scaling a predictive analytics platform;
- adoption across nine healthcare programs;
- $500K in new revenue supported;
- approximately $3M in client performance-based payouts;
- risk models, Health Index, MLOps, Power BI, and care-manager workflows;
- 100+ care managers.

Create a new flagship case study around this work.

## 3.8 The strongest public repository is underused

`smgpulse007/llm-steering` contains:

- a public learning site;
- a Vite/React workbench;
- FastAPI;
- prompt-pair editing;
- model registry;
- pre- and post-activation hooks;
- baseline, prompt-only, and steered comparison;
- diff views;
- sweep controls;
- checked-in result artifacts;
- diagrams;
- UI GIFs;
- tests;
- release documentation;
- research notes;
- limitations.

The portfolio currently reduces this to prose and a synthetic manifest.

V2.1 must use the real public assets and checked-in result data.

## 3.9 The About page lacks a human origin story

The current About page states principles but reveals little about why Shailesh came to work this way.

V2.1 should connect:

- biomedical informatics;
- clinical and payer analytics;
- product delivery;
- local GenAI;
- agentic insurance workflows;

into a concise, personal professional narrative.

Do not invent hobbies, beliefs, biography, or personal anecdotes.

## 3.10 The public rÃ©sumÃ© feels mechanically paginated

The current public rÃ©sumÃ© is safe and ATS-readable, but its second page is visually underused.

Create one intentional public rÃ©sumÃ©:

- preferably a strong one-page edition;
- otherwise a deliberately full two-page edition.

Keep the detailed job-application rÃ©sumÃ© separate and private.

## 3.11 The GitHub ecosystem does not fully support the site narrative

Current gaps include:

- profile website field pointing to the mirror instead of the canonical site;
- AlphaQuant leading the pinned repositories;
- no concise visible GitHub profile README;
- too many public repositories without enough curation;
- portfolio case studies not using the best repository media.

V2.1 should align the site and GitHub presence without rewriting unrelated project logic.

---

# 4. Product strategy

## 4.1 Primary identity

The primary identity remains:

> **Senior Applied AI Engineer**

Primary domain:

> **Healthcare and insurance**

Primary differentiation:

> **Designing the operational layer between model output and accountable action**

Supporting capabilities:

- agentic workflows;
- document intelligence;
- human-in-the-loop systems;
- HL7/FHIR interoperability;
- predictive ML;
- MLOps and LLMOps;
- local/private AI;
- evaluation and observability.

Breadth remains visible, but only after the primary identity is established.

## 4.2 Unifying narrative

Use one narrative throughout the product:

> Raw inputs are messy. Model output is uncertain. The engineering work is to create a contract, test it, route uncertainty, preserve human authority, and measure what happens in operation.

The portfolio should repeatedly show that transformation without repeatedly explaining the philosophy.

## 4.3 New creative direction

Evolve the current â€œeditorial systems engineeringâ€ direction into:

# **Operational Editorial â€” Evidence in Motion**

The site should combine:

- editorial confidence;
- systems thinking;
- operational artifacts;
- visual causality;
- regulated-industry restraint;
- human ownership;
- product-level polish.

The central visual idea is a **decision thread**: a quiet line, sequence, or trace that shows how an input moves through interpretation, control, review, and outcome.

Do not turn the thread into a decorative circuit pattern. It must help explain the content.

## 4.4 Experience principles

1. **Concrete before abstract**  
   Show the packet, field, failure, reviewer reason, queue, comparison, or diagram before explaining the principle.

2. **Causality before decoration**  
   Animation should show why a state changed.

3. **One dominant idea per screen**  
   Do not place metrics, code, diagrams, badges, and long copy at equal visual volume.

4. **Different work deserves different visual treatment**  
   Claims, local RAG, product leadership, and activation steering should not share one terminal-card template.

5. **Trust through specificity, not defensive labeling**  
   Use natural language by default. Keep full provenance in a source drawer or final section.

6. **Human presence without forced personality branding**  
   Add professional origin and point of view. Do not manufacture quirks.

7. **Static-first, interaction-rich**  
   Rich UI is permitted. Core meaning must remain in semantic HTML.

---

# 5. Information architecture

## 5.1 Primary navigation

Use:

- Work
- Experience
- Lab
- About
- RÃ©sumÃ©
- Contact

Keep GitHub and LinkedIn as supporting links.

Consider rendering RÃ©sumÃ© as a compact outlined control and Contact as the primary header action.

Do not turn the header into an application dashboard.

## 5.2 Canonical routes

Maintain or create:

- `/`
- `/work/`
- `/work/claims-intelligence/`
- `/work/on-prem-rag-ocr/`
- `/work/healthcare-analytics-platform/`
- `/work/llm-steering-lab/`
- `/recognition/`
- `/lab/`
- `/lab/[slug]/`
- `/experience/`
- `/about/`
- `/resume/`
- `/contact/`
- `/portfolio.json`
- `/llms.txt`
- `/build.json`
- custom 404

## 5.3 Route transition plan

### Letâ€™s Talk Doc

Preferred:

- move the full team-recognition treatment to `/recognition/#lets-talk-doc`;
- make `/work/lets-talk-doc/` a permanent redirect when Hostinger routing supports it;
- otherwise serve a short, branded, no-index compatibility page with a canonical to `/recognition/` and an immediate accessible link.

### Legacy routes

At minimum:

- `/contact` â†’ `/#contact` or canonical `/contact/`
- `/my-ai-app-library` â†’ `/lab/`

Use HTTP 301/308 where possible.

If static compatibility pages are required:

- set canonical to the new destination;
- set `noindex,follow`;
- show a visible link;
- use a short client redirect only as progressive enhancement;
- do not preserve old copy.

## 5.4 Case-study reading levels

Every flagship case study must support two reading depths.

### 90-second view

Show:

- outcome;
- context;
- Shaileshâ€™s ownership;
- the system diagram;
- the decision that mattered;
- result;
- links/evidence.

### Technical deep dive

Show:

- failure modes;
- data/control contracts;
- evaluation;
- reviewer authority;
- observability;
- limitations;
- next iteration.

Do not make mobile readers traverse every detail before understanding the result.

---

# 6. Homepage specification

Target a 15â€“25% reduction in total page length without losing meaningful content.

Use approximately eight visual chapters.

## 6.1 Header

### Desktop

- wordmark: `Shailesh Dudala`
- optional compact descriptor: `Applied AI systems`
- primary nav;
- public rÃ©sumÃ© link;
- contact action.

### Mobile

- wordmark;
- one menu control;
- no cramped row of six links;
- menu uses a full-height or substantial sheet with clear focus behavior;
- active page and contact remain obvious.

### Behavior

- sticky but quiet;
- reduce height after scroll if useful;
- no excessive blur;
- no custom cursor;
- visible focus;
- active route state;
- no JavaScript dependency for core navigation.

## 6.2 Hero

### Approved baseline copy

**Eyebrow**

> Senior Applied AI Engineer Â· Healthcare & Insurance

**Name**

> Shailesh Dudala

**Headline**

> I build AI systems that survive real operations.

Keep this headline unless a side-by-side visual/copy test produces a demonstrably stronger alternative.

**Body**

> Claim packets, clinical documents, and event streams rarely arrive ready for a model. I design the contracts, validation, human review, and observability that turn them into accountable workflows.

**Support line**

> Agentic workflows Â· Document intelligence Â· ML platforms

**Primary CTA**

> Explore the systems

**Secondary CTA**

> Public rÃ©sumÃ©

**Tertiary**

> GitHub Â· LinkedIn Â· Email

Do not use:

- â€œDownload rÃ©sumÃ©â€ without clarifying that it is the public edition;
- â€œRequest rÃ©sumÃ©â€;
- generic â€œLetâ€™s build the futureâ€ language;
- a technology list longer than the support line.

## 6.3 Signature hero experience

Visible title:

> **A packet becomes a decision**

Optional small descriptor:

> Trace replay Â· synthetic example

The default visual should show one claim-packet story.

### Visual composition

Use three connected regions:

1. **Input**
   - a small stack of synthetic document pages;
   - visible page identity;
   - mixed types;
   - one ambiguous or conflicting field.

2. **Interpretation and control**
   - page classification;
   - typed extracted fields;
   - one validation rule;
   - confidence as supporting information, not authority.

3. **Action**
   - reviewer route;
   - reason;
   - evidence pages;
   - final trace state.

### Default sequence

1. Packet received
2. Pages identified
3. Fields extracted
4. Dates conflict
5. Reviewer sees evidence
6. Trace closes

### Final state panel

> Review required  
> Reason: service dates conflict  
> Evidence: pages 4â€“5  
> Next: reviewer confirmation

### Interaction

- autoplay once only if motion preference permits;
- pause/play;
- step controls;
- keyboard arrow support;
- scenario selector;
- preserve current scenarios as secondary modes:
  - Claim packet
  - Clinical document
  - FHIR event
  - Local retrieval
- stop animation when offscreen;
- no continuous WebGL loop;
- no fake live data;
- no random output.

### Static fallback

Render the complete default sequence in HTML.

### Mobile

- do not squeeze a desktop console into 390px;
- use a vertical story:
  - page stack;
  - extracted field;
  - validation;
  - reviewer state;
- controls stay within thumb reach;
- no horizontal scroll.

### Naming

The internal component may remain `FlightRecorder`. The public label should explain the experience before using the metaphor.

## 6.4 Outcomes

Do not show internal provenance taxonomy in the default view.

Recommended four homepage outcomes:

- **7K** â€” case backlog cleared  
  Local review workflow

- **90%** â€” faster review  
  Measured document-review workstream

- **20%** â€” automated closure improvement  
  Quality-measure evidence workflow

- **â‰ˆ$3M** â€” client P4P impact supported  
  Multi-program healthcare analytics delivery

Place `$500K new revenue supported` inside the healthcare-platform case-study preview and Experience page.

Place `18% FWA waste reduction` in Experience, not the primary homepage strip.

Footer note:

> Selected outcomes from scoped engagements. Open a case study for context and source notes.

Do not render:

- `RÃ©sumÃ©-supported`
- `scoped by context`
- footnote-length qualifications directly below every value.

Use an accessible disclosure or claim detail drawer when needed.

## 6.5 Selected work

### Section heading

> The systems behind the outcomes.

### Deck

> Three professional stories and one public research build. Each one focuses on the decisions a model cannot own alone.

### Story 1 â€” Claims intelligence

**Eyebrow**

> 01 Â· Insurance claims Â· Professional work

**Title**

> From claim packet to auditable action

**Summary**

> I designed the orchestration, extraction contracts, validation gates, and reviewer paths that turn mixed document packets into traceable work.

**Outcome**

> â‰ˆ90% lower handling effort Â· â‰ˆ50% shorter time-to-payable in the measured workstream

**CTA**

> See the system

**Visual**

Packet anatomy and decision trace. Do not use a generic JSON card as the dominant visual.

### Story 2 â€” On-prem document intelligence

**Eyebrow**

> 02 Â· Healthcare payer Â· Professional work

**Title**

> Clear the backlog without moving the documents

**Summary**

> A local OCR, retrieval, and small-model workflow reduced search and transcription work while keeping source documents inside the data boundary.

**Outcome**

> 7K cases cleared Â· â‰ˆ90% lower review time

**CTA**

> See the review workflow

**Visual**

Privacy boundary plus source-to-evidence flow.

### Story 3 â€” Healthcare analytics platform

**Eyebrow**

> 03 Â· Healthcare product Â· Professional work

**Title**

> From risk models to a care-management operating system

**Summary**

> I helped build and scale a 0-to-1 analytics product across nine programsâ€”combining risk models, deployment pipelines, dashboards, and care-manager workflows.

**Outcome**

> $500K new revenue supported Â· â‰ˆ$3M client P4P impact

**CTA**

> See the platform story

**Visual**

Health Index composit…7721 tokens truncated…ro
    llm-steering/
      SteeringDemo.tsx
      HookDiagram.astro
      OutputDiff.astro
  evidence/
    SourceNotes.astro
    ClaimContext.astro
  media/
    EvidenceVideo.astro
    Lightbox.astro
```

Names may change. Responsibilities should not collapse into one generic `ArtifactCard`.

## 20.4 Project visual variants

Use typed variants:

```ts
type FlagshipVisual =
  | 'packet-trace'
  | 'local-boundary'
  | 'health-index'
  | 'activation-steering';
```

Do not map all variants to the same code panel.

---

# 21. Media and performance

## 21.1 Current evidence-media concern

Large checked-in GIFs are useful evidence but inefficient.

Convert:

- LLM Steering GIFs;
- AlphaQuant GIFs;
- terminal walkthrough GIFs;

to modern video where practical.

## 21.2 Budgets

Targets:

- Home initial JS: â‰¤ 90 KB gzip
- Noninteractive case-study initial JS: â‰¤ 45 KB gzip
- LCP: < 2.5s mobile
- CLS: < 0.05
- INP: < 200ms where measurable
- Lighthouse:
  - Performance 90+ mobile
  - Performance 95+ desktop
  - Accessibility 100 preferred; never below 95
  - Best Practices 95+
  - SEO 100 production
- no required asset above 1 MB without a documented reason;
- lazy-load below-fold media;
- pause offscreen video;
- poster for every video;
- responsive raster derivatives;
- SVG for diagrams;
- no layout shift from fonts or media.

## 21.3 Image treatment

- use AVIF/WebP;
- retain PNG only where transparency or fidelity justifies it;
- include width/height;
- meaningful alt text;
- decorative images use empty alt;
- zoom dense diagrams;
- captions explain what the reviewer should notice.

---

# 22. Accessibility

Target WCAG 2.2 AA.

Required:

- semantic landmarks;
- logical headings;
- skip link;
- visible focus;
- keyboard access;
- touch targets;
- 320px reflow;
- 200% zoom;
- reduced motion;
- forced-color legibility;
- no color-only meaning;
- accessible dialogs;
- focus restoration;
- no hover-only content;
- meaningful media controls;
- static content without JavaScript;
- only one semantic case-study table of contents;
- scenario tabs use correct tab/list semantics;
- active trace state announced without excessive live-region chatter.

Do not trade accessibility for aesthetics.

---

# 23. Production hygiene and legacy cleanup

This is P0.

## 23.1 Crawl

Create a production crawler that checks:

- sitemap URLs;
- internal links;
- known historical routes;
- discovered HTML paths;
- redirects;
- canonical;
- robots;
- title;
- legacy phrase patterns;
- phone-number patterns;
- old location copy.

## 23.2 Denylist test

Fail when production serves:

- legacy branding;
- old Builder navigation;
- old phone number;
- old precise location;
- stock Builder page;
- old AI App Library content;
- current privacy contradiction.

Do not store personal information in screenshots or committed logs.

Use redacted pattern reporting.

## 23.3 Redirect implementation

Prefer Hostinger/Apache-level redirects through a tested `.htaccess` or supported control.

Example intent:

```apache
RewriteEngine On
RewriteRule ^contact/?$ /#contact [R=301,L,NE]
RewriteRule ^my-ai-app-library/?$ /lab/ [R=301,L]
```

Do not copy this blindly if the Hostinger static configuration requires a different syntax.

Fallback:

- static compatibility page;
- canonical new route;
- `noindex,follow`;
- visible link;
- immediate progressive redirect.

## 23.4 Clean deployment

Determine whether Hostinger static deploy:

- replaces;
- overlays;
- or preserves unknown files.

Do not assume a deploy cleans legacy files.

Before deleting production-root files:

- inventory;
- back up;
- identify which files belong to Portfolio V2;
- identify old Builder remnants;
- preserve email and domain state;
- use the existing rollback documentation;
- request the exact production approval phrase.

## 23.5 Search cleanup

Prepare:

`docs/SEARCH_REINDEX.md`

Include owner actions for:

- Google Search Console;
- Bing Webmaster Tools;
- sitemap submission;
- URL inspection;
- homepage reindex;
- removal requests for legacy URLs;
- monitoring indexed titles;
- validating canonical and redirects.

Automate what can be done without owner credentials.

---

# 24. GitHub ecosystem alignment

## 24.1 Profile link

Update GitHub profile website to:

`https://shaileshdudala.com`

Use authenticated `gh api` only if authorized.

Do not point profile visitors to the mirror.

## 24.2 Profile README

If the profile repository `smgpulse007/smgpulse007` does not exist, prepare or create it when authorized.

Keep it concise.

Suggested structure:

```md
# Shailesh Dudala

Senior Applied AI Engineer building agentic, document-intelligence, predictive-ML, and MLOps systems for healthcare and insurance.

[Portfolio] [Selected work] [LLM Steering] [LinkedIn]

## Selected systems
- Claims intelligence and human-review workflows
- On-prem document intelligence
- Healthcare analytics platforms

## Public builds
- LLM Steering
- HL7 AI Challenge reference architecture
- AlphaQuant
```

Do not use a wall of badges.

Do not reproduce the portfolio.

## 24.3 Pinned repositories

Recommended order:

1. `llm-steering`
2. `smgpulse007.github.io`
3. `hl7-ai-challenge`
4. `FreshTrackAIModule`
5. `ollama_poc`
6. `AlphaQuant`

Remove `hospital-readmission-fhir-ml-api` from the primary six until it has a real trained/evaluated model or a stronger reason to lead.

If GitHub pin ordering requires an owner UI action, document it precisely.

## 24.4 Repository cleanup

Create a non-destructive audit:

- keep;
- improve README;
- archive;
- privatize;
- duplicate;
- fork;
- unsafe/misleading.

Do not archive repositories automatically unless explicitly authorized.

Prioritize documentation improvements in flagship repositories.

## 24.5 Cross-repository changes

If making changes to another public repository:

- create a branch;
- limit scope to README/media/metadata unless logic changes are required;
- run its tests;
- do not rewrite history;
- do not alter license;
- open a PR or report exact commit;
- preserve project-specific limitations.

---

# 25. LinkedIn handoff

Do not attempt to edit LinkedIn through unsupported automation.

Create:

`docs/LINKEDIN_REFRESH.md`

Include:

- new headline;
- new About section;
- current-role copy;
- canonical portfolio link;
- Featured section order;
- location/remote-work consistency;
- award wording;
- skills priority.

The current public brand should not continue to describe dual IEHP/Hexplora roles as current.

---

# 26. Validation and tests

Add or update:

```text
npm run validate
npm run check
npm test
npm run test:content
npm run test:copy
npm run test:legacy
npm run test:links
npm run test:targets
npm run test:a11y
npm run test:e2e
npm run test:media
npm run test:evidence
npm run screenshots
```

## 26.1 Copy tests

Check rendered output for:

- internal evidence enums;
- banned phrases;
- legacy copy;
- repeated heading patterns;
- placeholder language;
- TODO;
- lorem ipsum;
- private paths;
- phone patterns;
- precise location;
- accidental current-client internals.

## 26.2 Evidence tests

Every public project asset must have:

- source;
- commit;
- license;
- alt;
- caption;
- public-safe flag.

## 26.3 Legacy tests

Test:

- `/contact`
- `/contact/`
- `/my-ai-app-library`
- `/my-ai-app-library/`
- every discovered old route.

Verify:

- redirect or compatibility behavior;
- no old HTML;
- no PII;
- canonical;
- noindex where relevant.

## 26.4 Visual tests

Capture:

- current V2.0 baseline;
- V2.1 pass 1;
- V2.1 pass 2;
- V2.1 pass 3;
- V2.1 pass 4;
- V2.1 final restraint pass.

Use:

- 320Ã—700
- 390Ã—844
- 430Ã—932
- 768Ã—1024
- 1024Ã—900
- 1280Ã—900
- 1440Ã—1000
- 1728Ã—1117
- 1920Ã—1080
- 2560Ã—1440

Primary routes:

- home;
- Work;
- four flagship case studies;
- Recognition;
- Lab;
- About;
- RÃ©sumÃ©.

Inspect screenshots. Do not merely produce them.

## 26.5 Browser tests

- Chromium
- Firefox
- WebKit

## 26.6 Conditions

- JavaScript on/off;
- reduced motion;
- keyboard;
- 200% zoom;
- forced colors;
- cold cache;
- slow network;
- DPR 2;
- WebGL unavailable, if any WebGL is introduced.

---

# 27. Creative QA rubric

Score 100 points.

- 10 â€” five-second role clarity
- 10 â€” visual originality
- 10 â€” memorability
- 10 â€” typography
- 10 â€” composition and pacing
- 10 â€” project-specific visual differentiation
- 10 â€” case-study storytelling
- 10 â€” artifact authenticity
- 5 â€” recruiter scanability
- 5 â€” hiring-manager depth
- 5 â€” technical-review depth
- 5 â€” mobile authorship
- 5 â€” human voice and presence

Pass/fail gates:

- factual integrity;
- privacy;
- accessibility;
- performance;
- legacy cleanup;
- deployment safety.

Do not self-award more than 92/100 without written evidence that the following changed:

- hero causality;
- project-specific visual grammar;
- Hexplora case study;
- real LLM Steering evidence;
- default evidence-language cleanup;
- human About narrative;
- public rÃ©sumÃ© composition;
- legacy-route removal.

The score is not the goal. The evidence is.

---

# 28. Autonomous implementation sequence

## Phase 0 â€” baseline and safety

1. Read all repository agent instructions and release docs.
2. Confirm production release SHA.
3. Create branch:
   `codex/portfolio-v2.1-experience-evidence`
4. Capture baseline screenshots and content inventory.
5. Crawl production and record legacy routes.
6. Do not modify production.

## Phase 1 â€” research and evidence inventory

1. Inspect all public repositories represented in the portfolio.
2. Inspect demos and media.
3. Record source commit/license.
4. Research current high-quality editorial, technical, data-storytelling, and interaction references.
5. Produce:
   - `docs/V2_1_VISUAL_DIRECTION.md`
   - `docs/V2_1_PROJECT_EVIDENCE.md`
   - `docs/V2_1_COPY_AUDIT.md`
6. Choose one decisive visual direction without asking the owner to select among mood boards.

## Phase 2 â€” content and architecture

1. Consolidate content sources.
2. Add Hexplora case study.
3. Move Letâ€™s Talk Doc to Recognition.
4. Rewrite homepage and case-study copy.
5. Replace visible evidence enums.
6. Add About narrative.
7. Add Lab detail architecture.
8. Create public rÃ©sumÃ© plan.

## Phase 3 â€” visual system

1. Establish revised tokens.
2. Rework typography.
3. Rebuild hero trace.
4. Build project-specific visuals.
5. Create LLM Steering static demo.
6. Optimize public repo media.
7. Art-direct mobile independently.

## Phase 4 â€” local QA

1. Run tests.
2. Run five visual passes.
3. Remove weak visual ideas.
4. Compare V2.0 and V2.1.
5. Document tradeoffs.

## Phase 5 â€” Hostinger staging

Use the existing isolated staging origin when safe, or create a new no-index temporary origin.

Build with staging target values.

Deploy only `dist`.

Verify:

- SHA;
- canonical;
- noindex;
- raw HTML;
- media;
- routes;
- legacy compatibility;
- public rÃ©sumÃ©;
- browser matrix;
- accessibility;
- Lighthouse.

## Phase 6 â€” owner review

Open or update a draft PR.

Provide:

- staging URL;
- before/after first-fold screenshots;
- full home screenshots;
- four case-study screenshots;
- mobile screenshots;
- public rÃ©sumÃ©;
- final copy deck;
- source manifest;
- QA report;
- exact production change list.

Wait for:

`V2.1 CUTOVER APPROVED`

## Phase 7 â€” production

Only after approval:

1. verify staging SHA;
2. back up/inventory production root;
3. deploy cleanly;
4. remove or shadow legacy files;
5. verify old routes;
6. verify canonical site;
7. deploy same-SHA mirror;
8. verify mirror noindex/canonical;
9. tag:
   `portfolio-v2.1.0`
10. update release docs.

Do not change DNS, nameservers, email, billing, subscriptions, or domain registration unless a separately authorized defect requires it.

---

# 29. Commit strategy

Use clear commits:

- `audit: inventory legacy routes and public evidence`
- `content: replace portfolio-meta language with natural copy`
- `content: add healthcare analytics platform case study`
- `design: establish operational editorial visual system`
- `feat: rebuild packet-to-decision hero trace`
- `feat: add project-specific case-study visuals`
- `feat: add static llm steering comparison`
- `design: art-direct lab and about experience`
- `resume: produce intentional public edition`
- `seo: neutralize legacy routes and indexing`
- `qa: validate portfolio v2.1 staging release`

Do not create one giant commit.

---

# 30. Required deliverables

## Product

- revised homepage;
- revised Work page;
- revised claims case study;
- revised on-prem case study;
- new healthcare analytics platform case study;
- revised LLM Steering case study with actual evidence;
- Recognition page;
- redesigned Lab;
- improved About;
- improved public rÃ©sumÃ©;
- legacy redirects/compatibility;
- same-SHA mirror behavior.

## Documentation

```text
docs/V2_1_BASELINE_AUDIT.md
docs/V2_1_VISUAL_DIRECTION.md
docs/V2_1_COPY_AUDIT.md
docs/V2_1_PROJECT_EVIDENCE.md
docs/PROJECT_EVIDENCE_MANIFEST.md
docs/RESUME_VARIANTS.md
docs/SEARCH_REINDEX.md
docs/LINKEDIN_REFRESH.md
docs/V2_1_QA_REPORT.md
docs/V2_1_RELEASE_PLAN.md
```

## QA artifacts

- baseline screenshots;
- five visual passes;
- final multi-browser matrix;
- Lighthouse reports;
- accessibility reports;
- legacy-route crawl;
- media budget;
- copy lint report;
- public PDF pages;
- source manifest.

---

# 31. Acceptance criteria

## Brand

- Role and domain are clear within five seconds.
- The site feels personally authored.
- Healthcare/insurance remains primary.
- Breadth feels intentional.
- No old â€œData Scientistâ€ brand survives on the canonical domain.

## Aesthetic

- Hero shows causality, not a small console.
- Each flagship has a distinct visual metaphor.
- The homepage no longer relies on repeated terminal cards.
- Typography and pacing feel premium.
- Mobile is independently art-directed.
- Motion explains state.
- At least one visual moment is genuinely memorable after the tab is closed.

## Copy

- No internal evidence enums in normal reading mode.
- No headings about proving the portfolioâ€™s honesty.
- No generic AI-marketing language.
- Ownership is clear.
- Caveats are concise and local.
- About has a credible human origin story.
- Letâ€™s Talk Doc no longer dominates a flagship slot.

## Evidence

- Claims and on-prem use synthetic, meaningful artifacts.
- Hexplora case study uses only approved public facts.
- LLM Steering uses real checked-in public evidence.
- Public repo assets are source-pinned and licensed.
- Readmission demo remains deterministic/synthetic.
- HL7 reference work does not overclaim support or award status.

## Legacy hygiene

- Old `/contact` no longer serves Builder content.
- Old `/my-ai-app-library` no longer serves Builder content.
- No old phone or location is public.
- Historical routes redirect or serve controlled compatibility pages.
- Search reindex plan exists.

## RÃ©sumÃ©

- Public edition is visually intentional.
- No mostly empty page.
- No phone or precise location.
- Application rÃ©sumÃ© remains private.

## GitHub

- Canonical site is the profile URL.
- Pin strategy is documented or applied.
- Profile README is prepared or live.
- Public repositories support rather than contradict the portfolio.

## Engineering

- Static Astro architecture remains.
- Tests pass.
- No console errors.
- No hydration errors.
- No broken links.
- No PII.
- No legacy copy.
- Performance budgets pass.
- Accessibility gates pass.
- Production and mirror share the approved release SHA.

---

# 32. Completion report

Return:

## Implemented

Major product, visual, copy, and evidence changes.

## Before and after

Explain the most important differences.

## Live staging

- URL
- SHA
- deployment target
- cache state
- SSL

## Creative direction

- chosen direction
- signature interaction
- project-specific visual system
- what was removed

## Copy

- major heading replacements
- evidence-language changes
- About narrative
- public rÃ©sumÃ© wording

## Project evidence

For each flagship:

- source assets;
- source commit;
- visual treatment;
- limitations.

## Legacy cleanup

- routes found;
- staging behavior;
- production steps pending.

## QA

- commands;
- browser matrix;
- accessibility;
- performance;
- screenshot paths;
- rubric.

## Owner decisions

No more than five truly subjective decisions before production.

## Production readiness

State exactly whether the branch is ready for:

`V2.1 CUTOVER APPROVED`

---

# 33. Bootstrap prompt to begin execution

Paste the following into Codex after adding this specification to the repository:

```text
Read this file in full before doing anything:

docs/Portfolio_V2_1_Experience_Evidence_Revamp_Spec.md

Also read AGENTS.md and all current Portfolio V2 release, hosting, provenance, QA, cutover, and rollback documents.

Execute Portfolio V2.1 end to end through isolated Hostinger staging.

Starting production release:
portfolio-v2.0.0
1ae06ad45315baffaef6d1564aae0da4d4051a53

Create and work on:
codex/portfolio-v2.1-experience-evidence

Do not stop after an audit, plan, mood board, copy proposal, or partial component change.

Inspect the current canonical site, mirror, source, public repositories, project demos, checked-in media, public rÃ©sumÃ©, production routes, and legacy Builder remnants. Implement the complete visual, copy, case-study, evidence, Lab, About, rÃ©sumÃ©, GitHub-alignment, and legacy-route revamp specified in the document.

Treat the existing site as a technically strong baseline, not a visual final. Be bold with art direction, typography, composition, motion, visual storytelling, and static interactive demonstrations. Be exact with facts, privacy, team attribution, and public evidence.

The four flagship stories must become:
1. Claims intelligence
2. On-prem document intelligence
3. Healthcare analytics platform
4. LLM Steering

Move Letâ€™s Talk Doc into Recognition while preserving inbound links.

Use actual public LLM Steering and relevant repository evidence. Create distinct visual metaphors for every flagship. Replace portfolio-meta and internal evidence language in the default UI. Add the professional origin story. Produce an intentional public rÃ©sumÃ©. Neutralize every legacy route in staging and prepare the clean production deployment.

Keep Astro static-first. Do not add a backend for spectacle. Do not modify production, DNS, nameservers, email, billing, subscriptions, or the GitHub Pages mirror during implementation.

Deploy to isolated no-index Hostinger staging, inspect the live result across the required browsers and viewports, perform the five visual passes, iterate until the acceptance criteria pass, and open a draft PR marked DO NOT MERGE â€” V2.1 STAGING REVIEW.

Wait for the exact phrase V2.1 CUTOVER APPROVED before changing canonical production or the mirror.

Begin now with baseline, legacy-route, copy, and public-evidence discovery. Continue autonomously through implementation and live staging.
```

---

# 34. Final directive

Do not add spectacle to hide weak storytelling.

Do not add caveats to compensate for vague claims.

Do not use code blocks as a universal visual style.

Use the strongest materials already present in the work:

- document packets;
- validation states;
- source spans;
- reviewer decisions;
- care-manager worklists;
- deployment paths;
- model layers;
- output comparisons;
- public diagrams;
- actual repository media;
- measured outcomes;
- Shaileshâ€™s professional progression.

The result should feel technically serious, visually authored, and personally owned.

The reader should remember not only that Shailesh works in Applied AI, but how he thinks:

> define the contract, expose failure, preserve authority, and make the system answerable for what happens next.

