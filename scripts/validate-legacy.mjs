import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { canonicalHref, metaContent, visibleText } from './validators.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const failures = [];
const denylist = ['legendary data scientist', 'my highlghts', 'competitive coder', 'suffering from skill issues', 'los angeles'];

const redirects = {
  'my-ai-app-library/index.html': '/lab/',
  'work/lets-talk-doc/index.html': '/recognition/#lets-talk-doc',
  'projects/index.html': '/work/',
  'professional-systems/index.html': '/work/',
  'research-archive/index.html': '/lab/',
  'data-science-lab/index.html': '/lab/',
  'quant-forecasting/index.html': '/lab/#forecasting',
  'projects/llm-steering/index.html': '/work/llm-steering-lab/',
  'projects/local-document-ai-extraction/index.html': '/work/on-prem-rag-ocr/',
  'projects/hl7-ai-challenge/index.html': '/lab/#healthcare',
  'projects/hospital-readmission-fhir-ml-api/index.html': '/lab/#healthcare',
  'projects/freshtrack-ai-module/index.html': '/lab/#documents',
  'projects/agentic-alpha-engine/index.html': '/lab/#forecasting',
  'projects/nfl-sports-forecasting/index.html': '/lab/#forecasting',
  'projects/chatwithwiki-azureml/index.html': '/lab/#agentic',
};

for (const [relative, target] of Object.entries(redirects)) {
  const filename = path.join(dist, relative);
  if (!fs.existsSync(filename)) {
    failures.push(`${relative}: compatibility artifact is missing`);
    continue;
  }
  const html = fs.readFileSync(filename, 'utf8');
  const text = visibleText(html).toLowerCase();
  if (!html.includes(`href="${target}"`)) failures.push(`${relative}: visible destination does not match ${target}`);
  if (!html.includes('http-equiv="refresh"')) failures.push(`${relative}: progressive redirect is missing`);
  if (metaContent(html, 'robots') !== 'noindex,follow') failures.push(`${relative}: compatibility robots must be noindex,follow`);
  const expectedCanonicalPath = target.split('#')[0];
  if (!canonicalHref(html)?.endsWith(expectedCanonicalPath)) failures.push(`${relative}: canonical does not point to ${expectedCanonicalPath}`);
  for (const phrase of denylist) if (text.includes(phrase)) failures.push(`${relative}: legacy Builder copy survived (${phrase})`);
}

const contactPath = path.join(dist, 'contact', 'index.html');
if (!fs.existsSync(contactPath)) failures.push('contact/index.html: canonical Contact page is missing');
else {
  const contact = fs.readFileSync(contactPath, 'utf8');
  if (!canonicalHref(contact)?.endsWith('/contact/')) failures.push('contact: canonical URL is incorrect');
  if (!/<h1\b/i.test(contact) || /http-equiv="refresh"/i.test(contact)) failures.push('contact: expected a complete canonical page, not a compatibility redirect');
  const text = visibleText(contact).toLowerCase();
  for (const phrase of denylist) if (text.includes(phrase)) failures.push(`contact: legacy Builder copy survived (${phrase})`);
}

const htaccessPath = path.join(dist, '.htaccess');
if (!fs.existsSync(htaccessPath)) failures.push('.htaccess: missing from build');
else {
  const config = fs.readFileSync(htaccessPath, 'utf8');
  for (const rule of ['^contact$', '^my-ai-app-library/?$', '^work/lets-talk-doc/?$']) if (!config.includes(rule)) failures.push(`.htaccess: missing legacy rule ${rule}`);
}

if (failures.length) {
  console.error(`Legacy validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Legacy validation passed: ${Object.keys(redirects).length} compatibility artifacts, canonical Contact, Builder phrase denylist, canonicals, noindex directives, and Apache rules.`);
