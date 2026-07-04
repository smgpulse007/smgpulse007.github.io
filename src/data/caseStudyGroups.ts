export type CaseStudyGroup = {
  title: string;
  thesis: string;
  leadSlug: string;
  supportingSlugs: string[];
  proofArtifacts: string[];
};

export const caseStudyGroups: CaseStudyGroup[] = [
  {
    title: 'Healthcare & Insurance AI',
    thesis: 'Standards-aware APIs, event-driven healthcare platforms, quality workflows, and claim/document automation.',
    leadSlug: 'hospital-readmission-fhir-ml-api',
    supportingSlugs: ['hl7-ai-challenge', 'freshtrack-ai-module'],
    proofArtifacts: ['FHIR response contract', 'HL7 architecture diagrams', 'OCR extraction JSON'],
  },
  {
    title: 'Agentic AI / LLMOps',
    thesis: 'Local model workbenches, agent state, tool calls, verification gates, and experiment surfaces.',
    leadSlug: 'llm-steering',
    supportingSlugs: ['agentic-alpha-engine'],
    proofArtifacts: ['activation steering GIF', 'hook placement diagram', 'agent verification path'],
  },
  {
    title: 'Document AI / RAG',
    thesis: 'Document parsing, OCR, RAG, prompt construction, local inference, confidence scoring, and review surfaces.',
    leadSlug: 'local-document-ai-extraction',
    supportingSlugs: ['freshtrack-ai-module', 'chatwithwiki-azureml'],
    proofArtifacts: ['local inference boundary', 'receipt extraction sample', 'Prompt Flow RAG graph'],
  },
  {
    title: 'Quant & Forecasting',
    thesis: 'Forecasting and research systems framed around baselines, calibration, evidence, and responsible use.',
    leadSlug: 'agentic-alpha-engine',
    supportingSlugs: ['nfl-sports-forecasting'],
    proofArtifacts: ['Fusion report shape', '2024 Brier table', 'historical backtest JSON'],
  },
  {
    title: 'Research Archive',
    thesis: 'Earlier healthcare, RAG, visualization, infrastructure, and ML foundation projects that show technical range and learning depth.',
    leadSlug: 'azure-los-prediction',
    supportingSlugs: ['rag-implementation-hedis-ssd', 'gpu-analysis', 'hnsc-viz'],
    proofArtifacts: ['LOS regression notes', 'HEDIS RAG concept', 'GPU planning matrix'],
  },
];
