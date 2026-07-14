import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import sharp from 'sharp';
import { canonicalHref, extractAttributeUrls, metaContent, privacyArtifactViolations, visibleText, zeroMetricPlaceholders } from './validators.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const failures = [];
const deployTarget = process.env.PUBLIC_DEPLOY_TARGET ?? 'local';
const publicResumePath = 'resume/Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf';

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
  'systems/index.html',
  'evolution/index.html',
  'experience/index.html',
  'lab/index.html',
  'research/index.html',
  'recognition/index.html',
  'about/index.html',
  'resume/index.html',
  'contact/index.html',
  'portfolio.json',
  'systems.json',
  'research.json',
  'project-evidence.json',
  'llms.txt',
  'build.json',
  'robots.txt',
  publicResumePath,
];
requiredArtifacts.forEach(requireFile);

const sitemapIndexPath = path.join(dist, 'sitemap-index.xml');
const sitemapPath = path.join(dist, 'sitemap-0.xml');
if (deployTarget === 'hostinger-production') {
  requireFile('sitemap-index.xml');
  requireFile('sitemap-0.xml');
} else if (fs.existsSync(sitemapIndexPath) || fs.existsSync(sitemapPath)) {
  fail(`${deployTarget}: nonproduction build contains competing sitemap artifacts`);
}

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

async function extractPdfText(filename) {
  const data = new Uint8Array(fs.readFileSync(filename));
  const document = await getDocument({ data, useSystemFonts: true }).promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => 'str' in item ? item.str : '').join(' '));
  }
  return { text: pages.join('\n'), pages: document.numPages };
}

const resumeArtifact = path.join(dist, publicResumePath);
let publicResumeText = '';
if (fs.existsSync(resumeArtifact)) {
  try {
    const extracted = await extractPdfText(resumeArtifact);
    publicResumeText = extracted.text;
    if (extracted.pages !== 1) fail(`public resume: expected one intentional page, found ${extracted.pages}`);
    if (!/Shailesh Dudala/i.test(publicResumeText) || !/Senior Applied AI Engineer/i.test(publicResumeText)) fail('public resume: ATS text extraction is missing the identity or target role');
    const bannedCategories = [
      { name: 'phone number', pattern: /(?:\+?1[ .-]?)?\(?\d{3}\)?[ .-]\d{3}[ .-]\d{4}/ },
      { name: 'prohibited business-line figure', pattern: /\$?26\s*(?:B|billion)\b/ },
      { name: 'unapproved private volume', pattern: /\b1[.,]?5\s*(?:M|million)\b/i },
      { name: 'private routing detail', pattern: /\b(?:internal|private)\s+(?:model|platform|route|routing)\b/i },
      { name: 'credential material', pattern: /\b(?:api[_ -]?key|access[_ -]?token|secret[_ -]?key)\b\s*[:=]/i },
    ];
    for (const { name, pattern } of bannedCategories) if (pattern.test(publicResumeText)) fail(`public resume: banned ${name} detected`);
  } catch (error) {
    fail(`public resume: PDF text extraction failed (${error.message})`);
  }
}

const ogDirectory = path.join(dist, 'og');
for (const slug of ['home', 'systems', 'evolution', 'lab', 'research', 'recognition', 'about', 'resume', 'contact', 'systems-claims-agents', 'systems-predictive-ml', 'systems-healthcare-platform', 'systems-document-intelligence', 'systems-meta-harness', 'systems-llm-steering']) {
  const filename = path.join(ogDirectory, `${slug}.png`);
  if (!fs.existsSync(filename)) {
    fail(`social preview: missing ${slug} card`);
    continue;
  }
  try {
    const metadata = await sharp(filename).metadata();
    if (metadata.format !== 'png' || metadata.width !== 1200 || metadata.height !== 630) fail(`social preview: ${slug} is not a 1200x630 PNG`);
  } catch (error) {
    fail(`social preview: ${slug} could not be inspected (${error.message})`);
  }
}

const primaryPages = [
  'index.html',
  'systems/index.html',
  'evolution/index.html',
  'lab/index.html',
  'research/index.html',
  'recognition/index.html',
  'about/index.html',
  'resume/index.html',
  'contact/index.html',
  'systems/claims-agents/index.html',
  'systems/predictive-ml/index.html',
  'systems/healthcare-platform/index.html',
  'systems/document-intelligence/index.html',
  'systems/meta-harness/index.html',
  'systems/llm-steering/index.html',
];

for (const relativePath of primaryPages) {
  const absolute = requireFile(relativePath);
  if (!fs.existsSync(absolute)) continue;
  const html = fs.readFileSync(absolute, 'utf8');
  if (!canonicalHref(html)) fail(`${relativePath}: missing canonical link`);
  if (!metaContent(html, 'robots')) fail(`${relativePath}: missing robots meta tag`);
  if (!/<h1\b/i.test(html)) fail(`${relativePath}: missing h1`);
  const socialImage = metaContent(html, 'og:image');
  if (!socialImage) fail(`${relativePath}: missing Open Graph image`);
  else {
    if (metaContent(html, 'twitter:image') !== socialImage) fail(`${relativePath}: Twitter image does not match Open Graph image`);
    try {
      const imageUrl = new URL(socialImage);
      if (!/\/og\/[a-z0-9-]+\.png$/.test(imageUrl.pathname)) fail(`${relativePath}: Open Graph image is not a PNG asset`);
      const imageArtifact = path.join(dist, imageUrl.pathname.replace(/^\/+/, ''));
      if (!fs.existsSync(imageArtifact)) fail(`${relativePath}: Open Graph image artifact is missing`);
    } catch {
      fail(`${relativePath}: Open Graph image URL is invalid`);
    }
  }
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
if (!/"@type":"ProfilePage"/.test(fs.readFileSync(path.join(dist, 'about', 'index.html'), 'utf8'))) fail('about/index.html: missing ProfilePage JSON-LD');

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
    if (portfolio.schemaVersion !== 'systems-observatory.v2.2') fail('portfolio.json: V2.2 schema version is missing');
    if (!Array.isArray(portfolio.professionalSystems) || portfolio.professionalSystems.length !== 4) fail('portfolio.json: expected four professional systems');
    if (portfolio.research?.count < 30) fail('portfolio.json: research atlas count is incomplete');
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
  if (pdfLinks.length !== 1 || pdfLinks[0] !== `/${publicResumePath}`) fail('resume/index.html: expected exactly one canonical public resume PDF link');
}

for (const slug of ['claims-intelligence', 'on-prem-rag-ocr', 'healthcare-analytics-platform', 'llm-steering-lab']) {
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

console.log(`Content validation passed: ${htmlFiles.length} HTML files, ${primaryPages.length} primary pages, typed claim provenance, privacy regression gates, award attribution, SSR metrics, machine-readable artifacts, ATS-readable public resume, and target-aware sitemap behavior.`);
