export type EvidenceItem = {
  label: string;
  route: string;
  artifact: string;
  boundary: string;
};

export const evidenceItems: EvidenceItem[] = [
  {
    label: 'Readmission risk API',
    route: '/projects/hospital-readmission-fhir-ml-api/',
    artifact: 'Synthetic FHIR score response and model-card boundary',
    boundary: 'Synthetic portfolio demo only; no PHI or clinical validation claim.',
  },
  {
    label: 'HL7 platform',
    route: '/projects/hl7-ai-challenge/',
    artifact: 'High-level, low-level, and swimlane architecture diagrams',
    boundary: 'Challenge/demo context with synthetic or sample data only.',
  },
  {
    label: 'LLM steering lab',
    route: '/projects/llm-steering/',
    artifact: 'Workbench GIFs, activation steering flow, and hook diagrams',
    boundary: 'Research engineering lab; not a production model-safety guarantee.',
  },
  {
    label: 'AlphaQuant',
    route: '/projects/agentic-alpha-engine/',
    artifact: 'UI demo, terminal demo, and storage/verification architecture',
    boundary: 'Engineering demo only; not financial, investment, or trading advice.',
  },
  {
    label: 'NFL forecasting',
    route: '/projects/nfl-sports-forecasting/',
    artifact: 'Accuracy/Brier table and historical backtest JSON',
    boundary: 'Historical analytics only; not gambling or betting advice.',
  },
  {
    label: 'FreshTrack AI',
    route: '/projects/freshtrack-ai-module/',
    artifact: 'Receipt image, OCR parser contract, and confidence-scored output',
    boundary: 'No sensitive receipts, payment data, or API keys in public artifacts.',
  },
];
