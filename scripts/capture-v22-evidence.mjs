import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';

const baseUrl = process.env.V22_BASE_URL ?? 'http://127.0.0.1:4382';
const evidenceLabel = process.env.V22_EVIDENCE_LABEL ?? 'v2.2-review';
const root = process.cwd();
const screenshotDir = path.join(root, 'docs', 'screenshots', evidenceLabel);
const videoDir = path.join(root, 'docs', 'videos', evidenceLabel);
const videoTempDir = path.join(root, 'test-results', 'v2.2-evidence-videos');

await Promise.all([
  fs.mkdir(screenshotDir, { recursive: true }),
  fs.mkdir(videoDir, { recursive: true }),
  fs.mkdir(videoTempDir, { recursive: true }),
]);

const browser = await chromium.launch();

const routes = [
  ['home', '/'],
  ['systems', '/systems/'],
  ['evolution', '/evolution/'],
  ['claims-agents', '/systems/claims-agents/'],
  ['meta-harness', '/systems/meta-harness/'],
  ['llm-steering', '/systems/llm-steering/'],
  ['lab', '/lab/'],
  ['research', '/research/'],
  ['about', '/about/'],
  ['recognition', '/recognition/'],
  ['resume', '/resume/'],
];

const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: 'dark' });
const desktopPage = await desktop.newPage();
for (const [name, route] of routes) {
  await desktopPage.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
  await desktopPage.evaluate(() => document.fonts.ready);
  await desktopPage.screenshot({ path: path.join(screenshotDir, `${name}-desktop-full.png`), fullPage: true });
}
await desktopPage.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
await desktopPage.screenshot({ path: path.join(screenshotDir, 'home-firstfold-desktop.png') });
await desktop.close();

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, colorScheme: 'dark' });
const mobilePage = await mobile.newPage();
await mobilePage.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
await mobilePage.evaluate(() => document.fonts.ready);
await mobilePage.screenshot({ path: path.join(screenshotDir, 'home-firstfold-mobile.png') });
await mobilePage.screenshot({ path: path.join(screenshotDir, 'home-mobile-full.png'), fullPage: true });
await mobile.close();

async function record(name, viewport, run) {
  const context = await browser.newContext({
    viewport,
    colorScheme: 'dark',
    recordVideo: { dir: videoTempDir, size: viewport },
  });
  const page = await context.newPage();
  await run(page);
  const video = page.video();
  await page.close();
  if (video) await video.saveAs(path.join(videoDir, `${name}.webm`));
  await context.close();
}

await record('home-to-current-frontier', { width: 1440, height: 900 }, async (page) => {
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.locator('.frontier-scene').scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  await page.getByRole('button', { name: 'Play', exact: true }).click();
  await page.waitForTimeout(2400);
});

await record('meta-harness-chamber', { width: 1440, height: 900 }, async (page) => {
  await page.goto(`${baseUrl}/systems/meta-harness/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.locator('.harness-chamber').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
});

await record('research-atlas', { width: 1440, height: 900 }, async (page) => {
  await page.goto(`${baseUrl}/research/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.getByRole('tab', { name: 'Timeline' }).click();
  await page.waitForTimeout(900);
  await page.getByRole('tab', { name: 'Reading list' }).click();
  await page.waitForTimeout(900);
});

await record('mobile-observatory', { width: 390, height: 844 }, async (page) => {
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.locator('.mobile-nav summary').click();
  await page.waitForTimeout(800);
  await page.locator('.mobile-nav summary').click();
  await page.locator('.evolution-scene').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
});

await browser.close();
console.log(`Captured ${routes.length + 3} screenshots and 4 interaction videos from ${baseUrl}.`);
