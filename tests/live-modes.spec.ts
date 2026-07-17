import { expect, test, type Page } from '@playwright/test';

const essentialRoutes = [
  '/',
  '/work/',
  '/experience/',
  '/lab/',
  '/research/',
  '/about/',
  '/resume/',
  '/work/claims-intelligence/',
  '/work/predictive-healthcare-ml/',
  '/work/healthcare-analytics-platform/',
  '/work/on-prem-rag-ocr/',
] as const;

function requireBaseUrl(baseURL: string | undefined) {
  if (!baseURL) throw new Error('Playwright baseURL is required for live-mode validation.');
  return baseURL;
}

async function horizontalOverflow(page: Page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
}

function motionIsEffectivelyDisabled(values: string[]) {
  return values.every((list) =>
    list.split(',').every((value) => value.trim() === '0s' || Number.parseFloat(value) <= 0.00001),
  );
}

test('essential V2.3 routes retain complete semantic content with JavaScript disabled', async ({ browser, baseURL }) => {
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

  await page.goto('/');
  await expect(page.locator('.v23-career-field svg[role="group"]')).toHaveCount(1);
  await expect(page.locator('.v23-career-field svg a')).toHaveCount(5);
  await expect(page.locator('[data-claims-run] [data-run-step]')).toHaveCount(8);
  await expect(page.locator('[data-claims-run]')).toContainText('Human authority');
  await expect(page.locator('[data-project-workbench] [data-project-select]')).toHaveCount(4);
  await expect(page.locator('[data-project-title]')).not.toBeEmpty();

  const staticRun = page.locator('.run-static-fallback');
  await expect(staticRun).toBeVisible();
  await expect(staticRun).toContainText('Human authority');
  await expect(staticRun).toContainText('the model cannot self-approve');

  const staticProjects = page.locator('.project-static-fallback');
  await expect(staticProjects).toBeVisible();
  const staticMetaHarness = staticProjects.locator('article').filter({ hasText: 'Meta Harness' });
  await expect(staticMetaHarness).toContainText('Schemas, CLI/MCP, proof ledger, integrations, examples, docs');
  await expect(staticMetaHarness).toContainText('Source-installed and pre-1.0; correctness is not guaranteed');

  const menu = page.locator('.mobile-nav');
  await menu.locator('summary').click();
  await expect(menu).toHaveAttribute('open', '');
  await expect(menu.getByRole('link', { name: 'Work', exact: true })).toBeVisible();

  await page.goto('/research/');
  await expect(page.locator('[data-enhanced-controls]')).toBeHidden();
  await expect(page.locator('[data-research-panel]')).toHaveCount(4);
  for (const view of ['foundations', 'applied', 'frontier', 'publications']) {
    await expect(page.locator(`[data-research-panel="${view}"]`)).toBeVisible();
  }
  await expect(page.locator('[data-research-record]')).toHaveCount(35);
  await expect(page.locator('.authored-record')).toHaveCount(2);

  await context.close();
});

test('reduced-motion mode preserves V2.3 controls and suppresses decorative motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
  const motionDurations = await page.locator('.v23-home-hero').evaluate((element) => {
    const targets = [element, ...element.querySelectorAll<HTMLElement>('.v23-ambient i, .instrument-orb i')];
    return targets.flatMap((target) => {
      const style = getComputedStyle(target);
      return [style.animationDuration, style.transitionDuration];
    });
  });
  expect(motionIsEffectivelyDisabled(motionDurations)).toBe(true);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await expect(page.locator('html')).toHaveAttribute('data-visual-tier', 'reduced');
  await expect(page.locator('[data-motion-toggle]')).toBeHidden();

  const run = page.locator('[data-claims-run]');
  await run.getByRole('button', { name: 'Next step' }).click();
  await expect(run.locator('[data-run-label]')).toHaveText('Intent + document types');
});

