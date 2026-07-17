import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];

const fail = (message) => failures.push(message);
const read = (relativePath) => {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    fail(`missing ${relativePath}`);
    return '';
  }
  return fs.readFileSync(absolutePath, 'utf8');
};
const readJson = (relativePath) => {
  const value = read(relativePath);
  if (!value) return {};
  try { return JSON.parse(value); }
  catch (error) {
    fail(`${relativePath} is not valid JSON: ${error.message}`);
    return {};
  }
};
const countBy = (items, key) => items.reduce((counts, item) => {
  const value = item?.[key] ?? 'missing';
  counts[value] = (counts[value] ?? 0) + 1;
  return counts;
}, {});

const projects = readJson('dist/projects.json');
const projectItems = Array.isArray(projects.projects) ? projects.projects : [];
if (projects.version !== '2.3') fail('projects.json must identify V2.3');
if (projects.count !== 41 || projectItems.length !== 41) fail(`project manifest must contain 41 records; received ${projectItems.length}`);
if (projects.authoredRepositoryCount !== 39) fail(`project manifest must identify 39 authored repositories; received ${projects.authoredRepositoryCount}`);

const expectedTiers = { surface: 2, featured: 6, explore: 16, archive: 17 };
const actualTiers = countBy(projectItems, 'tier');
for (const [tier, expected] of Object.entries(expectedTiers)) {
  if (actualTiers[tier] !== expected) fail(`project tier ${tier} must contain ${expected} records; received ${actualTiers[tier] ?? 0}`);
}
const slugs = projectItems.map((item) => item.slug);
if (new Set(slugs).size !== slugs.length) fail('project manifest contains duplicate slugs');
for (const item of projectItems) {
  if (!/^https:\/\/github\.com\/smgpulse007\/[A-Za-z0-9_.-]+\/?$/.test(item.repository ?? '')) {
    fail(`project ${item.slug ?? 'unknown'} has an invalid owned-repository URL`);
  }
  if (!item.title || !item.category || !item.status || !item.proof || !item.limitation) {
    fail(`project ${item.slug ?? 'unknown'} is missing title/category/status/proof/limitation evidence`);
  }
  if (item.media) {
    if (!item.media.startsWith('/assets/')) fail(`project ${item.slug} media must use a checked-in /assets path`);
    const mediaPath = path.join(root, 'public', item.media.replace(/^\//, ''));
    if (!fs.existsSync(mediaPath)) fail(`project ${item.slug} references missing media ${item.media}`);
  }
}

const research = readJson('dist/research.json');
const externalRecords = Array.isArray(research.externalRecords) ? research.externalRecords : [];
const authoredPublications = Array.isArray(research.authoredPublications) ? research.authoredPublications : [];
if (research.schemaVersion !== 'portfolio.research.v2.3') fail('research.json must use portfolio.research.v2.3');
if (research.counts?.external !== 35 || externalRecords.length !== 35) fail(`research atlas must contain 35 external records; received ${externalRecords.length}`);
if (research.counts?.authored !== 2 || authoredPublications.length !== 2) fail(`research atlas must contain 2 authored publications; received ${authoredPublications.length}`);
const expectedViews = { foundation: 12, 'applied-engineering': 11, 'frontier-watch': 12 };
const actualViews = countBy(externalRecords, 'view');
for (const [view, expected] of Object.entries(expectedViews)) {
  if (actualViews[view] !== expected) fail(`research view ${view} must contain ${expected} records; received ${actualViews[view] ?? 0}`);
}
if (externalRecords.some((item) => !item.source?.startsWith('https://') || !item.status || !item.summary)) {
  fail('every external research record must include a public HTTPS source, status, and summary');
}
const borderPatrol = authoredPublications.find((item) => item.id === 'electrophysiological-border-patrol');
const forumPaper = authoredPublications.find((item) => item.id === 'suspicious-forum-discussions');
if (!borderPatrol?.doi?.startsWith('https://doi.org/') || borderPatrol.authorPosition !== '3 of 4') {
  fail('border-patrol publication must preserve the verified DOI and 3-of-4 author position');
}
if (!forumPaper?.publisher || !forumPaper?.article || forumPaper?.doi || forumPaper?.authorPosition !== '3 of 3') {
  fail('forum publication must use publisher/archive evidence, assert no DOI, and preserve the 3-of-3 author position');
}

const home = read('dist/index.html').toLowerCase();
const requiredHomePhrases = [
  'senior applied ai / ml engineer',
  'production agentic ai',
  'predictive ml',
  'document intelligence',
  'mlops',
  'healthcare &amp; insurance',
  'hiring decision / three flagship problems',
  'the problem, the system decision, the documented change',
  'case backlog cleared',
  'automated closure improvement',
];
for (const phrase of requiredHomePhrases) {
  if (!home.includes(phrase)) fail(`homepage is missing required professional-first phrase: ${phrase}`);
}
if (home.includes('7k documents/day')) fail('homepage contains the denied 7K documents/day claim');
const titlePosition = home.indexOf('senior applied ai / ml engineer');
const projectPosition = home.indexOf('open-source');
if (titlePosition < 0 || (projectPosition >= 0 && projectPosition < titlePosition)) {
  fail('homepage must establish the professional identity before open-source project framing');
}

const claimsRunSource = read('src/components/v23/ClaimsRun.astro');
const projectWorkbenchSource = read('src/components/v23/ProjectWorkbench.astro');
if (!/<noscript>[\s\S]*run-static-fallback[\s\S]*steps\.map/i.test(claimsRunSource)) {
  fail('ClaimsRun must expose every trace step and detail in a no-JavaScript fallback');
}
if (!/<noscript>[\s\S]*project-static-fallback[\s\S]*projects\.map/i.test(projectWorkbenchSource)) {
  fail('ProjectWorkbench must expose every project proof and limitation in a no-JavaScript fallback');
}

const prototypeSlugs = [
  'v23-signal-field',
  'v23-computational-editorial',
  'v23-living-career-atlas',
  'v23-evidence-workbench',
  'v23-repository-constellation',
];
for (const slug of prototypeSlugs) {
  const html = read(`dist/concepts/${slug}/index.html`).toLowerCase();
  if (!html.includes('name="robots" content="noindex,nofollow"')) fail(`prototype ${slug} is not explicitly noindex,nofollow`);
}

for (const route of [
  'dist/work/claims-intelligence/index.html',
  'dist/work/on-prem-rag-ocr/index.html',
  'dist/work/healthcare-analytics-platform/index.html',
  'dist/work/predictive-healthcare-ml/index.html',
]) {
  const html = read(route);
  if (!html.includes('application/ld+json')) fail(`${route} is missing structured case-study data`);
  const normalized = html.toLowerCase();
  for (const label of ['problem', 'decision', 'business / proof change', 'ownership', 'evidence']) {
    if (!normalized.includes(`<dt>${label}</dt>`)) fail(`${route} is missing the ${label} executive-summary field`);
  }
}

if (failures.length) {
  console.error(`V2.3 evidence validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('V2.3 evidence validation passed: 41 project records (2/6/16/17), 35 external research records (12/11/12), 2 attributed publications, professional-first copy, checked-in media, complete no-JS widget fallbacks, noindex prototypes, and four structured professional cases.');
