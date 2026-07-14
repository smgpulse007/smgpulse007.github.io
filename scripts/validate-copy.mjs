import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { visibleText } from './validators.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const failures = [];

function listHtml(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? listHtml(target) : target.endsWith('.html') ? [target] : [];
  });
}

if (!fs.existsSync(dist)) {
  console.error('dist/ is missing. Run `npm run build` before `npm run test:copy`.');
  process.exit(1);
}

const denylist = [
  'professional system — sanitized',
  'resume-supported',
  'résumé-supported',
  'public-source',
  'private-evidence',
  'synthetic / public-safe',
  'evidence mode',
  'scoped by context',
  'with the labels left on',
  'legendary data scientist',
  'my highlghts',
  'competitive coder',
  'suffering from skill issues',
  'production-grade',
  'cutting-edge',
  'harnessing the power of',
  'lorem ipsum',
  'todo',
];
const phone = /(?:\+?1[ .-]?)?\(?\d{3}\)?[ .-]\d{3}[ .-]\d{4}/;
const privatePath = /(?:[A-Z]:\\Users\\|\/Users\/|\.secrets\b|\.env\b)/i;
const exactLocation = /\bLos Angeles\b/i;
const htmlFiles = listHtml(dist);

for (const filename of htmlFiles) {
  const html = fs.readFileSync(filename, 'utf8');
  const text = visibleText(html);
  const lower = text.toLowerCase();
  const relative = path.relative(dist, filename).replaceAll('\\', '/');
  for (const phrase of denylist) if (lower.includes(phrase)) failures.push(`${relative}: denied copy: ${phrase}`);
  if (phone.test(text)) failures.push(`${relative}: phone-like personal information detected`);
  if (privatePath.test(text)) failures.push(`${relative}: private filesystem or environment path detected`);
  if (exactLocation.test(text)) failures.push(`${relative}: precise legacy location detected`);
}

const home = visibleText(fs.readFileSync(path.join(dist, 'index.html'), 'utf8'));
for (const phrase of [
  'Senior Applied AI Engineer',
  'Intelligence becomes a system.',
  'Signal → Prediction → Product → Context → Agent → Harness',
  'An agent does not begin with a prompt. It begins with a system.',
  'The ideas behind the systems.',
]) if (!home.includes(phrase)) failures.push(`home: required V2.1 copy is missing: ${phrase}`);

const about = visibleText(fs.readFileSync(path.join(dist, 'about', 'index.html'), 'utf8'));
if (!/biomedical informatics/i.test(about) || !/ambiguity is where the work begins/i.test(about)) failures.push('about: professional origin story is incomplete');

if (failures.length) {
  console.error(`Copy validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Copy validation passed: ${htmlFiles.length} rendered pages, V2.2 systems narrative, natural evidence language, origin story, PII/path guards, and Builder denylist.`);
