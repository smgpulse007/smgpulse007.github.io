import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/work/',
  '/experience/',
  '/lab/',
  '/research/',
  '/about/',
  '/resume/',
  '/contact/',
  '/work/claims-intelligence/',
  '/work/predictive-healthcare-ml/',
  '/work/on-prem-rag-ocr/',
  '/work/healthcare-analytics-platform/',
  '/recognition/',
  '/systems/',
  '/work/llm-steering-lab/',
  '/systems/claims-agents/',
  '/systems/predictive-ml/',
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
    const summary = results.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      nodes: violation.nodes.map((node) => ({
        target: node.target,
        html: node.html,
        data: node.any[0]?.data ?? null,
      })),
    }));
    expect(results.violations.length, JSON.stringify(summary, null, 2)).toBe(0);
  });
}
