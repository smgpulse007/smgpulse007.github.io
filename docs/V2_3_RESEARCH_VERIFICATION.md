# Portfolio V2.3 research verification

Status: source and attribution ledger  
Dataset review marker: 2026-07-14  
V2.3 reconciliation: 2026-07-17  
Executable sources: `src/data/research.ts`, `src/data/publications.ts`, `src/pages/research/index.astro`

## Verification contract

The Research surface follows these rules:

- external research is never presented as Shailesh’s work;
- each record points to a primary DOI, publisher, proceedings, standards body, PubMed/PMC record, OpenReview record, or arXiv record;
- conference, peer-reviewed, preprint, reporting-guideline, and technical-specification statuses remain distinct;
- summaries are original implementation notes, not reproduced abstracts;
- publisher figures, logos, and long quotations are not copied;
- `appearsIn` means relevant to a portfolio system, not proof of direct citation or implementation;
- recent context and harness preprints remain in Frontier watch rather than dominating the opening view;
- the external Meta-Harness paper is unaffiliated with Shailesh’s Meta Harness project;
- authored publications are separated from the external atlas.

## Balance

| View | Count | Editorial role |
| --- | ---: | --- |
| Foundations | 12 | Durable statistical, retrieval, tool-use, representation, and interoperability ideas |
| Applied engineering | 11 | Guidelines, evaluation methods, benchmarks, and actionable engineering records |
| Frontier watch | 12 | Recent or unsettled work, including context and harness research |
| External total | 35 | Complete external source set |
| My publications | 2 | Authored records with verified author position and publisher metadata |

Status distribution across the 35 external records:

- 12 conference records;
- 3 peer-reviewed records;
- 16 preprints;
- 2 reporting guidelines;
- 2 technical specifications.

## Foundations

