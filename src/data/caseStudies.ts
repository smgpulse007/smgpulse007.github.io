export type Artifact = {
  title: string;
  type: 'gif' | 'image' | 'svg' | 'json' | 'table' | 'panel';
  src?: string;
  alt?: string;
  body?: string;
  code?: string;
};

export type CaseStudyDetail = {
  slug: string;
  thesis: string;
  systemType: string;
  primaryUsers: string;
  artifactMaturity: string;
  atAGlance: Array<{ label: string; value: string }>;
  proofStrip: Array<{ label: string; value: string }>;
  walkthrough: Array<{ title: string; body: string }>;
  decisions: Array<{ title: string; body: string }>;
  interviewProof: string[];
  artifacts: Artifact[];
};

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  'hospital-readmission-fhir-ml-api': {
    slug: 'hospital-readmission-fhir-ml-api',
    thesis: 'Synthetic FHIR scoring service that turns transition-of-care risk modeling into an inspectable API contract.',
    systemType: 'FHIR-style ML API',
    primaryUsers: 'Care management, ML platform, clinical analytics reviewers',
    artifactMaturity: 'Synthetic public-safe API reference',
    atAGlance: [
      { label: 'Input contract', value: 'Patient, Encounter, Condition, MedicationRequest, Observation, Procedure' },
      { label: 'Output', value: 'Risk probability, band, and top contributing features' },
      { label: 'Runtime', value: 'FastAPI, tests, Docker, model-card notes' },
    ],
    proofStrip: [
      { label: 'Feature groups', value: 'age, utilization, comorbidity, medications, labs, discharge' },
      { label: 'Score surface', value: 'probability-like risk + low/medium/high band' },
      { label: 'Proof assets', value: 'sample JSON response, model card, architecture notes' },
    ],
    walkthrough: [
      { title: 'FHIR bundle intake', body: 'The API starts from synthetic FHIR-style resources so the demo can show healthcare data contracts without patient data.' },
      { title: 'Feature matrix', body: 'The parser converts demographics, utilization, comorbidities, labs, and discharge context into a repeatable feature vector.' },
      { title: 'Explainable scoring', body: 'The response includes risk band and top contributors, which makes the output reviewable instead of a black-box score.' },
      { title: 'MLOps boundary', body: 'Tests, Docker, model-card text, and privacy docs communicate the intended production shape without claiming clinical validation.' },
    ],
    decisions: [
      { title: 'Synthetic data by design', body: 'The repo keeps the FHIR contract visible while avoiding PHI, claims data, or employer workflows.' },
      { title: 'API-first presentation', body: 'FastAPI endpoints make the model usable by downstream services and easy to verify with examples.' },
      { title: 'Transparent model stand-in', body: 'A deterministic scorer keeps the portfolio demo portable while preserving the feature contract a governed model would consume.' },
    ],
    interviewProof: [
      'Can discuss standards-aware healthcare ML packaging beyond notebooks.',
      'Can explain feature contracts and model-card boundaries for regulated domains.',
      'Can separate public demo proof from real clinical validation requirements.',
    ],
    artifacts: [
      {
        title: 'Sample high-risk API response',
        type: 'json',
        src: '/assets/case-studies/readmission/sample-response.json',
        code: `{
  "model_version": "readmission-risk-demo-v0.1.0",
  "readmission_risk_probability": 0.98,
  "risk_band": "high",
  "top_features": [
    { "feature": "prior_admissions_180d", "direction": "increases_risk" },
    { "feature": "comorbidity_count", "direction": "increases_risk" },
    { "feature": "age", "direction": "increases_risk" }
  ]
}`,
      },
      {
        title: 'Feature engineering matrix',
        type: 'table',
        body: 'Demographics, utilization, comorbidity burden, medications, abnormal labs, procedures, and discharge disposition feed the readmission feature contract.',
      },
    ],
  },
  'hl7-ai-challenge': {
    slug: 'hl7-ai-challenge',
    thesis: 'Event-driven healthcare quality platform that moves from HL7 messages to FHIR resources, predictive risk, SMART/CDS workflow, and operational dashboards.',
    systemType: 'Event-driven interoperability platform',
    primaryUsers: 'Quality teams, care orchestration teams, interoperability reviewers',
    artifactMaturity: 'Challenge submission architecture package',
    atAGlance: [
      { label: 'Standards', value: 'HL7 v2.x, FHIR R4, SMART on FHIR, CDS Hooks' },
      { label: 'Services', value: 'HL7 processing, risk prediction, care orchestration, dashboard' },
      { label: 'Infrastructure', value: 'RabbitMQ, PostgreSQL, Redis, Docker' },
    ],
    proofStrip: [
      { label: 'Architecture assets', value: 'High-level, low-level, and swimlane diagrams' },
      { label: 'Risk layer', value: 'XGBoost-style care-gap prioritization' },
      { label: 'Workflow layer', value: 'SMART/CDS provider action surface' },
    ],
    walkthrough: [
      { title: 'Event intake', body: 'HL7-style ADT, ORU, and MDM flows enter through an event-processing layer rather than a batch-only process.' },
      { title: 'FHIR transformation', body: 'Messages are mapped toward Patient, RiskAssessment, CarePlan, Task, and related FHIR R4 resource shapes.' },
      { title: 'Risk and orchestration', body: 'Risk services prioritize non-compliance/care-gap attention while orchestration services create reviewable work.' },
      { title: 'Provider workflow', body: 'SMART on FHIR and CDS Hooks patterns make the demo about workflow integration, not only model scoring.' },
    ],
    decisions: [
      { title: 'Event-driven design', body: 'RabbitMQ makes the platform shape closer to real healthcare integration where events arrive asynchronously.' },
      { title: 'Standards before models', body: 'HL7/FHIR/SMART/CDS choices keep the AI layer anchored to existing healthcare interoperability patterns.' },
      { title: 'Challenge-safe framing', body: 'The portfolio shows architecture and synthetic/sample behavior without publishing sensitive implementation details.' },
    ],
    interviewProof: [
      'Can reason about healthcare interoperability beyond a single API endpoint.',
      'Can explain how standards, event queues, risk scoring, and provider workflow fit together.',
      'Can translate challenge artifacts into public-safe technical evidence.',
    ],
    artifacts: [
      { title: 'High-level architecture', type: 'image', src: '/assets/case-studies/hl7/architecture-high-level.png', alt: 'HL7 AI Challenge high-level architecture diagram' },
      { title: 'Service-level architecture', type: 'image', src: '/assets/case-studies/hl7/architecture-low-level.png', alt: 'HL7 AI Challenge low-level architecture diagram' },
      { title: 'Data-flow swimlane', type: 'image', src: '/assets/case-studies/hl7/data-flow-swimlane.png', alt: 'HL7 AI Challenge data-flow swimlane diagram' },
    ],
  },
  'llm-steering': {
    slug: 'llm-steering',
    thesis: 'Activation-space behavior control workbench for local open-source SLMs, with pre/post hook comparison and explainable experiment controls.',
    systemType: 'Local-first LLM research workbench',
    primaryUsers: 'AI engineers, interpretability researchers, LLMOps reviewers',
    artifactMaturity: 'Functional workbench shell with reproducible demos',
    atAGlance: [
      { label: 'Method', value: 'ActAdd-style steering vectors' },
      { label: 'Intervention', value: 'Pre-activation and post-activation hooks' },
      { label: 'Product layer', value: 'FastAPI API plus React workbench UI' },
    ],
    proofStrip: [
      { label: 'Runtime', value: 'Hugging Face + PyTorch' },
      { label: 'UI', value: 'Vite + React + TypeScript workbench' },
      { label: 'Evidence', value: 'Workbench GIFs, hook diagrams, method docs' },
    ],
    walkthrough: [
      { title: 'Prompt-pair setup', body: 'Positive and negative examples create a direction in activation space for the behavior being studied.' },
      { title: 'Vector extraction', body: 'The workbench supports ActAdd-style steering vectors and metadata that explain layer, coefficient, and hook stage.' },
      { title: 'Hook comparison', body: 'Pre-activation and post-activation hooks are compared because the same direction can behave differently depending on where it enters the model.' },
      { title: 'Workbench review', body: 'FastAPI and React turn the method into an operational console with model support states and result comparison.' },
    ],
    decisions: [
      { title: 'Local-first research path', body: 'The system keeps model experimentation local while still making UI/API contracts explicit.' },
      { title: 'Explain limitations visibly', body: 'Unsupported models and unvalidated routes are shown rather than hidden behind optimistic controls.' },
      { title: 'Research-to-product bridge', body: 'The project makes the math, hook sites, prompts, and outputs visible in one loop.' },
    ],
    interviewProof: [
      'Can explain why prompting is not the only control surface for LLM behavior.',
      'Can discuss hidden-state access, vector extraction, and hook-stage tradeoffs.',
      'Can productize research workflows without overclaiming model-safety guarantees.',
    ],
    artifacts: [
      { title: 'Workbench UI overview', type: 'gif', src: '/assets/case-studies/llm-steering/workbench-ui-overview.gif', alt: 'Animated LLM steering workbench UI overview' },
      { title: 'Activation steering workflow', type: 'svg', src: '/assets/case-studies/llm-steering/activation-steering-flow.svg', alt: 'Activation steering workflow diagram' },
      { title: 'Pre/post hook locations', type: 'svg', src: '/assets/case-studies/llm-steering/pre-post-hooking.svg', alt: 'Pre and post activation hook diagram' },
      { title: 'Pre-vs-post comparison demo', type: 'gif', src: '/assets/case-studies/llm-steering/pre-vs-post-demo.gif', alt: 'Pre vs post activation steering comparison demo' },
    ],
  },
  'agentic-alpha-engine': {
    slug: 'agentic-alpha-engine',
    thesis: 'Local-first agentic market-intelligence workbench with ingestion, storage fabric, planner agents, verification, and structured Fusion reports.',
    systemType: 'Agentic research infrastructure',
    primaryUsers: 'AI platform engineers, research analysts, agent workflow reviewers',
    artifactMaturity: 'Docker-first local research stack',
    atAGlance: [
      { label: 'Orchestration', value: 'Planner, tool calls, workflow state, verification' },
      { label: 'Storage fabric', value: 'Postgres, Redis, Qdrant, MinIO, OpenSearch' },
      { label: 'Inference', value: 'Ollama/local model experimentation' },
    ],
    proofStrip: [
      { label: 'Repo assets', value: 'Terminal demo, UI demo, UI screenshot' },
      { label: 'Report shape', value: 'Structured Fusion reports' },
      { label: 'Boundary', value: 'Engineering demo, not financial advice' },
    ],
    walkthrough: [
      { title: 'Signal ingestion', body: 'Public market and macro signals move through explicit ingestion adapters so source boundaries are inspectable.' },
      { title: 'Normalization and memory', body: 'Evidence lands in relational, vector, object, cache, and search layers for different retrieval needs.' },
      { title: 'Agent planner', body: 'The planner coordinates tool use, state, retrieval, and synthesis instead of relying on one free-form prompt.' },
      { title: 'Verification and Fusion report', body: 'Structured outputs are constrained by verification rules before being promoted to report/API/UI surfaces.' },
    ],
    decisions: [
      { title: 'Use finance as an architecture testbed', body: 'The domain forces evidence, retrieval, time sensitivity, and report discipline without implying trading automation.' },
      { title: 'Separate memory responsibilities', body: 'Postgres, Redis, Qdrant, MinIO, and OpenSearch make state and retrieval responsibilities explicit.' },
      { title: 'Keep it local-first', body: 'Docker and Ollama keep the stack inspectable and reproducible on a developer machine.' },
    ],
    interviewProof: [
      'Can design agentic systems with state, tools, storage, and verification.',
      'Can discuss why retrieval/storage layers are not interchangeable.',
      'Can frame quant/finance systems responsibly while showing serious engineering depth.',
    ],
    artifacts: [
      { title: 'AlphaQuant UI demo', type: 'gif', src: '/assets/case-studies/alphaquant/ui-demo.gif', alt: 'AlphaQuant UI demo GIF' },
      { title: 'Terminal setup demo', type: 'gif', src: '/assets/case-studies/alphaquant/terminal-demo.gif', alt: 'AlphaQuant terminal setup demo GIF' },
      { title: 'Workbench screenshot', type: 'image', src: '/assets/case-studies/alphaquant/ui-screenshot.png', alt: 'AlphaQuant UI screenshot' },
    ],
  },
  'nfl-sports-forecasting': {
    slug: 'nfl-sports-forecasting',
    thesis: 'Historical sports forecasting lab that emphasizes baselines, calibration, ensembles, and backtesting discipline.',
    systemType: 'Forecasting and backtesting pipeline',
    primaryUsers: 'Data scientists, forecasting reviewers, model-risk interviewers',
    artifactMaturity: 'Archived historical experiment',
    atAGlance: [
      { label: 'Dataset', value: '6,991 games, 1999-2024 cited in README' },
      { label: 'Models', value: 'Elo, XGBoost, logistic regression, ensemble' },
      { label: 'Evaluation', value: 'Accuracy, Brier score, backtesting' },
    ],
    proofStrip: [
      { label: '2024 ensemble', value: '69.8% accuracy / 0.1986 Brier' },
      { label: 'Best 2024 Brier', value: 'Ensemble 0.1986' },
      { label: 'Responsible use', value: 'Historical analytics only' },
    ],
    walkthrough: [
      { title: 'Historical feature base', body: 'Completed game data and team features establish the modeling substrate before any ML model is used.' },
      { title: 'Baseline first', body: 'Elo gives an interpretable reference point so complex models must earn their place.' },
      { title: 'Model comparison', body: 'XGBoost and logistic regression are compared against Elo and then combined through an ensemble.' },
      { title: 'Calibration and backtesting', body: 'Brier score and historical backtests keep the discussion focused on probability quality, not only headline accuracy.' },
    ],
    decisions: [
      { title: 'Archived on purpose', body: 'The project is positioned as historical model evidence, not an active betting product.' },
      { title: 'Keep the original domain honest', body: 'The site uses sports forecasting externally and preserves responsible-use language.' },
      { title: 'Show the table', body: 'The model comparison table is more credible than another generic AI card.' },
    ],
    interviewProof: [
      'Can discuss baselines, calibration, Brier score, and backtesting.',
      'Can handle sensitive domains without promotional framing.',
      'Can compare statistical and ML models with evidence rather than hype.',
    ],
    artifacts: [
      {
        title: '2024 model comparison',
        type: 'table',
        body: 'README-reported 2024 test set: Elo 68.4% / 0.2088 Brier, XGBoost 69.5% / 0.2013, Logistic Regression 70.2% / 0.2010, Ensemble 69.8% / 0.1986.',
      },
      {
        title: 'Backtesting evidence',
        type: 'json',
        src: '/assets/case-studies/nfl/backtest-2024.json',
        code: `{
  "season": 2024,
  "training_data": "1999-2023",
  "models": {
    "elo": { "accuracy": 0.684 },
    "xgboost": { "accuracy": 0.695 },
    "logistic": { "accuracy": 0.702 },
    "ensemble": { "accuracy": 0.698 }
  }
}`,
      },
    ],
  },
  'freshtrack-ai-module': {
    slug: 'freshtrack-ai-module',
    thesis: 'OCR plus optional LLM parsing service that turns noisy receipt images into structured, confidence-scored JSON contracts.',
    systemType: 'Document/vision extraction API',
    primaryUsers: 'Product engineers, document AI reviewers, API consumers',
    artifactMaturity: 'Production-style reference implementation',
    atAGlance: [
      { label: 'Input', value: 'Receipt/document image' },
      { label: 'Pipeline', value: 'Preprocessing, Tesseract OCR, cleanup, optional LLM parser' },
      { label: 'Output', value: 'Structured JSON with confidence fields' },
    ],
    proofStrip: [
      { label: 'API', value: 'FastAPI docs and endpoint contract' },
      { label: 'Validation', value: 'OCR, matching, LLM service tests' },
      { label: 'Asset', value: 'Sample receipt image and output docs' },
    ],
    walkthrough: [
      { title: 'Image intake', body: 'The service starts with a receipt-like image and keeps the extraction path API-first.' },
      { title: 'OCR cleanup', body: 'Tesseract output is cleaned to reduce store metadata, payment lines, and formatting noise.' },
      { title: 'Optional LLM parser', body: 'LLM-assisted parsing is used as a false-positive reduction aid when available.' },
      { title: 'JSON contract', body: 'Confidence-scored output is designed for downstream UI or database integration.' },
    ],
    decisions: [
      { title: 'Confidence over certainty', body: 'The API exposes confidence so downstream workflows can review or route uncertain outputs.' },
      { title: 'Local/service variants', body: 'Docker variants and optional LLM paths keep the system adaptable to different runtime constraints.' },
      { title: 'Transferable pattern', body: 'The same OCR-to-JSON discipline transfers to regulated document extraction workflows.' },
    ],
    interviewProof: [
      'Can reason about OCR failure modes and structured extraction.',
      'Can design API contracts for noisy document intelligence.',
      'Can combine deterministic parsing and optional LLM assistance responsibly.',
    ],
    artifacts: [
      { title: 'Sample receipt artifact', type: 'image', src: '/assets/case-studies/freshtrack/sample-receipt.jpg', alt: 'Sample receipt image used for OCR tests' },
      {
        title: 'LLM-enhanced output shape',
        type: 'json',
        code: `{
  "items": [
    { "name": "Bread", "confidence": "high" },
    { "name": "Peanut Butter", "confidence": "high" },
    { "name": "Coffee", "confidence": "high" }
  ],
  "ocr_engine": "Tesseract"
}`,
      },
    ],
  },
  'local-document-ai-extraction': {
    slug: 'local-document-ai-extraction',
    thesis: 'Local PDF extraction workflow that keeps document parsing, chunking, prompting, and review close to the analyst.',
    systemType: 'Private document AI pattern',
    primaryUsers: 'Analysts, document reviewers, regulated-workflow engineers',
    artifactMaturity: 'Local-first extraction pattern',
    atAGlance: [
      { label: 'Input', value: 'Local PDF upload' },
      { label: 'Processing', value: 'PDFPlumber, chunking, prompt assembly' },
      { label: 'Inference', value: 'Ollama via LangChain' },
    ],
    proofStrip: [
      { label: 'Boundary', value: 'Local/private inference path' },
      { label: 'UI', value: 'Streamlit review surface' },
      { label: 'Pattern', value: 'PDF -> chunks -> prompt -> result' },
    ],
    walkthrough: [
      { title: 'PDF parse', body: 'Documents are parsed locally before any prompt is assembled.' },
      { title: 'Chunking', body: 'Extracted text is chunked so criteria-driven prompts remain inspectable.' },
      { title: 'Local model call', body: 'LangChain coordinates calls to a local Ollama model rather than an automatic remote service.' },
      { title: 'Reviewable output', body: 'Streamlit keeps extraction results in front of a human reviewer.' },
    ],
    decisions: [
      { title: 'Privacy-first shape', body: 'The architecture is useful in regulated contexts where document residency matters.' },
      { title: 'Workflow controls over magic', body: 'The value is the parse/chunk/prompt/review loop, not a claim that the model is always correct.' },
      { title: 'Portable prototype', body: 'Streamlit and Ollama keep the workflow easy to run locally.' },
    ],
    interviewProof: [
      'Can design local/private document AI workflows.',
      'Can explain chunking and prompt assembly tradeoffs.',
      'Can keep human review in regulated extraction systems.',
    ],
    artifacts: [
      { title: 'Local inference boundary', type: 'panel', body: 'PDFs stay in the local workflow: parse -> chunk -> prompt -> Ollama -> review UI. This is the architectural point of the repo.' },
    ],
  },
  'chatwithwiki-azureml': {
    slug: 'chatwithwiki-azureml',
    thesis: 'Prompt Flow RAG demo showing retrieval, Jinja prompt construction, cloud workflow nodes, and answer review over public content.',
    systemType: 'Cloud RAG workflow demo',
    primaryUsers: 'ML engineers, RAG reviewers, prompt-flow practitioners',
    artifactMaturity: 'Supporting RAG demo',
    atAGlance: [
      { label: 'Source', value: 'Public wiki-style content' },
      { label: 'Workflow', value: 'Retriever, Prompt Flow, Jinja template, LLM call' },
      { label: 'Review', value: 'Grounded answer artifact' },
    ],
    proofStrip: [
      { label: 'Cloud context', value: 'Azure ML Prompt Flow' },
      { label: 'Prompt layer', value: 'Jinja templates' },
      { label: 'Pattern', value: 'retrieval + generation + review' },
    ],
    walkthrough: [
      { title: 'Public content', body: 'The demo avoids private knowledge bases and keeps the source context safe for portfolio use.' },
      { title: 'Retrieval', body: 'Relevant passages are selected before prompt assembly.' },
      { title: 'Prompt Flow graph', body: 'Workflow nodes make the RAG pipeline visible rather than notebook-only.' },
      { title: 'Review', body: 'Generated answers are treated as artifacts to inspect against retrieved context.' },
    ],
    decisions: [
      { title: 'Cloud RAG counterpart', body: 'This complements the local document AI repo by showing an Azure ML workflow path.' },
      { title: 'Template discipline', body: 'Jinja prompt templates keep the prompt layer explicit.' },
      { title: 'Secondary placement', body: 'The project is useful as RAG breadth, not as the strongest flagship system.' },
    ],
    interviewProof: [
      'Can discuss RAG workflow decomposition.',
      'Can explain prompt templating and retrieval boundaries.',
      'Can position cloud and local document AI patterns side by side.',
    ],
    artifacts: [
      { title: 'Prompt-flow graph', type: 'panel', body: 'Public content -> retriever -> Prompt Flow -> Jinja template -> LLM call -> grounded answer artifact -> review.' },
    ],
  },
};

export function getCaseStudyDetail(slug: string) {
  return caseStudyDetails[slug];
}
