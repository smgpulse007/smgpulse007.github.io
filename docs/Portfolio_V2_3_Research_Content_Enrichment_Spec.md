# Portfolio V2.3 — Research and Content Enrichment Specification

**Purpose:** Preserve the strong Research Atlas concept from V2.2 while correcting its thematic imbalance, improving its visual design, and connecting research to the complete body of work.

---

# 1. Current Research Atlas assessment

V2.2 created a meaningful foundation:

- primary sources;
- status labels;
- cluster filters;
- constellation;
- timeline;
- reading list;
- project relationships;
- no copied PDF content;
- source-aware summaries.

Keep those strengths.

The current public staging reports:

- 35 records;
- 16 preprints;
- 12 conference records;
- 3 peer-reviewed records;
- 2 reporting guidelines;
- 2 technical specifications.

The default experience is too heavily weighted toward:

- context engineering;
- coding agents;
- harness engineering;
- 2026 preprints.

That distribution reflects the V2.2 narrative more than the complete career.

V2.3 must rebalance the Atlas.

---

# 2. Research role in the portfolio

Research should demonstrate:

- intellectual foundation;
- current awareness;
- engineering judgment;
- ability to translate research into systems.

It should not:

- make Shailesh look like a pure research scientist;
- overtake professional work;
- function as a bibliography;
- prove one fashionable topic;
- imply authorship of external work.

The page should answer:

1. What research shaped the work?
2. Where did it appear in practice?
3. What remains uncertain?
4. What is Shailesh currently exploring?

---

# 3. Research information architecture

Use four top-level views.

## 3.1 Foundations

Stable or widely influential work.

Examples:

- predictive modeling;
- calibration;
- explainability;
- time series;
- RAG;
- tool use;
- FHIR;
- representation engineering.

## 3.2 Applied engineering

Methods and guidance that affect system design.

Examples:

- clinical reporting;
- RAG evaluation;
- model cards;
- data documentation;
- ML testing;
- MLOps;
- agent benchmarks.

## 3.3 Frontier watch

Recent preprints and emerging work.

Examples:

- agentic context engineering;
- harness engineering;
- model-harness evaluation;
- recent representation-engineering work.

Default presentation must label:

> Frontier watch · recent preprint

Do not visually mix it with stable foundations.

## 3.4 My publications

Verified authored publications.

Do not publish until exact metadata is confirmed.

---

# 4. Balanced research clusters

Use these clusters.

# 4.1 Statistical learning and predictive models

Include verified work such as:

- XGBoost: A Scalable Tree Boosting System
- Predicting Good Probabilities With Supervised Learning
- On Calibration of Modern Neural Networks
- A Unified Approach to Interpreting Model Predictions

Connect to:

- readmission;
- LOS;
- ED utilization;
- diabetes risk;
- forecasting;
- FWA;
- Health Index.

# 4.2 Clinical model quality

Include:

- TRIPOD+AI
- PROBAST+AI
- CONSORT-AI
- SPIRIT-AI
- Model Cards for Model Reporting
- Datasheets for Datasets, when relevant

Connect to:

- model documentation;
- cohort/outcome reporting;
- limitations;
- human interaction;
- deployment evidence.

# 4.3 Time series and scientific computing

Verify and include a concise set:

- tsfresh paper
- UMAP
- t-SNE
- one relevant clinical wearable-sensor reference
- one relevant histopathology/deep-learning reference
- one RNA-Seq workflow reference when it directly connects to the experience

Connect to:

- AbbVie;
- UChicago research;
- feature extraction;
- dimensionality reduction;
- sensor processing;
- biomedical foundation.

Do not turn this into a broad biology reading list.

# 4.4 MLOps and production ML

Add verified foundations such as:

- Hidden Technical Debt in Machine Learning Systems
- The ML Test Score
- Model Cards for Model Reporting
- Datasheets for Datasets
- relevant production-monitoring references

Connect to:

- Hexplora;
- IEHP;
- production release;
- monitoring;
- data quality;
- deployment.

# 4.5 Retrieval and context

Keep:

- Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
- Lost in the Middle
- RAGAS
- Self-RAG
- one verified context-engineering survey
- Agentic Context Engineering as frontier work

Connect to:

- local document AI;
- HEDIS;
- claims context;
- RAG evaluation.

Do not let the cluster become the whole page.

# 4.6 Agent loops and tool use

Keep a concise set:

- ReAct
- Toolformer
- Reflexion
- DSPy
- τ-bench
- one broad agent benchmark

Connect to:

- claims agents;
- AlphaQuant;
- tool contracts;
- evaluation.

# 4.7 Coding agents and harness engineering

Keep:

- SWE-bench
- SWE-agent
- a small set of verified 2026 harness papers

Separate:

- established benchmark;
- frontier preprints.

Connect to:

- Meta Harness;
- portfolio execution methodology.

Do not make this the default cluster.

# 4.8 Representation engineering

Keep:

- Representation Engineering
- current theoretical/empirical follow-up
- one timeline/survey
- project-specific activation-steering foundations

Connect to:

- LLM Steering.

# 4.9 Healthcare interoperability

Keep:

- SMART on FHIR paper
- FHIR R4 specification
- CDS Hooks specification
- FHIR systematic review

Connect to:

- HL7 platform;
- Team Re-Admit;
- professional interoperability.

# 4.10 My publications

Verify:

- electrophysiological-signal paper;
- NLP/forum paper.

Display:

- exact citation;
- author position;
- publisher;
- DOI/URL;
- abstract-length summary;
- connection to career.