| ID | Source | Year | Status | Primary locator |
| --- | --- | ---: | --- | --- |
| `xgboost` | XGBoost: A Scalable Tree Boosting System | 2016 | Conference | [ACM DOI](https://doi.org/10.1145/2939672.2939785) |
| `shap` | A Unified Approach to Interpreting Model Predictions | 2017 | Conference | [NeurIPS proceedings](https://proceedings.neurips.cc/paper/7062-a-unified-approach-to-interpreting-model-predictions) |
| `calibration` | On Calibration of Modern Neural Networks | 2017 | Conference | [PMLR](https://proceedings.mlr.press/v70/guo17a.html) |
| `probabilities` | Predicting Good Probabilities With Supervised Learning | 2005 | Conference | [ACM DOI](https://doi.org/10.1145/1102351.1102430) |
| `rag` | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 2020 | Conference | [arXiv record](https://arxiv.org/abs/2005.11401) |
| `lost-middle` | Lost in the Middle: How Language Models Use Long Contexts | 2024 | Peer reviewed | [ACL Anthology / TACL](https://aclanthology.org/2024.tacl-1.9/) |
| `react` | ReAct: Synergizing Reasoning and Acting in Language Models | 2022 | Conference | [arXiv record](https://arxiv.org/abs/2210.03629) |
| `toolformer` | Toolformer: Language Models Can Teach Themselves to Use Tools | 2023 | Conference | [arXiv record](https://arxiv.org/abs/2302.04761) |
| `rep-eng` | Representation Engineering: A Top-Down Approach to AI Transparency | 2023 | Preprint | [arXiv record](https://arxiv.org/abs/2310.01405) |
| `smart-fhir` | SMART on FHIR: A Standards-Based, Interoperable Apps Platform for Electronic Health Records | 2016 | Peer reviewed | [PubMed](https://pubmed.ncbi.nlm.nih.gov/26911829/) |
| `fhir-r4` | HL7 FHIR R4 Specification | 2019 | Technical specification | [HL7 specification](https://hl7.org/fhir/R4/) |
| `fhir-review` | The Fast Healthcare Interoperability Resources (FHIR) Standard: Systematic Review | 2021 | Peer reviewed | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8367140/) |

## Applied engineering

| ID | Source | Year | Status | Primary locator |
| --- | --- | ---: | --- | --- |
| `tripod-ai` | TRIPOD+AI Statement | 2024 | Reporting guideline | [BMJ](https://www.bmj.com/content/385/bmj-2023-078378) |
| `probast-ai` | PROBAST+AI | 2025 | Reporting guideline | [PROBAST](https://www.probast.org/) |
| `ragas` | RAGAS: Automated Evaluation of Retrieval Augmented Generation | 2023 | Preprint | [arXiv record](https://arxiv.org/abs/2309.15217) |
| `self-rag` | Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection | 2023 | Preprint | [arXiv record](https://arxiv.org/abs/2310.11511) |
| `reflexion` | Reflexion: Language Agents with Verbal Reinforcement Learning | 2023 | Conference | [arXiv record](https://arxiv.org/abs/2303.11366) |
| `dspy` | DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines | 2024 | Conference | [OpenReview](https://openreview.net/forum?id=PFS4ffN9Yx) |
| `agentbench` | AgentBench: Evaluating LLMs as Agents | 2023 | Preprint | [arXiv record](https://arxiv.org/abs/2308.03688) |
| `tau-bench` | τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains | 2024 | Preprint | [arXiv record](https://arxiv.org/abs/2406.12045) |
| `swe-bench` | SWE-bench: Can Language Models Resolve Real-World GitHub Issues? | 2023 | Conference | [arXiv record](https://arxiv.org/abs/2310.06770) |
| `swe-agent` | SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering | 2024 | Preprint | [arXiv record](https://arxiv.org/abs/2405.15793) |
| `cds-hooks` | CDS Hooks Specification | 2024 | Technical specification | [HL7 specification](https://cds-hooks.hl7.org/) |

## Frontier watch

| ID | Source | Year | Status | Primary locator |
| --- | --- | ---: | --- | --- |
| `context-survey` | A Survey of Context Engineering for Large Language Models | 2025 | Preprint | [arXiv record](https://arxiv.org/abs/2507.13334) |
| `ace` | Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models | 2025 | Conference record | [arXiv record](https://arxiv.org/abs/2510.04618) |
| `acdl` | A Language for Describing Agentic LLM Contexts | 2026 | Conference record | [arXiv record](https://arxiv.org/abs/2605.01920) |
| `harness-engineering` | Harness Engineering for Agentic AI Coding Tools: An Exploratory Study | 2026 | Preprint | [arXiv record](https://arxiv.org/abs/2602.14690) |
| `nl-harnesses` | Natural-Language Agent Harnesses | 2026 | Preprint | [arXiv record](https://arxiv.org/abs/2603.25723) |
| `meta-harness-paper` | Meta-Harness: End-to-End Optimization of Model Harnesses | 2026 | Preprint | [arXiv record](https://arxiv.org/abs/2603.28052) |
| `agentic-harness` | Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses | 2026 | Preprint | [arXiv record](https://arxiv.org/abs/2604.25850) |
| `code-harness` | Code as Agent Harness | 2026 | Preprint | [arXiv record](https://arxiv.org/abs/2605.18747) |
| `harness-bench` | Harness-Bench: Measuring Harness Effects across Models in Realistic Agent Workflows | 2026 | Preprint | [arXiv record](https://arxiv.org/abs/2605.27922) |
| `grep` | Is Grep All You Need? How Agent Harnesses Reshape Agentic Search | 2026 | Preprint | [arXiv record](https://arxiv.org/abs/2605.15184) |
| `why-rep` | Why Representation Engineering Works: A Theoretical and Empirical Analysis | 2025 | Preprint | [arXiv record](https://arxiv.org/abs/2503.22720) |
| `plasticity` | A Timeline and Analysis for Representation Plasticity in Large Language Models | 2024 | Preprint | [arXiv record](https://arxiv.org/abs/2410.06225) |

## Project-first reading paths

| Path | IDs | Engineering question |
| --- | --- | --- |
| Predictive ML | `xgboost`, `probabilities`, `calibration`, `shap`, `tripod-ai`, `probast-ai` | How should a risk score be trained, calibrated, explained, and reported? |
| Retrieval + agents | `rag`, `lost-middle`, `ragas`, `self-rag`, `react`, `toolformer`, `tau-bench` | How should evidence enter a model loop, and how should tool behavior be evaluated? |
| Model behavior | `rep-eng`, `plasticity`, `why-rep` | What can representation-level interventions reveal or change? |

The three linkable route anchors are `/research/#predictive`, `/research/#retrieval`, and `/research/#behavior`.

## Authored publications

### 1. Electrophysiological signals

**Title:** A salutary biotechnical approach for explosive identification and border patrol using electrophysiological signals  
**Authors:** C Santhanakrishnan · T Peermeer Labbai · Shailesh S. Dudala · Y Sai Santhosh Nag  
**Shailesh author position:** 3 of 4  
**Venue:** International Journal of Engineering and Technology 7(2.31), 106–109 (2018)  
**Publisher:** Science Publishing Corporation  
**Publisher record:** `https://www.sciencepubco.com/index.php/IJET/article/view/13408`  
**DOI:** `https://doi.org/10.14419/ijet.v7i2.31.13408`

Verification basis: publisher and Crossref metadata agree on title, authors, date, DOI, volume, issue, and pages.

### 2. Online-forum monitoring

**Title:** Monitoring of Suspicious Discussions on Online Forums Using Data Mining  
**Authors:** Tanya Srivastava · R. Mangalagowri · Shailesh S. Dudala  
**Shailesh author position:** 3 of 3  
**Venue:** International Journal of Pure and Applied Mathematics 118(22), 257–262 (2018)  
**Publisher:** Academic Publications, Ltd., Sofia  
**Publisher issue:** `https://acadpubl.eu/hub/2018-118-22/issue22a.html`  
**Article PDF:** `https://acadpubl.eu/hub/2018-118-22/articles/22a/37.pdf`  
**DOI:** no journal DOI asserted

Verification basis: publisher archive confirms title, authors, venue, year, volume, and pages.

Only bibliographic metadata and an original short summary appear in the portfolio. The portfolio does not host or reproduce either full article.

## Source-health boundary

The current repository records all 37 primary locators and the Research page exposes them as direct source links. This ledger verifies the intended locator, status, attribution, and view assignment from the governed source set. Final release QA must still perform a fresh network-reachability check because external availability, redirects, and publisher TLS behavior can change independently of the repository.

No link should be silently replaced with a secondary blog or search result merely because a primary source is temporarily unavailable. Record the failure and use the durable DOI, proceedings, specification, PubMed/PMC, OpenReview, or arXiv locator.

## Machine-readable parity

`/research.json` must contain the same external records and authored-publication metadata. The HTML and JSON surfaces must agree on:

- count;
- title and year;
- evidence status;
- cluster and view;
- primary source;
- authored/external ownership boundary.

## Remaining release checks

- fresh external-link reachability;
- no duplicated IDs or missing route anchors;
- keyboard tab/filter behavior and source-link focus;
- no-JavaScript visibility of all four views;
- mobile and 200% zoom layout;
- long-title wrapping;
- no external work written as personal authorship;
- no full-text reproduction or unlicensed publisher imagery.

