export const v23Identity = {
  name: 'Shailesh Dudala',
  role: 'Senior Applied AI / ML Engineer',
  supportingLine: 'Production Agentic AI · Predictive ML · Document Intelligence · MLOps · Healthcare & Insurance',
  thesis: 'I turn ambiguous, high-stakes data and model behavior into intelligent systems people can inspect, operate, and trust.',
  shortBio: 'Seven-plus years across scientific computing, healthcare prediction, analytics products, private document intelligence, and production agentic AI.',
} as const;

export type CareerStage = {
  id: string;
  label: string;
  period: string;
  title: string;
  organization: string;
  summary: string;
  proof: string[];
  methods: string[];
};

export const careerStages: CareerStage[] = [
  {
    id: 'foundation', label: 'Scientific foundations', period: 'Foundation',
    title: 'Biomedical informatics and scientific computing', organization: 'University of Chicago · AbbVie',
    summary: 'Clinical signals, genomics, research computing, and statistical reasoning established the habit of keeping lineage and assumptions visible.',
    proof: ['Biomedical informatics graduate training', 'Clinical sensor and genomics work', 'Public-health modeling training'],
    methods: ['Python', 'R', 'statistics', 'signal analysis', 'scientific visualization'],
  },
  {
    id: 'prediction', label: 'Prediction', period: '2020 — 2021',
    title: 'Predictive healthcare and operational analytics', organization: 'Hexplora · CommonSpirit Health · Health New England',
    summary: 'Readmission, utilization, hospital operations, and provider-data work connected model quality to the workflows that consume it.',
    proof: ['Analytics spanning 142 hospitals', '100K+ provider records validated', 'Explainable readmission modeling'],
    methods: ['XGBoost', 'calibration', 'feature engineering', 'SQL', 'operational analytics'],
  },
  {
    id: 'product', label: 'Product + MLOps', period: '2021 — 2023',
    title: 'A 0-to-1 healthcare analytics platform', organization: 'Hexplora Predictive Analytics',
    summary: 'Risk models, data pipelines, embedded reporting, and care-manager workflows became one reusable product across nine healthcare programs.',
    proof: ['$500K new revenue supported', '≈$3M client P4P impact supported', '≈50% faster model-deployment cycles'],
    methods: ['risk stratification', 'MLOps', 'Power BI Embedded', 'Azure', 'product leadership'],
  },
  {
    id: 'context', label: 'Document intelligence', period: '2023 — 2025',
    title: 'Predictive ML, quality evidence, FWA, and local AI', organization: 'Inland Empire Health Plan via Infowave',
    summary: 'Local OCR/RAG, healthcare quality evidence, predictive models, transportation anomaly review, and MLOps operated inside a payer data boundary.',
    proof: ['7K-case backlog cleared', '≈90% review-time reduction', '20% automated measure-closure improvement', '18% transportation waste reduction'],
    methods: ['local inference', 'OCR', 'RAG', 'FHIR/HL7', 'model monitoring', 'human review'],
  },
  {
    id: 'agent', label: 'Production agentic AI', period: '2026 — present',
    title: 'Claims automation with bounded authority', organization: 'MetLife via Bizintex',
    summary: 'Document and claims workflows combine typed state, tools, deterministic controls, exception routes, evaluation, and trace telemetry.',
    proof: ['≈90% lower handling effort in a measured workflow', '≈50% shorter time-to-payable in a supported workstream'],
    methods: ['agent graphs', 'typed contracts', 'evaluation', 'observability', 'reviewer authority'],
  },
];

