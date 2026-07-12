export const professionalSystems = [
  {
    domain: 'Claims automation',
    accent: '#8de8b4',
    metric: '90% review-time reduction pattern',
    title: 'Claims Document Automation / Human-in-the-Loop Adjudication Support',
    thesis:
      'LangGraph-style orchestration for document understanding, structured extraction, validation gates, exception routing, and downstream claims-system handoffs.',
    architecture: ['document intake', 'OCR/extraction', 'agent graph', 'validation gates', 'exception routing', 'claims handoff'],
    stack: ['LangGraph patterns', 'Azure', 'ADLS', 'Cosmos DB', 'Redis', 'AKS', 'Synapse', 'observability'],
    outcome: 'Claims review acceleration and safer automation boundaries without exposing employer data.',
  },
  {
    domain: 'Healthcare quality',
    accent: '#58dce6',
    metric: '20% automated closure lift',
    title: 'HEDIS Evidence Extraction Pipeline',
    thesis:
      'Quality-measure evidence workflow over HL7 MDM/ORU-style documents, base64 PDFs, OCR, rule validation, human review, and closure tracking.',
    architecture: ['HL7 MDM/ORU', 'base64 PDF', 'OCR', 'measure rules', 'evidence extraction', 'human review'],
    stack: ['PyMuPDF', 'Tesseract', 'FHIR/HL7', 'rules engine', 'review queues', 'Power BI'],
    outcome: 'Automated closure improvement while preserving reviewer accountability.',
  },
  {
    domain: 'Private document AI',
    accent: '#b9a7ff',
    metric: '7K backlog clearance pattern',
    title: 'On-Prem RAG/OCR Compliance Review Microservice',
    thesis:
      'Private inference workflow for regulated document review using local SLMs, retrieval, OCR, containerized services, and analyst-facing review surfaces.',
    architecture: ['local document store', 'OCR', 'chunking', 'retrieval', 'Gemma/Ollama/vLLM', 'review UI'],
    stack: ['Podman', 'Streamlit', 'Ollama', 'vLLM', 'RAG', 'SLMs', 'private inference'],
    outcome: 'Review-time reduction and backlog clearance without moving private documents into public demos.',
  },
  {
    domain: 'Predictive healthcare',
    accent: '#f1bd5c',
    metric: 'Utilization prioritization',
    title: 'Readmission / LOS / ED Utilization Predictive Models',
    thesis:
      'Healthcare predictive modeling across claims, ADT events, demographics, diagnoses, medications, SDoH, risk scores, and operational features.',
    architecture: ['claims + ADT', 'feature store', 'XGBoost/stat models', 'risk outputs', 'Power BI', 'operational handoff'],
    stack: ['Python', 'SQL', 'XGBoost', 'scikit-learn', 'MLflow', 'Power BI', 'CI/CD'],
    outcome: 'Care-management prioritization, utilization insight, and governed model delivery patterns.',
  },
  {
    domain: 'FWA analytics',
    accent: '#f0a0bd',
    metric: '18% waste reduction',
    title: 'FWA Transportation Anomaly Detection',
    thesis:
      'Fraud, waste, and abuse analytics over multi-leg trips, utilization anomalies, geospatial validation, and proactive review workflows.',
    architecture: ['trip events', 'multi-leg features', 'ESRI validation', 'anomaly scoring', 'review queue', 'waste-reduction reporting'],
    stack: ['Python', 'SQL', 'ESRI', 'anomaly features', 'Power BI', 'workflow analytics'],
    outcome: 'Waste reduction through targeted, explainable review signals.',
  },
  {
    domain: 'Healthcare analytics product',
    accent: '#cbd5e1',
    metric: '$500K new revenue / $3M P4P impact',
    title: 'Healthcare Analytics Platform / Health Index',
    thesis:
      '0-to-1 healthcare analytics platform work using composite risk scoring, care gaps, SDoH features, quality analytics, and embedded delivery.',
    architecture: ['member data', 'risk scoring', 'care gaps', 'health index', 'embedded dashboard', 'care-manager workflow'],
    stack: ['Python', 'SQL', 'Power BI Embedded', 'Azure', 'risk models', 'analytics product'],
    outcome: 'New revenue and client impact through operational healthcare analytics products.',
  },
];
