import { expect, test } from '@playwright/test';

const routes: Record<string, string> = {
  home: '/',
  work: '/work/',
  experience: '/experience/',
  lab: '/lab/',
  recognition: '/recognition/',
  about: '/about/',
  resume: '/resume/',
  contact: '/contact/',
  'case-claims': '/work/claims-intelligence/',
  'case-on-prem': '/work/on-prem-rag-ocr/',
  'case-healthcare-platform': '/work/healthcare-analytics-platform/',
  'case-llm-steering': '/work/llm-steering-lab/',
};

for (const [name, route] of Object.entries(routes)) {
  test(`${name} screenshot`, async ({ page }, testInfo) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${route} overflow in ${testInfo.project.name}`).toBeLessThanOrEqual(1);

    const filename = testInfo.outputPath(`${name}.png`);
    await page.screenshot({ path: filename, fullPage: true, animations: 'disabled', caret: 'hide' });
    await testInfo.attach(`${name}-${testInfo.project.name}`, { path: filename, contentType: 'image/png' });
  });
}
