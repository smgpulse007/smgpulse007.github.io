import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
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

for (const route of routes) {
  test(`${route} has no automated WCAG A/AA violations`, async ({ page }, testInfo) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    await testInfo.attach('axe-results', {
      body: Buffer.from(JSON.stringify(results, null, 2)),
      contentType: 'application/json',
    });
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
}