export const professionalCases = [
  {
    slug: 'claims-intelligence', number: '01', eyebrow: 'Current professional system · sanitized',
    title: 'Production agentic claims automation',
    lede: 'From mixed claim packets to typed facts, visible exceptions, reviewer-ready decisions, and auditable workflow state.',
    proof: '≈90% lower handling effort in a measured packet workflow',
    secondaryProof: '≈50% shorter time-to-payable in a supported workstream',
    href: '/work/claims-intelligence/', accent: 'violet',
    system: ['Document intake', 'Typed extraction', 'Policy context', 'Deterministic validation', 'Exception routing', 'Human authority', 'Trace telemetry'],
  },
  {
    slug: 'predictive-healthcare-ml', number: '02', eyebrow: 'Professional portfolio · sanitized',
    title: 'Predictive healthcare ML',
    lede: 'Readmission, length-of-stay, utilization, quality, and FWA models designed around calibration, explainability, monitoring, and workflow fit.',
    proof: '18% transportation waste reduction',
    secondaryProof: 'Predictive delivery across payer and hospital contexts',
    href: '/work/predictive-healthcare-ml/', accent: 'cyan',
    system: ['Cohort definition', 'Feature lineage', 'Model comparison', 'Calibration', 'Threshold policy', 'Operational handoff', 'Drift review'],
  },
  {
    slug: 'healthcare-analytics-platform', number: '03', eyebrow: 'Professional product · sanitized',
    title: 'Healthcare analytics platform',
    lede: 'A 0-to-1 product connecting risk models, data pipelines, embedded analytics, and care-manager workflows across nine programs.',
    proof: '$500K new revenue supported',
    secondaryProof: '≈$3M client P4P impact supported across the broader program',
    href: '/work/healthcare-analytics-platform/', accent: 'amber',
    system: ['Program data', 'Reusable features', 'Risk models', 'Delivery pipelines', 'Health Index', 'Care-manager workflow'],
  },
  {
    slug: 'on-prem-rag-ocr', number: '04', eyebrow: 'Professional system · sanitized',
    title: 'On-prem document intelligence',
    lede: 'OCR, retrieval, local inference, citations, and review stayed inside the data boundary while making evidence faster to inspect.',
    proof: '7K-case backlog cleared',
    secondaryProof: '≈90% review-time reduction in the measured workflow',
    href: '/work/on-prem-rag-ocr/', accent: 'mint',
    system: ['Local intake', 'OCR + quality', 'Page-aware chunks', 'Retrieval', 'Structured answer', 'Evidence review', 'Evaluation'],
  },
] as const;

export const selectedEngagements = [
  { title: 'Healthcare quality evidence extraction', context: 'Payer modernization', result: '20% automated measure-closure improvement', capabilities: ['HL7 documents', 'OCR', 'rules', 'review queues'] },
  { title: 'Transportation FWA anomaly review', context: 'Operational analytics', result: '18% waste reduction', capabilities: ['geospatial validation', 'anomaly features', 'explainable review'] },
  { title: 'Hospital and provider-data analytics', context: '142 hospitals · 100K+ provider records', result: 'Operational and data-quality modernization', capabilities: ['ETL', 'validation', 'analytics', 'workflow automation'] },
  { title: 'Healthcare interoperability projects', context: 'HL7 · FHIR · SMART · CDS Hooks', result: 'Standards-aware public reference systems and team recognition', capabilities: ['FHIR resources', 'event systems', 'clinical workflow'] },
] as const;

export type ProjectTier = 'surface' | 'featured' | 'explore' | 'archive';
export type ProjectRecord = {
  slug: string; title: string; repository: string; tier: ProjectTier; category: string;
  status: string; proof: string; limitation: string; href?: string; media?: string;
};

const repo = (name: string) => `https://github.com/smgpulse007/${name}`;

