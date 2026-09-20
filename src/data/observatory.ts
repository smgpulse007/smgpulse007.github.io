export const evolutionStages = [
  { id: 'signal', index: '01', name: 'Signal', era: 'Biomedical informatics', line: 'Make the world observable.', detail: 'Sensors, genomics, clinical records, and messy real-world evidence.' },
  { id: 'prediction', index: '02', name: 'Prediction', era: 'Statistical learning', line: 'Estimate uncertainty.', detail: 'Risk models, calibration, explainability, and scientific evaluation.' },
  { id: 'product', index: '03', name: 'Product', era: 'Healthcare platforms', line: 'Turn insight into workflow.', detail: 'Nine-program analytics, interoperable data, and operational surfaces.' },
  { id: 'context', index: '04', name: 'Context', era: 'Local document AI', line: 'Assemble what a model needs.', detail: 'OCR, retrieval, evidence lineage, and typed context packets.' },
  { id: 'agent', index: '05', name: 'Agent', era: 'Bounded action', line: 'Act inside a governed loop.', detail: 'Tools, state, validation, exception routes, and human authority.' },
  { id: 'harness', index: '06', name: 'Harness', era: 'Evidence-gated execution', line: 'Prove, checkpoint, continue.', detail: 'Phases, packets, proof ledgers, release gates, and continuation.' },
] as const;

export const professionalSystems = [
  {
    slug: 'claims-agents', stage: 'Agent', title: 'Context-engineered claims agents',
    problem: 'Mixed claim packets and workflow intent arrive incomplete, inconsistent, and unsafe to hand directly to a model.',
    built: 'A bounded agent system around event intake, context assembly, typed state, tool contracts, deterministic validation, retries, exception routing, and reviewer authority.',
    changed: 'Lower handling effort in a measured packet workflow while keeping the decision path inspectable and human-controlled.',
    proof: 'Sanitized architecture · synthetic run · validation and escalation trace', href: '/systems/claims-agents/', accent: 'coral',
  },
  {
    slug: 'predictive-ml', stage: 'Prediction', title: 'Predictive healthcare ML',
    problem: 'Risk estimates are not useful when thresholds, calibration, drift, and operating consequences stay invisible.',
    built: 'Evaluated tabular modeling systems with feature lineage, calibrated probabilities, explanation surfaces, and deployment monitoring.',
    changed: 'Turned statistical outputs into reviewable operating signals across utilization and risk workflows.',
    proof: 'Model comparison · calibration · threshold review · monitoring design', href: '/systems/predictive-ml/', accent: 'blue',
  },
  {
    slug: 'healthcare-platform', stage: 'Product', title: 'Healthcare analytics platform',
    problem: 'Clinical and operational teams needed one dependable view across fragmented program data.',
    built: 'An interoperable analytics platform spanning nine healthcare programs, ingestion, quality controls, risk services, and decision surfaces.',
    changed: 'Expanded program coverage and made operational evidence easier to act on.',
    proof: 'Sanitized platform topology · program flow · quality gates', href: '/systems/healthcare-platform/', accent: 'amber',
  },
  {
    slug: 'document-intelligence', stage: 'Context', title: 'Local document intelligence',
    problem: 'Sensitive, heterogeneous documents needed extraction and retrieval without defaulting to external model services.',
    built: 'A local-first OCR, normalization, retrieval, and evidence-review boundary with explicit confidence and failure states.',
    changed: 'Made document evidence searchable and reviewable inside a controlled environment.',
    proof: 'Local boundary map · synthetic document trace · retrieval evidence', href: '/systems/document-intelligence/', accent: 'violet',
  },
] as const;

export const labSystems = [
  { title: 'Meta Harness', stage: 'Harness', maturity: 'Pre-1.0 · active', problem: 'Long specifications lose scope and proof across agent turns.', built: 'Phases, packets, gates, checkpoints, and continuation.', proof: 'Schemas + CLI/MCP + examples', limits: 'Source-installed; correctness is not guaranteed.', href: '/systems/meta-harness/', repo: 'https://github.com/smgpulse007/meta-harness' },
  { title: 'LLM Steering', stage: 'Agent', maturity: 'Research workbench', problem: 'Model-behavior changes are hard to compare and reproduce.', built: 'Activation-steering workbench and validated artifacts.', proof: 'Checked-in pre/post outputs', limits: 'Support varies by model; shown results are static.', href: '/systems/llm-steering/', repo: 'https://github.com/smgpulse007/llm-steering' },
  { title: 'AlphaQuant', stage: 'Agent', maturity: 'Research system', problem: 'Market research fragments across questions and sources.', built: 'A local multi-agent research topology.', proof: 'Public code + architecture', limits: 'Not financial advice; no performance claim.', href: '/lab/alphaquant/', repo: 'https://github.com/smgpulse007/AlphaQuant' },
  { title: 'HL7 AI platform', stage: 'Product', maturity: 'Reference project', problem: 'HL7 events need usable FHIR-aware decision surfaces.', built: 'Event, mapping, queue, risk, and CDS/SMART flow.', proof: 'Public code + official recognition', limits: 'No clinical-effectiveness claim.', href: '/lab/hl7-ai-reference-platform/', repo: 'https://github.com/smgpulse007/hl7-ai-challenge' },
  { title: 'FreshTrack', stage: 'Context', maturity: 'Reference project', problem: 'Receipt images hide structured inventory signals.', built: 'OCR, normalization, confidence, and failure states.', proof: 'Public code', limits: 'Synthetic demonstration data.', href: '/lab/freshtrack-ai-module/', repo: 'https://github.com/smgpulse007/FreshTrackAIModule' },
  { title: 'Readmission FHIR API', stage: 'Prediction', maturity: 'Reference API', problem: 'FHIR bundles need reproducible risk scoring and explanation.', built: 'Synthetic bundle, deterministic scoring, and model warning.', proof: 'Public code', limits: 'Educational use; not clinical advice.', href: '/lab/hospital-readmission-fhir-api/', repo: 'https://github.com/smgpulse007/hospital-readmission-fhir-ml-api' },
  { title: 'NFL forecasting', stage: 'Prediction', maturity: 'Archived', problem: 'Forecasts need backtests and calibration, not confidence theater.', built: 'Historical model-comparison pipeline.', proof: 'Archived public repository', limits: 'No betting recommendation.', href: '/lab/nfl-forecasting-archive/', repo: 'https://github.com/smgpulse007/nfl_betting_model' },
] as const;

export const repositoryCommits = {
  metaHarness: '45034762b88dec2953dd1f042d1b9dcdfad5be9f',
  llmSteering: '8c1242839e1f8f74fd50f4b6bad37f71a2d83122',
  alphaQuant: 'f8f12792d39fdb3e95cccb391620d5128068debf',
  hl7: '31e65d44f535cb94b2b7edc517b60f3703aafbfa',
  freshTrack: 'a62269d940e30adbf85bc591068f752edb531504',
  ollama: '0de9ba22c686a4cbc13e844b47b10f1451bd2921',
  readmission: '99f329742188f7a5b9a8ab84336eb9d752c0fb0f',
  nfl: '2fc81fbad7b1cb396989d8936f7cd2b1c1e84c8d',
} as const;
