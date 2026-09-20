import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { allV23WorkItems } from '../../data/v23Work';

const cards = [
  { slug: 'home', eyebrow: 'Senior Applied AI / ML Engineer', title: 'Shailesh Dudala.' },
  { slug: 'work', eyebrow: 'Professional work', title: 'Selected work.' },
  { slug: 'experience', eyebrow: 'Experience', title: 'From biomedical data to accountable AI workflows.' },
  { slug: 'lab', eyebrow: 'Open-source engineering', title: 'Projects & experiments.' },
  { slug: 'systems', eyebrow: 'Systems', title: 'The system around the model is the work.' },
  { slug: 'evolution', eyebrow: 'Evolution', title: 'Signal becomes proof.' },
  { slug: 'research', eyebrow: 'Research', title: 'Research & reading.' },
  { slug: 'systems-claims-agents', eyebrow: 'Current frontier', title: 'Context-engineered claims agents.' },
  { slug: 'systems-predictive-ml', eyebrow: 'Professional system', title: 'Predictive healthcare ML.' },
  { slug: 'systems-healthcare-platform', eyebrow: 'Professional system', title: 'Healthcare analytics platform.' },
  { slug: 'systems-document-intelligence', eyebrow: 'Professional system', title: 'Local document intelligence.' },
  { slug: 'systems-meta-harness', eyebrow: 'Open-source flagship', title: 'Phases, packets, proof, continuation.' },
  { slug: 'systems-llm-steering', eyebrow: 'Open-source flagship', title: 'Model behavior becomes inspectable.' },
  { slug: 'concepts-observatory', eyebrow: 'V2.2 concept 01', title: 'Systems Observatory.' },
  { slug: 'concepts-agent-system', eyebrow: 'V2.2 concept 02', title: 'Agent Operating System.' },
  { slug: 'concepts-evolution', eyebrow: 'V2.2 concept 03', title: 'Evolution Engine.' },
  { slug: 'concepts-v23-signal-field', eyebrow: 'V2.3 concept 01', title: 'Signal Field.' },
  { slug: 'concepts-v23-computational-editorial', eyebrow: 'V2.3 concept 02', title: 'Computational Editorial.' },
  { slug: 'concepts-v23-living-career-atlas', eyebrow: 'V2.3 concept 03', title: 'Living Career Atlas.' },
  { slug: 'concepts-v23-evidence-workbench', eyebrow: 'V2.3 Lab concept 01', title: 'Evidence Workbench.' },
  { slug: 'concepts-v23-repository-constellation', eyebrow: 'V2.3 Lab concept 02', title: 'Repository Constellation.' },
  { slug: 'recognition', eyebrow: 'Team achievements', title: 'Recognition.' },
  { slug: 'about', eyebrow: 'About', title: 'AI through the discipline of biomedical context.' },
  { slug: 'resume', eyebrow: 'Résumé', title: 'Shailesh Dudala · Senior Applied AI / ML Engineer' },
  { slug: 'contact', eyebrow: 'Contact', title: "Let's talk." },
  { slug: '404', eyebrow: 'Trace ended', title: 'This route did not reach a valid state.' },
  ...allV23WorkItems.map((item) => ({ slug: `work-${item.slug}`, eyebrow: item.eyebrow, title: item.title })),
];

export function getStaticPaths() {
  return cards.map((card) => ({ params: { slug: `${card.slug}.png` }, props: { card } }));
}

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character);
const wrapTitle = (value: string, max = 32) => value.split(/\s+/).reduce<string[]>((lines, word) => {
  const current = lines.at(-1);
  if (!current || `${current} ${word}`.length > max) lines.push(word);
  else lines[lines.length - 1] = `${current} ${word}`;
  return lines;
}, []).slice(0, 4);

export const GET: APIRoute = async ({ props }) => {
  const card = props.card as (typeof cards)[number];
  const title = escapeXml(card.title);
  const titleLines = wrapTitle(card.title).map((line, index) => `<tspan x="84" y="${220 + index * 70}">${escapeXml(line)}</tspan>`).join('');
  const eyebrow = escapeXml(card.eyebrow);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title><desc id="desc">Shailesh Dudala portfolio social card</desc>
  <rect width="1200" height="630" fill="#fafaf8"/>
  <path d="M84 492h1032" stroke="#dcded7"/>
  <rect x="84" y="82" width="7" height="7" fill="#ad452f"/>
  <text x="106" y="93" fill="#646761" font-family="Arial,sans-serif" font-size="21" letter-spacing="0">${eyebrow}</text>
  <text fill="#242522" font-family="${card.slug === 'home' ? 'Georgia,serif' : 'Arial,sans-serif'}" font-size="${card.slug === 'home' ? 84 : 60}" font-weight="400" letter-spacing="0">${titleLines}</text>
  <text x="84" y="550" fill="#646761" font-family="Arial,sans-serif" font-size="22">Shailesh Dudala · shaileshdudala.com</text>
  <text x="1044" y="553" fill="#ad452f" font-family="Georgia,serif" font-size="48" font-style="italic" font-weight="700">sd.</text>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' } });
};
