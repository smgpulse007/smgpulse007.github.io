import type { APIRoute } from 'astro';
import { researchItems } from '../data/research';
export const GET:APIRoute=()=>new Response(JSON.stringify({schemaVersion:'systems-observatory.research.v1',verifiedAt:'2026-07-14',curationBoundary:'Relevance-curated implementation map; not a ranking.',items:researchItems},null,2),{headers:{'Content-Type':'application/json; charset=utf-8'}});
