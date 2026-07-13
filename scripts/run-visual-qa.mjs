import process from 'node:process';
import { spawnSync } from 'node:child_process';

const pass = process.argv[2];
const allowedPasses = new Set([
  'pass-1-identity-hierarchy',
  'pass-2-signature-interaction',
  'pass-3-editorial-depth',
  'pass-4-craft-microdetail',
  'pass-5-restraint-memorability',
]);

if (!allowedPasses.has(pass ?? '')) {
  console.error(`Usage: node scripts/run-visual-qa.mjs ${[...allowedPasses].join('|')}`);
  process.exit(1);
}

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(npx, ['playwright', 'test', 'tests/visual.spec.ts'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: { ...process.env, VISUAL_QA_PASS: pass },
});

const manifest = spawnSync(
  process.execPath,
  ['scripts/generate-qa-manifest.mjs', pass, String(result.status ?? 1)],
  {
    stdio: 'inherit',
    env: { ...process.env, VISUAL_QA_PASS: pass },
  },
);

if ((manifest.status ?? 1) !== 0) process.exit(manifest.status ?? 1);
process.exit(result.status ?? 1);
