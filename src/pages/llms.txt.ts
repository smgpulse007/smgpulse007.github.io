import type { APIRoute } from 'astro';
import { profile } from '../data/profile';
import { workItems } from '../data/work';

export const GET: APIRoute = () => {
  const cases = workItems.map((item) => `- ${item.title}: /work/${item.slug}/ (${item.type})`).join('\n');
  const body = `# ${profile.name}\n\n${profile.role}. ${profile.positioning}\n\n## Canonical pages\n- Home: /\n- Work: /work/\n- Experience: /experience/\n- Lab: /lab/\n- Recognition: /recognition/\n- About: /about/\n- Resume: /resume/\n- Contact: /contact/\n- Machine-readable profile: /portfolio.json\n\n## Selected case studies\n${cases}\n\n## Publication boundary\n${profile.privacyNote}\nProfessional systems are described without private implementation details. Public repositories are not represented as employer systems. Illustrative demonstrations are not represented as clinically validated models.\n\n## Contact\n- GitHub: ${profile.github}\n- LinkedIn: ${profile.linkedin}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
