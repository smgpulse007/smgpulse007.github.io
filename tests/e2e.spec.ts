import { expect, test } from '@playwright/test';

const servedOrigin = new URL(
  process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4380',
).origin;
const servedHostname = new URL(servedOrigin).hostname;
const isRemoteDeployment = !['127.0.0.1', 'localhost', '::1'].includes(servedHostname);
const expectedCanonicalOrigin =
  process.env.PLAYWRIGHT_EXPECTED_CANONICAL_URL ??
  process.env.PUBLIC_CANONICAL_URL ??
  'http://localhost:4321';
const expectedRobots =
  process.env.PLAYWRIGHT_EXPECTED_ROBOTS ?? process.env.PUBLIC_ROBOTS ?? 'noindex,nofollow';
const expectedSha = process.env.PLAYWRIGHT_EXPECTED_SHA;

function expectedCanonical(route: string) {
  return new URL(route, `${expectedCanonicalOrigin.replace(/\/$/, '')}/`).href;
}

function isApplicationRequest(url: string) {
  try {
    return new URL(url).origin === servedOrigin;
  } catch {
    return false;
  }
}

const primaryRoutes = [
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
  '/systems/predictive-ml/',
  '/systems/healthcare-platform/',
  '/systems/document-intelligence/',
  '/systems/meta-harness/',
  '/systems/llm-steering/',
];

const compatibilityRoutes: Record<string, string> = {
  '/projects/': '/work/',
  '/professional-systems/': '/work/',
  '/research-archive/': '/lab/',
  '/data-science-lab/': '/lab/',
  '/quant-forecasting/': '/lab/#forecasting',
  '/projects/llm-steering/': '/work/llm-steering-lab/',
  '/projects/local-document-ai-extraction/': '/work/on-prem-rag-ocr/',
  '/projects/hl7-ai-challenge/': '/lab/#healthcare',
  '/projects/hospital-readmission-fhir-ml-api/': '/lab/#healthcare',
  '/my-ai-app-library/': '/lab/',
  '/work/lets-talk-doc/': '/recognition/#lets-talk-doc',
};

test.describe('static route and metadata contract', () => {
  for (const route of primaryRoutes) {
    test(`${route} is a complete canonical page`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', expectedRobots);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        expectedCanonical(route),
      );
      const socialImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(socialImage).toMatch(/^https?:\/\/[^/]+\/og\/[a-z0-9-]+\.png$/);
      const socialResponse = await page.request.get(new URL(socialImage!).pathname);
      expect(socialResponse.status()).toBe(200);
      expect(socialResponse.headers()['content-type']).toContain('image/png');
    });
  }

  for (const [route, target] of Object.entries(compatibilityRoutes)) {
    test(`${route} preserves the inbound route`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status()).toBe(200);
      const requestedPath = new URL(route, `${servedOrigin}/`).pathname;
      const targetPath = new URL(target, `${servedOrigin}/`).pathname;
      const responsePath = new URL(response.url()).pathname;
      if (responsePath !== requestedPath) {
        expect(responsePath).toBe(targetPath);
        return;
      }
      const html = await response.text();
      expect(html).toContain(`href="${target}"`);
      expect(html).toContain('http-equiv="refresh"');
      expect(html).toContain('name="robots" content="noindex,follow"');
    });
  }

  test('machine-readable routes and custom 404 are present', async ({ request }) => {
    const portfolio = await request.get('/portfolio.json');
    expect(portfolio.status()).toBe(200);
    expect((await portfolio.json()).schemaVersion).toBe('systems-observatory.v2.2');
    await expect(await request.get('/systems.json')).toBeOK();
    await expect(await request.get('/research.json')).toBeOK();
    await expect(await request.get('/llms.txt')).toBeOK();
    const buildResponse = await request.get('/build.json');
    await expect(buildResponse).toBeOK();
    if (expectedSha) expect((await buildResponse.json()).commit).toBe(expectedSha);
    const missing = await request.get('/definitely-not-a-portfolio-route');
    expect(missing.status()).toBe(404);
    if (process.env.PLAYWRIGHT_BASE_URL && isRemoteDeployment) {
      const missingHtml = await missing.text();
      expect(missingHtml).toContain('Page not found');
      expect(missingHtml).toContain('name="robots" content="noindex,nofollow"');
    }
    const custom404 = await request.get('/404.html');
    expect(custom404.status()).toBe(200);
    expect(await custom404.text()).toContain('Page not found');
  });
});

