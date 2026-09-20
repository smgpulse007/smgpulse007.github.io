import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { governedImpactClaimViolations } from './validators.mjs';

const root = process.cwd();
const inputs = {
  renderedHome: path.join(root, 'dist', 'index.html'),
  homeSource: path.join(root, 'src', 'pages', 'index.astro'),
  claimSource: path.join(root, 'src', 'data', 'impactClaims.ts'),
};
const missing = Object.entries(inputs).filter(([, filename]) => !fs.existsSync(filename));

if (missing.length) {
  console.error('Claim validation could not start:');
  for (const [label, filename] of missing) console.error(`- ${label}: missing ${path.relative(root, filename).replaceAll('\\', '/')}`);
  if (missing.some(([label]) => label === 'renderedHome')) console.error('- Run `npm run build` before `npm run test:claims`.');
  process.exit(1);
}

const failures = governedImpactClaimViolations({
  renderedHome: fs.readFileSync(inputs.renderedHome, 'utf8'),
  homeSource: fs.readFileSync(inputs.homeSource, 'utf8'),
  claimSource: fs.readFileSync(inputs.claimSource, 'utf8'),
});

if (failures.length) {
  console.error(`Claim validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Claim validation passed: denied 7K documents/day; required 7K case backlog cleared and 20% automated closure improvement in rendered homepage and governed claim source.');
