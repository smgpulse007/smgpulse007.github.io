export type ProjectMaturity =
  | 'flagship'
  | 'polished demo'
  | 'experiment'
  | 'archived experiment'
  | 'research note'
  | 'foundations';

export type ProjectTier = 'featured' | 'library' | 'archive';

export type ProjectCategory =
  | 'Healthcare AI'
  | 'Insurance / Claims'
  | 'Agentic AI'
  | 'Document AI / RAG'
  | 'Quant / Finance'
  | 'Sports Forecasting'
  | 'MLOps / Infrastructure'
  | 'Research / Data Science';

export type DiagramVariant =
  | 'readmission'
  | 'hl7'
  | 'llm-steering'
  | 'document-ai'
  | 'alphaquant'
  | 'nfl'
  | 'freshtrack'
  | 'chatwithwiki';

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  domain: string;
  categories: ProjectCategory[];
  maturity: ProjectMaturity;
  tier: ProjectTier;
  featured: boolean;
  statusNote: string;
  summary: string;
  problem: string;
  systemOverview: string;
  architectureSummary: string;
  workflow: string[];
  modelDesign: string[];
  validation: string[];
  deployment: string[];
  safetyNote: string;
  employerValue: string[];
  whatIBuilt: string[];
  techStack: string[];
  metrics?: Array<{ value: string; label: string }>;
  image: string;
  githubUrl: string;
  caseStudyUrl?: string;
  architectureVariant?: DiagramVariant;
};

export const projectFilters: Array<'All' | ProjectCategory> = [
  'All',
  'Healthcare AI',
  'Insurance / Claims',
  'Agentic AI',
  'Document AI / RAG',
  'Quant / Finance',
  'Sports Forecasting',
  'MLOps / Infrastructure',
  'Research / Data Science',
];

const sharedPrivacy = 'Public-safe portfolio framing only. Do not use sensitive records, secrets, PHI, PII, or employer-confidential data.';

