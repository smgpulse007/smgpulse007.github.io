import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  let commit = process.env.GITHUB_SHA?.slice(0, 7) ?? process.env.COMMIT_SHA?.slice(0, 7) ?? 'unknown';
  if (commit === 'unknown') {
    try { commit = execFileSync('git', ['rev-parse', '--short', 'HEAD'], { encoding: 'utf8' }).trim(); } catch { /* build remains valid outside git */ }
  }
  return new Response(JSON.stringify({ commit, builtAt: new Date().toISOString(), target: siteConfig.target }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};

