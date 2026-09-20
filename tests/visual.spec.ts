import { expect, test } from '@playwright/test';

const routes: Record<string, string> = {
  home: '/',
  work: '/work/',
  experience: '/experience/',
  projects: '/lab/',
  research: '/research/',
  about: '/about/',
  resume: '/resume/',
  'case-claims': '/work/claims-intelligence/',
  'case-predictive-healthcare': '/work/predictive-healthcare-ml/',
  'case-on-prem': '/work/on-prem-rag-ocr/',
  'case-healthcare-platform': '/work/healthcare-analytics-platform/',
  recognition: '/recognition/',
  'system-meta-harness': '/systems/meta-harness/',
  'system-llm-steering': '/systems/llm-steering/',
};

for (const [name, route] of Object.entries(routes)) {
  test(`${name} screenshot`, async ({ page }, testInfo) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    for (const image of await page.locator('main img').all()) {
      if (!await image.isVisible()) continue;
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${route} overflow in ${testInfo.project.name}`).toBeLessThanOrEqual(1);

    const filename = testInfo.outputPath(`${name}.png`);
    await page.screenshot({ path: filename, fullPage: true, animations: 'disabled', caret: 'hide' });
    await testInfo.attach(`${name}-${testInfo.project.name}`, { path: filename, contentType: 'image/png' });
  });
}
