import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

const pass = process.argv[2];
const exitCode = Number(process.argv[3] ?? 1);

if (!/^pass-[1-5]-[a-z-]+$/.test(pass ?? '')) {
  console.error('A valid visual QA pass name is required.');
  process.exit(1);
}

const root = path.resolve('test-results', pass);
await mkdir(root, { recursive: true });

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else files.push(absolute);
  }
  return files;
}

function gitSha() {
  const result = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' });
  return result.status === 0 ? result.stdout.trim() : 'unknown';
}

const pngs = (await walk(root)).filter(
  (file) => file.endsWith('.png') && !file.split(path.sep).includes('attachments'),
);

const screenshots = [];
for (const file of pngs) {
  const relativePath = path.relative(root, file).split(path.sep).join('/');
  const project = relativePath.match(/visual-(chromium|firefox|webkit)-(\d+)x(\d+)/);
  const bytes = await readFile(file);
  const fileStats = await stat(file);
  screenshots.push({
    routeLabel: path.basename(file, '.png'),
    browser: project?.[1] ?? 'unknown',
    viewport: project ? { width: Number(project[2]), height: Number(project[3]) } : null,
    deviceScaleFactor: 1,
    path: relativePath,
    bytes: fileStats.size,
    sha256: createHash('sha256').update(bytes).digest('hex'),
  });
}

screenshots.sort((left, right) => left.path.localeCompare(right.path));

const manifest = {
  schemaVersion: 1,
  pass,
  status: exitCode === 0 ? 'passed' : 'failed',
  playwrightExitCode: exitCode,
  generatedAt: new Date().toISOString(),
  commit: gitSha(),
  expectedDeployedCommit: process.env.PLAYWRIGHT_EXPECTED_SHA ?? null,
  origin: process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4380',
  expectedCanonicalOrigin:
    process.env.PLAYWRIGHT_EXPECTED_CANONICAL_URL ??
    process.env.PUBLIC_CANONICAL_URL ??
    'http://localhost:4321',
  expectedRobots:
    process.env.PLAYWRIGHT_EXPECTED_ROBOTS ?? process.env.PUBLIC_ROBOTS ?? 'noindex,nofollow',
  screenshotCount: screenshots.length,
  screenshots,
};

await writeFile(path.join(root, 'qa-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`QA manifest: ${path.relative(process.cwd(), path.join(root, 'qa-manifest.json'))} (${screenshots.length} screenshots)`);
