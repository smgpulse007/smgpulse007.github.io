import { expect, test } from '@playwright/test';

test('career timeline stays legible and links to the corresponding roles', async ({ page }) => {
  const expectedRoles = ['Biomedical informatics', 'Data Scientist', 'Lead Data Scientist', 'Lead DS/ML Engineer', 'Applied AI Engineer'];
  for (const width of [320, 390, 768, 1024, 1440, 2560]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/experience/');
    const links = page.locator('.career-timeline a');
    await expect(links).toHaveCount(5);
    for (let i = 0; i < 5; i++) {
      const link = links.nth(i);
      const date = await link.locator('.career-period').boundingBox();
      const label = await link.locator('.career-label').boundingBox();
      const context = await link.locator('.career-context').boundingBox();
      const dateBesideLabel = date!.x + date!.width <= label!.x;
      expect(dateBesideLabel || date!.y + date!.height <= label!.y).toBe(true);
      expect(label!.y + label!.height).toBeLessThanOrEqual(context!.y + 1);
      expect(context!.x + context!.width).toBeLessThanOrEqual(width);
      const target = (await link.getAttribute('href'))!.split('#')[1];
      await expect(page.locator(`#${target} h3`)).toContainText(expectedRoles[i]);
    }
    if (width >= 1024) expect((await page.locator('.v23-career-field').boundingBox())!.height).toBeLessThan(460);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
  }
  await page.locator('.career-timeline a').last().click();
  await expect(page).toHaveURL(/#agent$/);
  await expect(page.locator('#agent')).toBeInViewport();
});

test('case study diagrams contain labels and expose every selection on small screens', async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/work/healthcare-analytics-platform/');
    const programs = page.locator('[data-program]');
    for (const program of await programs.all()) {
      const box = await program.boundingBox();
      const label = await program.locator('span').boundingBox();
      expect(label!.x).toBeGreaterThanOrEqual(box!.x);
      expect(label!.x + label!.width).toBeLessThanOrEqual(box!.x + box!.width + 1);
      expect(label!.y + label!.height).toBeLessThanOrEqual(box!.y + box!.height);
      await program.click();
      await expect(program).toHaveAttribute('aria-pressed', 'true');
      await expect(page.locator('[data-program-title]')).toHaveText((await program.getAttribute('data-program'))!);
    }
    await page.goto('/work/claims-intelligence/');
    for (const button of await page.locator('[data-run-step] button').all()) {
      await button.click();
      await expect(button).toHaveAttribute('aria-pressed', 'true');
      await expect(page.locator('[data-run-label]')).toHaveText((await button.locator('strong').textContent())!);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
  }
});

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
