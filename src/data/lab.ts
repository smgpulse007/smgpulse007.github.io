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
    description: "Runnable synthetic care-gap review workflow with simulated outreach, closure receipts and JSON export, alongside the historical interoperability architecture.",
    why: "Shows evidence review, explicit reasons and idempotent closure behavior with six fictional members.",
    status: "Reference implementation",
    domain: 'Healthcare & Interoperability',
    year: "2026",
    stack: ['React', 'Express', 'synthetic FHIR context', 'HTTP tests'],
    href: 'https://github.com/smgpulse007/hl7-ai-challenge',
    limitation: "Separate from Let’s Talk Doc. The new synthetic workflow is locally tested; the historical Python/RabbitMQ/model stack is not fully verified.",
  },
  {
    slug: 'local-document-ai',
    title: 'Local Document AI',
    description: "Offline structured-extraction regression evaluator alongside an earlier PDF/Ollama experiment.",
    why: "Detects missing fields, wrong values and invented extra fields when extraction prompts or models change.",
    status: "Reference implementation",
    domain: 'Document AI',
    year: "2026",
    stack: ['Python', 'Decimal', 'JSONL', 'Ollama experiment'],
    href: 'https://github.com/smgpulse007/ollama_poc',
    caseStudy: '/work/on-prem-rag-ocr/',
    limitation: "Fixtures are hand-written evaluator examples, not model-accuracy evidence. The older PDF/model UI requires separate runtime validation.",
  },
  {
    slug: 'freshtrack-ai-module',
    title: 'FreshTrack AI Module',
    description: "Runnable receipt-review demo with OCR, typed output inspection, synthetic fixtures and JSON export.",
    why: "Connects extraction results to a usable review workflow and explicit parser failures.",
    status: "Reference implementation",
    domain: 'Document AI',
    year: "2026",
    stack: ['FastAPI', 'Tesseract', 'Python', 'receipt review UI'],
    href: 'https://github.com/smgpulse007/FreshTrackAIModule',
    limitation: "Verified locally and in CI with synthetic data; no hosted application or production accuracy is claimed.",
  },
  {
    slug: 'chatwithwiki-azure-ml',
    title: 'ChatWithWiki Azure ML',
    description: "Bounded Wikipedia evidence retrieval with canonical citations, revision IDs, explicit failures and a standard-library CLI.",
    why: "Makes retrieved evidence inspectable and testable before it is used in an answer.",
    status: "Reference implementation",
    domain: 'Agentic AI & LLM Engineering',
    year: "2026",
    stack: ['Python', 'Wikipedia API', 'JSON', 'Prompt Flow helpers'],
    href: 'https://github.com/smgpulse007/ChatWithWiki_AzureML',
    limitation: "The tested CLI retrieves evidence; it does not prove answer quality or a deployed Azure service.",
  },
  {
    slug: 'alphaquant',
    title: 'AlphaQuant',
    description: "Offline citation-coverage checker for structured research reports, with a dependency-free JSON CLI and reproducible synthetic walkthrough.",
    why: "Catches missing citations, repeated citation hosts and empty reports before they move downstream.",
    status: "Reference implementation",
    domain: 'Forecasting & Quant',
    year: "2026",
    stack: ['Python', 'JSON', 'offline evaluation', 'citation coverage'],
    href: 'https://github.com/smgpulse007/AlphaQuant',
    limitation: "Coverage is not fact checking or publisher independence. The public tree has no frontend source; historical UI media is context only. No live research, model execution or trading is claimed.",
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
