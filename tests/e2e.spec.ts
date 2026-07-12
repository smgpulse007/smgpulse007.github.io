import { expect, test } from '@playwright/test';

const primaryRoutes = [
  '/',
  '/work/',
  '/experience/',
  '/lab/',
  '/about/',
  '/resume/',
  '/work/claims-intelligence/',
  '/work/on-prem-rag-ocr/',
  '/work/lets-talk-doc/',
  '/work/llm-steering-lab/',
];

const compatibilityRoutes: Record<string, string> = {
  '/projects/': '/work/',
  '/systems/': '/lab/',
  '/professional-systems/': '/work/',
  '/research-archive/': '/lab/',
  '/data-science-lab/': '/lab/',
  '/quant-forecasting/': '/lab/#forecasting',
  '/projects/llm-steering/': '/work/llm-steering-lab/',
  '/projects/local-document-ai-extraction/': '/work/on-prem-rag-ocr/',
  '/projects/hl7-ai-challenge/': '/lab/#healthcare',
  '/projects/hospital-readmission-fhir-ml-api/': '/lab/#healthcare',
};

test.describe('static route and metadata contract', () => {
  for (const route of primaryRoutes) {
    test(`${route} is a complete canonical page`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`^http://localhost:4321${route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`));
    });
  }

  for (const [route, target] of Object.entries(compatibilityRoutes)) {
    test(`${route} preserves the inbound route`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).toContain(`href="${target}"`);
      expect(html).toContain('http-equiv="refresh"');
      expect(html).toContain('name="robots" content="noindex,follow"');
    });
  }

  test('machine-readable routes and custom 404 are present', async ({ request }) => {
    const portfolio = await request.get('/portfolio.json');
    expect(portfolio.status()).toBe(200);
    expect((await portfolio.json()).role).toBe('Senior Applied AI Engineer');
    await expect(await request.get('/llms.txt')).toBeOK();
    await expect(await request.get('/build.json')).toBeOK();
    const missing = await request.get('/definitely-not-a-portfolio-route');
    expect(missing.status()).toBe(404);
    const custom404 = await request.get('/404.html');
    expect(custom404.status()).toBe(200);
    expect(await custom404.text()).toContain('Page not found');
  });
});

test('server-rendered homepage contains final metrics and no zero placeholders', async ({ request }) => {
  const html = await (await request.get('/')).text();
  const values = [...html.matchAll(/<strong>(.*?)<\/strong>/g)]
    .map((match) => match[1].replace(/<!--.*?-->/g, '').replace(/<[^>]+>/g, '').trim());
  expect(values).toEqual(expect.arrayContaining(['7K', '90%', '20%', '18%', '\u2248$3M']));
  expect(values).not.toEqual(expect.arrayContaining(['0K', '0%', '$0M']));
});

test('resume handling has no broken PDF CTA', async ({ page, request }) => {
  await page.goto('/resume/');
  const pdfLinks = await page.locator('a[href$=".pdf"]').evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).href));
  for (const url of pdfLinks) expect((await request.get(url)).status()).toBe(200);
  if (!pdfLinks.length) await expect(page.locator('main')).toContainText(/withheld|privacy[- ]cleared|available on request|public PDF/i);
});

test('award attribution stays attached to Let’s Talk Doc', async ({ request }) => {
  const home = await (await request.get('/')).text();
  const award = await (await request.get('/work/lets-talk-doc/')).text();
  const text = `${home} ${award}`.replace(/<[^>]+>/g, ' ');
  expect(text).toMatch(/Let(?:’|')s Talk Doc/i);
  expect(text).toMatch(/Team recipient/i);
  expect(text).not.toMatch(/challenge-winning/i);
});

test('primary pages have no console errors or failed local requests', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  page.on('response', (response) => {
    if (response.status() >= 400 && response.url().startsWith('http://127.0.0.1:4380')) errors.push(`HTTP ${response.status()}: ${response.url()}`);
  });
  for (const route of primaryRoutes) await page.goto(route, { waitUntil: 'networkidle' });
  expect(errors).toEqual([]);
});

test('required widths have no horizontal overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: width <= 390 ? 844 : 900 });
    for (const route of ['/', '/work/', '/work/claims-intelligence/', '/experience/', '/lab/', '/about/', '/resume/']) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${route} overflow at ${width}px`).toBeLessThanOrEqual(1);
    }
  }
});

test('reduced motion and keyboard/mobile navigation remain usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.locator('.skip-link').press('Enter');
  await expect(page).toHaveURL(/#main-content$/);

  const menu = page.locator('.mobile-nav');
  await menu.locator('summary').click();
  await expect(menu).toHaveAttribute('open', '');
  await expect(menu.getByRole('link', { name: 'Work' })).toBeVisible();

  const fhir = page.getByRole('button', { name: 'FHIR care event' });
  await fhir.focus();
  await fhir.press('Space');
  await expect(fhir).toHaveAttribute('aria-pressed', 'true');

  const motionDurations = await page.locator('.flight-recorder').evaluate((element) => {
    const style = getComputedStyle(element);
    return [style.animationDuration, style.transitionDuration];
  });
  expect(motionDurations.every((value) => value === '0s' || value === '1e-05s' || value === '0.00001s')).toBe(true);
});

test('evidence mode is keyboard operable and persists locally', async ({ page }) => {
  await page.goto('/');
  const toggle = page.locator('[data-evidence-toggle]');
  await expect(toggle).toHaveText('Evidence mode');
  await toggle.focus();
  await toggle.press('Enter');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  expect(await page.evaluate(() => localStorage.getItem('portfolio-evidence-mode'))).toBe('evidence');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-evidence-mode', 'evidence');
});