export const projects: Project[] = [
  {
    slug: 'hospital-readmission-fhir-ml-api',
    title: 'Hospital Readmission FHIR ML API',
    shortTitle: 'Readmission FHIR ML API',
    domain: 'Healthcare AI / FHIR ML API',
    categories: ['Healthcare AI', 'MLOps / Infrastructure', 'Research / Data Science'],
    maturity: 'flagship',
    tier: 'featured',
    featured: true,
    statusNote: 'Synthetic, public-safe flagship system',
    summary:
      'Synthetic FHIR-style scoring service for 30-day readmission risk with schema validation, feature extraction, explainability, tests, model-card framing, and Dockerized FastAPI deployment.',
    problem:
      'Transition-of-care teams need risk signals that move through APIs, contracts, and review workflows instead of disconnected notebooks. This repo demonstrates that system shape with synthetic FHIR-style bundles.',
    systemOverview:
      'Synthetic Patient, Encounter, Condition, MedicationRequest, Observation, and Procedure resources are validated, parsed into features, scored for risk, and returned with explanation payloads that a care-management workflow could inspect.',
    architectureSummary:
      'Synthetic FHIR bundle -> schema validation -> parser -> feature builder -> risk scorer -> explanation payload -> FastAPI response -> tests and model-card documentation.',
    workflow: [
      'Ingest a synthetic FHIR bundle through FastAPI request models.',
      'Validate required resources and normalize clinical/utilization fields.',
      'Score 30-day readmission risk with probability, band, and top factors.',
      'Expose model-card and example-schema endpoints for inspectability.',
    ],
    modelDesign: [
      'XGBoost-style risk-scoring pattern with transparent feature names.',
      'Feature groups cover demographics, utilization, comorbidity, medication, lab, discharge, and procedure signals.',
      'Output is API-friendly: risk probability, risk band, and contribution details.',
    ],
    validation: [
      'API, schema, feature extraction, and response contracts are covered by tests.',
      'Synthetic examples support repeatable local demonstrations.',
      'Public demo assumptions are separated from clinical deployment requirements.',
    ],
    deployment: ['FastAPI health and metadata endpoints.', 'Dockerfile and compose support local runtime verification.', 'CI-oriented test and compile paths.'],
    safetyNote: 'Synthetic portfolio demo only. No PHI, PII, or clinical decision-support deployment is represented.',
    employerValue: ['Healthcare ML API packaging.', 'Standards-aware ingestion.', 'Explainable feature contracts.', 'Privacy-safe synthetic-data engineering.'],
    whatIBuilt: ['FastAPI endpoints.', 'FHIR-style parser and feature builder.', 'Transparent risk scorer.', 'Synthetic examples, Docker packaging, CI, and model-card docs.'],
    techStack: ['FastAPI', 'Python', 'FHIR-style JSON', 'XGBoost pattern', 'pytest', 'Docker', 'CI'],
    metrics: [{ value: 'FHIR', label: 'synthetic bundle contract' }, { value: 'API', label: 'score + explanation response' }, { value: 'CI', label: 'tests and compile checks' }],
    image: '/assets/project-readmission.svg',
    githubUrl: 'https://github.com/smgpulse007/hospital-readmission-fhir-ml-api',
    caseStudyUrl: '/projects/hospital-readmission-fhir-ml-api/',
    architectureVariant: 'readmission',
  },
  {
    slug: 'hl7-ai-challenge',
    title: 'HL7 AI Challenge Platform',
    shortTitle: 'HL7 AI Challenge',
    domain: 'Healthcare interoperability / quality intelligence',
    categories: ['Healthcare AI', 'Insurance / Claims', 'Agentic AI', 'MLOps / Infrastructure'],
    maturity: 'flagship',
    tier: 'featured',
    featured: true,
    statusNote: 'Public challenge system with synthetic/sample boundaries',
    summary:
      'Event-driven healthcare AI platform demonstrating HL7/FHIR interoperability, quality intelligence, SMART/CDS patterns, orchestration services, RabbitMQ, Redis, Postgres, and Dockerized infrastructure.',
    problem:
      'Clinical quality and care-gap workflows often depend on fragmented events and manual chasing. This challenge platform shows how HL7-style events can become FHIR-aligned resources and downstream intelligence.',
    systemOverview:
      'The platform frames event ingestion, FHIR mapping, quality logic, risk intelligence, care orchestration, and dashboards as service boundaries rather than a monolithic demo.',
    architectureSummary:
      'HL7-style events -> event gateway -> FHIR mapper -> quality intelligence -> risk scoring -> CDS/SMART workflow -> dashboard and audit outputs.',
    workflow: ['Receive HL7-style events.', 'Map payloads into FHIR R4-oriented resources.', 'Score risk and quality signals.', 'Surface outputs through dashboard and CDS-style integration points.'],
    modelDesign: ['Quality intelligence combines rules, risk features, and orchestration.', 'FHIR, SMART on FHIR, and CDS Hooks are system-design anchors.', 'Synthetic/sample boundaries are documented as part of the architecture.'],
    validation: ['Docker Compose configuration validates the service graph.', 'Service and demo scripts compile.', 'Live demo tests require the documented local stack.'],
    deployment: ['RabbitMQ, Postgres, Redis, dashboard, and services are represented locally.', 'Environment-driven configuration avoids hardcoded internal hosts or credentials.'],
    safetyNote: 'Public challenge/demo code using synthetic or sample data only. Not a production clinical decision system.',
    employerValue: ['Event-driven healthcare interoperability design.', 'AI workflows tied to HL7, FHIR, SMART, and CDS patterns.', 'Public-safe regulated-system storytelling.'],
    whatIBuilt: ['Architecture notes.', 'Dockerized service graph.', 'Care-gap intelligence framing.', 'Environment-driven demo configuration.'],
    techStack: ['HL7 v2.x', 'FHIR R4', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Docker', 'SMART/CDS'],
    metrics: [{ value: 'HL7', label: 'event ingestion' }, { value: 'FHIR', label: 'mapping layer' }, { value: 'CDS', label: 'workflow pattern' }],
    image: '/assets/project-hl7.svg',
    githubUrl: 'https://github.com/smgpulse007/hl7-ai-challenge',
    caseStudyUrl: '/projects/hl7-ai-challenge/',
    architectureVariant: 'hl7',
  },
  {
    slug: 'llm-steering',
    title: 'LLM Steering Lab',
    shortTitle: 'LLM Steering',
    domain: 'LLMOps / interpretability / local-first AI',
    categories: ['Agentic AI', 'Research / Data Science', 'MLOps / Infrastructure'],
    maturity: 'flagship',
    tier: 'featured',
    featured: true,
    statusNote: 'Research engineering lab with explicit limitations',
    summary:
      'Local-first activation steering and representation-engineering lab with ActAdd-style vector extraction, FastAPI workbench APIs, React UI controls, model support notes, and reproducible artifacts.',
    problem:
      'LLM control work can become vague when reduced to prompt examples. This lab treats behavior steering as reproducible experiments, model registries, hook points, UI controls, and documented limitations.',
    systemOverview:
      'Prompt-pair datasets generate steering vectors that can be applied through model hook paths and compared against baselines in a FastAPI and React workbench.',
    architectureSummary:
      'Prompt-pair data -> steering-vector extraction -> model registry -> activation hook -> comparison run -> FastAPI workbench -> React controls.',
    workflow: ['Prepare contrastive prompt pairs.', 'Extract steering vectors.', 'Apply vectors through activation hooks.', 'Compare steered and baseline outputs.'],
    modelDesign: ['ActAdd-style extraction is treated as an experiment, not a safety guarantee.', 'Model support, steering controls, and run evidence are separated.', 'Research notes document fragility and limitations.'],
    validation: ['Python source, scripts, and tests compile.', 'Full model runs depend on local model availability.', 'Safety gates and unsupported-model limitations are documented.'],
    deployment: ['FastAPI experiment API.', 'React/TypeScript controls.', 'Local model execution for privacy-sensitive experimentation.'],
    safetyNote: 'Research engineering lab with public artifacts and explicit limitations. It is not a production model-safety guarantee.',
    employerValue: ['Emerging AI research converted into inspectable tooling.', 'Local-first AI experimentation.', 'Evaluation and limitation discipline.'],
    whatIBuilt: ['Activation steering starter kit.', 'FastAPI workbench API and React UI.', 'Research notes and model support matrix.'],
    techStack: ['PyTorch', 'Hugging Face', 'FastAPI', 'React', 'TypeScript', 'Ollama', 'LLMOps'],
    metrics: [{ value: 'ActAdd', label: 'steering method' }, { value: 'local', label: 'runtime-first experiments' }, { value: 'UI', label: 'evidence surface' }],
    image: '/assets/project-llm-steering.svg',
    githubUrl: 'https://github.com/smgpulse007/llm-steering',
    caseStudyUrl: '/projects/llm-steering/',
    architectureVariant: 'llm-steering',
  },
  {
    slug: 'local-document-ai-extraction',
    title: 'Local Document AI Extraction',
    shortTitle: 'Local Document AI',
    domain: 'Document AI / local LLM extraction',
    categories: ['Document AI / RAG', 'Agentic AI', 'MLOps / Infrastructure'],
    maturity: 'polished demo',
    tier: 'featured',
    featured: true,
    statusNote: 'Local-first document AI pattern',
    summary:
      'Private/local PDF extraction pattern using PDF parsing, chunking, LangChain, Streamlit, Dockerized Ollama, analyst-authored criteria, and reviewable outputs.',
    problem: 'Regulated document workflows need extraction assistance without automatically sending sensitive files to remote services.',
    systemOverview:
      'The app parses uploaded PDFs, chunks text, assembles criteria-driven prompts, calls local Ollama models through LangChain, and displays outputs in Streamlit for analyst review.',
    architectureSummary:
      'PDF upload -> PDFPlumber extraction -> chunking -> prompt assembly -> local Ollama/LangChain call -> structured answer -> Streamlit review surface.',
    workflow: ['Upload a sample PDF.', 'Parse and chunk text locally.', 'Assemble prompts with criteria and context.', 'Return extraction results for inspection.'],
    modelDesign: ['LangChain coordinates local Ollama inference.', 'Chunking and prompt assembly are explicit.', 'The UI keeps output reviewable.'],
    validation: ['Prompt and memory smoke tests passed locally.', 'Python compile checks pass.', 'Full extraction requires Docker, Ollama, and a local model.'],
    deployment: ['Streamlit analyst interface.', 'Docker/Ollama local execution.', 'Runtime setup keeps private files outside version control.'],
    safetyNote: 'Use synthetic/sample documents only. Uploaded private documents should never be committed.',
    employerValue: ['Local/private document AI workflow design.', 'RAG and chunking primitives.', 'Regulated-document relevance.'],
    whatIBuilt: ['Streamlit UI.', 'PDF extraction and chunking path.', 'Ollama client integration.', 'Privacy-preserving document AI framing.'],
    techStack: ['Ollama', 'LangChain', 'Streamlit', 'PDFPlumber', 'Docker', 'Python'],
    metrics: [{ value: 'local', label: 'LLM path' }, { value: 'PDF', label: 'extract + chunk' }, { value: 'review', label: 'human-readable UI' }],
    image: '/assets/project-document-ai.svg',
    githubUrl: 'https://github.com/smgpulse007/ollama_poc',
    caseStudyUrl: '/projects/local-document-ai-extraction/',
    architectureVariant: 'document-ai',
  },
  {
    slug: 'agentic-alpha-engine',
    title: 'Agentic Alpha Engine',
    shortTitle: 'AlphaQuant',
    domain: 'Agentic market intelligence / quant research',
    categories: ['Quant / Finance', 'Agentic AI', 'MLOps / Infrastructure'],
    maturity: 'flagship',
    tier: 'featured',
    featured: true,
    statusNote: 'Engineering demo; not investment advice',
    summary:
      'Local-first agentic market intelligence workbench with public-signal ingestion, retrieval/storage services, planner agents, verification rules, structured reports, and Docker architecture.',
    problem:
      'Research workflows need ingestion boundaries, storage, retrieval, planning, verification, state, and report contracts before any conclusion is trusted.',
    systemOverview:
      'Finance-like public data is used as the domain for broader agentic-system architecture: adapters collect evidence, services persist it, agents plan tool calls, verification constrains outputs, and structured reports flow to API/UI layers.',
    architectureSummary:
      'Public market/macro data -> ingestion adapters -> normalization -> vector/object/search stores -> agent planner -> tool calls -> verification -> structured report/API/UI.',
    workflow: ['Collect public signals.', 'Normalize and persist artifacts.', 'Coordinate retrieval and tools with an agent planner.', 'Run verification before structured reporting.'],
    modelDesign: ['Planner, tools, retrieval, state, and verification are separated.', 'Postgres, Redis, Qdrant, MinIO, and OpenSearch represent distinct memory responsibilities.', 'Local inference avoids implying live trading automation.'],
    validation: ['Python source and scripts compile.', 'Runtime paths depend on local service availability.', 'README limits financial interpretation.'],
    deployment: ['FastAPI API and worker entry points.', 'Docker Compose local research stack.', 'Separated state, storage, and retrieval services.'],
    safetyNote: 'Research/engineering demo only. Not financial advice, investment advice, or live trading.',
    employerValue: ['Agentic workflow orchestration.', 'Stateful multi-service architecture.', 'Quant breadth with responsible-use boundaries.'],
    whatIBuilt: ['API and worker entry points.', 'Agent orchestration and verification.', 'Storage/retrieval adapters.', 'Public non-advice framing.'],
    techStack: ['FastAPI', 'Docker', 'Postgres', 'Redis', 'Qdrant', 'MinIO', 'OpenSearch', 'Ollama'],
    metrics: [{ value: 'agents', label: 'planner + tools' }, { value: '5', label: 'storage/retrieval layers' }, { value: 'verify', label: 'guarded synthesis' }],
    image: '/assets/project-alphaquant.svg',
    githubUrl: 'https://github.com/smgpulse007/AlphaQuant',
    caseStudyUrl: '/projects/agentic-alpha-engine/',
    architectureVariant: 'alphaquant',
  },
  {
    slug: 'nfl-sports-forecasting',
    title: 'NFL Sports Forecasting & Backtesting Lab',
    shortTitle: 'NFL Forecasting Lab',
    domain: 'Sports forecasting / model calibration',
    categories: ['Sports Forecasting', 'Research / Data Science', 'MLOps / Infrastructure'],
    maturity: 'experiment',
    tier: 'featured',
    featured: true,
    statusNote: 'Historical forecasting lab; not betting advice',
    summary:
      'Sports analytics forecasting and backtesting lab using 25+ years of historical NFL data, Elo baselines, XGBoost, logistic regression, ensembles, calibration, and probability-quality evaluation.',
    problem: 'Forecasting systems are credible only when baselines, model comparisons, calibration, and historical backtests are visible.',
    systemOverview:
      'Historical games and team statistics feed a feature pipeline. Elo provides an interpretable baseline, XGBoost and logistic regression provide model alternatives, ensembles combine signals, and backtesting evaluates historical decisions.',
    architectureSummary:
      'Historical games + team stats + odds/features -> feature builder -> Elo baseline -> ML models -> ensemble/calibration -> backtesting -> dashboard/results.',
    workflow: ['Load historical NFL games.', 'Build Elo and ML features.', 'Train logistic regression, XGBoost, and ensembles.', 'Backtest probability outputs over completed seasons.'],
    modelDesign: ['Elo guards against overvaluing complex models.', 'Logistic regression and XGBoost estimate probabilities.', 'Calibration checks probability quality rather than only accuracy.'],
    validation: ['README reports held-out season metrics including accuracy and Brier score.', 'Backtesting evaluates historical outcomes.', 'Historical-use boundaries are explicit.'],
    deployment: ['Python modeling pipeline.', 'Historical lab positioning.', 'No live wagering or betting automation.'],
    safetyNote: 'Historical and educational sports analytics only. Not gambling advice, not betting advice, and not a betting product.',
    employerValue: ['Forecasting discipline.', 'Baselines, calibration, ensembles, and backtests.', 'Responsible framing for a sensitive analytics domain.'],
    whatIBuilt: ['Feature-building workflow.', 'Elo, logistic regression, XGBoost, and ensembles.', 'Backtesting and allocation experiment framing.'],
    techStack: ['Python', 'Elo', 'XGBoost', 'Logistic Regression', 'Ensembles', 'Backtesting', 'Calibration'],
    metrics: [{ value: '25+', label: 'years historical data' }, { value: '6,991', label: 'games cited in README' }, { value: 'Brier', label: 'probability-quality metric' }],
    image: '/assets/project-nfl-forecasting.svg',
    githubUrl: 'https://github.com/smgpulse007/nfl_betting_model',
    caseStudyUrl: '/projects/nfl-sports-forecasting/',
    architectureVariant: 'nfl',
  },
  {
    slug: 'freshtrack-ai-module',
    title: 'FreshTrack AI Module',
    shortTitle: 'FreshTrack AI',
    domain: 'Computer vision / OCR / structured extraction',
    categories: ['Document AI / RAG', 'Agentic AI', 'MLOps / Infrastructure'],
    maturity: 'polished demo',
    tier: 'featured',
    featured: true,
    statusNote: 'Production-style reference implementation',
    summary:
      'OCR plus LLM-enhanced parsing FastAPI service with image preprocessing, structured JSON outputs, confidence scoring, Docker variants, and API-first documentation.',
    problem: 'Receipt and image parsing pipelines need to distinguish real entities from payment lines, addresses, totals, headers, and formatting noise.',
    systemOverview:
      'Images move through preprocessing and OCR. Cleanup feeds parsing utilities and optional LLM assistance, and the API returns structured JSON contracts for downstream integrations.',
    architectureSummary:
      'Receipt image -> preprocessing -> OCR -> text cleanup -> optional LLM parser -> confidence scoring -> structured JSON API -> frontend/database consumer.',
    workflow: ['Receive image input.', 'Preprocess and OCR.', 'Clean noisy lines and score candidates.', 'Return structured JSON.'],
    modelDesign: ['Tesseract handles OCR.', 'Parsing utilities filter metadata noise.', 'Optional LLM parsing reduces false positives.'],
    validation: ['Python source and scripts compile.', 'Full pytest requires optional sentence-transformers.', 'README documents dependency limitations.'],
    deployment: ['FastAPI service and docs.', 'Docker variants and env examples.', 'Confidence fields support review.'],
    safetyNote: 'Production-style reference implementation. Do not commit sensitive receipts, payment data, or API keys.',
    employerValue: ['Document/vision extraction API design.', 'Structured output contracts.', 'Confidence scoring and cleanup.'],
    whatIBuilt: ['FastAPI service.', 'OCR and parsing utilities.', 'Optional LLM path.', 'Docker variants.'],
    techStack: ['FastAPI', 'Tesseract', 'LLM parsing', 'Docker', 'Python', 'pytest'],
    metrics: [{ value: 'OCR', label: 'image-to-text baseline' }, { value: 'JSON', label: 'structured contract' }, { value: 'score', label: 'confidence output' }],
    image: '/assets/project-freshtrack.svg',
    githubUrl: 'https://github.com/smgpulse007/FreshTrackAIModule',
    caseStudyUrl: '/projects/freshtrack-ai-module/',
    architectureVariant: 'freshtrack',
  },
  {
    slug: 'chatwithwiki-azureml',
    title: 'ChatWithWiki AzureML RAG Demo',
    shortTitle: 'ChatWithWiki AzureML',
    domain: 'Azure ML / prompt-flow RAG',
    categories: ['Document AI / RAG', 'Research / Data Science', 'MLOps / Infrastructure'],
    maturity: 'polished demo',
    tier: 'featured',
    featured: true,
    statusNote: 'Prompt Flow RAG demo',
    summary:
      'Azure ML Prompt Flow retrieval-augmented generation demo using Jinja prompt templates, retrieval orchestration, and public wiki-style content.',
    problem: 'RAG demos are only useful when retrieval, prompt construction, and execution context are clear.',
    systemOverview:
      'Public content is retrieved, prompt templates are assembled, and the flow emits answer artifacts that can be reviewed for source grounding and prompt behavior.',
    architectureSummary:
      'Public wiki content -> retrieval step -> prompt-flow graph -> Jinja prompt template -> LLM call -> grounded answer artifact -> evaluation/review notes.',
    workflow: ['Select public content.', 'Retrieve context passages.', 'Assemble Prompt Flow nodes and Jinja prompts.', 'Produce answer artifacts for review.'],
    modelDesign: ['Retrieval and prompt assembly are separated.', 'Prompt Flow keeps cloud workflow wiring explicit.', 'The demo is RAG workflow evidence, not a production knowledge system.'],
    validation: ['Public metadata identifies Azure ML, Jinja, Python, Prompt Flow, and RAG focus.', 'Quality depends on retrieval setup and review.'],
    deployment: ['Azure ML Prompt Flow target.', 'Python and Jinja assets.', 'Supporting RAG example.'],
    safetyNote: 'Public-content RAG demo only. Do not point it at private documents or confidential knowledge bases without controls.',
    employerValue: ['Cloud RAG workflow breadth.', 'Prompt-template discipline.', 'Source-grounded answer construction.'],
    whatIBuilt: ['Prompt Flow RAG example.', 'Jinja templates and Python assets.', 'Cloud-oriented RAG framing.'],
    techStack: ['Azure ML', 'Prompt Flow', 'Python', 'Jinja', 'RAG', 'Retrieval'],
    metrics: [{ value: 'RAG', label: 'retrieval + prompt' }, { value: 'Azure', label: 'cloud ML context' }, { value: 'Jinja', label: 'template layer' }],
    image: '/assets/project-chatwithwiki.svg',
    githubUrl: 'https://github.com/smgpulse007/ChatWithWiki_AzureML',
    caseStudyUrl: '/projects/chatwithwiki-azureml/',
    architectureVariant: 'chatwithwiki',
  },
  {
    slug: 'azure-los-prediction',
    title: 'Azure LOS Prediction',
    shortTitle: 'Azure LOS',
    domain: 'Healthcare ML / regression',
    categories: ['Healthcare AI', 'Research / Data Science'],
    maturity: 'experiment',
    tier: 'library',
    featured: false,
    statusNote: 'Toy-dataset healthcare ML study',
    summary: 'Length-of-stay regression work using a Microsoft toy hospital dataset, Azure Notebooks, and baseline regression methods.',
    problem: 'LOS modeling is useful healthcare ML foundation work because it links operational outcomes, feature engineering, and regression evaluation.',
    systemOverview: 'Compares regression approaches for LOS prediction over a toy dataset.',
    architectureSummary: 'Toy hospital dataset -> preprocessing -> regression models -> evaluation notebook -> LOS analysis.',
    workflow: ['Prepare toy LOS data.', 'Train baseline regressors.', 'Compare outputs in notebooks.'],
    modelDesign: ['Linear regression, decision trees, random forests, and GBM-style comparisons.'],
    validation: ['Notebook-level evaluation only.'],
    deployment: ['Azure Notebooks project structure.'],
    safetyNote: 'Toy-data project only. Not clinical guidance.',
    employerValue: ['Healthcare ML foundations and regression literacy.'],
    whatIBuilt: ['Notebook-oriented LOS regression comparison.'],
    techStack: ['Python', 'Azure Notebooks', 'Regression', 'Random Forest', 'GBM'],
    image: '/assets/project-data-lab.svg',
    githubUrl: 'https://github.com/smgpulse007/AzureLOSPrediction',
  },
  {
    slug: 'rag-implementation-hedis-ssd',
    title: 'RAG Implementation for HEDIS SSD',
    shortTitle: 'HEDIS RAG SSD',
    domain: 'Healthcare quality / RAG concept',
    categories: ['Healthcare AI', 'Document AI / RAG', 'Insurance / Claims'],
    maturity: 'experiment',
    tier: 'library',
    featured: false,
    statusNote: 'Concept prototype; public-safe framing required',
    summary: 'Healthcare quality RAG concept showing de-identification pseudocode, clinical-note preprocessing ideas, and HEDIS SSD retrieval workflow shape.',
    problem: 'Quality-measure workflows need defensible document handling and source retrieval.',
    systemOverview: 'README outlines loading, de-identification, preprocessing, and retrieval-oriented HEDIS support ideas.',
    architectureSummary: 'Clinical-note concept data -> de-identification -> preprocessing -> retrieval concept -> HEDIS support workflow.',
    workflow: ['Load concept data.', 'Redact sensitive entities.', 'Prepare text for retrieval.', 'Support quality review.'],
    modelDesign: ['RAG workflow concept with de-identification preprocessing.'],
    validation: ['Concept-level README evidence only.'],
    deployment: ['No production deployment surfaced.'],
    safetyNote: 'Use only synthetic or de-identified data.',
    employerValue: ['Healthcare RAG awareness and de-identification thinking.'],
    whatIBuilt: ['Conceptual RAG/HEDIS notes and pseudocode.'],
    techStack: ['Python', 'spaCy', 'RAG concept', 'HEDIS', 'De-identification'],
    image: '/assets/project-data-lab.svg',
    githubUrl: 'https://github.com/smgpulse007/RAGImplementationForHEDIS_SSD',
  },
  {
    slug: 'hedis-dashboard',
    title: 'HEDIS Dashboard',
    shortTitle: 'HEDIS Dashboard',
    domain: 'Healthcare analytics / dashboarding',
    categories: ['Healthcare AI', 'Insurance / Claims', 'Research / Data Science'],
    maturity: 'foundations',
    tier: 'archive',
    featured: false,
    statusNote: 'Healthcare dashboard foundation',
    summary: 'Early Streamlit dashboard scaffold that shows healthcare analytics UI foundations.',
    problem: 'Healthcare analytics work often starts with simple review surfaces before deeper modeling and workflow integration.',
    systemOverview: 'Older dashboarding starting point.',
    architectureSummary: 'Streamlit app scaffold -> local run instructions -> dashboard placeholder.',
    workflow: ['Install requirements.', 'Run Streamlit.', 'Extend with analytics content.'],
    modelDesign: ['No substantive model design surfaced in public README audit.'],
    validation: ['Foundation-level UI and analytics scaffold.'],
    deployment: ['Streamlit local run instructions.'],
    safetyNote: sharedPrivacy,
    employerValue: ['Early dashboard foundations.'],
    whatIBuilt: ['Streamlit starter-style scaffold.'],
    techStack: ['Python', 'Streamlit'],
    image: '/assets/project-data-lab.svg',
    githubUrl: 'https://github.com/smgpulse007/HEDIS-Dashboard',
  },
  {
    slug: 'medication-recommendation',
    title: 'Medication Recommendation Experiment',
    shortTitle: 'Medication Recommendation',
    domain: 'Healthcare LLM concept / non-clinical experiment',
    categories: ['Healthcare AI', 'Agentic AI', 'Research / Data Science'],
    maturity: 'experiment',
    tier: 'library',
    featured: false,
    statusNote: 'Experimental non-clinical LLM concept',
    summary: 'LangChain medication-recommendation concept retained as an experimental healthcare LLM example with explicit non-clinical boundaries.',
    problem: 'Medication recommendation is high-risk, so this project is secondary and labeled non-clinical.',
    systemOverview: 'README describes symptom analysis, medication lookup, filtering, and recommendation generation with LangChain.',
    architectureSummary: 'Scenario -> symptom parsing -> lookup/filtering concept -> LLM-generated draft -> clinical review boundary.',
    workflow: ['Parse a scenario.', 'Lookup candidates.', 'Filter constraints.', 'Generate a draft with caveats.'],
    modelDesign: ['LangChain educational concept.'],
    validation: ['No clinical validation.'],
    deployment: ['No production deployment represented.'],
    safetyNote: 'Educational concept only. Not medical advice, clinical decision support, or patient use.',
    employerValue: ['Safety awareness around high-risk healthcare AI ideas.'],
    whatIBuilt: ['LangChain healthcare recommendation concept.'],
    techStack: ['Python', 'LangChain', 'LLM concept'],
    image: '/assets/project-data-lab.svg',
    githubUrl: 'https://github.com/smgpulse007/MedicationRecommendation',
  },
  {
    slug: 'hnsc-viz',
    title: 'HNSC Activation Visualization',
    shortTitle: 'HNSC Viz',
    domain: 'Deep learning visualization / research',
    categories: ['Research / Data Science'],
    maturity: 'research note',
    tier: 'library',
    featured: false,
    statusNote: 'Research visualization note',
    summary: 't-SNE visualization concept for final-layer activations with slide images.',
    problem: 'Model representations are hard to understand without visualization tools.',
    systemOverview: 'Reduces high-dimensional activations to 2D and pairs points with slide/image representations.',
    architectureSummary: 'Model activations -> dimensionality reduction -> image generation -> scatter visualization -> interpretation.',
    workflow: ['Load activations.', 'Run t-SNE.', 'Generate thumbnails.', 'Inspect clusters.'],
    modelDesign: ['Visualization note rather than deployed model.'],
    validation: ['Exploratory analysis only.'],
    deployment: ['Local Python visualization workflow.'],
    safetyNote: sharedPrivacy,
    employerValue: ['Interpretability and visualization foundations.'],
    whatIBuilt: ['Activation visualization concept.'],
    techStack: ['Python', 't-SNE', 'NumPy', 'scikit-learn', 'matplotlib'],
    image: '/assets/project-data-lab.svg',
    githubUrl: 'https://github.com/smgpulse007/hnsc_viz',
  },
  {
    slug: 'gpu-analysis',
    title: 'GPU Analysis for Healthcare AI Workloads',
    shortTitle: 'GPU Analysis',
    domain: 'AI infrastructure planning',
    categories: ['MLOps / Infrastructure', 'Healthcare AI', 'Research / Data Science'],
    maturity: 'research note',
    tier: 'library',
    featured: false,
    statusNote: 'Infrastructure thought-work',
    summary: 'GPU comparison notes for healthcare AI workload planning across training, inference, medical imaging, agentic systems, and multi-model orchestration.',
    problem: 'AI architecture choices depend on workload fit, not only model hype.',
    systemOverview: 'Compares data-center, workstation, and legacy GPUs across healthcare AI use cases.',
    architectureSummary: 'Workload classes -> GPU candidates -> capacity/fit scoring -> infrastructure planning notes.',
    workflow: ['Define workload categories.', 'Compare VRAM and capability fit.', 'Score candidates.', 'Plan AI infrastructure.'],
    modelDesign: ['Infrastructure analysis and planning artifact.'],
    validation: ['Qualitative note, not benchmark proof.'],
    deployment: ['Planning context rather than deployable software.'],
    safetyNote: 'Validate hardware choices with real benchmarks before procurement.',
    employerValue: ['Infrastructure literacy for healthcare AI and local model workloads.'],
    whatIBuilt: ['GPU planning matrix and workload-fit analysis.'],
    techStack: ['GPU planning', 'Healthcare AI workloads', 'Inference', 'Training', 'Infrastructure'],
    image: '/assets/project-data-lab.svg',
    githubUrl: 'https://github.com/smgpulse007/gpu_analysis',
  },
  {
    slug: 'ml-templates',
    title: 'ML Templates',
    shortTitle: 'ML Templates',
    domain: 'ML foundations',
    categories: ['Research / Data Science'],
    maturity: 'foundations',
    tier: 'archive',
    featured: false,
    statusNote: 'Reusable ML foundations',
    summary: 'Machine-learning templates repository covering reusable preprocessing, evaluation, model selection, and visualization patterns.',
    problem: 'Template collections are useful foundations for repeatable preprocessing, evaluation, and visualization work.',
    systemOverview: 'Reusable examples around preprocessing, model selection, hyperparameter tuning, evaluation, and visualization.',
    architectureSummary: 'Template categories -> reusable scripts -> project starter patterns.',
    workflow: ['Select a template.', 'Customize data processing.', 'Train/evaluate.', 'Adapt visualization or metrics code.'],
    modelDesign: ['General-purpose ML template patterns.'],
    validation: ['Foundation-level reusable examples.'],
    deployment: ['No deployment represented.'],
    safetyNote: 'Educational starter material only.',
    employerValue: ['Early foundations behind later system work.'],
    whatIBuilt: ['Reusable ML starter templates.'],
    techStack: ['Python', 'ML templates', 'Evaluation', 'Visualization'],
    image: '/assets/project-data-lab.svg',
    githubUrl: 'https://github.com/smgpulse007/ML_Templates',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProjects = projects.filter((project) => Boolean(project.caseStudyUrl));
export const libraryProjects = projects.filter((project) => project.tier !== 'archive');
export const archiveProjects = projects.filter((project) => project.tier === 'archive');

export const excludedRepos = [
  {
    name: 'MarketAnalyzerApp',
    reason:
      'No README was available in the public audit, so it was not surfaced until there is enough public context to frame it responsibly.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
