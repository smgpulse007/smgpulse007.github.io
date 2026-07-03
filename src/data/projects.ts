export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  systemOverview: string;
  architecture: string;
  whatIBuilt: string[];
  techStack: string[];
  validation: string[];
  demonstrates: string[];
  image: string;
  githubUrl: string;
  caseStudyUrl: string;
  safetyNote: string;
};

export const projects: Project[] = [
  {
    slug: 'hospital-readmission-fhir-ml-api',
    title: 'Hospital Readmission FHIR ML API',
    shortTitle: 'Readmission FHIR ML API',
    summary:
      'Synthetic FHIR-style scoring service for 30-day readmission risk with schema validation, feature extraction, explainability, tests, and Dockerized deployment.',
    problem:
      'Care teams need transition-of-care signals that can be delivered as reliable APIs rather than one-off notebook outputs.',
    systemOverview:
      'The project packages synthetic FHIR bundle ingestion, readmission feature engineering, deterministic XGBoost-style risk scoring, and explanation payloads behind FastAPI endpoints.',
    architecture:
      'Synthetic Patient, Encounter, Condition, MedicationRequest, Observation, and Procedure resources flow through typed schemas, parser logic, feature extraction, risk scoring, and explainability output.',
    whatIBuilt: [
      'FastAPI endpoints for health, model card, example schema, single-bundle scoring, and batch scoring.',
      'FHIR-style parser and feature builder for demographics, utilization, comorbidities, medications, labs, procedures, and discharge context.',
      'Transparent risk scorer with top contributing features and low/medium/high bands.',
      'Synthetic FHIR examples, Dockerfile, docker-compose, CI workflow, model card, and privacy docs.',
    ],
    techStack: ['FastAPI', 'Python', 'FHIR-style JSON', 'pytest', 'Docker', 'CI'],
    validation: [
      'Unit tests cover API responses, schema validation, and feature extraction.',
      'Build is CI-ready with pytest and compile checks.',
      'Health endpoint supports lightweight runtime verification.',
    ],
    demonstrates: [
      'Healthcare ML API packaging.',
      'Standards-aware data ingestion.',
      'Explainable feature contracts.',
      'Privacy-safe synthetic-data engineering.',
    ],
    image: '/assets/project-readmission.svg',
    githubUrl: 'https://github.com/smgpulse007/hospital-readmission-fhir-ml-api',
    caseStudyUrl: '/projects/hospital-readmission-fhir-ml-api/',
    safetyNote: 'Synthetic portfolio demo only. No PHI, PII, or clinical decision support deployment.',
  },
  {
    slug: 'hl7-ai-challenge',
    title: 'HL7 AI Challenge Platform',
    shortTitle: 'HL7 AI Challenge',
    summary:
      'Event-driven healthcare AI platform demonstrating HL7/FHIR interoperability, quality intelligence, SMART/CDS patterns, and Dockerized services.',
    problem:
      'Clinical quality and care-gap workflows need interoperable event processing rather than isolated manual chase-and-close processes.',
    systemOverview:
      'The repository models a public-safe challenge platform with HL7-style events, FHIR mapping, risk intelligence, orchestration services, RabbitMQ, Postgres, Redis, and dashboard components.',
    architecture:
      'HL7-style events move through processing, FHIR resource mapping, risk prediction, care orchestration, and dashboard layers using an event-driven service graph.',
    whatIBuilt: [
      'Public-safe docs and architecture notes clarifying synthetic/sample data boundaries.',
      'Demo service graph using RabbitMQ, Postgres, Redis, Docker, and dashboard services.',
      'Care-gap intelligence framing aligned with HL7, FHIR R4, SMART on FHIR, and CDS Hooks patterns.',
      'Environment-driven demo configuration that avoids hardcoded internal host or credential strings.',
    ],
    techStack: ['HL7 v2.x', 'FHIR R4', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Docker'],
    validation: [
      'Docker Compose config validates.',
      'Python service and demo scripts compile.',
      'Live demo tests require the local service stack to be running.',
    ],
    demonstrates: [
      'Healthcare interoperability architecture.',
      'Event-driven clinical quality workflows.',
      'Public-safe challenge storytelling.',
      'Standards-oriented system design.',
    ],
    image: '/assets/project-hl7.svg',
    githubUrl: 'https://github.com/smgpulse007/hl7-ai-challenge',
    caseStudyUrl: '/projects/hl7-ai-challenge/',
    safetyNote: 'Public challenge/demo code using synthetic or sample data only. Not a production clinical decision system.',
  },
  {
    slug: 'llm-steering',
    title: 'LLM Steering Lab',
    shortTitle: 'LLM Steering',
    summary:
      'Local-first activation steering and representation-engineering lab with reproducible ActAdd demos, FastAPI workbench, React UI, and research-grounded limitations.',
    problem:
      'LLM behavior control needs more than prompt wrappers; engineering teams need reproducible experiments and honest limits around internal activation interventions.',
    systemOverview:
      'The lab combines PyTorch/Hugging Face steering-vector experiments, a model registry, a FastAPI workbench API, a React/TypeScript UI, and reproducible public artifacts.',
    architecture:
      'Prompt-pair datasets generate steering vectors that can be applied through pre/post activation hooks, compared against baselines, and surfaced in the workbench UI.',
    whatIBuilt: [
      'Activation steering starter kit with ActAdd-style vector extraction and hook-based inference paths.',
      'FastAPI workbench API and React UI for model selection, controls, comparisons, and explanations.',
      'Research notes, model support matrix, limitations, and reproducible showcase assets.',
    ],
    techStack: ['PyTorch', 'Hugging Face', 'FastAPI', 'React', 'TypeScript', 'Ollama'],
    validation: [
      'Python source, scripts, and tests compile in local verification.',
      'Full model runs depend on local model availability and runtime configuration.',
      'The repository documents safety gates and limitations for unsupported models.',
    ],
    demonstrates: [
      'LLM behavior engineering.',
      'Local-first AI experimentation.',
      'Research-backed productization.',
      'Evaluation and limitation discipline.',
    ],
    image: '/assets/project-llm-steering.svg',
    githubUrl: 'https://github.com/smgpulse007/llm-steering',
    caseStudyUrl: '/projects/llm-steering/',
    safetyNote: 'Research engineering lab with public artifacts and explicit limitations; not a production model-safety guarantee.',
  },
  {
    slug: 'local-document-ai-extraction',
    title: 'Local Document AI Extraction',
    shortTitle: 'Local Document AI',
    summary:
      'Private/local PDF extraction pattern using PDF parsing, chunking, LangChain, Streamlit, Dockerized Ollama, and analyst-driven prompts.',
    problem:
      'Regulated document workflows often need extraction patterns that keep sensitive files local while still using LLM-assisted parsing.',
    systemOverview:
      'The project parses PDFs, chunks extracted text, sends criteria-driven prompts to local Ollama models through LangChain, and displays results in Streamlit.',
    architecture:
      'PDF upload flows into PDFPlumber extraction, chunking, prompt assembly, local LLM calls, and a reviewable Streamlit result view.',
    whatIBuilt: [
      'Streamlit user interface for uploading documents and entering extraction criteria.',
      'PDF extraction and chunking path using Python utilities.',
      'Ollama client integration for local model inference.',
      'README reframing around privacy-preserving document AI patterns.',
    ],
    techStack: ['Ollama', 'LangChain', 'Streamlit', 'PDFPlumber', 'Docker', 'Python'],
    validation: [
      'Prompt and local memory smoke tests passed in the available local environment.',
      'Python compile checks pass.',
      'Full extraction path requires Docker, Ollama, and a pulled local model.',
    ],
    demonstrates: [
      'Local/private document AI workflow design.',
      'RAG and chunking primitives.',
      'Analyst-facing extraction UX.',
      'Regulated-document relevance.',
    ],
    image: '/assets/project-document-ai.svg',
    githubUrl: 'https://github.com/smgpulse007/ollama_poc',
    caseStudyUrl: '/projects/local-document-ai-extraction/',
    safetyNote: 'Use synthetic/sample documents only. Uploaded private documents should not be committed.',
  },
  {
    slug: 'agentic-alpha-engine',
    title: 'Agentic Alpha Engine',
    shortTitle: 'Agentic Alpha Engine',
    summary:
      'Local-first multi-agent workflow architecture demonstrating orchestration, state, retrieval/storage layers, verification rules, and structured synthesis.',
    problem:
      'Complex research workflows need agent orchestration, tool boundaries, persistent state, and retrieval layers that can be inspected and validated locally.',
    systemOverview:
      'The project is framed as an agentic-system architecture demo, using finance-like public data as the domain while emphasizing general workflow orchestration and local-first service design.',
    architecture:
      'Agents, tools, state graph, API routes, workers, Postgres, Redis, Qdrant, MinIO, OpenSearch, and Ollama form a multi-service local research stack.',
    whatIBuilt: [
      'FastAPI API and worker entry points.',
      'Agent orchestration, workflow state, scoring, and verification components.',
      'Storage/retrieval adapters and Docker Compose service graph.',
      'Public README framing that clarifies it is not financial advice or a live trading product.',
    ],
    techStack: ['FastAPI', 'Docker', 'Postgres', 'Redis', 'Qdrant', 'Ollama'],
    validation: [
      'Python source and scripts compile.',
      'Small-world runtime paths depend on local service availability and configured dependencies.',
      'README explicitly limits investment/trading interpretation.',
    ],
    demonstrates: [
      'Agentic workflow orchestration.',
      'Stateful multi-service architecture.',
      'Retrieval and storage design.',
      'Structured synthesis and verification patterns.',
    ],
    image: '/assets/project-alphaquant.svg',
    githubUrl: 'https://github.com/smgpulse007/AlphaQuant',
    caseStudyUrl: '/projects/agentic-alpha-engine/',
    safetyNote: 'Research/engineering demo only. Not financial advice, not an investment product, and not intended for live trading.',
  },
  {
    slug: 'freshtrack-ai-module',
    title: 'FreshTrack AI Module',
    shortTitle: 'FreshTrack AI',
    summary:
      'OCR plus LLM-enhanced parsing FastAPI service with structured JSON outputs, confidence scoring, Docker deployment, and API documentation.',
    problem:
      'OCR pipelines need to distinguish real entities from noisy receipt metadata, payment lines, addresses, and formatting artifacts.',
    systemOverview:
      'The service combines image preprocessing, OCR, text cleanup, optional LLM-assisted parsing, shelf-life enrichment, confidence scoring, and API-first JSON contracts.',
    architecture:
      'Receipt images flow through OCR and parsing services into structured response models that can be consumed by frontend or database integrations.',
    whatIBuilt: [
      'FastAPI service surfaces with health checks and interactive docs.',
      'OCR and parsing utilities with confidence-oriented item matching.',
      'Optional LLM path for false-positive reduction.',
      'Docker variants and `.env.example` for local configuration.',
    ],
    techStack: ['FastAPI', 'Tesseract', 'LLM parsing', 'Docker', 'Python', 'pytest'],
    validation: [
      'Python source and scripts compile.',
      'Full pytest collection requires optional `sentence_transformers` dependency in the local environment.',
      'README documents dependency and production-style limitations.',
    ],
    demonstrates: [
      'Document and vision extraction API design.',
      'Structured JSON contracts.',
      'Confidence scoring and cleanup.',
      'Frontend-ready service packaging.',
    ],
    image: '/assets/project-freshtrack.svg',
    githubUrl: 'https://github.com/smgpulse007/FreshTrackAIModule',
    caseStudyUrl: '/projects/freshtrack-ai-module/',
    safetyNote: 'Production-style reference implementation. Do not commit sensitive receipts, payment data, or API keys.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

