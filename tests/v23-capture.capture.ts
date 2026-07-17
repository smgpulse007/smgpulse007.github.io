import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { expect, test, type Browser, type Page, type TestInfo } from '@playwright/test';

// Opt-in review media generation. This file is collected only by
// playwright.capture.config.ts, never by the ordinary functional suite.

const screenshotDirectory = path.resolve(process.cwd(), 'docs/screenshots/v2.3');
const videoDirectory = path.resolve(process.cwd(), 'docs/videos/v2.3');
const desktopViewport = { width: 1440, height: 900 };
const mobileViewport = { width: 390, height: 844 };

test.describe.configure({ mode: 'serial' });

test.beforeAll(async () => {
  await Promise.all([
    mkdir(screenshotDirectory, { recursive: true }),
    mkdir(videoDirectory, { recursive: true }),
  ]);
});

function requireBaseUrl(baseURL: string | undefined) {
  if (!baseURL) throw new Error('Playwright baseURL is required for V2.3 review capture.');
  return baseURL;
}

async function settle(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
}

async function recordScenario(
  browser: Browser,
  baseURL: string,
  testInfo: TestInfo,
  outputName: string,
  run: (page: Page) => Promise<void>,
) {
  const context = await browser.newContext({
    baseURL,
    viewport: desktopViewport,
    colorScheme: 'dark',
    recordVideo: {
      dir: testInfo.outputPath(`raw-${outputName}`),
      size: { width: 1280, height: 800 },
    },
  });
  const page = await context.newPage();
  const video = page.video();
  if (!video) throw new Error(`Video recording did not initialize for ${outputName}.`);

  try {
    await run(page);
  } finally {
    await context.close();
  }

  await video.saveAs(path.join(videoDirectory, `${outputName}.webm`));
}

test('capture 01 — homepage hero and career field', async ({ browser, baseURL }, testInfo) => {
  await recordScenario(browser, requireBaseUrl(baseURL), testInfo, '01-hero-career-field', async (page) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await settle(page);
    await page.screenshot({
      path: path.join(screenshotDirectory, 'home-desktop.png'),
      animations: 'disabled',
      caret: 'hide',
    });
    await page.locator('.v23-decision-gate').scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await page.screenshot({
      path: path.join(screenshotDirectory, 'home-decision-gate-desktop.png'),
      animations: 'disabled',
      caret: 'hide',
    });
    await page.locator('.v23-career-field').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1_200);
    await page.locator('.v23-career-field a').last().focus();
    await page.waitForTimeout(900);
    await page.getByRole('heading', { level: 1, name: /Intelligent systems/i }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(900);
  });
});

test('capture 02 — current claims case and bounded-action run', async ({ browser, baseURL }, testInfo) => {
  await recordScenario(browser, requireBaseUrl(baseURL), testInfo, '02-claims-case', async (page) => {
    await page.goto('/work/claims-intelligence/', { waitUntil: 'networkidle' });
    await settle(page);
    await page.screenshot({
      path: path.join(screenshotDirectory, 'claims-case-desktop.png'),
      animations: 'disabled',
      caret: 'hide',
    });
    const run = page.locator('[data-claims-run]');
    await run.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await run.getByRole('button', { name: 'Next step' }).click();
    await page.waitForTimeout(700);
    await run.getByRole('button', { name: 'Next step' }).click();
    await page.waitForTimeout(700);
    await run.getByRole('button', { name: /Human authority/ }).click();
    await expect(run.locator('[data-run-label]')).toHaveText('Human authority');
    await page.waitForTimeout(1_000);
  });
});

test('capture 03 — Projects Lab evidence workbench', async ({ browser, baseURL }, testInfo) => {
  await recordScenario(browser, requireBaseUrl(baseURL), testInfo, '03-project-lab', async (page) => {
    await page.goto('/lab/', { waitUntil: 'networkidle' });
    await settle(page);
    await page.screenshot({
      path: path.join(screenshotDirectory, 'projects-lab-desktop.png'),
      animations: 'disabled',
      caret: 'hide',
    });
    const workbench = page.locator('[data-project-workbench]');
    await workbench.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await workbench.getByRole('searchbox', { name: 'Filter systems' }).fill('Meta Harness');
    await page.waitForTimeout(700);
    await workbench.getByRole('button', { name: /Meta Harness/ }).click();
    await expect(workbench.locator('[data-project-title]')).toHaveText('Meta Harness');
    await page.waitForTimeout(1_100);
  });
});

test('capture 04 — Research atlas tabs, filters, and publications', async ({ browser, baseURL }, testInfo) => {
  await recordScenario(browser, requireBaseUrl(baseURL), testInfo, '04-research-atlas', async (page) => {
    await page.goto('/research/', { waitUntil: 'networkidle' });
    await settle(page);
    await page.screenshot({
      path: path.join(screenshotDirectory, 'research-desktop.png'),
      animations: 'disabled',
      caret: 'hide',
    });
    const root = page.locator('[data-research-root]');
    await root.locator('[data-enhanced-controls]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await root.getByRole('tab', { name: /Applied engineering/ }).click();
    await page.waitForTimeout(700);
    await root.locator('[data-cluster-filter]').selectOption({ label: 'Clinical-model quality' });
    await page.waitForTimeout(800);
    await root.getByRole('tab', { name: /My publications/ }).click();
    await page.waitForTimeout(1_100);
  });
});

test('capture selected mobile first folds', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    baseURL: requireBaseUrl(baseURL),
    viewport: mobileViewport,
    colorScheme: 'dark',
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const captures = [
    ['/', 'home-mobile.png'],
    ['/work/predictive-healthcare-ml/', 'predictive-case-mobile.png'],
    ['/lab/', 'projects-lab-mobile.png'],
    ['/research/', 'research-mobile.png'],
  ] as const;

  for (const [route, filename] of captures) {
    await page.goto(route, { waitUntil: 'networkidle' });
    await settle(page);
    await page.screenshot({
      path: path.join(screenshotDirectory, filename),
      animations: 'disabled',
      caret: 'hide',
    });
    if (route === '/') {
      await page.evaluate(() => {
        const gate = document.querySelector<HTMLElement>('.v23-decision-gate');
        const header = document.querySelector<HTMLElement>('.site-header');
        document.documentElement.style.scrollBehavior = 'auto';
        if (gate) {
          const top = gate.getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, Math.max(0, top - (header?.getBoundingClientRect().height ?? 0)));
        }
      });
      await page.waitForTimeout(500);
      await page.screenshot({
        path: path.join(screenshotDirectory, 'home-decision-gate-mobile.png'),
        animations: 'disabled',
        caret: 'hide',
      });
    }
  }

  await context.close();
});
