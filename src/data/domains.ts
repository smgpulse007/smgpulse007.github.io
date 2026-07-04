export type DomainKey = 'healthcare' | 'claims' | 'agentic' | 'document' | 'forecasting' | 'mlops';

export type ArchitectureLayer = {
  label: string;
  detail: string;
  signals: string[];
};

export type DomainModule = {
  key: DomainKey;
  label: string;
  title: string;
  thesis: string;
  accent: 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose' | 'slate';
  layers: ArchitectureLayer[];
  relatedSystems: Array<{ label: string; href: string }>;
  proofArtifacts: string[];
  stack: string[];
};

const layerNames = [
  'Data / Standards',
  'Extraction / Features',
  'Agents / Models',
  'Validation / Governance',
  'Deployment / Observability',
  'Outcomes',
];

export const domainModules: DomainModule[] = [
  {
    key: 'healthcare',
    label: 'Healthcare',
    title: 'Regulated healthcare AI',
    thesis:
      'FHIR and HL7-oriented systems that turn synthetic healthcare events into inspectable risk, quality, and care-management outputs.',
    accent: 'cyan',
    layers: [
      { label: layerNames[0], detail: 'FHIR R4 resources, HL7 events, synthetic bundles', signals: ['Patient', 'Encounter', 'ADT'] },
      { label: layerNames[1], detail: 'Resource validation, feature contracts, care-gap signals', signals: ['schema', 'features', 'quality'] },
      { label: layerNames[2], detail: 'Risk scoring, quality intelligence, care orchestration', signals: ['score', 'prioritize', 'route'] },
      { label: layerNames[3], detail: 'Model-card boundaries, synthetic-only notices, test contracts', signals: ['no PHI', 'pytest', 'limits'] },
      { label: layerNames[4], detail: 'FastAPI, Docker, service graph checks, health endpoints', signals: ['API', 'Docker', 'health'] },
      { label: layerNames[5], detail: 'Reviewable risk, care-gap, and workflow evidence', signals: ['triage', 'explain', 'audit'] },
    ],
    relatedSystems: [
      { label: 'Readmission FHIR API', href: '/projects/hospital-readmission-fhir-ml-api/' },
      { label: 'HL7 AI Challenge', href: '/projects/hl7-ai-challenge/' },
      { label: 'HEDIS RAG SSD', href: '/research-archive/' },
    ],
    proofArtifacts: ['sample FHIR response', 'HL7 architecture diagrams', 'model-card boundary'],
    stack: ['FastAPI', 'FHIR-style JSON', 'HL7', 'Docker', 'pytest'],
  },
  {
    key: 'claims',
    label: 'Claims',
    title: 'Claims and insurance automation',
    thesis:
      'Document review, quality evidence, FWA analytics, and exception routing patterns for payer and insurance operations.',
    accent: 'emerald',
    layers: [
      { label: layerNames[0], detail: 'Sanitized documents, claim events, quality-measure evidence', signals: ['claim', 'PDF', 'HEDIS'] },
      { label: layerNames[1], detail: 'OCR cleanup, entity extraction, rules and feature normalization', signals: ['OCR', 'entities', 'rules'] },
      { label: layerNames[2], detail: 'Classification, review routing, and workflow-state agents', signals: ['classify', 'queue', 'assist'] },
      { label: layerNames[3], detail: 'Human review, confidence thresholds, privacy boundaries', signals: ['review', 'confidence', 'audit'] },
      { label: layerNames[4], detail: 'API contracts, local services, traceable handoffs', signals: ['JSON', 'trace', 'service'] },
      { label: layerNames[5], detail: 'Faster review loops and cleaner exception surfaces', signals: ['90%', '20%', '7K'] },
    ],
    relatedSystems: [
      { label: 'FreshTrack AI Module', href: '/projects/freshtrack-ai-module/' },
      { label: 'Local Document AI', href: '/projects/local-document-ai-extraction/' },
      { label: 'Professional Systems', href: '/professional-systems/' },
    ],
    proofArtifacts: ['OCR sample artifact', 'confidence-scored JSON', 'privacy note'],
    stack: ['Tesseract', 'FastAPI', 'LangChain', 'Streamlit', 'Ollama'],
  },
  {
    key: 'agentic',
    label: 'Agentic AI',
    title: 'Agentic workflow infrastructure',
    thesis:
      'Tool-using systems with explicit state, storage, verification, local inference boundaries, and report contracts.',
    accent: 'violet',
    layers: [
      { label: layerNames[0], detail: 'Public signals, local model runs, prompt-pair datasets', signals: ['signals', 'runs', 'pairs'] },
      { label: layerNames[1], detail: 'Retrieval indexes, vector extraction, state normalization', signals: ['Qdrant', 'hooks', 'state'] },
      { label: layerNames[2], detail: 'Planner agents, activation steering, tool orchestration', signals: ['planner', 'tools', 'vectors'] },
      { label: layerNames[3], detail: 'Verification rules, unsupported-model limits, citation checks', signals: ['verify', 'limits', 'cite'] },
      { label: layerNames[4], detail: 'FastAPI workbenches, React controls, Docker stacks', signals: ['API', 'UI', 'compose'] },
      { label: layerNames[5], detail: 'Structured reports and reproducible experiment surfaces', signals: ['report', 'compare', 'replay'] },
    ],
    relatedSystems: [
      { label: 'LLM Steering Lab', href: '/projects/llm-steering/' },
      { label: 'AlphaQuant', href: '/projects/agentic-alpha-engine/' },
      { label: 'Systems Index', href: '/systems/' },
    ],
    proofArtifacts: ['workbench GIF', 'hooking diagram', 'Fusion report framing'],
    stack: ['React', 'FastAPI', 'PyTorch', 'Ollama', 'Docker'],
  },
  {
    key: 'document',
    label: 'Document AI',
    title: 'Document intelligence and RAG',
    thesis:
      'Local-first parsing, retrieval, and structured extraction workflows designed around reviewable output instead of automated certainty.',
    accent: 'rose',
    layers: [
      { label: layerNames[0], detail: 'Sample PDFs, public wiki content, receipt images', signals: ['PDF', 'wiki', 'image'] },
      { label: layerNames[1], detail: 'Parsing, chunking, retrieval, OCR cleanup', signals: ['chunks', 'RAG', 'OCR'] },
      { label: layerNames[2], detail: 'Prompt Flow, local Ollama calls, optional LLM parsing', signals: ['prompt', 'local', 'parse'] },
      { label: layerNames[3], detail: 'Source review, confidence scoring, human review surfaces', signals: ['source', 'score', 'review'] },
      { label: layerNames[4], detail: 'Streamlit, Azure ML Prompt Flow, FastAPI services', signals: ['Streamlit', 'Azure', 'API'] },
      { label: layerNames[5], detail: 'Structured JSON and grounded answer artifacts', signals: ['JSON', 'answer', 'handoff'] },
    ],
    relatedSystems: [
      { label: 'Local Document AI', href: '/projects/local-document-ai-extraction/' },
      { label: 'ChatWithWiki AzureML', href: '/projects/chatwithwiki-azureml/' },
      { label: 'FreshTrack AI', href: '/projects/freshtrack-ai-module/' },
    ],
    proofArtifacts: ['receipt image', 'Prompt Flow graph', 'local inference boundary'],
    stack: ['PDFPlumber', 'Prompt Flow', 'Jinja', 'RAG', 'Tesseract'],
  },
  {
    key: 'forecasting',
    label: 'Quant / Forecasting',
    title: 'Forecasting and research systems',
    thesis:
      'Forecasting work shown as calibration, baselines, backtesting, evidence collection, and responsible reporting.',
    accent: 'amber',
    layers: [
      { label: layerNames[0], detail: 'Historical games, public market signals, macro context', signals: ['history', 'market', 'macro'] },
      { label: layerNames[1], detail: 'Feature builders, Elo baselines, normalized evidence stores', signals: ['Elo', 'features', 'stores'] },
      { label: layerNames[2], detail: 'XGBoost, logistic regression, ensembles, planner agents', signals: ['models', 'ensemble', 'agent'] },
      { label: layerNames[3], detail: 'Brier score, backtests, verification, non-advice boundaries', signals: ['Brier', 'backtest', 'non-advice'] },
      { label: layerNames[4], detail: 'Python pipelines, API/UI workbenches, Docker fabric', signals: ['Python', 'API', 'Docker'] },
      { label: layerNames[5], detail: 'Probability-quality tables and structured research reports', signals: ['table', 'report', 'calibrate'] },
    ],
    relatedSystems: [
      { label: 'AlphaQuant', href: '/projects/agentic-alpha-engine/' },
      { label: 'NFL Forecasting Lab', href: '/projects/nfl-sports-forecasting/' },
      { label: 'Quant Page', href: '/quant-forecasting/' },
    ],
    proofArtifacts: ['2024 model table', 'backtest JSON', 'terminal/UI demos'],
    stack: ['Python', 'XGBoost', 'Elo', 'Postgres', 'Qdrant'],
  },
  {
    key: 'mlops',
    label: 'MLOps',
    title: 'MLOps and cloud-ready system surfaces',
    thesis:
      'Buildable public repos with testable API contracts, Docker boundaries, CI surfaces, and explicit deployment limitations.',
    accent: 'slate',
    layers: [
      { label: layerNames[0], detail: 'Repo artifacts, sample payloads, environment templates', signals: ['repo', 'samples', 'env'] },
      { label: layerNames[1], detail: 'Schema contracts, service boundaries, config hygiene', signals: ['schema', 'service', 'config'] },
      { label: layerNames[2], detail: 'Model services, local inference, workflow workers', signals: ['model', 'runtime', 'worker'] },
      { label: layerNames[3], detail: 'Tests, compile checks, audit notes, known limits', signals: ['test', 'compile', 'audit'] },
      { label: layerNames[4], detail: 'Docker Compose, FastAPI, CI workflow, health endpoints', signals: ['compose', 'CI', 'health'] },
      { label: layerNames[5], detail: 'Reproducible demos and honest readiness status', signals: ['demo', 'status', 'proof'] },
    ],
    relatedSystems: [
      { label: 'Systems Index', href: '/systems/' },
      { label: 'Readmission FHIR API', href: '/projects/hospital-readmission-fhir-ml-api/' },
      { label: 'LLM Steering Lab', href: '/projects/llm-steering/' },
    ],
    proofArtifacts: ['Docker/compose surfaces', 'pytest evidence', 'health endpoints'],
    stack: ['Docker', 'CI/CD', 'FastAPI', 'Azure ML', 'pytest'],
  },
];

export function getDomainModule(key: DomainKey) {
  return domainModules.find((domain) => domain.key === key);
}
