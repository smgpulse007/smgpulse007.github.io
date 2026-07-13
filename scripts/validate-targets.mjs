import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';
import { canonicalHref, metaContent } from './validators.mjs';

const root = process.cwd();
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const failures = [];
const targets = [
  {
    target: 'local',
    siteUrl: 'http://localhost:4321',
    canonicalUrl: 'http://localhost:4321',
    robots: 'noindex,nofollow',
    robotsDirective: 'Allow: /',
    sitemap: false,
  },
  {
    target: 'hostinger-staging',
    siteUrl: 'https://portfolio-v2-staging.hostingersite.com',
    canonicalUrl: 'https://portfolio-v2-staging.hostingersite.com',
    robots: 'noindex,nofollow',
    robotsDirective: 'Allow: /',
    sitemap: false,
  },
  {
    target: 'hostinger-production',
    siteUrl: 'https://shaileshdudala.com',
    canonicalUrl: 'https://shaileshdudala.com',
    robots: 'index,follow',
    robotsDirective: 'Allow: /',
    sitemap: true,
  },
  {
    target: 'github-pages-mirror',
    siteUrl: 'https://smgpulse007.github.io',
    canonicalUrl: 'https://shaileshdudala.com',
    robots: 'noindex,follow',
    robotsDirective: 'Allow: /',
    sitemap: false,
  },
];

function runBuild(environment, quiet = false) {
  const result = spawnSync(npm, ['run', 'build'], {
    cwd: root,
    env: { ...process.env, ...environment },
    encoding: 'utf8',
    shell: process.platform === 'win32',
  });
  if (result.status !== 0 && !quiet) {
    console.error(result.stdout);
    console.error(result.stderr);
  }
  return result;
}

try {
  for (const configuration of targets) {
    const result = runBuild({
      PUBLIC_DEPLOY_TARGET: configuration.target,
      PUBLIC_SITE_URL: configuration.siteUrl,
      PUBLIC_CANONICAL_URL: configuration.canonicalUrl,
      PUBLIC_ROBOTS: configuration.robots,
      NODE_ENV: 'production',
      GITHUB_SHA: '0123456789abcdef0123456789abcdef01234567',
    });
    if (result.status !== 0) {
      failures.push(`${configuration.target}: build failed`);
      continue;
    }

    const dist = path.join(root, 'dist');
    const home = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
    const work = fs.readFileSync(path.join(dist, 'work', 'claims-intelligence', 'index.html'), 'utf8');
    const robotsText = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
    const sitemapIndexPath = path.join(dist, 'sitemap-index.xml');
    const sitemapPath = path.join(dist, 'sitemap-0.xml');
    const metadata = JSON.parse(fs.readFileSync(path.join(dist, 'build.json'), 'utf8'));
    const expectedCanonical = `${configuration.canonicalUrl}/`;

    if (canonicalHref(home) !== expectedCanonical) failures.push(`${configuration.target}: canonical was ${canonicalHref(home)}, expected ${expectedCanonical}`);
    if (metaContent(home, 'robots') !== configuration.robots) failures.push(`${configuration.target}: robots meta was ${metaContent(home, 'robots')}, expected ${configuration.robots}`);
    if (metaContent(home, 'og:url') !== expectedCanonical) failures.push(`${configuration.target}: Open Graph URL is not canonical`);
    if (!robotsText.includes(configuration.robotsDirective)) failures.push(`${configuration.target}: robots.txt missing ${configuration.robotsDirective}`);
    if (configuration.sitemap) {
      if (!fs.existsSync(sitemapIndexPath) || !fs.existsSync(sitemapPath)) failures.push(`${configuration.target}: production sitemap artifacts are missing`);
      else {
        const sitemapIndex = fs.readFileSync(sitemapIndexPath, 'utf8');
        const sitemap = fs.readFileSync(sitemapPath, 'utf8');
        if (!robotsText.includes(`Sitemap: ${configuration.siteUrl}/sitemap-index.xml`)) failures.push(`${configuration.target}: robots.txt sitemap uses the wrong deployment URL`);
        if (!sitemapIndex.includes(`<loc>${configuration.siteUrl}/sitemap-0.xml</loc>`)) failures.push(`${configuration.target}: sitemap index uses the wrong deployment URL`);
        const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
        if (!locations.length || locations.some((url) => !url.startsWith(`${configuration.siteUrl}/`))) failures.push(`${configuration.target}: sitemap entries do not use PUBLIC_SITE_URL`);
      }
    } else {
      if (robotsText.includes('Sitemap:')) failures.push(`${configuration.target}: nonproduction robots advertises a sitemap`);
      if (fs.existsSync(sitemapIndexPath) || fs.existsSync(sitemapPath)) failures.push(`${configuration.target}: nonproduction build emitted competing sitemap artifacts`);
    }
    if (metadata.target !== configuration.target || metadata.commit !== '0123456789abcdef0123456789abcdef01234567') failures.push(`${configuration.target}: build.json metadata is incorrect`);

    const jsonLdUrls = [...work.matchAll(/"(?:url|item)":"(https?:[^"#]+)"/g)].map((match) => match[1]);
    if (jsonLdUrls.some((url) => !url.startsWith(configuration.canonicalUrl))) failures.push(`${configuration.target}: case-study JSON-LD contains a noncanonical deployment URL`);

    console.log(`${configuration.target}: canonical=${expectedCanonical}, robots=${configuration.robots}, sitemap=${configuration.sitemap ? configuration.siteUrl : 'suppressed'}, full build metadata verified`);
  }

  const missingStagingUrl = runBuild({ PUBLIC_DEPLOY_TARGET: 'hostinger-staging', NODE_ENV: 'production' }, true);
  if (missingStagingUrl.status === 0) failures.push('hostinger-staging: build did not fail closed without a staging URL');

  const unsafeMirror = runBuild({
    PUBLIC_DEPLOY_TARGET: 'github-pages-mirror',
    PUBLIC_SITE_URL: 'https://smgpulse007.github.io',
    PUBLIC_CANONICAL_URL: 'https://shaileshdudala.com',
    PUBLIC_ROBOTS: 'index,follow',
    NODE_ENV: 'production',
  }, true);
  if (unsafeMirror.status === 0) failures.push('github-pages-mirror: build accepted unsafe robots override');
} finally {
  const restore = runBuild({
    PUBLIC_DEPLOY_TARGET: 'local',
    PUBLIC_SITE_URL: 'http://localhost:4321',
    PUBLIC_CANONICAL_URL: 'http://localhost:4321',
    PUBLIC_ROBOTS: 'noindex,nofollow',
    NODE_ENV: 'production',
  }, true);
  if (restore.status !== 0) failures.push('Unable to restore the default local build after target validation');
}

if (failures.length) {
  console.error(`Deployment-target validation failed with ${failures.length} issue(s):`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Deployment-target validation passed for ${targets.length} targets.`);
