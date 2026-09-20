export type ProjectEvidenceAsset = {
  id: string;
  project: string;
  path: string;
  sourceRepository: string;
  sourcePath: string;
  commit: string;
  license: string;
  alt: string;
  caption: string;
  publicSafe: boolean;
};

export const projectEvidenceAssets: ProjectEvidenceAsset[] = [
  {
    id: 'llm-activation-flow',
    project: 'LLM Steering',
    path: '/assets/case-studies/llm-steering/diagrams/activation-steering-flow.svg',
    sourceRepository: 'https://github.com/smgpulse007/llm-steering',
    sourcePath: 'docs/assets/activation_steering_flow.svg',
    commit: '8c1242839e1f8f74fd50f4b6bad37f71a2d83122',
    license: 'MIT',
    alt: 'Activation steering flow from prompt and model layer to vector intervention and compared output.',
    caption: 'The public repository diagram locates the intervention between activation capture and generation.',
    publicSafe: true,
  },
  {
    id: 'llm-hook-diagram',
    project: 'LLM Steering',
    path: '/assets/case-studies/llm-steering/diagrams/pre-post-hooking.svg',
    sourceRepository: 'https://github.com/smgpulse007/llm-steering',
    sourcePath: 'docs/assets/pre_post_hooking.svg',
    commit: '8c1242839e1f8f74fd50f4b6bad37f71a2d83122',
    license: 'MIT',
    alt: 'Diagram comparing pre-layer and post-layer activation hooks.',
    caption: 'Hook placement is part of the experiment record because it changes what the intervention means.',
    publicSafe: true,
  },
  {
    id: 'hl7-high-level',
    project: 'HL7 AI Challenge reference architecture',
    path: '/assets/case-studies/hl7/diagrams/architecture-high-level.png',
    sourceRepository: 'https://github.com/smgpulse007/hl7-ai-challenge',
    sourcePath: 'deliverables/Architechture_High_Level.png',
    commit: '31e65d44f535cb94b2b7edc517b60f3703aafbfa',
    license: 'MIT',
    alt: 'High-level HL7 and FHIR reference architecture linking event ingestion, analytics, orchestration, and care applications.',
    caption: 'A checked-in reference architecture. It is not the Let’s Talk Doc award project or evidence of clinical deployment.',
    publicSafe: true,
  },
  {
    id: 'alphaquant-ui',
    project: 'AlphaQuant',
    path: '/assets/case-studies/alphaquant/screenshots/ui-screenshot.png',
    sourceRepository: 'https://github.com/smgpulse007/AlphaQuant',
    sourcePath: 'artifacts/ui-screenshot.png',
    commit: 'f8f12792d39fdb3e95cccb391620d5128068debf',
    license: 'MIT',
    alt: 'AlphaQuant local research interface with agent workflow and forecasting panels.',
    caption: 'A checked-in interface capture from an engineering research project; it is not investment advice.',
    publicSafe: true,
  },
];

export function evidenceAsset(id: string) {
  return projectEvidenceAssets.find((asset) => asset.id === id);
}
