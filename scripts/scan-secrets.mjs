import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const patterns = [
  ['private key block', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['GitHub token', /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}\b|\bgithub_pat_[A-Za-z0-9_]{50,}\b/],
  ['OpenAI-style secret', /\bsk-[A-Za-z0-9_-]{32,}\b/],
  ['AWS access key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ['Hostinger-style token', /\bccg[A-Za-z0-9]{30,}\b/],
  ['Hostinger token assignment', /HOSTINGER_API_TOKEN\s*=\s*["']?(?!\$|\{|<|your-|example)[A-Za-z0-9_-]{16,}/i],
];

const output = execFileSync('git', ['ls-files', '-co', '--exclude-standard'], { cwd: root, encoding: 'utf8' });
const findings = [];

for (const relative of output.split(/\r?\n/).filter(Boolean)) {
  const filename = path.join(root, relative);
  if (!fs.existsSync(filename) || !fs.statSync(filename).isFile() || fs.statSync(filename).size > 5_000_000) continue;
  const buffer = fs.readFileSync(filename);
  if (buffer.includes(0)) continue;
  const content = buffer.toString('utf8');
  for (const [category, pattern] of patterns) {
    if (pattern.test(content)) findings.push(`${relative.replaceAll('\\', '/')}: ${category}`);
  }
}

if (findings.length) {
  console.error(`Secret scan failed with ${findings.length} finding(s). Values are intentionally suppressed.`);
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exit(1);
}

console.log('Secret scan passed: tracked and unignored repository files contain no recognized credential material.');
