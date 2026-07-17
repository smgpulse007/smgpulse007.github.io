import type { APIRoute } from 'astro';
import { profile } from '../data/profile';
import { careerStages, professionalCases, projectInventory, v23Identity } from '../data/v23';
import { researchItems } from '../data/research';
import { recognition } from '../data/recognition';

export const GET: APIRoute = () => new Response(JSON.stringify({
  schemaVersion: 'portfolio.v2.3',
  name: profile.name,
  role: profile.role,
  supportingLine: v23Identity.supportingLine,
  proposition: v23Identity.thesis,
  careerStages,
  professionalSystems: professionalCases,
  projects: { count: projectInventory.length, authoredRepositoryCount: projectInventory.filter((project) => project.tier !== 'surface').length, href: '/projects.json' },
  research: { count: researchItems.length + 2, externalRecordCount: researchItems.length, authoredPublicationCount: 2, href: '/research.json' },
  recognition,
  links: { github: profile.github, linkedin: profile.linkedin, resumePage: '/resume/', resumePdf: profile.resumePath, work: '/work/', experience: '/experience/', lab: '/lab/' },
  boundaries: profile.privacyNote,
  lastUpdated: '2026-07-17',
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
