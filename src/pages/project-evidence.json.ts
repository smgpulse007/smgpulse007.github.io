import type { APIRoute } from 'astro';
import { projectEvidenceAssets } from '../data/projectEvidence';

export const GET: APIRoute = () => new Response(JSON.stringify({
  schemaVersion: 'portfolio-project-evidence.v1',
  generatedFrom: 'src/data/projectEvidence.ts',
  assets: projectEvidenceAssets,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
