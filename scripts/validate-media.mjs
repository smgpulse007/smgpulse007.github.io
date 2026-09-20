import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { gzipSync } from 'node:zlib';
import sharp from 'sharp';

const root = process.cwd();
const dist = path.join(root, 'dist');
const manifestPath = path.join(dist, 'project-evidence.json');
const failures = [];

if (!fs.existsSync(manifestPath)) {
  console.error('dist/project-evidence.json is missing. Run `npm run build` before `npm run test:media`.');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const records = [];
for (const asset of manifest.assets ?? []) {
  const filename = path.join(dist, asset.path.replace(/^\/+/, ''));
  if (!fs.existsSync(filename)) continue;
  const bytes = fs.statSync(filename).size;
  if (bytes > 1_000_000) failures.push(`${asset.id}: required asset is ${(bytes / 1_000_000).toFixed(2)} MB (budget 1 MB)`);
  const extension = path.extname(filename).toLowerCase();
  let dimensions = null;
  if (['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'].includes(extension)) {
    const metadata = await sharp(filename, { animated: extension === '.gif' }).metadata();
    dimensions = { width: metadata.width, height: metadata.height };
    if (!metadata.width || !metadata.height) failures.push(`${asset.id}: raster dimensions could not be inspected`);
  }
  records.push({ id: asset.id, path: asset.path, bytes, dimensions });
}

function referencedJsBytes(relativeHtml) {
  const html = fs.readFileSync(path.join(dist, relativeHtml), 'utf8');
  const references = [...html.matchAll(/["'](\/_astro\/[^"']+\.js)["']/g)].map((match) => match[1]);
  const unique = [...new Set(references)];
  return unique.reduce((total, reference) => {
    const filename = path.join(dist, reference.replace(/^\/+/, ''));
    return total + (fs.existsSync(filename) ? gzipSync(fs.readFileSync(filename)).length : 0);
  }, 0);
}

const allJs = fs.readdirSync(path.join(dist, '_astro')).filter((name) => name.endsWith('.js'));
const totalJsGzip = allJs.reduce((total, name) => total + gzipSync(fs.readFileSync(path.join(dist, '_astro', name))).length, 0);
const homeReferencedGzip = referencedJsBytes('index.html');
const caseReferencedGzip = referencedJsBytes(path.join('work', 'claims-intelligence', 'index.html'));

if (totalJsGzip > 90_000) failures.push(`home: total shipped JavaScript is ${(totalJsGzip / 1000).toFixed(1)} KB gzip (conservative 90 KB gate)`);
if (homeReferencedGzip > 90_000) failures.push(`home: referenced JavaScript is ${(homeReferencedGzip / 1000).toFixed(1)} KB gzip`);
if (caseReferencedGzip > 45_000) failures.push(`noninteractive case study: referenced JavaScript is ${(caseReferencedGzip / 1000).toFixed(1)} KB gzip`);

const report = {
  generatedAt: new Date().toISOString(),
  budgets: { homeInitialJsGzip: 90_000, caseInitialJsGzip: 45_000, requiredAssetBytes: 1_000_000 },
  measured: { totalJsGzip, homeReferencedGzip, caseReferencedGzip, assets: records },
};
const reportDirectory = path.join(root, 'test-results', 'v2.1');
fs.mkdirSync(reportDirectory, { recursive: true });
fs.writeFileSync(path.join(reportDirectory, 'media-budget.json'), `${JSON.stringify(report, null, 2)}\n`);

if (failures.length) {
  console.error(`Media validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Media validation passed: ${records.length} required assets under 1 MB; all shipped JS ${(totalJsGzip / 1000).toFixed(1)} KB gzip; home references ${(homeReferencedGzip / 1000).toFixed(1)} KB; noninteractive case references ${(caseReferencedGzip / 1000).toFixed(1)} KB.`);