test('server-rendered homepage contains final metrics and no zero placeholders', async ({ request }) => {
  const html = await (await request.get('/')).text();
  const values = [...html.matchAll(/<strong>(.*?)<\/strong>/g)]
    .map((match) => match[1].replace(/<!--.*?-->/g, '').replace(/<[^>]+>/g, '').trim());
  expect(values).toEqual(expect.arrayContaining(['7K', '90%', '20%', '\u2248$3M']));
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
  const award = await (await request.get('/recognition/')).text();
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
    if (response.status() >= 400 && isApplicationRequest(response.url())) {
      errors.push(`HTTP ${response.status()}: ${response.url()}`);
    }
  });
  page.on('requestfailed', (request) => {
    if (isApplicationRequest(request.url())) {
      errors.push(`request failed: ${request.url()} (${request.failure()?.errorText ?? 'unknown'})`);
    }
  });
  for (const route of primaryRoutes) await page.goto(route, { waitUntil: 'networkidle' });
  expect(errors).toEqual([]);
});

test('required widths have no horizontal overflow', async ({ page }) => {
  const failures: Array<{
    route: string;
    width: number;
    overflow: number;
    offenders: Array<Record<string, string | number>>;
  }> = [];
  const viewports = [
    { width: 320, height: 700 },
    { width: 360, height: 800 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 900 },
    { width: 1280, height: 800 },
    { width: 1440, height: 1000 },
    { width: 1920, height: 1080 },
    { width: 2560, height: 1440 },
  ];
  for (const { width, height } of viewports) {
    await page.setViewportSize({ width, height });
    for (const route of ['/', '/systems/', '/evolution/', '/systems/claims-agents/', '/systems/meta-harness/', '/systems/llm-steering/', '/research/', '/lab/', '/recognition/', '/about/', '/resume/', '/contact/']) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (overflow > 1) {
        const offenders = await page.evaluate(() => {
          const viewportWidth = document.documentElement.clientWidth;
          return [...document.body.querySelectorAll<HTMLElement>('*')]
            .map((element) => {
              const rect = element.getBoundingClientRect();
              return {
                element: `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}${element.classList.length ? `.${[...element.classList].join('.')}` : ''}`,
                text: (element.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 90),
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                overflowRight: Math.max(0, Math.round(rect.right - viewportWidth)),
                internalOverflow: element.clientWidth > 0 ? Math.max(0, element.scrollWidth - element.clientWidth) : 0,
              };
            })
            .filter((item) => item.left < -1 || item.overflowRight > 1 || item.internalOverflow > 1)
            .sort((a, b) => Math.max(b.overflowRight, b.internalOverflow) - Math.max(a.overflowRight, a.internalOverflow))
            .slice(0, 8);
        });
        failures.push({ route, width, overflow, offenders });
      }
    }
  }
  expect(failures, JSON.stringify(failures, null, 2)).toEqual([]);
});

test('reduced motion and keyboard/mobile navigation remain usable', async ({ page, browserName }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const skip = page.locator('.skip-link');
  await page.keyboard.press('Tab');
  if (browserName === 'webkit' && !(await skip.evaluate((element) => element === document.activeElement))) {
    await skip.focus();
  }
  await expect(skip).toBeFocused();
  await skip.press('Enter');
  await expect(page).toHaveURL(/#main-content$/);

  const menu = page.locator('.mobile-nav');
  await menu.locator('summary').click();
  await expect(menu).toHaveAttribute('open', '');
  await expect(menu.getByRole('link', { name: 'Systems' })).toBeVisible();

  const trace = page.locator('.agent-trace-v22');
  await trace.scrollIntoViewIfNeeded();
  await trace.focus();
  await page.keyboard.press('ArrowRight');
  await expect(trace.locator('li[aria-current="step"]')).toContainText('Intent classified');
  const motionDurations = await trace.evaluate((element) => {
    const style = getComputedStyle(element);
    return [style.animationDuration, style.transitionDuration];
  });
  expect(motionDurations.every((value) => value === '0s' || value === '1e-05s' || value === '0.00001s')).toBe(true);
});

test('agent trace is complete without JavaScript and keyboard operable with JavaScript', async ({ page, browser }) => {
  await page.goto('/');
  const trace = page.locator('.agent-trace-v22');
  await expect(trace).toContainText('Event arrives');
  await expect(trace).toContainText('Trace closes');
  await trace.focus();
  await page.keyboard.press('ArrowRight');
  await expect(trace.locator('li[aria-current="step"]')).toContainText('Intent classified');
  await trace.focus();
  await page.keyboard.press('ArrowLeft');
  await expect(trace.locator('li[aria-current="step"]')).toContainText('Event arrives');

  const noJsContext = await browser.newContext({ javaScriptEnabled: false });
  const noJsPage = await noJsContext.newPage();
  await noJsPage.goto('/');
  await expect(noJsPage.locator('.agent-trace-v22')).toContainText('Event arrives');
  await expect(noJsPage.locator('.agent-trace-v22')).toContainText('Trace closes');
  await expect(noJsPage.getByRole('link', { name: 'Explore the systems' }).first()).toBeVisible();
  await noJsContext.close();
});
