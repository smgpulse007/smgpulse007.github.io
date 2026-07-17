import type { APIRoute } from 'astro';
import { profile } from '../data/profile';
import { professionalCases, featuredProjects } from '../data/v23';

export const GET: APIRoute = () => {
  const work = professionalCases.map((entry) => `- ${entry.title}: ${entry.href}`).join('\n');
  const projects = featuredProjects.map((entry) => `- ${entry.title}: ${entry.href ?? entry.repository} (${entry.status}; ${entry.limitation})`).join('\n');
  const body = `# ${profile.name}\n\n${profile.role}. ${profile.positioning}\n\n## Canonical portfolio surfaces\n- Home: /\n- Professional Work: /work/\n- Experience: /experience/\n- Project Lab: /lab/\n- Research: /research/\n- About: /about/\n- Recognition: /recognition/\n- Public resume: /resume/\n- Machine profile: /portfolio.json\n- Machine projects: /projects.json\n- Machine research: /research.json\n\n## Professional work\n${work}\n\n## Featured public projects\n${projects}\n\n## Boundary\n${profile.privacyNote}\nProfessional systems use sanitized architecture and synthetic artifacts. Public repositories are not represented as employer systems. Static walkthroughs are not represented as live model or agent calls. Repository status and limits are versioned evidence and may change.\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
