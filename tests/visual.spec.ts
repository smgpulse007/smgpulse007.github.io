import { expect, test } from '@playwright/test';

const routes: Record<string, string> = {
  home: '/',
  work: '/work/',
  experience: '/experience/',
  projects: '/lab/',
  'project-alphaquant': '/lab/alphaquant/',
  'project-wiki': '/lab/chatwithwiki-azure-ml/',
  'project-freshtrack': '/lab/freshtrack-ai-module/',
  'project-hl7': '/lab/hl7-ai-reference-platform/',
  'project-readmission': '/lab/hospital-readmission-fhir-api/',
  'project-steering': '/lab/llm-steering/',
  'project-documents': '/lab/local-document-ai/',
  'project-forecasting': '/lab/nfl-forecasting-archive/',
  'not-found': '/404.html',
  research: '/research/',
  about: '/about/',
  resume: '/resume/',
  contact: '/contact/',
  evolution: '/evolution/',
  systems: '/systems/',
  'case-llm': '/work/llm-steering-lab/',
  'system-claims': '/systems/claims-agents/',
  'system-predictive': '/systems/predictive-ml/',
  'system-platform': '/systems/healthcare-platform/',
  'system-documents': '/systems/document-intelligence/',
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
    for (const [index, diagram] of (await page.locator('.v23-career-field, .case-instrument, .v23-claims-run, .evolution-spine, .system-layer-map').all()).entries()) {
      await diagram.screenshot({
        path: testInfo.outputPath(`${name}-diagram-${index}.png`),
        animations: 'disabled',
        // Fixed navigation belongs to viewport captures, not isolated diagrams.
        style: '.site-header, .skip-link { visibility: hidden !important; }',
      });
    }
  });
}
