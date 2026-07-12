# Content Provenance and Claim Governance

Last reviewed: 2026-07-12

This file explains why public claims are eligible for publication. It does not publish private evidence or employer-confidential details.

## Source precedence

1. Official issuer, award, project, repository, or public documentation.
2. Latest accessible `_JRFO` or `_JFRO` résumé for career chronology, role scope, and candidate outcomes.
3. Public repository history and artifacts.
4. Private evidence, used only to decide whether a sanitized statement is supportable.
5. Unverified information, which is hidden or identified as an open evidence question.

Résumé claims remain `resume-supported`; they do not become `public-source` simply because a résumé PDF is downloadable.

## Résumé artifact status

- Latest source reviewed: `SDudala_AI_MLE_JRFO.pdf` (local evidence only).
- Source SHA-256: `2151CDC7D26FC93903320E94F87B85E19750C4DFC55B99009A130C06CCDA36FF`.
- Publication status: withheld pending a privacy-cleared replacement.
- The reviewed source contains contact/location details and claims that are not approved for direct public distribution. It was not copied into `public/` and must not be restored from history.
- The public route provides a print-friendly, governed résumé summary with no broken PDF link.

When the owner supplies or approves a sanitized PDF, publish it at `public/resume/Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf`, record the new artifact hash and approval source here, and rerun content, link, browser, and visual tests.

## Recognition sources

### Let’s Talk Doc

Approved public wording:

> Team recipient, Global HL7 AI Challenge — Transformative Impact in Healthcare Award (2025), for Let’s Talk Doc.

Evidence:

- [HL7 International winners announcement](https://blog.hl7.org/hl7-international-announces-winners-of-global-ai-challenge-showcasing-standards-based-innovation-in-healthcare) ties the Transformative Impact in Healthcare recognition to Let’s Talk Doc.
- [HL7 Update from HQ recipient list](https://hl7news.hl7.org/2026/01/07/update-from-hq/) includes Shailesh Dudala among the recipients.
- The latest résumé supports Shailesh’s stated project contribution. Official sources do not independently isolate individual component ownership, so contribution wording remains resume-supported and qualified.

Boundary: `hl7-ai-challenge` and its HEDIS care-gap architecture are separate public reference material. They are not the Let’s Talk Doc award project and must never be described as the winning repository.

### Team Re-Admit

- Exact public project name: **Team Re-Admit**.
- [Devpost project page](https://devpost.com/software/team-re-admit) is the public project/result source.
- Portfolio attribution: MeldRx Predictive AI Hackathon, Best of ViVE — User’s Choice Voting (2025), only to the extent supported by the public page and résumé.

### HiCounselor diabetes risk challenge

- Recognition and model-result wording are resume-supported.
- No BCBS-NC affiliation is published without an authoritative source.
- No unsupported team, placement, or sponsor detail may be inferred.

## Work provenance matrix

| Work | Public type | Evidence | Publication boundary |
| --- | --- | --- | --- |
| Claims Intelligence / Adjudication Support | Professional system — sanitized | Latest résumé; synthetic portfolio contracts | No employer data, workflow names, customers, policies, code, or production screenshots |
| On-Prem RAG/OCR Compliance Review | Professional system — sanitized | Latest résumé; adjacent public `ollama_poc` pattern | Public repo is related technique evidence, not the professional implementation |
| Let’s Talk Doc | Team award project | Official HL7 winners page; official recipient list; latest résumé | Team attribution; contribution remains qualified |
| LLM Steering Lab | Research lab | Public `llm-steering` repository, tests, UI, and documentation | Research limitations remain visible; no safety guarantee |
| Hospital Readmission FHIR API | Public reference implementation | Public repository and synthetic bundle/response | Deterministic demonstration; no trained-model or clinical-validation claim |
| HL7 AI Challenge Platform | Public reference implementation | Public repository and architecture diagrams | Not the Let’s Talk Doc award project |
| Local document AI | Research lab / public experiment | Public `ollama_poc` repository | Sample or synthetic documents only; no private uploads in source |
| FreshTrack OCR | Public reference implementation | Public repository | No real receipts, payment details, customer records, or production-data claim |
| AlphaQuant | Research lab | Public repository and UI artifacts | Engineering demonstration; no investment, trading, or performance advice |
| NFL forecasting | Historical project | Public repository and historical backtest artifacts | Historical analytics; no wagering advice; archived-repository status must remain clear |

## Public impact claims

The typed source is `src/data/impactClaims.ts`. Current candidates are résumé-supported:

| Value | Public label | Required context |
| --- | --- | --- |
| 7K | Case backlog cleared | On-premises compliance review workstream; role and local-review boundary |
| 90% | Review-time reduction | Approximate measured workflow result, not an enterprise-wide claim |
| 20% | Automated closure improvement | Healthcare quality-measure evidence workflow |
| 18% | FWA waste reduction | Transportation anomaly review and reporting workflow |
| ≈$3M | Client P4P impact | Qualified broader-program contribution, not sole attribution |
| $500K | New revenue enabled | Healthcare analytics platform and program delivery |

Only claims with `approved` or `qualified` publication status may render. Qualified claims must render their qualification in an accessible evidence surface. Homepage selection should use four or five claims rather than every available number.

## Privacy incident record

The baseline included a real retail receipt at `public/assets/case-studies/freshtrack/screenshots/sample-receipt.jpg` while labeling it synthetic. The image contained personal, store, transaction, and partial payment information. It was removed from the Portfolio V2 working tree on 2026-07-12.

Release requirements:

- remove every legacy reference to that filename;
- prevent it from entering screenshots, build output, history-derived fixtures, or generated reports;
- use authored synthetic receipt/document data only;
- make content validation reject known removed paths and sensitive receipt terms;
- visually inspect new document artifacts before publication.

Git history preservation means the old blob may remain in prior commits. Do not rewrite history solely for this public, non-secret artifact unless the owner determines removal from history is necessary; do ensure no release branch or generated site references it.

## Review procedure

For every new or changed claim:

1. identify the exact source;
2. classify it as public-source, resume-supported, private-evidence, or unverified;
3. record publication status as approved, qualified, or hidden;
4. distinguish personal contribution from team or program outcomes;
5. add limitation and privacy boundaries;
6. verify links and wording in CI;
7. review the rendered page without JavaScript;
8. update this document when the source or conclusion changes.

## Open evidence questions

- Whether an official public source can independently document Shailesh’s precise Let’s Talk Doc implementation contribution.
- Whether an authoritative source supports any BCBS-NC relationship to the HiCounselor challenge.
- Whether a public source can replace résumé-only support for individual professional metrics.
- Whether additional award logos or media are licensed for republication. Link to official pages unless permission is clear.
