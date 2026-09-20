import { expect, test } from '@playwright/test';

test('project search maintains a visible selection and recovers from no results', async ({ page }) => {
  await page.goto('/lab/');
  const search = page.locator('[data-project-search]');
  const choices = page.locator('[data-project-select]');
  const secondTitle = await choices.nth(1).getAttribute('data-title');
  await search.fill(secondTitle!);
  await expect(page.locator('[data-project-title]')).toHaveText(secondTitle!);
  await expect(page.locator('[data-project-select][aria-pressed="true"]')).toBeVisible();
  await search.fill('nonexistent-project-93817');
  await expect(page.locator('[data-project-count]')).toHaveText('0 projects');
  await expect(page.locator('[data-project-empty]')).toBeVisible();
  await expect(page.locator('[data-project-detail]')).toBeHidden();
  await search.fill('');
  await expect(page.locator('[data-project-empty]')).toBeHidden();
  await expect(page.locator('[data-project-detail]')).toBeVisible();
  await expect(page.locator('[data-project-select][aria-pressed="true"]')).toHaveCount(1);
});

test('mobile navigation closes with Escape and after navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.locator('.mobile-nav summary');
  await toggle.click();
  await expect(page.locator('.mobile-nav')).toHaveAttribute('open', '');
  await page.keyboard.press('Escape');
  await expect(page.locator('.mobile-nav')).not.toHaveAttribute('open');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.locator('.mobile-nav').getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page).toHaveURL(/\/work\/$/);
  await expect(page.locator('.mobile-nav')).not.toHaveAttribute('open');
});

test('editorial homepage has loaded real artifacts and visible next content', async ({ page }, testInfo) => {
  for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 1000 }, { width: 2560, height: 1440 }]) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect(page.locator('main h1')).toHaveText('Shailesh Dudala.');
    const work = await page.locator('#selected-work').boundingBox();
    expect(work!.y).toBeLessThan(viewport.height);
    for (const image of await page.locator('.folio-lab-media img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await page.screenshot({ path: testInfo.outputPath(`editorial-home-${viewport.width}.png`), fullPage: true, animations: 'disabled' });
  }
});
