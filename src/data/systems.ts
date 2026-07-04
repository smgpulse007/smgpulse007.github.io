export type ShowroomGroup = {
  key: string;
  label: string;
  leadSlug: string;
  supportingSlugs: string[];
  proofArtifacts: string[];
};

export const showroomGroups: ShowroomGroup[] = [
  {
    key: 'healthcare',
    label: 'Healthcare & Insurance',
    leadSlug: 'hospital-readmission-fhir-ml-api',
    supportingSlugs: ['hl7-ai-challenge', 'freshtrack-ai-module'],
    proofArtifacts: ['synthetic FHIR response', 'HL7 architecture diagrams', 'OCR-to-JSON contract'],
  },
  {
    key: 'agentic',
    label: 'Agentic / LLMOps',
    leadSlug: 'llm-steering',
    supportingSlugs: ['agentic-alpha-engine', 'local-document-ai-extraction'],
    proofArtifacts: ['activation steering workbench GIF', 'pre/post hook diagram', 'agent verification path'],
  },
  {
    key: 'document',
    label: 'Document AI',
    leadSlug: 'freshtrack-ai-module',
    supportingSlugs: ['local-document-ai-extraction', 'chatwithwiki-azureml'],
    proofArtifacts: ['sample receipt artifact', 'local Ollama boundary', 'Prompt Flow RAG graph'],
  },
  {
    key: 'forecasting',
    label: 'Quant & Forecasting',
    leadSlug: 'agentic-alpha-engine',
    supportingSlugs: ['nfl-sports-forecasting', 'llm-steering'],
    proofArtifacts: ['Fusion report framing', '2024 model comparison table', 'backtest JSON'],
  },
  {
    key: 'infrastructure',
    label: 'Infrastructure',
    leadSlug: 'hospital-readmission-fhir-ml-api',
    supportingSlugs: ['hl7-ai-challenge', 'chatwithwiki-azureml'],
    proofArtifacts: ['Docker/compose surfaces', 'FastAPI health checks', 'Azure ML Prompt Flow context'],
  },
];
