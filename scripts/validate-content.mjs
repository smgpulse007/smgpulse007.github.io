import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { canonicalHref, extractAttributeUrls, metaContent, privacyArtifactViolations, visibleText, zeroMetricPlaceholders } from './validators.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const failures = [];

function fail(message) {
  failures.push(message);
}

function requireFile(relativePath) {
  const absolute = path.join(dist, relativePath);
  if (!fs.existsSync(absolute)) fail(`Missing build artifact: dist/${relativePath.replaceAll('\\', '/')}`);
  return absolute;
}

function listFiles(directory, extension) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(target, extension) : target.endsWith(extension) ? [target] : [];
  });
}

function listAllFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? listAllFiles(target) : [target];
  });
}

if (!fs.existsSync(dist)) {
  console.error('dist/ is missing. Run `npm run build` before `npm run test:content`.');
  process.exit(1);
}

const requiredArtifacts = [
  'index.html',
  '404.html',
  'work/index.html',
  'experience/index.html',
  'lab/index.html',
  'about/index.html',
  'resume/index.html',
  'portfolio.json',
  'llms.txt',
  'build.json',
  'robots.txt',
  'sitemap-index.xml',
];
requiredArtifacts.forEach(requireFile);

const textExtensions = new Set(['.astro', '.css', '.html', '.js', '.json', '.jsx', '.md', '.mjs', '.svg', '.ts', '.tsx', '.txt', '.xml', '.yaml', '.yml']);
for (const directory of [path.join(root, 'src'), path.join(root, 'public'), dist]) {
  for (const filename of listAllFiles(directory)) {
    const relativePath = path.relative(root, filename).replaceAll('\\', '/');
    const content = textExtensions.has(path.extname(filename).toLowerCase()) ? fs.readFileSync(filename, 'utf8') : '';
    for (const violation of privacyArtifactViolations(relativePath, content)) {
      fail(`${relativePath}: privacy regression detected (${violation})`);
    }
  }
}

const primaryPages = [
  'index.html',
  'work/index.html',
  'experience/index.html',
  'lab/index.html',
  'about/index.html',
  'resume/index.html',
  'work/claims-intelligence/index.html',
  'work/on-prem-rag-ocr/index.html',
  'work/lets-talk-doc/index.html',
  'work/llm-steering-lab/index.html',
];

for (const relativePath of primaryPages) {
  const absolute = requireFile(relativePath);
  if (!fs.existsSync(absolute)) continue;
  const html = fs.readFileSync(absolute, 'utf8');
  if (!canonicalHref(html)) fail(`${relativePath}: missing canonical link`);
  if (!metaContent(html, 'robots')) fail(`${relativePath}: missing robots meta tag`);
  if (!/<h1\b/i.test(html)) fail(`${relativePath}: missing h1`);
}

const htmlFiles = listFiles(dist, '.html');
const hardBannedPhrases = [
  'production-aware',
  'evidence-aware',
  'public-safe shape',
  'implementation surface',
  'guided dossier',
  'system lane',
  'production-grade',
  'cutting-edge',
  'revolutionary',
  'innovative solutions',
  'harnessing the power of',
  'request resume',
  'challenge-winning',
];

