# Portfolio V2.3 career evidence

Status: governed public career map  
Recorded: 2026-07-17

This document maps public career wording to its evidence class and publication boundary. It does not reproduce the private application résumé or employer-confidential evidence.

## Source precedence

1. official public issuer, award, repository, or documentation;
2. latest private career source for chronology, role scope, and candidate-reported outcomes;
3. public repository history and artifacts;
4. private evidence used only to decide whether sanitized wording is supportable;
5. unverified information, which remains hidden or explicitly unresolved.

Career claims supported by the private résumé remain `resume-supported`; placing them in a public PDF does not convert them to `public-source`.

## Career chronology

| Period | Organization | Public role framing | Public-safe scope | Approved proof | Evidence class |
| --- | --- | --- | --- | --- | --- |
| 2026–present | MetLife via Bizintex | Applied AI Engineer Consultant | Production claims and document agents; typed workflow state; validation; exception routing; evaluation; observability; human authority | ≈90% lower document-handling effort in a measured workstream; ≈50% shorter time-to-payable in a supported workstream | Resume-supported; qualified |
| 2023–2025 | Inland Empire Health Plan via Infowave | Lead DS/ML Engineer Consultant | Predictive healthcare ML; local OCR/RAG; HEDIS evidence extraction; transportation FWA; interoperability; MLOps; operational reporting | 7K-case backlog cleared; ≈90% review-time reduction; 20% automated measure-closure improvement; 18% transportation waste reduction | Resume-supported; approved or qualified by claim |
| 2021–2023 | Hexplora Predictive Analytics | Lead Data Scientist / Product | 0-to-1 healthcare analytics platform across nine programs; risk models; delivery; embedded analytics; care-manager workflow | $500K new revenue supported; ≈$3M client P4P impact supported; ≈50% faster model-deployment cycles | Resume-supported; broader-program qualification where required |
| 2020–2021 | CommonSpirit Health · Health New England via Infowave | Data and analytics engagements | Hospital operations; provider-data analytics; validation; reporting; workflow automation | Analytics spanning 142 hospitals; 100K+ provider records validated; 60% lower manual provider-review effort | Resume-supported; scoped to the documented engagements |
| 2020–2021 | Hexplora Healthcare Analytics | Data Scientist | Explainable readmission modeling; healthcare ETL and automation; early product foundation | Predictive modeling moved into operational analytics; reusable product and delivery patterns established | Resume-supported; descriptive rather than quantitative |
| Scientific foundation | University of Chicago · AbbVie | Biomedical informatics and research computing | Clinical signals; genomics; scientific computing; statistical modeling; research communication | M.S. Biomedical Informatics; clinical sensor and genomics work; public-health modeling training | Career record; public-safe educational and foundation summary |

The overlapping 2020–2021 records are intentionally separate. They must not be collapsed into a fictional continuous employer or one composite product.

## Capability growth

| Era | Added capability | What remained from earlier work |
| --- | --- | --- |
| Scientific foundations | Statistics, clinical signals, genomics, research computing, scientific visualization | Source lineage, assumptions, and reproducibility |
| Prediction | Cohort design, feature engineering, explainability, calibration, operational analytics | Statistical reasoning and evidence discipline |
| Product + MLOps | Risk stratification, reusable delivery, embedded analytics, product leadership | Model quality plus operational context |
| Document intelligence | Local inference, OCR, RAG, interoperability, review queues, model monitoring | Data boundaries, workflow fit, evaluation |
| Production agentic AI | Typed state, tool contracts, deterministic controls, evaluation, trace telemetry, human authority | All prior modeling, product, document, and release disciplines |

The final stage does not erase the earlier ones. This is why the portfolio does not present context or harness engineering as the full career story.

## Governed quantitative claims

| Claim ID | Rendered value | Public label | Publication status | Required qualification |
| --- | --- | --- | --- | --- |
| `claims-handling` | ≈90% | lower document-handling effort | Qualified | One measured claim-packet workstream; distinct from payer review time |
| `time-payable` | ≈50% | shorter time-to-payable | Qualified | Supported workstream; not enterprise-wide |
| `backlog` | 7K | case backlog cleared | Approved | On-premises compliance-review workstream |
| `review-time` | ≈90% | review-time reduction | Qualified | Earlier measured document-review workflow; not enterprise-wide |
| `closure` | 20% | automated measure-closure improvement | Approved | Healthcare quality-measure evidence workflow |
| `fwa` | 18% | FWA waste reduction | Approved | Transportation anomaly review and reporting workflow |
| `p4p` | ≈$3M | client P4P impact | Qualified | Broader program contribution; not sole attribution |
| `revenue` | $500K | new revenue enabled | Approved | 0-to-1 platform and client-program delivery |

