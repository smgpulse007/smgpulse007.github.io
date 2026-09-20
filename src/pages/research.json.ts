import type { APIRoute } from 'astro';
import { researchItems } from '../data/research';
import { authoredPublications } from '../data/publications';

const foundationIds = new Set(['xgboost','shap','calibration','probabilities','rag','lost-middle','react','toolformer','rep-eng','smart-fhir','fhir-r4','fhir-review']);
const frontierIds = new Set(['context-survey','ace','acdl','harness-engineering','nl-harnesses','meta-harness-paper','agentic-harness','code-harness','harness-bench','grep','why-rep','plasticity']);
const viewFor = (id: string) => foundationIds.has(id) ? 'foundation' : frontierIds.has(id) ? 'frontier-watch' : 'applied-engineering';

export const GET: APIRoute = () => new Response(JSON.stringify({
  schemaVersion: 'portfolio.research.v2.3',
  verifiedAt: '2026-07-17',
  curationBoundary: 'Relevance-curated implementation map; not a ranking. Frontier preprints remain distinct from stable foundations.',
  counts: { external: researchItems.length, authored: authoredPublications.length, total: researchItems.length + authoredPublications.length },
  externalRecords: researchItems.map((item) => ({ ...item, view: viewFor(item.id) })),
  authoredPublications,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