test('motion-pause control pauses decorative animation and persists the preference', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('html')).toHaveAttribute('data-visual-tier', /^(standard|enhanced)$/);

  const control = page.locator('[data-motion-toggle]');
  await expect(control).toBeVisible();
  await expect(control).toHaveAttribute('aria-pressed', 'false');
  await expect(control).toHaveAccessibleName('Pause decorative motion');

  await control.click();
  await expect(page.locator('html')).toHaveAttribute('data-motion-paused', 'true');
  await expect(control).toHaveAttribute('aria-pressed', 'true');
  await expect(control).toHaveAccessibleName('Resume decorative motion');
  expect(
    await page.locator('.v23-ambient i').first().evaluate((element) => getComputedStyle(element).animationPlayState),
  ).toBe('paused');

  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('html')).toHaveAttribute('data-motion-paused', 'true');
  await expect(page.locator('[data-motion-toggle]')).toHaveAccessibleName('Resume decorative motion');

  await page.locator('[data-motion-toggle]').click();
  await expect(page.locator('html')).toHaveAttribute('data-motion-paused', 'false');
});

test('keyboard-only navigation reaches skip, mobile navigation, and claims controls', async ({ page, browserName }) => {
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
  await expect(page.locator('.mobile-nav').getByRole('link', { name: 'Work', exact: true })).toBeVisible();

  await page.locator('.mobile-nav summary').press('Enter');
  const next = page.locator('[data-claims-run]').getByRole('button', { name: 'Next step' });
  await next.scrollIntoViewIfNeeded();
  await next.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('[data-run-label]')).toHaveText('Intent + document types');
});

test('forced-colors mode retains V2.3 meaning, borders, and controls', async ({ page }, testInfo) => {
  await page.emulateMedia({ forcedColors: 'active' });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  expect(await page.evaluate(() => matchMedia('(forced-colors: active)').matches)).toBe(true);
  await expect(page.getByRole('heading', { level: 1, name: /Intelligent systems/i })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  await expect(page.locator('.v23-career-field')).toBeVisible();
  await expect(page.locator('[data-claims-run]')).toBeVisible();
  await expect(page.locator('[data-claims-run]').getByRole('button', { name: 'Next step' })).toBeVisible();
  const borderWidth = await page.locator('[data-claims-run]').evaluate(
    (element) => getComputedStyle(element).borderTopWidth,
  );
  expect(Number.parseFloat(borderWidth)).toBeGreaterThan(0);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);

  const screenshot = testInfo.outputPath('forced-colors-home.png');
  await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' });
  await testInfo.attach('forced-colors-home', { path: screenshot, contentType: 'image/png' });
});

test('WebGL initialization failure leaves the static-first experience complete', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    baseURL: requireBaseUrl(baseURL),
    viewport: { width: 1280, height: 800 },
  });
  await context.addInitScript(() => {
    const originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function getContext(
      this: HTMLCanvasElement,
      contextId: string,
      ...args: unknown[]
    ) {
      if (['webgl', 'webgl2', 'experimental-webgl'].includes(contextId)) return null;
      return originalGetContext.call(this, contextId as '2d', ...args as []);
    } as typeof HTMLCanvasElement.prototype.getContext;
    Object.defineProperty(window, 'WebGLRenderingContext', { configurable: true, value: undefined });
    Object.defineProperty(window, 'WebGL2RenderingContext', { configurable: true, value: undefined });
  });

  const page = await context.newPage();
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.locator('html')).toHaveAttribute('data-visual-tier', 'standard');
  await expect(page.getByRole('heading', { level: 1, name: /Intelligent systems/i })).toBeVisible();
  await expect(page.locator('.v23-career-field')).toContainText('Production agentic AI');
  await expect(page.locator('[data-claims-run]')).toContainText('Human authority');
  await expect(page.locator('[data-project-workbench]')).toBeVisible();
  await page.locator('[data-claims-run]').getByRole('button', { name: 'Next step' }).click();
  await expect(page.locator('[data-run-label]')).toHaveText('Intent + document types');
  expect(errors).toEqual([]);

  await context.close();
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
  await expect(page.locator('h1')).toContainText(/Intelligent systems/i);
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
