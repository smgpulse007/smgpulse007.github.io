import type { WorkItem } from './types';

export const workItems: WorkItem[] = [
  {
    slug: 'claims-intelligence',
    title: 'From claim packet to auditable action',
    eyebrow: 'Claims intelligence',
    lede: 'A governed document workflow that turns mixed claim packets into typed facts, visible exceptions, and reviewer-ready decisions.',
    outcome: 'Reduced document handling in a measured workstream while keeping every uncertain field and route inspectable.',
    executiveSummary: {
      problem: 'Mixed claim packets could send incomplete or contradictory facts into downstream work without making the uncertainty visible.',
      decision: 'Represent the workflow as typed state transitions with field-level validation and explicit human-review routes.',
      change: 'Reduced document handling in the measured workstream while keeping uncertain fields and routes inspectable.',
    },
    type: 'Professional system — sanitized',
    status: 'Operational pattern; details sanitized',
    domain: 'Insurance · Document intelligence · Agentic workflows',
    role: 'Applied AI engineering, workflow architecture, evaluation, and observability',
    timeframe: 'Current engagement · 2026',
    teamContext: 'Cross-functional delivery with claims, operations, and platform partners',
    featured: true,
    order: 1,
    technologies: ['Agent graphs', 'OCR', 'typed schemas', 'retrieval', 'human review', 'trace telemetry'],
    privacyBoundary: 'The architecture and artifacts are synthetic reconstructions. Employer data, rules, APIs, document types, model routing, and downstream system names are omitted.',
    accent: 'jade',
    visual: 'packet-trace',
    flow: ['Ingest', 'Classify', 'Extract', 'Validate', 'Human review', 'Action', 'Observe'],
    artifact: {
      label: 'Illustrative validation event',
      code: `{
  "packet_id": "SYN-042",
  "contract": "claim_fact.v3",
  "confidence": 0.78,
  "rule": "service_date_sequence",
  "state": "review_required",
  "trace_id": "tr_8a21"
}`,
    },
    glance: [
      { label: 'Context', value: 'Professional work' },
      { label: 'Primary risk', value: 'Incorrect extraction moving downstream' },
      { label: 'Control', value: 'Typed validation plus explicit reviewer routes' },
      { label: 'Public code', value: 'No; synthetic artifacts only' },
    ],
    sections: [
      { heading: 'Context and stakes', body: ['Claim packets arrive as collections, not clean records. Page identity, duplicated documents, missing context, and conflicting values make a model response only the beginning of the engineering problem.', 'The public goal is not to reproduce a private implementation. It is to show the control structure required when an AI-derived field can affect real operational work.'] },
      { heading: 'My role', body: ['I worked across orchestration, document understanding, structured extraction, validation, reviewer routing, evaluation, and telemetry. The central design decision was to represent every step as an explicit state transition rather than a chain of opaque model calls.'] },
      { heading: 'Constraints', body: ['Regulated data could not appear in public artifacts. Model confidence was not accepted as a business rule. Latency and cost mattered, but correctness, traceability, and recoverability came first.'], bullets: ['Mixed multi-document inputs', 'Policy and procedure context', 'Partial or contradictory evidence', 'Human accountability for unresolved risk'] },
      { heading: 'Architecture', body: ['A packet manifest establishes page identity and provenance. Classification selects a typed extraction contract. Deterministic checks, cross-document consistency rules, and confidence gates decide whether the result can proceed or must enter review.', 'The audit trace records the contract version, tool events, validation results, reviewer route, latency, and final disposition without storing sensitive source content in telemetry.'] },
      { heading: 'Key decisions and rejected alternatives', body: ['I rejected free-form JSON that downstream code would have to interpret. Versioned schemas made missing fields, invalid enums, and incompatible changes visible before handoff.', 'I also rejected a single pass/fail confidence threshold. Field-level uncertainty, business-rule failures, and missing evidence require different reviewer queues and different remediation.'] },
      { heading: 'What failed or was unreliable', body: ['OCR was least reliable around page identity, section boundaries, low-quality scans, and repeated headers. Model-generated confidence was not calibrated enough to stand alone. Those failures drove the manifest, deterministic validators, and reviewer fallback.'] },
      { heading: 'Validation, review, and operations', body: ['Evaluation separates extraction accuracy, validation coverage, routing accuracy, and workflow outcome. Reviewers see the source reference, normalized value, reason for the route, and the failed rule—not just a red badge.', 'Operational monitoring tracks stage latency, retry patterns, tool failures, validation rates, review volume, and drift in document mix.'] },
      { heading: 'Outcome', body: ['In a measured claims workstream, the approach supported an approximate 90% reduction in document-handling effort and an approximate 50% reduction in time-to-claim-payable. The outcomes belong to that workstream, not an enterprise-wide promise.'] },
      { heading: 'What I would improve next', body: ['I would expand slice-based evaluation by document family, add reviewer-agreement analysis, and formalize a shadow-mode release gate before any new extraction contract receives downstream authority.'] },
    ],
    evidence: [
      { label: 'Career record', classification: 'resume-supported', detail: 'Role, workflow scope, and qualified outcomes are supported by the current career record.' },
      { label: 'Illustrative artifact', classification: 'public-source', detail: 'The contract, trace, and validation examples are authored here without private data.' },
      { label: 'Private implementation', classification: 'private-evidence', detail: 'Production details are intentionally not published.' },
    ],
    limitations: ['No private source code or production screenshots are public.', 'Synthetic artifacts demonstrate control patterns, not a deployable clone.', 'Outcome language is limited to the measured workstream.'],
    seo: { title: 'Claims Intelligence Case Study — Shailesh Dudala', description: 'A sanitized engineering case study of typed extraction, validation, human review, and observability in a claims document workflow.' },
  },
  {
    slug: 'on-prem-rag-ocr',
    title: 'Clearing a 7,000-case review backlog without moving regulated documents off-prem',
    eyebrow: 'On-prem RAG and OCR',
    lede: 'A local document-review system combining OCR, retrieval, small language models, and a reviewer surface inside the data boundary.',
    outcome: 'Cleared a 7K-case backlog and reduced review time by about 90% in the measured workflow.',
    executiveSummary: {
      problem: 'A 7,000-case review backlog was trapped behind slow manual search, while regulated documents had to remain inside the controlled environment.',
      decision: 'Keep inference local and require page-addressable evidence, OCR quality signals, and explicit fallback states for reviewers.',
      change: 'Cleared the 7K-case backlog and reduced review time by about 90% in the measured workflow.',
    },
    type: 'Professional system — sanitized',
    status: 'Delivered professional system; details sanitized',
    domain: 'Healthcare payer · Local inference · Compliance review',
    role: 'Technical lead for applied ML, local deployment, evaluation, and workflow integration',
    timeframe: '2023–2025',
    teamContext: 'Payer modernization program with engineering, operations, and review stakeholders',
    featured: true,
    order: 2,
    technologies: ['OCR', 'local RAG', 'Ollama/vLLM patterns', 'containers', 'review UI', 'evaluation sets'],
    privacyBoundary: 'No regulated documents, member information, screenshots, prompts, or private retrieval content are published.',
    accent: 'cyan',
    visual: 'local-boundary',
    flow: ['Local intake', 'OCR', 'Chunk', 'Retrieve', 'Generate', 'Review', 'Measure'],
    artifact: {
      label: 'Illustrative reviewer route',
      code: `review_case:
  source: synthetic-policy-17.pdf
  pages: [4, 5]
  retrieval_score: 0.84
  extraction_state: qualified
  route: reviewer_confirm
  reason: conflicting_effective_dates`,
    },
    glance: [
      { label: 'Context', value: 'Professional work' },
      { label: 'Deployment', value: 'Local/on-premises boundary' },
      { label: 'Outcome', value: '7K backlog; ≈90% review-time reduction' },
      { label: 'Public code', value: 'Related patterns only; not the employer system' },
    ],
    sections: [
      { heading: 'Context and stakes', body: ['A growing review backlog was trapped between document volume, slow manual search, and a hard data boundary. Sending source material to a hosted model was not an acceptable trade.', 'The useful question was not whether a local model could answer questions. It was whether a local system could make reviewers faster without concealing OCR, retrieval, or citation failures.'] },
      { heading: 'My role', body: ['I led the applied ML and deployment work: document parsing, chunking, retrieval, local inference, containerization, reviewer experience, evaluation, and the operational handoff needed to keep the system maintainable.'] },
      { heading: 'Architecture', body: ['Documents remained inside the controlled environment. OCR produced page-addressable text and quality signals. Chunking preserved section and page provenance. Retrieval returned evidence spans before the model produced a structured answer.', 'The reviewer surface placed extracted fields beside citations and uncertainty reasons. Low-quality OCR, weak retrieval, conflicting dates, and missing evidence routed to explicit fallback states.'] },
      { heading: 'Why local inference', body: ['The local boundary reduced data movement and increased deployment control. It also imposed real costs: model selection was narrower, GPU capacity had to be planned, upgrades needed regression tests, and operations owned more of the serving stack.'] },
      { heading: 'What failed or was unreliable', body: ['Long documents and repeated boilerplate degraded naive chunking. Tables and low-resolution scans caused OCR defects. Retrieval similarity alone over-ranked plausible but irrelevant sections.', 'Section-aware chunks, page citations, document-family evaluation, and reviewer feedback loops performed better than adding prompt complexity.'] },
      { heading: 'Evaluation and human review', body: ['The acceptance set measured OCR coverage, retrieval recall, structured-field accuracy, citation correctness, and reviewer time. A response without an evidence span could not be treated as complete.', 'Reviewers remained the authority for conflicts, low-quality source pages, and policy interpretation. The system reduced search and transcription work; it did not remove accountability.'] },
      { heading: 'Outcome', body: ['The system helped clear a 7,000-case backlog and reduced review time by approximately 90% in the measured workflow. Both outcomes remain attached to that workstream.'] },
      { heading: 'What I would improve next', body: ['I would add ongoing OCR-quality sampling, retrieval drift reporting by document family, and a formal reviewer-disagreement queue that feeds the next evaluation release.'] },
    ],
    evidence: [
      { label: 'Career record', classification: 'resume-supported', detail: 'Backlog and review-time outcomes are supported by the current career record.' },
      { label: 'Related public pattern', classification: 'public-source', href: 'https://github.com/smgpulse007/ollama_poc', detail: 'A separate public local-document-AI experiment illustrates adjacent techniques; it is not the professional system.' },
    ],
    limitations: ['No regulated source data is available publicly.', 'Public repositories are related experiments, not replicas.', 'Local serving details vary with approved infrastructure.'],
    seo: { title: 'On-Prem RAG and OCR Case Study — Shailesh Dudala', description: 'How a local document-review workflow used OCR, retrieval, local inference, evaluation, and human review to clear a 7K-case backlog.' },
  },
  {
    slug: 'healthcare-analytics-platform',
    title: 'From risk models to a care-management operating system',
    eyebrow: 'Healthcare analytics platform',
    lede: 'A 0-to-1 analytics product scaled across nine healthcare programs, connecting risk models, delivery pipelines, dashboards, and care-manager workflows.',
    outcome: '$500K in new revenue supported and approximately $3M in client performance-based payouts across the broader program.',
    executiveSummary: {
      problem: 'Risk models and dashboards were fragmented across programs and disconnected from a repeatable path into care-team action.',
      decision: 'Build reusable data and model-delivery services while preserving each program’s population, thresholds, and review workflow.',
      change: 'Scaled across nine programs, supporting $500K in new revenue and approximately $3M in client performance-based payouts.',
    },
    type: 'Professional system — sanitized',
    status: 'Scaled professional product; details sanitized',
    domain: 'Healthcare product · Predictive ML · MLOps',
    role: 'Lead data scientist and product partner across modeling, platform delivery, reporting, and workflow adoption',
    timeframe: '2020–2023',
    teamContext: 'Cross-functional product delivery across nine healthcare programs',
    featured: true,
    order: 3,
    technologies: ['Python', 'predictive ML', 'risk stratification', 'MLOps', 'analytics products', 'care workflows'],
    privacyBoundary: 'The product map is an authored reconstruction. No client data, private dashboard, model feature, clinical metric, contract term, or employer artifact is reproduced.',
    accent: 'amber',
    visual: 'health-index',
    flow: ['Data products', 'Risk models', 'Health Index', 'Program workflows', 'Care teams', 'Measure outcomes'],
    artifact: {
      label: 'Illustrative product map',
      code: `health_index:
  inputs: [risk, utilization, quality]
  programs: 9
  delivery: reusable_pipeline
  users: care_management
  review: program_specific`,
    },
    glance: [
      { label: 'Context', value: '0-to-1 healthcare analytics product' },
      { label: 'Scale', value: 'Adopted across nine healthcare programs' },
      { label: 'Product result', value: '$500K new revenue supported' },
      { label: 'Program result', value: '≈$3M client P4P impact supported' },
    ],
    sections: [
      { heading: 'Context and stakes', body: ['Risk models were only one layer of the product. The harder problem was turning several healthcare programs into a repeatable operating system for data, model delivery, reporting, and care-team action.', 'A model that never reaches a workflow is not a product. A dashboard without a governed delivery path does not create durable adoption.'] },
      { heading: 'My role', body: ['I led data science and product work across risk modeling, reusable delivery patterns, program reporting, and care-manager workflows. The role required translating between model development, client priorities, operational adoption, and measurable program outcomes.'] },
      { heading: 'Product architecture', body: ['Shared data products and deployment patterns supported program-specific models rather than forcing every use case through one score. A composite Health Index provided a common orientation while each program kept its own population, intervention, and review logic.', 'The platform connected model outputs to dashboards, outreach priorities, and care-manager workflows, then fed operational feedback into later releases.'] },
      { heading: 'The decision that mattered', body: ['I treated delivery and adoption as part of the model system. Reusable pipelines shortened release cycles, but program-specific review and workflow design stayed explicit so scale did not erase local context.'] },
      { heading: 'What failed or was unreliable', body: ['A universal score was tempting but too blunt for nine different program goals. Reporting that did not match care-team work created friction even when the underlying model performed well. Data refresh and definition drift also needed product ownership, not one-time cleanup.'] },
      { heading: 'Validation and operations', body: ['Validation combined model quality with delivery checks, cohort review, workflow adoption, and program outcomes. Release patterns reduced repeated engineering work while leaving room for program-specific thresholds, interventions, and monitoring.'] },
      { heading: 'Outcome', body: ['The platform supported $500K in new revenue and approximately $3M in client performance-based payouts across the broader program. Reusable delivery patterns reduced model deployment cycles by approximately 50%. These are scoped career-record outcomes, not single-model claims.'] },
      { heading: 'What I would improve next', body: ['I would formalize a shared model-card and workflow-card release contract, add adoption telemetry by program, and make change-impact reviews part of every data or model release.'] },
    ],
    evidence: [
      { label: 'Career record', classification: 'resume-supported', detail: 'Role, nine-program scale, revenue, P4P impact, and faster delivery are supported by the current career record.' },
      { label: 'Portfolio reconstruction', classification: 'public-source', detail: 'The product map and Health Index visual are authored here from approved facts without private data.' },
      { label: 'Private implementation', classification: 'private-evidence', detail: 'Client dashboards, datasets, model features, contracts, and operational rules are intentionally not published.' },
    ],
    limitations: ['Outcomes belong to the broader product and program context, not one model.', 'The public visual is a reconstruction, not a private dashboard.', 'No clinical effectiveness claim is made.'],
    seo: { title: 'Healthcare Analytics Platform Case Study — Shailesh Dudala', description: 'How a 0-to-1 healthcare analytics platform connected risk models, reusable delivery, reporting, and care-manager workflows across nine programs.' },
  },
  {
    slug: 'llm-steering-lab',
    title: 'Turning model-behavior research into a reproducible engineering workbench',
    eyebrow: 'LLM Steering Lab',
    lede: 'A public local-first workbench for activation steering, model inspection, API-driven experiments, and repeatable evaluation.',
    outcome: 'Public code, tests, UI, and documented limitations make the research inspectable rather than promotional.',
    executiveSummary: {
      problem: 'Prompt examples could show a behavior change without revealing where it came from or whether the intervention was repeatable.',
      decision: 'Persist model, layer, vector, coefficient, seed, baseline, and evaluation context as one inspectable experiment record.',
      change: 'Public code, tests, UI, and documented limits make the research reproducible and falsifiable rather than promotional.',
    },
    type: 'Research lab',
    status: 'Maintained public repository',
    domain: 'Representation engineering · Local models · Evaluation tooling',
    role: 'Repository owner and engineer',
    timeframe: '2026',
    teamContext: 'Independent public engineering project',
    featured: true,
    order: 4,
    repository: 'https://github.com/smgpulse007/llm-steering',
    technologies: ['PyTorch', 'Transformers', 'FastAPI', 'React', 'activation hooks', 'test automation'],
    privacyBoundary: 'Research tooling only. It does not claim general model control, safety guarantees, or production readiness.',
    accent: 'violet',
    visual: 'activation-steering',
    flow: ['Load model', 'Capture activations', 'Construct vector', 'Apply hook', 'Evaluate', 'Compare'],
    artifact: {
      label: 'Experiment manifest',
      code: `experiment: customer_support_empathy
model: Qwen/Qwen2.5-0.5B-Instruct
layer: 18
coefficient: 20.0
token_scope: all_tokens
hook_stage: post
comparison: baseline_vs_steered
status: reproducible`,
    },
    glance: [
      { label: 'Context', value: 'Public research build' },
      { label: 'Code', value: 'Public repository' },
      { label: 'Validation', value: 'Automated tests plus experiment comparisons' },
      { label: 'Boundary', value: 'Research results; no safety guarantee' },
    ],
    sections: [
      { heading: 'Problem beyond prompt examples', body: ['Prompt comparisons are useful, but they do not expose where a behavior is represented or whether an intervention is repeatable. The workbench turns steering experiments into explicit model, layer, vector, coefficient, seed, and evaluation records.'] },
      { heading: 'My role', body: ['I built the repository as an end-to-end research tool: model adapters, activation capture and intervention hooks, API contracts, experiment persistence, UI workflows, tests, and documentation.'] },
      { heading: 'Architecture', body: ['The backend isolates model loading, activation capture, vector construction, intervention, and generation behind typed API contracts. The UI makes baseline and steered runs comparable without hiding the experiment configuration.', 'Local execution keeps model weights and prompts under the operator’s control. Saved manifests make a result reproducible across sessions when the same model and environment are available.'] },
      { heading: 'What failed or was unreliable', body: ['Steering effects vary across models, layers, prompt families, and coefficient ranges. A visually strong single example can be misleading. Memory use and hook cleanup also need deliberate handling in repeated local runs.'] },
      { heading: 'Evaluation', body: ['The repository treats steering as an experiment, not a guarantee. Comparisons retain baseline output, steered output, configuration, and evaluation notes. Tests cover API and core workflow behavior; they do not establish broad behavioral validity.'] },
      { heading: 'Tradeoffs', body: ['Local execution improves control and inspectability but increases setup and hardware variability. A UI lowers the barrier to exploration but can make experimental results look more settled than they are, so limitations stay close to the output.'] },
      { heading: 'What I would improve next', body: ['Next steps include broader model adapters, dataset-level evaluations, uncertainty summaries across prompts, and stronger environment capture for cross-machine reproducibility.'] },
    ],
    evidence: [
      { label: 'Repository', classification: 'public-source', href: 'https://github.com/smgpulse007/llm-steering', detail: 'Source, tests, UI, and documentation are public.' },
      { label: 'Validation', classification: 'public-source', detail: 'Repository tests and documented local validation provide inspectable engineering evidence.' },
    ],
    limitations: ['Effects do not generalize automatically across models or prompts.', 'The project is a research workbench, not a model-safety product.', 'Local hardware and dependency versions affect reproducibility.'],
    seo: { title: 'LLM Steering Lab Case Study — Shailesh Dudala', description: 'A public engineering case study for activation steering, reproducible experiments, local model tooling, and evaluation limitations.' },
  },
];

export const featuredWork = workItems.filter((item) => item.featured).sort((a, b) => a.order - b.order);

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}
