# Portfolio V2.2 — Research Atlas Seed Library

## A curated research map for the systems Shailesh builds

**Verification date:** 2026-07-14  
**Purpose:** Seed data and editorial guidance for `/research/`  
**Status:** Every item must be verified from a primary source at implementation time.

This is not an objective ranking of “the best” or “top” papers.

It is a curated set of:

- foundational papers;
- important engineering references;
- reporting guidelines;
- technical specifications;
- recent frontier preprints;
- Shailesh-authored publications.

The final Research Atlas must distinguish those categories clearly.

---

# 1. Research-data contract

Recommended schema:

```ts
type ResearchStatus =
  | 'peer-reviewed'
  | 'conference'
  | 'preprint'
  | 'reporting-guideline'
  | 'technical-specification'
  | 'authored-publication';

type ResearchMaturity =
  | 'foundation'
  | 'applied-reference'
  | 'frontier-watch'
  | 'personal-work';

type ResearchItem = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  status: ResearchStatus;
  maturity: ResearchMaturity;
  canonicalUrl: string;
  doi?: string;
  arxivId?: string;
  cluster: string;
  abstractSummary: string;
  whyItMatters: string;
  implementationImplication: string;
  appearsIn: string[];
  relatedProjects: string[];
  citationText: string;
  bibtex?: string;
  licenseNotes?: string;
  lastVerified: string;
};
```

Every public paper view should show:

- title;
- authors;
- year;
- venue/status;
- one-sentence claim;
- why it matters;
- implementation implication;
- where it appears in Shailesh’s work;
- canonical source;
- copy citation.

Do not reproduce full abstracts.

Do not reproduce figures unless the license permits it.

---

# 2. Predictive modeling and statistical learning

## XGBoost: A Scalable Tree Boosting System

- Authors: Tianqi Chen, Carlos Guestrin
- Year: 2016
- Venue: KDD
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://doi.org/10.1145/2939672.2939785`
- Why it matters: Scalable gradient-boosted trees remain a high-value baseline and production choice for structured risk modeling.
- Implementation implication: Strong tabular baselines, careful feature design, and calibrated probabilities often matter more than novelty.
- Appears in:
  - readmission;
  - LOS;
  - ED utilization;
  - diabetes risk;
  - risk-reference systems.

## A Unified Approach to Interpreting Model Predictions

- Authors: Scott M. Lundberg, Su-In Lee
- Year: 2017
- Venue: NeurIPS
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://proceedings.neurips.cc/paper/7062-a-unified-approach-to-interpreting-model-predictions`
- Why it matters: Introduces the SHAP framework for additive feature attribution.
- Implementation implication: Explanations can support debugging and communication, but they are not causal proof.
- Appears in:
  - healthcare risk explanations;
  - care-manager views;
  - model diagnostics;
  - threshold review.

## On Calibration of Modern Neural Networks

- Authors: Chuan Guo, Geoff Pleiss, Yu Sun, Kilian Q. Weinberger
- Year: 2017
- Venue: ICML
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://proceedings.mlr.press/v70/guo17a.html`
- Why it matters: Predictive accuracy and confidence reliability are separate problems.
- Implementation implication: Confidence gates and risk bands require empirical calibration.
- Appears in:
  - risk scores;
  - human-review routing;
  - threshold design;
  - monitoring.

## Predicting Good Probabilities With Supervised Learning

- Authors: Alexandru Niculescu-Mizil, Rich Caruana
- Year: 2005
- Venue: ICML
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://doi.org/10.1145/1102351.1102430`
- Why it matters: Compares probability quality across supervised learning methods and calibration approaches.
- Implementation implication: A model used for prioritization must be evaluated as a probability estimator, not only as a ranker.
- Appears in:
  - care prioritization;
  - clinical risk;
  - forecasting;
  - backtesting.

## Time-Series Feature Extraction on Basis of Scalable Hypothesis Tests (tsfresh)

