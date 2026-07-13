import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const dist = path.join(root, 'dist');
const manifestPath = path.join(dist, 'project-evidence.json');
const failures = [];

if (!fs.existsSync(manifestPath)) {
  console.error('dist/project-evidence.json is missing. Run `npm run build` before `npm run test:evidence`.');
  process.exit(1);
}

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} catch (error) {
  console.error(`Evidence manifest is invalid JSON: ${error.message}`);
  process.exit(1);
}

if (manifest.schemaVersion !== 'portfolio-project-evidence.v1') failures.push('manifest: schema version is incorrect');
if (!Array.isArray(manifest.assets) || manifest.assets.length < 4) failures.push('manifest: fewer than four rendered repository assets');

const html = fs.readdirSync(dist, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
  .map((entry) => fs.readFileSync(path.join(entry.parentPath, entry.name), 'utf8'))
  .join('\n');

for (const [index, asset] of (manifest.assets ?? []).entries()) {
  const label = asset.id ?? `asset-${index + 1}`;
  for (const field of ['id', 'project', 'path', 'sourceRepository', 'sourcePath', 'commit', 'license', 'alt', 'caption']) {
    if (typeof asset[field] !== 'string' || !asset[field].trim()) failures.push(`${label}: missing ${field}`);
  }
  if (!/^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/i.test(asset.sourceRepository ?? '')) failures.push(`${label}: sourceRepository is not a GitHub repository URL`);
  if (!/^[a-f0-9]{40}$/i.test(asset.commit ?? '')) failures.push(`${label}: commit is not a full 40-character SHA`);
  if (asset.publicSafe !== true) failures.push(`${label}: publicSafe must be true for rendered media`);
  const artifact = path.join(dist, String(asset.path ?? '').replace(/^\/+/, ''));
  if (!fs.existsSync(artifact)) failures.push(`${label}: build artifact is missing (${asset.path})`);
  if (!html.includes(`src="${asset.path}"`)) failures.push(`${label}: manifest asset is not rendered by an HTML page`);
}

const llm = fs.readFileSync(path.join(dist, 'work', 'llm-steering-lab', 'index.html'), 'utf8');
for (const phrase of ['Activation-steered', 'layer: 18', 'coefficient 20', 'effect not generalized']) {
  if (!llm.toLowerCase().includes(phrase.toLowerCase())) failures.push(`LLM Steering: checked-in comparison detail is missing (${phrase})`);
}
if (!llm.includes('8c124283') && !fs.readFileSync(manifestPath, 'utf8').includes('8c1242839e1f8f74fd50f4b6bad37f71a2d83122')) failures.push('LLM Steering: current source commit is not recorded');

if (failures.length) {
  console.error(`Evidence validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Evidence validation passed: ${manifest.assets.length} rendered assets have source repository, full commit, license, alt, caption, and public-safety decisions; static LLM comparison verified.`);
