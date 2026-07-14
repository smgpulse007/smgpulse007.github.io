import { expect, test, type Page } from '@playwright/test';

const essentialRoutes = [
  '/',
  '/systems/',
  '/evolution/',
  '/research/',
  '/work/',
  '/experience/',
  '/lab/',
  '/recognition/',
  '/about/',
  '/resume/',
  '/contact/',
  '/work/claims-intelligence/',
  '/work/on-prem-rag-ocr/',
  '/work/healthcare-analytics-platform/',
  '/work/llm-steering-lab/',
  '/systems/claims-agents/',
  '/systems/meta-harness/',
  '/systems/llm-steering/',
];

function requireBaseUrl(baseURL: string | undefined) {
  if (!baseURL) throw new Error('Playwright baseURL is required for live-mode validation.');
  return baseURL;
}

async function horizontalOverflow(page: Page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
}

test('essential routes retain complete content with JavaScript disabled', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    baseURL: requireBaseUrl(baseURL),
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();

  for (const route of essentialRoutes) {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(response?.status(), `${route} status without JavaScript`).toBe(200);
    await expect(page.locator('h1'), `${route} H1 without JavaScript`).toHaveCount(1);
    await expect(page.locator('main'), `${route} main content without JavaScript`).not.toBeEmpty();
    expect(await horizontalOverflow(page), `${route} no-JavaScript overflow`).toBeLessThanOrEqual(1);
  }

  await context.close();
});

test('reduced-motion mode preserves controls and suppresses observatory motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
  await expect(page.locator('.agent-trace-v22')).toBeVisible();
  const durations = await page.locator('.hero-signal').evaluate((element) => {
    const style = getComputedStyle(element);
    return [style.animationDuration, style.transitionDuration];
  });
  expect(durations.every((value) => value === '0s' || Number.parseFloat(value) <= 0.00001)).toBe(true);
});

test('keyboard-only navigation reaches skip, navigation, and trace controls', async ({ page, browserName }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const skip = page.locator('.skip-link');
  await page.keyboard.press('Tab');
  if (browserName === 'webkit' && !(await skip.evaluate((element) => element === document.activeElement))) {
    // Desktop WebKit follows the platform default that can omit links from the
    // Tab sequence. Validate the same focus and keyboard-activation contract.
    await skip.focus();
  }
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main-content$/);

  const menu = page.locator('.mobile-nav summary');
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.mobile-nav')).toHaveAttribute('open', '');

  const trace = page.locator('.agent-trace-v22');
  await trace.scrollIntoViewIfNeeded();
  await trace.focus();
  await page.keyboard.press('ArrowRight');
  await expect(trace.locator('li[aria-current="step"]')).toContainText('Intent classified');
});

test('forced-colors mode retains essential content and controls', async ({ page }, testInfo) => {
  await page.emulateMedia({ forcedColors: 'active' });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  expect(await page.evaluate(() => matchMedia('(forced-colors: active)').matches)).toBe(true);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.agent-trace-v22')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next agent step' })).toBeVisible();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);

  const screenshot = testInfo.outputPath('forced-colors-home.png');
  await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' });
  await testInfo.attach('forced-colors-home', { path: screenshot, contentType: 'image/png' });
});

test('200% zoom-equivalent reflow remains usable at 320 CSS pixels', async ({ page }, testInfo) => {
  // A 320 CSS-pixel viewport is the reflow width produced by 200% browser zoom
  // on a 640 CSS-pixel viewport. This is deterministic across all three engines.
  await page.setViewportSize({ width: 320, height: 700 });
  for (const route of essentialRoutes) {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();
    expect(await horizontalOverflow(page), `${route} 200% reflow overflow`).toBeLessThanOrEqual(1);
  }

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const screenshot = testInfo.outputPath('zoom-200-reflow-home.png');
  // WebKit cannot capture a full page taller than 32,767 pixels. The route loop
  // above proves full-document reflow; this bounded image records the first fold.
  await page.screenshot({ path: screenshot, fullPage: false, animations: 'disabled' });
  await testInfo.attach('zoom-200-reflow-home', { path: screenshot, contentType: 'image/png' });
});

test('cold-cache navigation returns complete server-rendered content', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    baseURL: requireBaseUrl(baseURL),
    serviceWorkers: 'block',
    extraHTTPHeaders: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
  });
  const page = await context.newPage();
  const response = await page.goto('/', { waitUntil: 'domcontentloaded' });

  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toContainText(/Intelligence/i);
  await expect(page.locator('main')).toContainText('7K');
  await context.close();
});

test('slow-network latency preserves first-content usability', async ({ page, baseURL }, testInfo) => {
  const origin = new URL(requireBaseUrl(baseURL)).origin;
  let delayedRequests = 0;
  await page.route('**/*', async (route) => {
    if (new URL(route.request().url()).origin === origin) {
      delayedRequests += 1;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    await route.continue();
  });

  const started = Date.now();
  const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
  const domContentLoadedMs = Date.now() - started;
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('main')).toContainText('7K');
  expect(delayedRequests).toBeGreaterThan(0);
  await testInfo.attach('slow-network-profile', {
    body: Buffer.from(JSON.stringify({ artificialLatencyMs: 250, delayedRequests, domContentLoadedMs }, null, 2)),
    contentType: 'application/json',
  });
});

test('high-density rendering stays sharp and overflow-free at deviceScaleFactor 2', async ({ browser, baseURL }, testInfo) => {
  const context = await browser.newContext({
    baseURL: requireBaseUrl(baseURL),
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(await page.evaluate(() => devicePixelRatio)).toBe(2);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
  await expect(page.locator('h1')).toBeVisible();

  const screenshot = testInfo.outputPath('hidpi-390x844-home.png');
  // Keep this as a viewport proof: a DPR-2 full-page bitmap can exceed the
  // 32,767-pixel protocol limit in Firefox and WebKit on Linux runners.
  await page.screenshot({ path: screenshot, animations: 'disabled' });
  await testInfo.attach('hidpi-390x844-home', { path: screenshot, contentType: 'image/png' });
  await context.close();
});