- Authors: Maximilian Christ, Nils Braun, Julius Neuffer, Andreas W. Kempa-Liehr
- Year: 2018
- Venue: Neurocomputing
- Status: Peer reviewed
- Maturity: Applied reference
- Canonical source: verify DOI and publisher before launch
- Why it matters: Provides systematic, scalable time-series feature extraction and relevance testing.
- Implementation implication: Useful bridge between raw clinical sensor streams and interpretable downstream models.
- Appears in:
  - wearable-sensor work;
  - gait analysis;
  - early biomedical signal processing.

---

# 3. Clinical-model quality and healthcare AI reporting

## TRIPOD+AI Statement

- Lead authors: Gary S. Collins et al.
- Year: 2024
- Venue: BMJ
- Status: Reporting guideline
- Maturity: Applied reference
- Canonical source: `https://www.bmj.com/content/385/bmj-2023-078378`
- Why it matters: Updates reporting guidance for clinical prediction models using regression or machine learning.
- Implementation implication: Public model stories should explain data, participants, outcome, evaluation, and limitations.
- Appears in:
  - predictive-healthcare case studies;
  - model cards;
  - evaluation design.

## PROBAST+AI

- Organization: PROBAST collaboration
- Year: Verify current publication year and final journal citation
- Status: Reporting/risk-of-bias tool
- Maturity: Applied reference
- Canonical source: `https://www.probast.org/`
- Why it matters: Extends risk-of-bias and applicability assessment for prediction-model research using AI/ML.
- Implementation implication: Model quality includes design validity and applicability, not only performance.
- Appears in:
  - healthcare model review;
  - evidence boundaries;
  - external-study assessment.
- Launch rule: Do not publish a final citation until the current official release is verified.

## The CONSORT-AI Extension

- Lead authors: Xiaoxuan Liu et al.
- Year: 2020
- Venue: Nature Medicine
- Status: Peer reviewed/reporting extension
- Maturity: Applied reference
- Canonical source: verify DOI through the journal
- Why it matters: Extends clinical-trial reporting for interventions involving AI.
- Implementation implication: Human interaction, failure analysis, and intervention context must be reported clearly.
- Appears in:
  - healthcare AI governance;
  - clinical evaluation;
  - human-in-the-loop design.

## The SPIRIT-AI Extension

- Lead authors: Declan Rivera et al.
- Year: 2020
- Venue: Nature Medicine
- Status: Peer reviewed/reporting extension
- Maturity: Applied reference
- Canonical source: verify DOI through the journal
- Why it matters: Extends clinical-trial protocol guidance for AI interventions.
- Implementation implication: Evaluation protocols should specify data, system behavior, handling of errors, and human interaction.

---

# 4. Retrieval and context engineering

## Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

- Authors: Patrick Lewis et al.
- Year: 2020
- Venue: NeurIPS
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://arxiv.org/abs/2005.11401`
- Why it matters: Establishes a general formulation combining parametric and retrieved memory.
- Implementation implication: Retrieval and generation should be evaluated as distinct system components.
- Appears in:
  - local RAG;
  - policy retrieval;
  - clinical-document evidence;
  - context-engineered workflows.

## Lost in the Middle: How Language Models Use Long Contexts

- Authors: Nelson F. Liu et al.
- Year: 2024
- Venue: Transactions of the Association for Computational Linguistics
- Status: Peer reviewed
- Maturity: Foundation
- Canonical source: `https://aclanthology.org/2024.tacl-1.9/`
- Why it matters: Models do not use information uniformly across long contexts.
- Implementation implication: Context ordering, retrieval selection, and evidence placement must be designed.
- Appears in:
  - claim-packet context assembly;
  - long-document processing;
  - agent memory;
  - prompt packing.

## A Survey of Context Engineering for Large Language Models

- Lead author: Li Mei et al.
- Year: 2025
- Status: Preprint
- Maturity: Applied reference
- Canonical source: `https://arxiv.org/abs/2507.13334`
- Why it matters: Frames context engineering as systematic information-payload design beyond prompt wording.
- Implementation implication: Context includes retrieval, memory, tools, state, structure, and delivery.
- Appears in:
  - claims-agent architecture;
  - RAG;
  - Meta Harness;
  - agent orchestration.

## Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models

