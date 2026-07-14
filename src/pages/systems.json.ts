import type { APIRoute } from 'astro';
import { evolutionStages,professionalSystems,labSystems,repositoryCommits } from '../data/observatory';
export const GET:APIRoute=()=>new Response(JSON.stringify({schemaVersion:'systems-observatory.systems.v1',evolutionStages,professionalSystems,openSourceSystems:labSystems,sourceCommits:repositoryCommits},null,2),{headers:{'Content-Type':'application/json; charset=utf-8'}});
