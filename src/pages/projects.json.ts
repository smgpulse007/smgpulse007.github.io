import type { APIRoute } from 'astro';
import { projectInventory } from '../data/v23';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => new Response(JSON.stringify({
  version: '2.3',
  generatedAt: new Date().toISOString(),
  deploymentTarget: siteConfig.target,
  count: projectInventory.length,
  authoredRepositoryCount: projectInventory.filter((project) => project.tier !== 'surface').length,
  projects: projectInventory,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