- Authors: Qizheng Zhang, Changran Hu, Shubhangi Upasani, Boyuan Ma, Fenglu Hong, Vamsidhar Kamanuru, Jay Rainton, Chen Wu, Mengmeng Ji, Hanchen Li, Urmish Thakker, James Zou, Kunle Olukotun
- Year: 2025/2026
- Venue: Verify final ICLR 2026 metadata
- Status: Conference/preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2510.04618`
- Why it matters: Treats context as an evolving playbook rather than a static prompt or compressed summary.
- Implementation implication: Context can accumulate, refine, and organize strategies through execution feedback.
- Appears in:
  - context engineering;
  - long-horizon agent work;
  - implementation specifications;
  - harness state.

## RAGAS: Automated Evaluation of Retrieval Augmented Generation

- Authors: Shahul Es et al.
- Year: 2023
- Status: Verify final publication venue
- Maturity: Applied reference
- Canonical source: `https://arxiv.org/abs/2309.15217`
- Why it matters: Decomposes evaluation into retrieval and generation-related dimensions.
- Implementation implication: A credible RAG case study needs retrieval, citation, and response evaluation.
- Appears in:
  - local document AI;
  - HEDIS extraction;
  - evidence retrieval.

## Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection

- Authors: Akari Asai et al.
- Year: 2023/2024
- Status: Verify final venue
- Maturity: Applied reference
- Canonical source: `https://arxiv.org/abs/2310.11511`
- Why it matters: Connects retrieval, generation, and critique decisions.
- Implementation implication: Retrieval need not happen indiscriminately; critique and support checks can guide behavior.
- Appears in:
  - selective retrieval;
  - critique/fallback loops;
  - agentic RAG.

## A Language for Describing Agentic LLM Contexts

- Authors: Verify complete metadata
- Year: 2026
- Status: Preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2605.01920`
- Why it matters: Treats context composition and evolution as something systems should describe explicitly.
- Implementation implication: Agent traces should expose what instructions, observations, history, and tool results entered each call.
- Appears in:
  - agent context visualization;
  - claims run trace;
  - Meta Harness context packs.

---

# 5. Agent loops and tool use

## ReAct: Synergizing Reasoning and Acting in Language Models

- Authors: Shunyu Yao et al.
- Year: 2022/2023
- Venue: ICLR
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://arxiv.org/abs/2210.03629`
- Why it matters: Interleaves reasoning and actions in an external environment.
- Implementation implication: Agent behavior must be understood as a loop of state, action, observation, and update.
- Appears in:
  - routing;
  - tool use;
  - claims agents;
  - public agent systems.

## Toolformer: Language Models Can Teach Themselves to Use Tools

- Authors: Timo Schick et al.
- Year: 2023
- Venue: NeurIPS
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://arxiv.org/abs/2302.04761`
- Why it matters: Makes external tool invocation a first-class capability.
- Implementation implication: Tool contracts, observations, and failure behavior matter as much as prompt text.
- Appears in:
  - API/tool nodes;
  - retrieval;
  - structured services;
  - agent loops.

## Reflexion: Language Agents with Verbal Reinforcement Learning

- Authors: Noah Shinn et al.
- Year: 2023
- Venue: NeurIPS
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://arxiv.org/abs/2303.11366`
- Why it matters: Uses textual feedback and memory to improve subsequent attempts.
- Implementation implication: Retries and reflection require bounded memory, stop rules, and evaluation.
- Appears in:
  - recovery;
  - replay;
  - agent evaluation;
  - feedback loops.

## DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines

- Authors: Omar Khattab et al.
- Year: 2024
- Venue: ICLR
- Status: Conference
- Maturity: Applied reference
- Canonical source: `https://openreview.net/forum?id=PFS4ffN9Yx`
- Why it matters: Treats LM pipelines as programmable and optimizable systems.
- Implementation implication: Prompt and module configuration can be driven by explicit metrics rather than manual folklore.
- Appears in:
  - evaluation-driven development;
  - modular agent pipelines;
  - context optimization.

## AgentBench: Evaluating LLMs as Agents

- Authors: Xiao Liu et al.
- Year: 2023
- Status: Verify final venue
- Maturity: Applied reference
- Canonical source: `https://arxiv.org/abs/2308.03688`
- Why it matters: Evaluates agents across interactive environments.
- Implementation implication: Agent quality includes task completion, interaction, and environmental feedback.
- Appears in:
  - agent evaluation;
  - Lab benchmark design.

## τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains

- Authors: Verify complete metadata
- Year: 2024
- Status: Preprint/conference status to verify
- Maturity: Applied reference
- Canonical source: `https://arxiv.org/abs/2406.12045`
- Why it matters: Evaluates policy-constrained tool agents in realistic interaction.
- Implementation implication: Completion is not enough; policies and user state matter.
- Appears in:
  - bounded claims agents;
  - tool contracts;
  - human interaction.

---

# 6. Coding agents and harness engineering

## SWE-bench: Can Language Models Resolve Real-World GitHub Issues?

- Authors: Carlos E. Jimenez et al.
- Year: 2023/2024
- Venue: ICLR
- Status: Conference
- Maturity: Foundation
- Canonical source: `https://arxiv.org/abs/2310.06770`
- Why it matters: Establishes repository-level issue resolution as an agent-evaluation problem.
- Implementation implication: Long-horizon coding work needs real tests, repository context, and executable proof.
- Appears in:
  - Meta Harness;
  - coding-agent evaluation;
  - proof-ledger design.

## SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

- Authors: John Yang et al.
- Year: 2024
- Status: Verify final venue
- Maturity: Foundation
- Canonical source: `https://arxiv.org/abs/2405.15793`
- Why it matters: Shows that the agent-computer interface and tool design materially affect performance.
- Implementation implication: Harness affordances are part of the system—not incidental wrappers.
- Appears in:
  - tool adapters;
  - coding-agent instruction surfaces;
  - Meta Harness.

## Harness Engineering for Agentic AI Coding Tools: An Exploratory Study

- Authors: Matthias Galster, Seyedmoein Mohsenimofidi, Jai Lal Lulla, Muhammad Auwal Abubakar, Christoph Treude, Sebastian Baltes
- Year: 2026
- Venue: AIware 2026-related version
- Status: Conference-related preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2602.14690`
- Why it matters: Catalogs versioned configuration mechanisms around coding agents and frames them as harness engineering.
- Implementation implication: Repository instructions, policies, tool definitions, skills, and configuration should be treated as software artifacts.
- Appears in:
  - Meta Harness;
  - Codex/Claude/Cursor instruction emitters;
  - repository governance.

## Natural-Language Agent Harnesses

- Authors: Linyue Pan, Lexiao Zou, Shuo Guo, Jingchen Ni, Hai-Tao Zheng
- Year: 2026
- Status: Preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2603.25723`
- Why it matters: Externalizes high-level harness behavior as portable, editable natural language interpreted by a runtime.
- Implementation implication: Policy can remain readable while exact execution, parsing, and sandboxing stay in code.
- Appears in:
  - implementation specifications;
  - Meta Harness protocol;
  - agent instruction surfaces.

## Meta-Harness: End-to-End Optimization of Model Harnesses

- Authors: Yoonho Lee, Roshen Nair, Qizheng Zhang, Kangwook Lee, Omar Khattab, Chelsea Finn
- Year: 2026
- Status: Preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2603.28052`
- Why it matters: Treats harness code as an outer-loop optimization target using prior candidates, scores, and traces.
- Implementation implication: Harness structure can be measured and improved rather than treated as fixed scaffolding.
- Appears in:
  - research context for harness engineering.
- Critical disambiguation:
  - This paper is separate from Shailesh’s `smgpulse007/meta-harness` repository.
  - Do not imply affiliation, derivation, shared authorship, or endorsement.

## Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses

- Authors: Jiahang Lin et al.
- Year: 2026
- Status: Preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2604.25850`
- Why it matters: Treats component, experience, and decision observability as foundations for evolving harnesses.
- Implementation implication: Every harness edit should have a hypothesis, trace, result, and reversible artifact.
- Appears in:
  - proof ledgers;
  - harness observability;
  - evidence-driven iteration.

## Code as Agent Harness

