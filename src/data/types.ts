export type EvidenceStatus = 'public-source' | 'resume-supported' | 'private-evidence' | 'unverified';
export type PublicationStatus = 'approved' | 'qualified' | 'hidden';
export type ProjectType =
  | 'Professional system — sanitized'
  | 'Public reference implementation'
  | 'Research lab'
  | 'Team award project'
  | 'Historical project'
  | 'Archived experiment';

export type FlagshipVisual =
  | 'packet-trace'
  | 'local-boundary'
  | 'health-index'
  | 'activation-steering';

export type ImpactClaim = {
  id: string;
  value: string;
  label: string;
  context: string;
  role: string;
  evidenceStatus: EvidenceStatus;
  publicationStatus: PublicationStatus;
  sourceLabel?: string;
  sourceUrl?: string;
  qualification?: string;
};

export type EvidenceItem = {
  label: string;
  classification: EvidenceStatus;
  href?: string;
  detail: string;
};

export type WorkSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type WorkItem = {
  slug: string;
  title: string;
  eyebrow: string;
  lede: string;
  outcome: string;
  executiveSummary: {
    problem: string;
    decision: string;
    change: string;
  };
  type: ProjectType;
  status: string;
  domain: string;
  role: string;
  timeframe: string;
  teamContext: string;
  featured: boolean;
  order: number;
  repository?: string;
  liveDemo?: string;
  technologies: string[];
  privacyBoundary: string;
  accent: 'jade' | 'cyan' | 'amber' | 'violet';
  visual: FlagshipVisual;
  flow: string[];
  artifact: { label: string; code: string };
  glance: Array<{ label: string; value: string }>;
  sections: WorkSection[];
  evidence: EvidenceItem[];
  limitations: string[];
  seo: { title: string; description: string };
};