export const projectInventory: ProjectRecord[] = [
  { slug:'profile', title:'GitHub profile', repository:repo('smgpulse007'), tier:'surface', category:'Portfolio', status:'Maintained', proof:'Public profile gateway, README, media', limitation:'Navigation surface, not a project system.' },
  { slug:'portfolio', title:'Portfolio source and release system', repository:repo('smgpulse007.github.io'), tier:'surface', category:'Portfolio', status:'Maintained · CI', proof:'Astro source, tests, accessibility, staging and release workflows', limitation:'The repository proves delivery practice; visual claims remain version-specific.' },
  { slug:'llm-steering', title:'LLM Steering', repository:repo('llm-steering'), tier:'featured', category:'Representation engineering', status:'Maintained · green CI · Pages', proof:'Tests, workbench UI, research records, checked-in outputs, demos', limitation:'Research workbench; effects vary by model, layer, prompt, and coefficient.', href:'/systems/llm-steering/', media:'/assets/case-studies/llm-steering/diagrams/activation-steering-flow.svg' },
  { slug:'meta-harness', title:'Meta Harness', repository:repo('meta-harness'), tier:'featured', category:'Agent systems', status:'Pre-1.0 · 14 green checks', proof:'Schemas, CLI/MCP, proof ledger, integrations, examples, docs', limitation:'Source-installed and pre-1.0; correctness is not guaranteed.', href:'/systems/meta-harness/' },
  { slug:'hospital-readmission-fhir-ml-api', title:'Hospital Readmission FHIR ML API', repository:repo('hospital-readmission-fhir-ml-api'), tier:'featured', category:'Predictive healthcare', status:'Maintained · green CI', proof:'Synthetic FHIR, explainability, tests, docs, Docker', limitation:'Deterministic demo model; not clinically validated.', href:'/lab/hospital-readmission-fhir-api/' },
  { slug:'hl7-ai-challenge', title:'HL7 AI Challenge Platform', repository:repo('hl7-ai-challenge'), tier:'featured', category:'Healthcare interoperability', status:'Public challenge system · no conventional CI', proof:'Architecture, demo package, event-driven services, test scripts', limitation:'Synthetic/reference platform; scenario metrics are assumptions.', href:'/lab/hl7-ai-reference-platform/', media:'/assets/case-studies/hl7/diagrams/architecture-high-level.png' },
  { slug:'alphaquant', title:'AlphaQuant', repository:repo('AlphaQuant'), tier:'featured', category:'Agent research', status:'Engineering demo · no CI', proof:'Docker stack, multi-service architecture, terminal and UI media', limitation:'Research and engineering demo; not a trading product.', href:'/lab/alphaquant/', media:'/assets/case-studies/alphaquant/screenshots/ui-screenshot.png' },
  { slug:'ollama-poc', title:'Local Document AI / Ollama PoC', repository:repo('ollama_poc'), tier:'featured', category:'Document intelligence', status:'Public PoC · no CI', proof:'Docker, local inference path, sample workflow and test scripts', limitation:'Synthetic/sample-document proof; OCR and model support are bounded.', href:'/lab/local-document-ai/' },
  { slug:'ai-cocktail', title:'AI Cocktail Assistant', repository:repo('AICocktailAssistant'), tier:'explore', category:'Applied AI', status:'Prototype', proof:'Public app and homepage', limitation:'Prototype-level evidence.' },
  { slug:'azure-los', title:'Azure LOS Prediction', repository:repo('AzureLOSPrediction'), tier:'explore', category:'Predictive healthcare', status:'Historical notebook', proof:'LOS regression on Microsoft toy data', limitation:'No CI or detected license.' },
  { slug:'chatgpt-local', title:'ChatGPT Local', repository:repo('chatgpt-local'), tier:'explore', category:'Local AI', status:'Experiment', proof:'Local/containerized implementation', limitation:'Limited validation evidence.' },
  { slug:'chatwithwiki', title:'ChatWithWiki Azure ML', repository:repo('ChatWithWiki_AzureML'), tier:'explore', category:'Retrieval', status:'Prompt Flow demo', proof:'Azure Prompt Flow RAG implementation and README', limitation:'No tests, CI, or detected license.', href:'/lab/chatwithwiki-azure-ml/' },
  { slug:'docker-py', title:'Docker Python App', repository:repo('DockerPyApp'), tier:'explore', category:'Infrastructure', status:'Learning experiment', proof:'Container and Kubernetes implementation', limitation:'Minimal project depth.' },
  { slug:'freshtrack', title:'FreshTrack AI Module', repository:repo('FreshTrackAIModule'), tier:'explore', category:'Document intelligence', status:'CI currently red', proof:'Rich API, tests, Docker, docs, synthetic sample', limitation:'Default-tip test, security, and build checks are failing.', href:'/lab/freshtrack-ai-module/' },
  { slug:'hedis-dashboard', title:'HEDIS Dashboard', repository:repo('HEDIS-Dashboard'), tier:'explore', category:'Healthcare analytics', status:'Prototype', proof:'Streamlit surface', limitation:'README is template-like; no CI or tests.' },
  { slug:'hnsc-viz', title:'HNSC Visualization', repository:repo('hnsc_viz'), tier:'explore', category:'Scientific computing', status:'Historical visualization', proof:'Authentic slide-image activation visualization', limitation:'Small research example.' },
  { slug:'medication', title:'Medication Recommendation', repository:repo('MedicationRecommendation'), tier:'explore', category:'Predictive healthcare', status:'Experiment', proof:'Public implementation and README', limitation:'No maturity or clinical-validity claim.' },
  { slug:'mlops', title:'Azure MLOps Reference', repository:repo('MLOps'), tier:'explore', category:'MLOps', status:'Reference study', proof:'Architecture and documentation', limitation:'Implementation study, not proprietary production proof.' },
  { slug:'neetcode-gpt', title:'Neetcode GPT', repository:repo('neetcode-gpt'), tier:'explore', category:'Applied AI', status:'Experiment', proof:'Public code and README', limitation:'Limited validation evidence.' },
  { slug:'nfl-forecasting', title:'NFL Forecasting', repository:repo('nfl_betting_model'), tier:'explore', category:'Forecasting', status:'GitHub-archived', proof:'Historical backtests and self-evaluated model comparison', limitation:'Archived, no CI, self-reported metrics, and no detected license file.', href:'/lab/nfl-forecasting-archive/' },
  { slug:'py-projects', title:'Python Projects', repository:repo('Py-Projects'), tier:'explore', category:'Foundations', status:'Historical', proof:'Earlier Python practice', limitation:'No modern validation maturity.' },
  { slug:'r-projects', title:'R Projects', repository:repo('R_Projects'), tier:'explore', category:'Scientific computing', status:'Historical', proof:'Statistical computing and analysis history', limitation:'No modern CI maturity.' },
  { slug:'hedis-rag', title:'RAG for HEDIS', repository:repo('RAGImplementationForHEDIS_SSD'), tier:'explore', category:'Document intelligence', status:'Design documents', proof:'Architecture and proposal artifacts', limitation:'Not a validated executable system.' },
  { slug:'w5', title:'W5 Biomedical Work', repository:repo('W5'), tier:'explore', category:'Scientific computing', status:'Historical coursework', proof:'Biomedical/statistical foundation evidence', limitation:'Historical learning artifact.' },
  { slug:'30-days', title:'30 Days of Code', repository:repo('30DaysOfCode'), tier:'archive', category:'Learning history', status:'Archived', proof:'Coding practice history', limitation:'Archived learning artifact.' },
  { slug:'check123', title:'Check123', repository:repo('Check123'), tier:'archive', category:'Archive', status:'Archived', proof:'Repository history', limitation:'No current portfolio claim.' },
  { slug:'crs', title:'CRS', repository:repo('CRS'), tier:'archive', category:'Archive', status:'Historical', proof:'Repository history', limitation:'Insufficient current evidence for promotion.' },
  { slug:'faiss', title:'FAISS Nearest-Neighbor Search', repository:repo('faissNNSearch'), tier:'archive', category:'Retrieval', status:'Historical', proof:'Vector-search exploration', limitation:'Historical implementation.' },
  { slug:'fp', title:'FP', repository:repo('fp'), tier:'archive', category:'Archive', status:'Archived · empty', proof:'Repository record only', limitation:'Empty repository.' },
  { slug:'tfidf', title:'TF-IDF Weights', repository:repo('getweights_tfidf'), tier:'archive', category:'NLP foundations', status:'Historical', proof:'Text-weighting implementation', limitation:'Small historical artifact.' },
  { slug:'gpu-analysis', title:'GPU Analysis', repository:repo('gpu_analysis'), tier:'archive', category:'Systems', status:'Historical', proof:'Performance/systems exploration', limitation:'Limited present-day project evidence.' },
  { slug:'langchain-gemini', title:'LangChain with Gemini', repository:repo('langchain-w-gemini'), tier:'archive', category:'Agent experiments', status:'Historical', proof:'Framework experiment', limitation:'No distinct current proof boundary.' },
  { slug:'market-analyzer', title:'Market Analyzer App', repository:repo('MarketAnalyzerApp'), tier:'archive', category:'Analytics', status:'Historical', proof:'Application experiment', limitation:'Not promoted without current validation.' },
  { slug:'ml-templates', title:'ML Templates', repository:repo('ML_Templates'), tier:'archive', category:'MLOps', status:'Template collection', proof:'Pylint workflow and reusable templates', limitation:'Reference collection, not one product.' },
  { slug:'neetcode-submissions', title:'Neetcode Submissions', repository:repo('neetcode-submissions'), tier:'archive', category:'Learning history', status:'Historical', proof:'Algorithm practice', limitation:'Practice archive.' },
  { slug:'rosalind', title:'Rosalind', repository:repo('Rosalind'), tier:'archive', category:'Bioinformatics', status:'Historical', proof:'Bioinformatics problem-solving history', limitation:'Course/problem-set evidence.' },
  { slug:'streamlit-apps', title:'Streamlit Apps', repository:repo('StreamlitApps'), tier:'archive', category:'Applications', status:'Historical', proof:'UI prototyping history', limitation:'Collection-level evidence.' },
  { slug:'summarizer', title:'Summarizer App', repository:repo('SummarizerApp'), tier:'archive', category:'NLP', status:'Historical', proof:'Summarization application', limitation:'Limited current validation.' },
  { slug:'titanic', title:'Titanic Transformed Kaggle', repository:repo('TitanicTransformedKaggle'), tier:'archive', category:'ML foundations', status:'Historical', proof:'Tabular ML practice', limitation:'Learning artifact.' },
  { slug:'vllm', title:'vLLM Experiment', repository:repo('vLLM'), tier:'archive', category:'Local AI', status:'Historical', proof:'Serving experiment', limitation:'Not the upstream vLLM project and not promoted as such.' },
  { slug:'webbot', title:'Webbot Reference', repository:repo('webbotRef'), tier:'archive', category:'Automation', status:'Historical', proof:'Automation reference implementation', limitation:'Reference artifact.' },
];