- Lead author: Xuying Ning et al.
- Year: 2026
- Status: Preprint/survey
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2605.18747`
- Why it matters: Frames code as the operational substrate for reasoning, action, state, and execution-based verification.
- Implementation implication: Agent systems should make executable artifacts, state, and validators first-class.
- Appears in:
  - Meta Harness;
  - checkpoints;
  - stateful execution;
  - tool interfaces.

## Harness-Bench: Measuring Harness Effects across Models in Realistic Agent Workflows

- Authors: Yilun Yao et al.
- Year: 2026
- Status: Preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2605.27922`
- Why it matters: Evaluates model-harness configurations rather than attributing performance to the base model alone.
- Implementation implication: Report process quality, traces, efficiency, and failures—not only final completion.
- Appears in:
  - Meta Harness evaluation;
  - portfolio QA philosophy;
  - agent-system evaluation.

## Is Grep All You Need? How Agent Harnesses Reshape Agentic Search

- Authors: Sahil Sen, Akhil Kasturi, Elias Lumer, Anmol Gulati, Vamse Kumar Subbiah
- Year: 2026
- Status: Preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2605.15184`
- Why it matters: Studies how retrieval strategy, tool-output presentation, and harness design interact.
- Implementation implication: Retrieval choices cannot be evaluated independently of agent and harness behavior.
- Appears in:
  - repository search;
  - context packs;
  - tool-output design.

---

# 7. Representation engineering and model behavior

## Representation Engineering: A Top-Down Approach to AI Transparency

- Authors: Andy Zou et al.
- Year: 2023
- Status: Preprint; verify later publication status
- Maturity: Foundation
- Canonical source: `https://arxiv.org/abs/2310.01405`
- Why it matters: Treats internal representations as an analysis and intervention surface.
- Implementation implication: Behavior steering should be evaluated through reproducible interventions and limitations.
- Appears in:
  - LLM Steering;
  - activation inspection;
  - behavioral experiments.

## Why Representation Engineering Works: A Theoretical and Empirical Analysis

- Authors: Verify complete metadata
- Year: 2025
- Status: Preprint
- Maturity: Frontier watch
- Canonical source: `https://arxiv.org/abs/2503.22720`
- Why it matters: Investigates theoretical and empirical reasons representation-level interventions can affect model behavior.
- Implementation implication: Steering results require model-, layer-, prompt-, and coefficient-specific validation.
- Appears in:
  - LLM Steering theory;
  - limitation design.

## A Timeline and Analysis for Representation Plasticity in Large Language Models

- Authors: Verify complete metadata
- Year: 2024
- Status: Preprint
- Maturity: Applied reference
- Canonical source: `https://arxiv.org/abs/2410.06225`
- Why it matters: Places representation editing and plasticity in a broader research history.
- Implementation implication: Activation steering is one point in a larger family of interventions.
- Appears in:
  - Research Atlas;
  - LLM Steering roadmap.

---

# 8. Healthcare interoperability

## SMART on FHIR: A Standards-Based, Interoperable Apps Platform for Electronic Health Records

- Authors: Joshua C. Mandel et al.
- Year: 2016
- Venue: Journal of the American Medical Informatics Association
- Status: Peer reviewed
- Maturity: Foundation
- Canonical source: `https://pubmed.ncbi.nlm.nih.gov/26911829/`
- DOI: `10.1093/jamia/ocv189`
- Why it matters: Establishes an interoperable application platform using FHIR and OAuth2.
- Implementation implication: EHR-connected apps should separate authorization, context, and resources.
- Appears in:
  - Team Re-Admit;
  - public interoperability systems;
  - SMART app patterns.

## HL7 FHIR R4 Specification

- Publisher: HL7 International
- Version: R4 / 4.0.1
- Status: Technical specification
- Maturity: Foundation
- Canonical source: `https://hl7.org/fhir/R4/`
- Why it matters: Defines healthcare resources and exchange behavior used across modern interoperability.
- Implementation implication: Public FHIR demos should state exactly which resources and interactions they support.
- Appears in:
  - FHIR APIs;
  - bundles;
  - HL7 challenge reference platform;
  - SMART/CDS systems.

## CDS Hooks Specification

