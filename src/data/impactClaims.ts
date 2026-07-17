import type { ImpactClaim } from './types';

export const impactClaims: ImpactClaim[] = [
  {
    id: 'claims-handling', value: '≈90%', label: 'lower document-handling effort',
    context: 'Measured claim-packet workflow in the current insurance engagement.',
    role: 'Designed applied AI workflow architecture, validation, exception routing, and observability.',
    evidenceStatus: 'resume-supported', publicationStatus: 'qualified', sourceLabel: 'Latest résumé',
    qualification: 'Approximate result in one measured workstream; distinct from the payer review-time result.',
  },
  {
    id: 'time-payable', value: '≈50%', label: 'shorter time-to-payable',
    context: 'Supported claim-packet workstream in the current insurance engagement.',
    role: 'Applied AI engineering across document processing, workflow controls, and review handoff.',
    evidenceStatus: 'resume-supported', publicationStatus: 'qualified', sourceLabel: 'Latest résumé',
    qualification: 'Approximate result in a supported workstream; not an enterprise-wide claim.',
  },
  {
    id: 'backlog', value: '7K', label: 'case backlog cleared',
    context: 'On-premises compliance review workstream in a healthcare payer environment.',
    role: 'Led the local RAG, OCR, retrieval, and reviewer-workflow implementation.',
    evidenceStatus: 'resume-supported', publicationStatus: 'approved', sourceLabel: 'Latest résumé',
  },
  {
    id: 'review-time', value: '90%', label: 'review-time reduction',
    context: 'Measured document-review workflow after local retrieval and structured extraction were introduced.',
    role: 'Owned the applied ML workflow, deployment boundary, and reviewer fallback.',
    evidenceStatus: 'resume-supported', publicationStatus: 'qualified', sourceLabel: 'Latest résumé',
    qualification: 'Approximate reduction in the measured workflow; not an enterprise-wide claim.',
  },
  {
    id: 'closure', value: '20%', label: 'automated closure improvement',
    context: 'Healthcare quality-measure evidence extraction and review workflow.',
    role: 'Led data, model, validation, and operational handoff work.',
    evidenceStatus: 'resume-supported', publicationStatus: 'approved', sourceLabel: 'Latest résumé',
  },
  {
    id: 'fwa', value: '18%', label: 'FWA waste reduction',
    context: 'Transportation anomaly detection and explainable review prioritization.',
    role: 'Built the feature, anomaly, geospatial validation, and reporting workflow.',
    evidenceStatus: 'resume-supported', publicationStatus: 'approved', sourceLabel: 'Latest résumé',
  },
  {
    id: 'p4p', value: '≈$3M', label: 'client P4P impact',
    context: 'Healthcare analytics programs supporting quality and value-based care delivery.',
    role: 'Led product analytics, risk modeling, and operational delivery across the platform.',
    evidenceStatus: 'resume-supported', publicationStatus: 'qualified', sourceLabel: 'Latest résumé',
    qualification: 'Approximate client performance-based payouts supported by the broader program.',
  },
  {
    id: 'revenue', value: '$500K', label: 'new revenue enabled',
    context: '0-to-1 healthcare analytics platform and client program delivery.',
    role: 'Led analytics product development and technical delivery.',
    evidenceStatus: 'resume-supported', publicationStatus: 'approved', sourceLabel: 'Latest résumé',
  },
];

export const publicImpactClaims = impactClaims.filter((claim) => claim.publicationStatus !== 'hidden');

