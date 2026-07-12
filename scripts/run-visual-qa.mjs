import process from 'node:process';
import { spawnSync } from 'node:child_process';

const pass = process.argv[2];
if (!/^pass-[123]-[a-z-]+$/.test(pass ?? '')) {
  console.error('Usage: node scripts/run-visual-qa.mjs pass-1-hierarchy|pass-2-polish|pass-3-restraint');
  process.exit(1);
}

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(npx, ['playwright', 'test', 'tests/visual.spec.ts'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: { ...process.env, VISUAL_QA_PASS: pass },
});
process.exit(result.status ?? 1);