- Publisher: HL7 International
- Version: Verify current official version before launch
- Status: Technical specification
- Maturity: Foundation
- Canonical source: `https://cds-hooks.hl7.org/`
- Why it matters: Defines workflow-triggered clinical decision support and SMART app launch patterns.
- Implementation implication: Decision support should fit into an explicit workflow trigger and response contract.
- Appears in:
  - Team Re-Admit;
  - EHR workflow integration;
  - public interoperability work.

## The Fast Healthcare Interoperability Resources (FHIR) Standard: Systematic Review

- Authors: Muhammad Ayaz et al.
- Year: 2021
- Status: Peer reviewed
- Maturity: Applied reference
- Canonical source: `https://pmc.ncbi.nlm.nih.gov/articles/PMC8367140/`
- Why it matters: Reviews FHIR implementations, use cases, and challenges.
- Implementation implication: Interoperability maturity includes implementation detail, not merely resource vocabulary.
- Appears in:
  - standards context;
  - limitations;
  - architecture choices.

---

# 9. Biomedical and scientific-computing foundations

The implementation agent should add verified foundations relevant to:

- accelerometry and gyroscopy;
- clinical gait analysis;
- RNA-Seq;
- differential expression;
- histopathology;
- mutation prediction;
- UMAP;
- t-SNE;
- high-performance computing.

Prefer papers directly connected to the methods actually used.

Candidate foundations to verify:

- UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction
- Visualizing Data using t-SNE
- foundational CNN/histopathology references relevant to TCGA work
- RNA-Seq differential-expression workflow references
- wearable-sensor feature-extraction references

Do not build an oversized biomedical bibliography.

Select papers that make the career evolution legible.

---

# 10. Shailesh-authored publications

These must be independently verified from the publisher or journal before launch.

## A Salutary Bio-technical Approach to Explosive Detection & Border Patrol Using Electrophysiological Signals

- Reported year: 2018
- Reported journal: International Journal of Engineering and Technology
- Reported volume/pages: 7(2.31), 106–109
- Status: Authored publication
- Verification required:
  - exact title;
  - author list;
  - publisher;
  - DOI;
  - canonical URL;
  - full-text rights.
- Connection:
  - biosignals;
  - sensor processing;
  - early scientific computing.

## Monitoring of Suspicious Discussions on Online Forums Using NLP

- Reported year: 2018
- Reported journal: International Journal of Pure and Applied Mathematics
- Reported volume/pages: 118(22), 257–262
- Status: Authored publication
- Verification required:
  - exact title;
  - author list;
  - publisher;
  - DOI;
  - canonical URL;
  - full-text rights.
- Connection:
  - NLP;
  - text classification;
  - early language systems.

Do not publish journal PDFs or logos without permission.

---

# 11. Research Atlas clusters

Use:

1. Predictive models
2. Uncertainty and calibration
3. Clinical model quality
4. Retrieval and context
5. Agent loops and tools
6. Coding agents and harnesses
7. Representation engineering
8. Healthcare interoperability
9. Biomedical foundations
10. My publications

Filters:

- foundation/frontier;
- peer reviewed/preprint/specification;
- capability;
- system;
- career era;
- year.

---

# 12. Relationship model

Paper nodes connect to:

- idea nodes;
- system nodes;
- career-era nodes;
- implementation-note nodes.

Possible edge labels:

- informs;
- implemented in;
- evaluated by;
- constrains;
- extends;
- contrasts with.

Never imply direct citation unless verified.

---

# 13. Research page copy

## Title

> Research Atlas

## Headline

> The ideas behind the systems.

## Deck

> A curated map of the papers, benchmarks, and standards that shape how I build predictive models, retrieval systems, agent loops, and execution harnesses.

## Foundation label

> Foundations

## Frontier label

> Frontier watch

## Authored label

> My publications

## Connection label

> Where this appears in my work

Avoid:

> Top AI research papers

Use:

> A working research map

---

# 14. Citation and freshness checks

At build time:

- verify canonical URLs where feasible;
- require `lastVerified`;
- flag dead links;
- flag missing authors;
- flag missing status;
- flag preprints displayed as peer reviewed;
- flag specifications displayed as papers;
- flag unverified authored-publication metadata;
- flag the Meta Harness name collision;
- generate citation text;
- generate BibTeX only from verified metadata.

Create a scheduled quarterly research-link and status check.

Do not silently update publication status without review.
