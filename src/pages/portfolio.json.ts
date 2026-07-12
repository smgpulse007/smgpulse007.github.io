import type { APIRoute } from 'astro';
import { profile } from '../data/profile';
import { publicImpactClaims } from '../data/impactClaims';
import { experienceEras } from '../data/experience';
import { labItems } from '../data/lab';
import { recognition } from '../data/recognition';
import { workItems } from '../data/work';

export const GET: APIRoute = () => new Response(JSON.stringify({
  name: profile.name,
  role: profile.role,
  positioning: profile.positioning,
  links: { github: profile.github, linkedin: profile.linkedin, resumePage: '/resume/', resumePdfPublished: profile.resumeAvailable },
  selectedExperience: experienceEras.map(({ period, organization, title, theme }) => ({ period, organization, title, theme })),
  selectedProjects: workItems.map(({ slug, title, type, status, domain, role, repository, outcome }) => ({ slug, title, type, status, domain, role, repository, outcome })),
  lab: labItems.map(({ title, status, domain, href, limitation }) => ({ title, status, domain, href, limitation })),
  recognition,
  publicImpactClaims,
  boundaries: profile.privacyNote,
  lastUpdated: '2026-07-12',
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
