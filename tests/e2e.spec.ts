import { expect, test, type Page } from '@playwright/test';

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

const professionalRoutes = [
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

const supportingRoutes = [
  '/recognition/',
  '/contact/',
  '/systems/',
  '/evolution/',
  '/systems/claims-agents/',
  '/systems/predictive-ml/',
  '/systems/healthcare-platform/',
  '/systems/document-intelligence/',
  '/systems/meta-harness/',
  '/systems/llm-steering/',
] as const;

const completeRoutes = [...professionalRoutes, ...supportingRoutes];

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

function collectApplicationErrors(page: Page) {
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
  return errors;
}

test.describe('static route and metadata contract', () => {
  for (const route of completeRoutes) {
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

  test('V2.3 machine-readable routes and custom 404 are present', async ({ request }) => {
    const portfolioResponse = await request.get('/portfolio.json');
    expect(portfolioResponse.status()).toBe(200);
    const portfolio = await portfolioResponse.json();
    expect(portfolio.schemaVersion).toBe('portfolio.v2.3');
    expect(portfolio.role).toBe('Senior Applied AI / ML Engineer');
    expect(portfolio.professionalSystems).toHaveLength(4);

    const projectsResponse = await request.get('/projects.json');
    await expect(projectsResponse).toBeOK();
    const projects = await projectsResponse.json();
    expect(projects.version).toBe('2.3');
    expect(projects.count).toBe(41);
    expect(projects.authoredRepositoryCount).toBe(39);

    const researchResponse = await request.get('/research.json');
    await expect(researchResponse).toBeOK();
    const research = await researchResponse.json();
    expect(research.schemaVersion).toBe('portfolio.research.v2.3');
    expect(research.counts).toEqual({ external: 35, authored: 2, total: 37 });

    await expect(await request.get('/systems.json')).toBeOK();
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

test.describe('professional navigation', () => {
  test('desktop navigation prioritizes the V2.3 professional information architecture', async ({ page }) => {
    await page.goto('/work/');
    const nav = page.getByRole('navigation', { name: 'Primary navigation' });
    const desktop = nav.locator('.desktop-nav');
    await expect(desktop).toBeVisible();
    await expect(desktop.getByRole('link', { name: 'Work', exact: true })).toHaveAttribute('aria-current', 'page');
    for (const label of ['Experience', 'Projects', 'Research', 'About']) {
      await expect(desktop.getByRole('link', { name: label, exact: true })).toBeVisible();
    }
    await expect(desktop.getByRole('link', { name: /r.sum./i })).toBeVisible();
    await expect(desktop.getByRole('link', { name: 'Systems', exact: true })).toHaveCount(0);
    await expect(desktop.getByRole('link', { name: 'Evolution', exact: true })).toHaveCount(0);
  });

  test('mobile menu opens as an opaque, viewport-bounded professional menu', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator('.desktop-nav')).toBeHidden();

    const menu = page.locator('.mobile-nav');
    const summary = menu.locator('summary');
    await expect(summary).toBeVisible();
    await summary.click();
    await expect(menu).toHaveAttribute('open', '');

    const panel = menu.locator(':scope > div');
    await expect(panel).toBeVisible();
    for (const label of ['Work', 'Experience', 'Projects', 'Research', 'About']) {
      await expect(panel.getByRole('link', { name: label, exact: true })).toBeVisible();
    }
    const panelMetrics = await panel.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        background: getComputedStyle(element).backgroundColor,
        left: rect.left,
        right: rect.right,
        viewport: document.documentElement.clientWidth,
      };
    });
    expect(panelMetrics.background).not.toBe('rgba(0, 0, 0, 0)');
    expect(panelMetrics.left).toBeGreaterThanOrEqual(-1);
    expect(panelMetrics.right).toBeLessThanOrEqual(panelMetrics.viewport + 1);

    await summary.click();
    await expect(menu).not.toHaveAttribute('open', '');
  });
});

test.describe('homepage V2.3 interactions and server-rendered evidence', () => {
  test('homepage contains final metrics and no zero placeholders', async ({ request }) => {
    const html = await (await request.get('/')).text();
    const values = [...html.matchAll(/<strong>(.*?)<\/strong>/g)]
      .map((match) => match[1].replace(/<!--.*?-->/g, '').replace(/<[^>]+>/g, '').trim());
    expect(values).toEqual(expect.arrayContaining(['7K', '20%', '≈$3M']));
    expect(values.some((value) => value === '≈90%')).toBe(true);
    expect(values).not.toEqual(expect.arrayContaining(['0K', '0%', '$0M']));
  });

  test('career field exposes the full scientific-to-agentic progression', async ({ page }) => {
    await page.goto('/');
    const field = page.locator('.v23-career-field');
    const careerMap = field.locator('svg[role="group"]');
    await expect(careerMap).toBeVisible();
    await expect(careerMap).toHaveAttribute('aria-labelledby', 'career-svg-title career-svg-desc');
    await expect(field.locator('svg a')).toHaveCount(5);
    await expect(field).toContainText('Scientific foundation');
    await expect(field).toContainText('Production agentic AI');
    await expect(field.locator('a[href="/experience/#agent"]').first()).toHaveCount(1);
  });

  test('claims run supports direct, previous, next, and play/pause controls', async ({ page }) => {
    await page.goto('/');
    const run = page.locator('[data-claims-run]');
    await expect(run.locator('[data-run-step]')).toHaveCount(8);
    await expect(run.locator('[data-run-label]')).toHaveText('Packet arrives');

    await run.getByRole('button', { name: 'Next step' }).click();
    await expect(run.locator('[data-run-label]')).toHaveText('Intent + document types');
    await run.getByRole('button', { name: 'Previous step' }).click();
    await expect(run.locator('[data-run-label]')).toHaveText('Packet arrives');

    await run.getByRole('button', { name: /Human authority/ }).click();
    await expect(run.locator('[data-run-label]')).toHaveText('Human authority');
    await expect(run.locator('[data-run-code]')).toContainText('reviewer_authority');

    const play = run.locator('[data-run-play]');
    await play.click();
    await expect(play).toHaveText('Pause');
    await play.click();
    await expect(play).toHaveText('Play');
  });
});

test.describe('professional case-study instruments', () => {
  test('claims case retains the bounded-action run', async ({ page }) => {
    await page.goto('/work/claims-intelligence/');
    const run = page.locator('[data-claims-run]');
    await expect(run).toBeVisible();
    await run.getByRole('button', { name: 'Next step' }).click();
    await expect(run.locator('[data-run-label]')).toHaveText('Intent + document types');
  });

  test('predictive-healthcare case changes the evaluation lens', async ({ page }) => {
    await page.goto('/work/predictive-healthcare-ml/');
    const instrument = page.locator('.predictive-instrument');
    await expect(instrument).toBeVisible();
    await instrument.getByRole('button', { name: 'Calibration', exact: true }).click();
    await expect(instrument.getByRole('button', { name: 'Calibration', exact: true })).toHaveClass(/active/);
    await expect(instrument.locator('[data-predictive-note]')).toContainText(/strongest .*probability quality/);
    await expect(instrument.locator('[data-model-row="1"]')).toHaveClass(/selected/);
    await instrument.getByRole('button', { name: 'Operational fit', exact: true }).click();
    await expect(instrument.locator('[data-predictive-note]')).toContainText(/interpretable .*baseline/);
    await expect(instrument.locator('[data-model-row="0"]')).toHaveClass(/selected/);
  });

  test('healthcare platform case selects a program context', async ({ page }) => {
    await page.goto('/work/healthcare-analytics-platform/');
    const instrument = page.locator('.platform-instrument');
    await instrument.getByRole('button', { name: /Quality gaps/ }).click();
    await expect(instrument.locator('[data-program-title]')).toHaveText('Quality gaps');
    await expect(instrument.getByRole('button', { name: /Quality gaps/ })).toHaveClass(/active/);
  });

  test('on-prem document case selects a source page and extracted field', async ({ page }) => {
    await page.goto('/work/on-prem-rag-ocr/');
    const instrument = page.locator('.document-instrument');
    await instrument.getByRole('button', { name: /PAGE 05.*Form.*Apr 11/ }).click();
    await expect(instrument.locator('[data-page-label]')).toHaveText('PAGE 05 / Form');
    await expect(instrument.locator('[data-page-value]')).toHaveText('extracted field: Apr 11');
  });
});

test('Project Lab workbench filters and selects inspectable project evidence', async ({ page }) => {
  await page.goto('/lab/');
  const workbench = page.locator('[data-project-workbench]');
  const projects = workbench.locator('[data-project-select]');
  const initialCount = await projects.count();
  expect(initialCount).toBeGreaterThan(6);

  await workbench.getByRole('searchbox', { name: 'Filter systems' }).fill('Meta Harness');
  await expect(workbench.locator('[data-project-select]:visible')).toHaveCount(1);
  const metaHarness = workbench.getByRole('button', { name: /Meta Harness/ });
  await metaHarness.click();
  await expect(workbench.locator('[data-project-title]')).toHaveText('Meta Harness');
  await expect(workbench.locator('[data-project-status]')).toContainText('14 green checks');
  await expect(workbench.locator('[data-project-open]')).toHaveAttribute('href', '/systems/meta-harness/');

  await workbench.getByRole('searchbox', { name: 'Filter systems' }).clear();
  await expect(workbench.locator('[data-project-select]:visible')).toHaveCount(initialCount);
});

test.describe('Research atlas interactions', () => {
  test('tabs, keyboard navigation, filters, reset, and publications remain coherent', async ({ page }) => {
    await page.goto('/research/');
    const root = page.locator('[data-research-root]');
    const controls = root.locator('[data-enhanced-controls]');
    await expect(controls).toBeVisible();
    await expect(root.getByRole('tab')).toHaveCount(4);

    const applied = root.getByRole('tab', { name: /Applied engineering/ });
    await applied.click();
    await expect(applied).toHaveAttribute('aria-selected', 'true');
    await expect(root.locator('[data-research-panel="foundations"]')).toBeHidden();
    await expect(root.locator('[data-research-panel="applied"]')).toBeVisible();

    await root.locator('[data-cluster-filter]').selectOption({ label: 'Clinical-model quality' });
    await root.locator('[data-status-filter]').selectOption('reporting-guideline');
    await expect(root.locator('[data-research-panel="applied"] [data-research-record]:visible')).toHaveCount(2);
    await expect(root.locator('[data-result-count]')).toContainText('2 of');

    await root.getByRole('button', { name: 'Reset filters' }).click();
    await expect(root.locator('[data-cluster-filter]')).toHaveValue('all');
    await expect(root.locator('[data-status-filter]')).toHaveValue('all');

    await applied.focus();
    await applied.press('ArrowRight');
    const frontier = root.getByRole('tab', { name: /Frontier watch/ });
    await expect(frontier).toBeFocused();
    await expect(frontier).toHaveAttribute('aria-selected', 'true');

    const publications = root.getByRole('tab', { name: /My publications/ });
    await publications.click();
    await expect(root.locator('.research-filters')).toBeHidden();
    await expect(root.locator('.authored-record')).toHaveCount(2);
    await expect(root.locator('[data-result-count]')).toHaveText('2 verified authored publications');
  });

  test('project-first reading-path jump selects and focuses the owning research view', async ({ page }) => {
    await page.goto('/research/');
    const root = page.locator('[data-research-root]');
    await root.getByRole('link', { name: /TRIPOD\+AI Statement/ }).click();
    await expect(root.getByRole('tab', { name: /Applied engineering/ })).toHaveAttribute('aria-selected', 'true');
    await expect(root.locator('#research-tripod-ai')).toBeFocused();
    await expect(root.locator('#research-tripod-ai')).toBeVisible();
  });
});

test('resume handling has no broken PDF CTA', async ({ page, request }) => {
  await page.goto('/resume/');
  const pdfLinks = await page.locator('a[href$=".pdf"]').evaluateAll((links) =>
    links.map((link) => (link as HTMLAnchorElement).href),
  );
  for (const url of pdfLinks) expect((await request.get(url)).status()).toBe(200);
  if (!pdfLinks.length) {
    await expect(page.locator('main')).toContainText(/withheld|privacy[- ]cleared|available on request|public PDF/i);
  }
});

test('award attribution stays attached to Let’s Talk Doc', async ({ request }) => {
  const home = await (await request.get('/')).text();
  const award = await (await request.get('/recognition/')).text();
  const text = `${home} ${award}`.replace(/<[^>]+>/g, ' ');
  expect(text).toMatch(/Let(?:’|')s Talk Doc/i);
  expect(text).toMatch(/Team recipient/i);
  expect(text).not.toMatch(/challenge-winning/i);
});

test('V2.3 professional pages have no console errors or failed local requests', async ({ page }) => {
  const errors = collectApplicationErrors(page);
  for (const route of professionalRoutes) await page.goto(route, { waitUntil: 'networkidle' });
  expect(errors).toEqual([]);
});

test('required widths have no horizontal overflow on V2.3 professional routes', async ({ page }) => {
  const failures: Array<{
    route: string;
    width: number;
    overflow: number;
    offenders: Array<Record<string, string | number>>;
  }> = [];
  const viewports = [
    { width: 320, height: 700 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1280, height: 800 },
    { width: 1920, height: 1080 },
    { width: 2560, height: 1440 },
  ];
  const overflowRoutes = [
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
  ];

  for (const { width, height } of viewports) {
    await page.setViewportSize({ width, height });
    for (const route of overflowRoutes) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
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
                internalOverflow: element.clientWidth > 0
                  ? Math.max(0, element.scrollWidth - element.clientWidth)
                  : 0,
              };
            })
            .filter((item) => item.left < -1 || item.overflowRight > 1 || item.internalOverflow > 1)
            .sort(
              (a, b) =>
                Math.max(b.overflowRight, b.internalOverflow) -
                Math.max(a.overflowRight, a.internalOverflow),
            )
            .slice(0, 8);
        });
        failures.push({ route, width, overflow, offenders });
      }
    }
  }
  expect(failures, JSON.stringify(failures, null, 2)).toEqual([]);
});
