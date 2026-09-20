export type LabItem = {
  slug: string;
  title: string;
  description: string;
  why: string;
  status: 'Maintained' | 'Reference implementation' | 'Research' | 'Historical' | 'Archived';
  domain: string;
  year: string;
  stack: string[];
  href?: string;
  caseStudy?: string;
  limitation: string;
};

export const labItems: LabItem[] = [
  {
    slug: 'llm-steering',
    title: 'LLM Steering',
    description: 'Local activation-steering and representation-engineering workbench with API, UI, tests, and experiment manifests.',
    why: 'Makes model-behavior experiments inspectable and repeatable.',
    status: 'Maintained',
    domain: 'Agentic AI & LLM Engineering',
    year: '2026',
    stack: ['PyTorch', 'Transformers', 'FastAPI', 'React'],
    href: 'https://github.com/smgpulse007/llm-steering',
    caseStudy: '/work/llm-steering-lab/',
    limitation: 'Research behavior does not imply general model control or safety.',
  },
  {
    slug: 'hospital-readmission-fhir-api',
    title: 'Hospital Readmission FHIR ML API',
    description: 'Synthetic FHIR-facing API with deterministic demo scoring, explanations, tests, and clear safety boundaries.',
    why: 'Shows API and interoperability contracts without pretending a demo score is a validated clinical model.',
    status: 'Reference implementation',
    domain: 'Healthcare & Interoperability',
    year: '2026',
    stack: ['FastAPI', 'FHIR', 'Python', 'Docker'],
    href: 'https://github.com/smgpulse007/hospital-readmission-fhir-ml-api',
    limitation: 'Synthetic deterministic scorer; not clinically validated.',
  },
  {
    slug: 'hl7-ai-reference-platform',
    title: 'HL7 AI Challenge Platform',
    description: 'Standards-oriented public architecture for HL7/FHIR event flow, prediction services, care orchestration, and SMART/CDS surfaces.',
    why: 'Demonstrates interoperability architecture as a separate public reference.',
    status: 'Reference implementation',
    domain: 'Healthcare & Interoperability',
    year: '2025',
    stack: ['HL7 v2', 'FHIR R4', 'RabbitMQ', 'CDS Hooks'],
    href: 'https://github.com/smgpulse007/hl7-ai-challenge',
    limitation: 'Not the Let’s Talk Doc award project and not represented as its winning repository.',
  },
  {
    slug: 'local-document-ai',
    title: 'Local Document AI',
    description: 'Privacy-preserving PDF parsing, retrieval, local inference, and a lightweight review interface.',
    why: 'Provides public code for techniques adjacent to on-premises professional work.',
    status: 'Research',
    domain: 'Document AI',
    year: '2025',
    stack: ['Ollama', 'RAG', 'Streamlit', 'document parsing'],
    href: 'https://github.com/smgpulse007/ollama_poc',
    caseStudy: '/work/on-prem-rag-ocr/',
    limitation: 'Public experiment; not a replica of an employer system. The repository does not establish a production OCR path.',
  },
  {
    slug: 'freshtrack-ai-module',
    title: 'FreshTrack AI Module',
    description: 'OCR and structured-extraction service patterns for turning document images into typed outputs.',
    why: 'Explores document-to-data contracts and parsing failure states.',
    status: 'Research',
    domain: 'Document AI',
    year: '2024',
    stack: ['FastAPI', 'OCR', 'Tesseract', 'LLM parsing'],
    href: 'https://github.com/smgpulse007/FreshTrackAIModule',
    limitation: 'Dependency-heavy research module; no real receipts or payment data are published here.',
  },
  {
    slug: 'chatwithwiki-azure-ml',
    title: 'ChatWithWiki Azure ML',
    description: 'Retrieval workflow assembled with Azure ML Prompt Flow over public knowledge sources.',
    why: 'Shows an earlier managed-cloud RAG implementation path.',
    status: 'Historical',
    domain: 'Agentic AI & LLM Engineering',
    year: '2024',
    stack: ['Azure ML', 'Prompt Flow', 'RAG'],
    href: 'https://github.com/smgpulse007/ChatWithWiki_AzureML',
    limitation: 'Historical demonstration; no repository license was observed, so no media is reused.',
  },
  {
    slug: 'alphaquant',
    title: 'AlphaQuant',
    description: 'Local-first multi-agent research intelligence and forecasting architecture.',
    why: 'Explores orchestration, verification, storage, and evaluation outside the primary healthcare lane.',
    status: 'Research',
    domain: 'Forecasting & Quant',
    year: '2025',
    stack: ['Agents', 'Local models', 'Backtesting', 'React'],
    href: 'https://github.com/smgpulse007/AlphaQuant',
    limitation: 'Engineering research only; not investment or trading advice.',
  },
  {
    slug: 'nfl-forecasting-archive',
    title: 'NFL Forecasting Archive',
    description: 'Historical model comparison, calibration, and backtesting experiments.',
    why: 'Preserves evidence of forecasting and probability-quality work.',
    status: 'Archived',
    domain: 'Forecasting & Quant',
    year: '2024',
    stack: ['XGBoost', 'Elo', 'Calibration', 'Backtests'],
    limitation: 'Archived analysis; not betting advice and not a maintained recommendation system.',
  },
] as const;