Do not reproduce full text without rights.

---

# 5. Default curation

The default Research page should not show all records equally.

Feature approximately 12–15 core entries.

A balanced starting set:

1. XGBoost
2. Predicting Good Probabilities
3. On Calibration
4. SHAP
5. TRIPOD+AI
6. Hidden Technical Debt in ML Systems
7. RAG
8. Lost in the Middle
9. ReAct
10. Toolformer
11. SWE-bench
12. Representation Engineering
13. SMART on FHIR
14. FHIR specification
15. one verified time-series/scientific foundation

Frontier context/harness papers live in Frontier Watch.

This keeps research aligned with the full career.

---

# 6. Project-first exploration

Add a mode:

> **Research behind the work**

The user selects a project:

- Predictive healthcare ML
- Healthcare analytics platform
- Local document intelligence
- Claims agents
- Meta Harness
- LLM Steering
- HL7 systems

The interface shows:

- key papers;
- standards;
- evaluation references;
- implementation notes.

This is more useful than a generic constellation alone.

---

# 7. Visual and interaction direction

The V2.2 constellation is visually clean but too simple.

V2.3 should explore a richer research instrument.

Possible modes:

## 7.1 Knowledge field

- project nodes;
- research nodes;
- cluster regions;
- time depth;
- link semantics;
- glass inspector.

## 7.2 Layered timeline

- foundational work;
- applied work;
- frontier work;
- personal work.

## 7.3 Research stack

A project opens a vertical stack:

- problem;
- paper;
- system decision;
- evidence;
- open question.

## 7.4 Reading path

Curated paths:

- Build reliable clinical prediction
- Design local RAG
- Build production agents
- Evaluate coding-agent harnesses
- Understand activation steering
- Work with healthcare standards

Do not use edges that imply direct citations without evidence.

---

# 8. Paper detail

Every paper should have:

- title;
- authors;
- venue;
- year;
- status;
- canonical link;
- DOI/arXiv;
- concise summary;
- why it matters;
- implementation consequence;
- related projects;
- citation copy;
- last verified.

Optional:

- BibTeX;
- implementation note;
- limitation.

Do not copy long abstract text.

---

# 9. Implementation notes

Create original notes.

Suggested structure:

```md
## What the paper changes

## Where it appears in the portfolio

## What it does not prove

## What I would test next
```

Use first person only for Shailesh’s actual synthesis.

Do not suggest peer review.

Label:

> Implementation note

---

# 10. Verification

Use primary sources:

- publisher;
- conference proceedings;
- arXiv;
- official specification;
- official guideline.

At build or validation time, require:

- title;
- authors;
- year;
- status;
- canonical URL;
- `lastVerified`.

Flag:

- dead link;
- missing authors;
- preprint mislabeled;
- duplicate paper;
- wrong venue;
- separate Meta-Harness name collision;
- unverified authored publication.

---

# 11. Research status design

Use clear visual distinctions.

## Foundation

Stable visual style.

## Applied engineering

Practical implementation style.

## Frontier watch

Explicit recent/preprint treatment.

## My publication

Personal authorship treatment.

Do not use color alone.

Use:

- label;
- shape;
- icon;
- text.

---

# 12. Relationship semantics

Allowed relationship labels:

- informs;
- implemented in;
- evaluated by;
- constrains;
- extends;
- related to.

Direct-citation edge:

- only when verified.

Provide an accessible table of relationships.

---

# 13. Research-page copy

## Title

> Research

or:

> Research Atlas

Codex may test both.

## Headline territory

> The ideas behind the work.

> Research translated into systems.

> What informs the models, agents, and products.

Avoid:

> The top papers in AI.

## Body

Strong territory:

> A curated map of the papers, standards, and benchmarks that have shaped my work—from calibrated healthcare models and RAG to agent loops and representation engineering.

Do not mention harness engineering in the first sentence unless the final content balance supports it.

---

# 14. Research preview on homepage

The homepage preview should show:

- three research paths;
- one authored-publication link;
- one interactive relationship.

Suggested paths:

- Predictive ML
- Retrieval and agents
- Model behavior

Do not announce only the number of records.

---

# 15. Connection to Lab

Every featured open-source project should list:

- related research;
- implementation note;
- divergence from paper.

Every featured paper should list:

- related project;
- related professional system.

---

# 16. Connection to Experience

Career-era entries can link to relevant research.

Examples:

- sensor work → time-series foundation;
- predictive healthcare → calibration/SHAP/TRIPOD;
- local RAG → RAG/Lost in Middle/RAGAS;
- claims agents → ReAct/Toolformer/τ-bench;
- LLM Steering → representation engineering;
- Meta Harness → SWE-bench/harness frontier.

This should enrich the career story.

It should not turn Experience into a literature review.

---

# 17. Research performance and accessibility

The interactive map must provide:

- accessible list;
- filters;
- keyboard navigation;
- textual relationship output;
- reduced-motion mode;
- no-WebGL mode;
- no-JS reading list;
- small-screen layout.

Lazy-load the enhanced graph.

Do not block the paper list.

---

# 18. Research acceptance criteria

Research is ready when:

- content is balanced;
- predictive/statistical foundations are visible;
- biomedical/scientific foundations are represented;
- context/harness is one cluster;
- preprints are labeled;
- authored work is verified;
- papers connect to projects;
- the map teaches;
- the list remains usable;
- citations are correct;
- no copyrighted PDF content is reproduced.