export const labProjects = projectInventory.filter((project) => project.tier !== 'surface');
export const featuredProjects = labProjects.filter((project) => project.tier === 'featured');
export const exploreProjects = labProjects.filter((project) => project.tier === 'explore');
export const archiveProjects = labProjects.filter((project) => project.tier === 'archive');

export const capabilityCrosswalk = [
  { capability:'Predictive modeling', proof:'Readmission, LOS, utilization, quality, FWA, forecasting', surfaces:['Predictive healthcare case','Experience','FHIR ML API'] },
  { capability:'Data + scientific computing', proof:'Biomedical signals, genomics, hospital and provider analytics', surfaces:['Experience','About','Scientific Lab'] },
  { capability:'ML engineering + MLOps', proof:'Nine-program product, model delivery, monitoring, containers', surfaces:['Healthcare platform case','Experience','MLOps Lab'] },
  { capability:'Document intelligence', proof:'Local OCR/RAG, HEDIS evidence, claim packets', surfaces:['Document case','Claims case','Lab'] },
  { capability:'Agentic AI', proof:'Typed state, tools, exceptions, evaluation, authority boundaries', surfaces:['Claims case','Meta Harness','AlphaQuant'] },
  { capability:'Healthcare interoperability', proof:'FHIR, HL7, SMART, CDS Hooks, team projects', surfaces:['Work','Lab','Recognition'] },
  { capability:'Product + leadership', proof:'0-to-1 platform, cross-functional delivery, nine programs', surfaces:['Platform case','Experience','About'] },
] as const;
