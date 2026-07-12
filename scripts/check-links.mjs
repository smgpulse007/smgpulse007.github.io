import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { extractAttributeUrls, routeCandidates, stripQueryAndHash } from './validators.mjs';

const root = process.cwd();
const dist = path.resolve(root, process.argv[2] ?? 'dist');
const failures = [];
const externalUrls = new Set();
let checkedLocal = 0;

function listHtml(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? listHtml(target) : target.endsWith('.html') ? [target] : [];
  });
}

function pageRoute(filename) {
  const relative = path.relative(dist, filename).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  if (relative === '404.html') return '/404.html';
  return `/${relative.replace(/index\.html$/, '')}`;
}

function targetFor(sourceFile, rawUrl) {
  const [withoutHash, hash = ''] = rawUrl.split('#', 2);
  const pathname = withoutHash.split('?', 1)[0];
  const sourceRoute = pageRoute(sourceFile);
  const base = new URL(sourceRoute, 'https://static.invalid');
  const resolved = new URL(pathname || sourceRoute, base);
  const candidates = routeCandidates(resolved.pathname, dist);
  return { candidates, hash: decodeURIComponent(hash) };
}

if (!fs.existsSync(dist)) {
  console.error(`Build directory does not exist: ${dist}`);
  process.exit(1);
}

const htmlFiles = listHtml(dist);
for (const filename of htmlFiles) {
  const html = fs.readFileSync(filename, 'utf8');
  const source = path.relative(dist, filename).replaceAll('\\', '/');
  for (const rawUrl of extractAttributeUrls(html)) {
    if (!rawUrl || rawUrl.startsWith('data:') || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:')) continue;
    if (/^javascript:/i.test(rawUrl)) {
      failures.push(`${source}: unsafe javascript link ${rawUrl}`);
      continue;
    }
    if (/^(?:https?:)?\/\//i.test(rawUrl)) {
      if (/^https?:/i.test(rawUrl)) externalUrls.add(stripQueryAndHash(rawUrl));
      continue;
    }

    const { candidates, hash } = targetFor(filename, rawUrl);
    const target = candidates.find((candidate) => fs.existsSync(candidate));
    checkedLocal += 1;
    if (!target) {
      failures.push(`${source}: broken local URL ${rawUrl}`);
      continue;
    }

    if (hash && target.endsWith('.html')) {
      const targetHtml = fs.readFileSync(target, 'utf8');
      const escaped = hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp(`\\b(?:id|name)=["']${escaped}["']`, 'i').test(targetHtml)) {
        failures.push(`${source}: missing fragment #${hash} in ${path.relative(dist, target).replaceAll('\\', '/')}`);
      }
    }
  }
}

if (process.env.CHECK_EXTERNAL_LINKS === 'true') {
  for (const url of externalUrls) {
    try {
      const response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(12_000) });
      if (response.status >= 400 && ![403, 405, 429].includes(response.status)) failures.push(`external ${url}: HTTP ${response.status}`);
    } catch (error) {
      failures.push(`external ${url}: ${error.message}`);
    }
  }
}

if (failures.length) {
  console.error(`Link validation failed with ${failures.length} issue(s):`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Link validation passed: ${checkedLocal} local references across ${htmlFiles.length} HTML files; ${externalUrls.size} external URLs inventoried${process.env.CHECK_EXTERNAL_LINKS === 'true' ? ' and checked' : ''}.`);