The typed executable source is `src/data/impactClaims.ts`.

## The two 90% outcomes

These claims are different and must remain different everywhere:

| Context | Claim | Meaning |
| --- | --- | --- |
| Current insurance engagement | ≈90% lower document-handling effort | Reduced handling effort in one measured claim-packet workstream |
| 2023–2025 payer engagement | ≈90% review-time reduction | Reduced review time in the measured local document-review workflow |

Do not reuse one claim as evidence for the other. Do not remove `approximately` or its equivalent qualification.

## Public case-study boundaries

### Claims

Public:

- sanitized workflow architecture;
- synthetic packet, state, contract, validation, and trace examples;
- public-safe role and scoped outcomes.

Withheld:

- employer system names, document families, claim data, prompts, policies, APIs, exact model routing, production screenshots, and source code.

### Predictive healthcare

Public:

- cohort-to-action discipline across readmission, LOS, ED utilization, quality, and FWA;
- synthetic evaluation contracts and visual data;
- public reference API clearly labeled as separate.

Withheld:

- production datasets, features, thresholds, weights, client definitions, or invented private performance metrics.

### Healthcare platform

Public:

- 0-to-1 product pattern, nine-program scale, Health Index reconstruction, MLOps and adoption framing, qualified outcomes.

Withheld:

- client dashboards, contracts, data, model features, clinical measures, and private product artifacts.

### Document intelligence

Public:

- local boundary, OCR, retrieval, citations, structured extraction, reviewer correction, evaluation, 7K backlog, and qualified review-time outcome.

Withheld:

- regulated documents, member information, prompts, private retrieval content, model-serving details, and production screenshots.

## Public résumé artifact

| Item | Value |
| --- | --- |
| Public path | `public/resume/Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf` |
| Generator | `scripts/generate-v23-resume.py` |
| Format | One Letter page; ATS-readable |
| Public title | Senior Applied AI / ML Engineer |
| Support line | Production Agentic AI · Predictive ML · Document Intelligence · MLOps · Healthcare & Insurance |
| SHA-256 | `69A5B93EB170DE1B802384BAD4E21A36EA366A5F8F8F5F9F9E6CDD0384AD757E` |
| Size | 6,093 bytes |
| Link count | Four active links in the generated PDF |

The generated edition contains no phone number, precise location, prohibited business-line figure, credential, PHI, PII, private platform/model-routing detail, or employer-confidential artifact. The private source SHA-256 is recorded in `docs/CONTENT_PROVENANCE.md`; the private source itself is permanently withheld from public build artifacts.

## Public-repository evidence

Public repositories demonstrate adjacent engineering methods and current open-source work. They do not prove private employer implementation details.

Examples:

- `llm-steering` supports the public representation-engineering workbench claim;
- `meta-harness` supports the pre-1.0 harness project claim;
- `hospital-readmission-fhir-ml-api` supports a separate deterministic synthetic FHIR/ML reference contract;
- `ollama_poc` supports adjacent local-document-AI technique evidence;
- `hl7-ai-challenge` supports a separate standards reference platform and is not the Let’s Talk Doc award project.

## Recognition boundary

- Let’s Talk Doc is a team award project. Official sources support the project and recipient list; Shailesh’s precise component contribution remains resume-supported and qualified.
- Team Re-Admit uses the public Devpost page and resume-supported attribution.
- The HiCounselor result remains resume-supported; no unsupported BCBS-NC affiliation is published.

## Open evidence questions

- Can an official source document Shailesh’s precise Let’s Talk Doc component contribution?
- Can public sources replace résumé-only support for any professional impact measures?
- Is there authoritative evidence for a BCBS-NC relationship to the HiCounselor challenge?
- Are any additional award logos or media licensed for republication?

Until resolved, current qualifications and media restrictions remain in force.

