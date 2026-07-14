import type { APIRoute } from 'astro';
import { profile } from '../data/profile';
import { experienceEras } from '../data/experience';
import { professionalSystems,labSystems,repositoryCommits,evolutionStages } from '../data/observatory';
import { researchItems } from '../data/research';
import { recognition } from '../data/recognition';
export const GET:APIRoute=()=>new Response(JSON.stringify({schemaVersion:'systems-observatory.v2.2',name:profile.name,role:profile.role,proposition:profile.positioning,evolution:evolutionStages,professionalSystems,openSourceSystems:labSystems,sourceCommits:repositoryCommits,research:{count:researchItems.length,href:'/research.json'},experience:experienceEras,recognition,links:{github:profile.github,linkedin:profile.linkedin,resumePage:'/resume/',resumePdf:profile.resumePath},boundaries:profile.privacyNote,lastUpdated:'2026-07-14'},null,2),{headers:{'Content-Type':'application/json; charset=utf-8'}});
