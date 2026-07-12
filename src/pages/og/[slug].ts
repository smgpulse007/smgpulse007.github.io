import type { APIRoute } from 'astro';
import { workItems } from '../../data/work';

const cards = [
  { slug: 'home', eyebrow: 'Senior Applied AI Engineer', title: 'AI systems that survive real operations.' },
  { slug: 'work', eyebrow: 'Selected work', title: 'Proof of judgment under real constraints.' },
  { slug: 'experience', eyebrow: 'Experience', title: 'From biomedical data to accountable AI workflows.' },
  { slug: 'lab', eyebrow: 'Lab', title: 'Range, without category blur.' },
  { slug: 'about', eyebrow: 'About', title: 'The space between a model and a system people can trust.' },
  { slug: 'resume', eyebrow: 'Résumé', title: 'Shailesh Dudala · Senior Applied AI Engineer' },
  { slug: '404', eyebrow: 'Trace ended', title: 'This route did not reach a valid state.' },
  ...workItems.map((item) => ({ slug: `work-${item.slug}`, eyebrow: item.eyebrow, title: item.title })),
];

export function getStaticPaths() {
  return cards.map((card) => ({ params: { slug: card.slug }, props: { card } }));
}

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character);

export const GET: APIRoute = ({ props }) => {
  const card = props.card as (typeof cards)[number];
  const title = escapeXml(card.title);
  const eyebrow = escapeXml(card.eyebrow);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title><desc id="desc">Shailesh Dudala portfolio social card</desc>
  <rect width="1200" height="630" fill="#080b0a"/><path d="M0 1h1200" stroke="#7dd9aa"/><circle cx="1054" cy="102" r="310" fill="#7dd9aa" opacity=".04"/>
  <g fill="none" stroke="#25302a"><path d="M760 180h320v250H760z"/><path d="M760 240h320M760 300h320M760 360h320M840 180v250M920 180v250M1000 180v250"/></g>
  <text x="84" y="112" fill="#7dd9aa" font-family="ui-monospace,monospace" font-size="18" letter-spacing="3">${eyebrow.toUpperCase()}</text>
  <foreignObject x="80" y="154" width="650" height="310"><div xmlns="http://www.w3.org/1999/xhtml" style="color:#f8f6ef;font:650 62px/0.98 Arial,sans-serif;letter-spacing:-3px">${title}</div></foreignObject>
  <text x="84" y="550" fill="#a7afa8" font-family="Arial,sans-serif" font-size="22">Shailesh Dudala · shaileshdudala.com</text>
  <circle cx="1080" cy="540" r="31" fill="none" stroke="#7dd9aa"/><text x="1080" y="547" text-anchor="middle" fill="#7dd9aa" font-family="ui-monospace,monospace" font-size="15">SD</text>
  </svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'public, max-age=31536000, immutable' } });
};