let combinedText = '';
for (const filename of htmlFiles) {
  const relativePath = path.relative(dist, filename).replaceAll('\\', '/');
  const html = fs.readFileSync(filename, 'utf8');
  const text = visibleText(html);
  combinedText += ` ${text}`;

  const zeroValues = zeroMetricPlaceholders(html);
  if (zeroValues.length) fail(`${relativePath}: crawler-visible zero metric placeholder(s): ${zeroValues.join(', ')}`);
  if (/\bTODO\b|Lorem ipsum/i.test(text)) fail(`${relativePath}: placeholder copy found`);
  if (/href=["'](?:#|javascript:|https?:\/\/(?:example|placeholder)\.)["']/i.test(html)) fail(`${relativePath}: placeholder link found`);

  for (const phrase of hardBannedPhrases) {
    if (text.toLowerCase().includes(phrase)) fail(`${relativePath}: banned generic phrase found: ${phrase}`);
  }
}

if (!/Let(?:’|')s Talk Doc/i.test(combinedText)) fail('Let’s Talk Doc is missing from rendered content');
if (!/Team recipient/i.test(combinedText)) fail('Team-recipient attribution is missing from rendered content');
if (/autonomous adjudication/i.test(combinedText)) fail('Rendered content contains unqualified “autonomous adjudication” wording');
if (/\$26B|26-billion|26 billion/i.test(combinedText)) fail('Rendered content contains the prohibited business-line figure');

const impactSourcePath = path.join(root, 'src', 'data', 'impactClaims.ts');
if (fs.existsSync(impactSourcePath)) {
  const source = fs.readFileSync(impactSourcePath, 'utf8');
  const records = (source.match(/\bid:\s*['"][^'"]+['"]/g) ?? []).length;
  const evidenceFields = (source.match(/\bevidenceStatus\s*:/g) ?? []).length;
  const publicationFields = (source.match(/\bpublicationStatus\s*:/g) ?? []).length;
  if (!records || evidenceFields !== records || publicationFields !== records) {
    fail(`impactClaims.ts: expected evidenceStatus and publicationStatus on all ${records} claim(s); found ${evidenceFields}/${publicationFields}`);
  }
}

const portfolioPath = path.join(dist, 'portfolio.json');
if (fs.existsSync(portfolioPath)) {
  try {
    const portfolio = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));
    if (portfolio.role !== 'Senior Applied AI Engineer') fail('portfolio.json: canonical role is incorrect');
    if (!Array.isArray(portfolio.selectedProjects) || portfolio.selectedProjects.length < 3) fail('portfolio.json: fewer than three selected projects');
    for (const claim of portfolio.publicImpactClaims ?? []) {
      if (!['approved', 'qualified'].includes(claim.publicationStatus)) fail(`portfolio.json: non-public claim rendered: ${claim.id ?? claim.label}`);
      if (!claim.context || !claim.role || !claim.evidenceStatus) fail(`portfolio.json: incomplete claim provenance: ${claim.id ?? claim.label}`);
    }
  } catch (error) {
    fail(`portfolio.json: invalid JSON (${error.message})`);
  }
}

const resumePage = path.join(dist, 'resume', 'index.html');
if (fs.existsSync(resumePage)) {
  const html = fs.readFileSync(resumePage, 'utf8');
  const pdfLinks = extractAttributeUrls(html).filter((url) => /\.pdf(?:[?#]|$)/i.test(url));
  for (const url of pdfLinks) {
    const target = path.join(dist, url.split(/[?#]/, 1)[0].replace(/^\/+/, ''));
    if (!fs.existsSync(target)) fail(`resume/index.html: broken PDF link ${url}`);
  }
  if (!pdfLinks.length && !/(withheld|privacy[- ]cleared|available on request|public PDF)/i.test(visibleText(html))) {
    fail('resume/index.html: PDF is absent but the privacy/availability notice is not clear');
  }
}

for (const slug of ['claims-intelligence', 'on-prem-rag-ocr', 'lets-talk-doc', 'llm-steering-lab']) {
  const filename = path.join(dist, 'work', slug, 'index.html');
  if (!fs.existsSync(filename)) continue;
  const html = fs.readFileSync(filename, 'utf8');
  if (!/"@type":"(?:CreativeWork|SoftwareSourceCode)"/.test(html)) fail(`work/${slug}: missing CreativeWork or SoftwareSourceCode JSON-LD`);
  if (!/"@type":"BreadcrumbList"/.test(html)) fail(`work/${slug}: missing BreadcrumbList JSON-LD`);
}

if (failures.length) {
  console.error(`Content validation failed with ${failures.length} issue(s):`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Content validation passed: ${htmlFiles.length} HTML files, ${primaryPages.length} primary pages, typed claim provenance, privacy regression gates, award attribution, SSR metrics, machine-readable artifacts, and resume handling.`);
