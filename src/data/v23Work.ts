import type { WorkItem } from './types';
import { workItems } from './work';

export const predictiveHealthcareWork: WorkItem = {
  slug: 'predictive-healthcare-ml',
  title: 'Predictive healthcare ML: from cohort definition to operational action',
  eyebrow: 'Predictive healthcare ML',
  lede: 'A portfolio of readmission, length-of-stay, utilization, healthcare quality, and FWA models built around calibrated risk, explainable review, and workflow fit.',
  outcome: 'Supported prioritization and operational improvement across payer and hospital contexts, including an 18% reduction in transportation waste in the documented FWA workflow.',
  executiveSummary: {
    problem: 'Healthcare risk scores could be statistically sound yet unusable when cohorts, horizons, thresholds, or reviewer capacity did not match the operating decision.',
    decision: 'Treat cohort definition, calibration, threshold policy, and workflow capacity as one release contract for human prioritization.',
    change: 'Supported operational prioritization across payer and hospital contexts, including an 18% reduction in transportation waste in the documented FWA workflow.',
  },
  type: 'Professional system — sanitized',
  status: 'Multi-engagement professional portfolio; details sanitized',
  domain: 'Healthcare · Predictive ML · MLOps · Operational analytics',
  role: 'Data science and ML engineering across cohort design, features, modeling, evaluation, deployment, monitoring, and stakeholder adoption',
  timeframe: '2020–2025',
  teamContext: 'Cross-functional delivery with clinical, care-management, quality, operations, product, and data-platform partners',
  featured: true,
  order: 2,
  technologies: ['Python', 'SQL', 'XGBoost', 'scikit-learn', 'calibration', 'MLflow', 'Azure', 'Power BI'],
  privacyBoundary: 'All cohorts, thresholds, feature examples, curves, and workflow artifacts are synthetic reconstructions. No member data, client records, proprietary definitions, or production model files are published.',
  accent: 'cyan',
  visual: 'health-index',
  flow: ['Define cohort', 'Build features', 'Compare baselines', 'Calibrate', 'Set policy', 'Deliver', 'Monitor'],
  artifact: {
    label: 'Illustrative evaluation contract',
    code: `evaluation_release:
  cohort: synthetic_adult_inpatient
  horizon_days: 30
  baseline: logistic_regression
  challenger: gradient_boosted_trees
  metrics: [auroc, auprc, brier, calibration_slope]
  slices: [age_band, service_line, prior_utilization]
  decision: reviewer_prioritization_only
  release_state: shadow_ready`,
  },
  glance: [
    { label: 'Portfolio', value: 'Readmission · LOS · ED utilization · quality · FWA' },
    { label: 'Decision', value: 'Prioritization and review, not autonomous clinical judgment' },
    { label: 'Evaluation', value: 'Discrimination, calibration, slices, workflow outcome' },
    { label: 'Public data', value: 'Synthetic artifacts only' },
  ],
  sections: [
    {
      heading: 'One discipline across several prediction problems',
      body: [
        'Readmission, length of stay, emergency-department utilization, quality gaps, and transportation anomalies have different labels and operating rhythms. They share a harder requirement: the score has to arrive with enough context for a real team to act responsibly.',
        'This case study is a public-safe synthesis of multiple engagements. It shows the modeling and delivery discipline without collapsing distinct clients, cohorts, or outcomes into one fictional product.',
      ],
    },
    {
      heading: 'My role',
      body: [
        'I worked across cohort definition, data-quality rules, feature engineering, baseline and challenger models, calibration, explainability, evaluation slices, deployment, monitoring, and the analytics surfaces used by operations and care teams.',
        'The product question was always paired with the statistical one: who will use the score, what action can follow, what capacity exists, and what failure is more costly?',
      ],
    },
    {
      heading: 'Cohorts and labels before algorithms',
      body: [
        'A technically clean model can still be wrong for the workflow if the index event, observation window, prediction horizon, exclusions, or outcome definition drift from the operational decision. I treated those definitions as versioned contracts.',
        'Claims, ADT events, demographics, diagnoses, medications, prior utilization, quality signals, and social-risk features were joined with explicit provenance and point-in-time boundaries.',
      ],
      bullets: ['Prevent post-outcome leakage', 'Keep training and scoring definitions aligned', 'Measure missingness and freshness by source', 'Document proxy and access concerns'],
    },
    {
      heading: 'Baselines, challengers, and calibration',
      body: [
        'Interpretable baselines established whether additional complexity earned its operational cost. Logistic models, rules, and simple risk scores were compared with boosted trees and task-specific challengers.',
        'AUROC alone was never the release decision. Precision-recall behavior, Brier score, calibration curves, threshold tradeoffs, and slice-level stability mattered because teams consume ranked probabilities under limited capacity.',
      ],
    },
    {
      heading: 'Explainability as a review aid',
      body: [
        'Feature attribution helped debug data and communicate why a record moved in the ranking. It did not establish causality or justify an intervention by itself.',
        'Useful reviewer surfaces paired risk bands with current evidence, temporal context, missingness, and the action boundary. Sensitive or weak proxies required explicit review rather than a prettier explanation chart.',
      ],
    },
    {
      heading: 'From score to operating system',
      body: [
        'Batch and API delivery paths were designed around the receiving workflow: refresh cadence, available capacity, escalation rules, feedback capture, and the difference between informational and action-triggering outputs.',
        'Monitoring separated service health, data drift, score distribution, calibration, slice behavior, downstream action, and outcome. A healthy endpoint was not treated as a healthy model.',
      ],
    },
    {
      heading: 'What failed or underperformed',
      body: [
        'Leakage from post-event fields, changes in coding practice, sparse subgroups, shifting utilization patterns, and threshold choices disconnected from operational capacity all created failure modes that a single aggregate metric would hide.',
        'Where a model did not beat an interpretable baseline or could not be connected to a responsible action, the right outcome was to simplify, keep it in shadow mode, or stop.',
      ],
    },
    {
      heading: 'Documented outcomes',
      body: [
        'In the transportation FWA workflow, explainable anomaly review supported an 18% reduction in waste. Other models supported care-management prioritization, utilization insight, quality work, and the reusable analytics platform described in the adjacent case study.',
        'These outcomes belong to their documented workstreams. This page does not imply clinical validation, universal performance, or that a model alone produced a program result.',
      ],
    },
    {
      heading: 'What I would improve next',
      body: [
        'I would formalize dataset and model cards in the release path, expand temporal and subgroup validation, pair calibration monitoring with action-rate monitoring, and require a shadow-mode checkpoint before every material cohort or feature change.',
      ],
    },
  ],
  evidence: [
    { label: 'Career record', classification: 'resume-supported', detail: 'The predictive-healthcare scope, model families, engagement contexts, and qualified FWA outcome are supported by the governed career record.' },
    { label: 'Public reference API', classification: 'public-source', href: 'https://github.com/smgpulse007/hospital-readmission-fhir-ml-api', detail: 'A separate synthetic FHIR/ML API makes an adjacent public contract inspectable; it is not a production clinical model.' },
    { label: 'Research foundations', classification: 'public-source', href: '/research/', detail: 'The Research page connects calibration, explainability, clinical reporting, and model-quality references to this work.' },
  ],
  limitations: [
    'No production datasets, model weights, thresholds, or client definitions are published.',
    'The illustrated comparison uses synthetic data and does not reproduce a private model result.',
    'Model scores supported human prioritization and workflow decisions; they did not replace clinical judgment.',
  ],
  seo: {
    title: 'Predictive Healthcare ML Case Study — Shailesh Dudala',
    description: 'A public-safe case study spanning readmission, length-of-stay, utilization, healthcare quality, FWA, calibration, explainability, MLOps, and responsible operational handoff.',
  },
};

const legacyProfessional = workItems.filter((item) => item.slug !== 'llm-steering-lab');
export const v23ProfessionalWorkItems = [...legacyProfessional, predictiveHealthcareWork].sort((a, b) => {
  const order = ['claims-intelligence', 'predictive-healthcare-ml', 'healthcare-analytics-platform', 'on-prem-rag-ocr'];
  return order.indexOf(a.slug) - order.indexOf(b.slug);
});

export const v23OpenSourceWorkItems = workItems.filter((item) => item.slug === 'llm-steering-lab');
export const allV23WorkItems = [...workItems, predictiveHealthcareWork];
