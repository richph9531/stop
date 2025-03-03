import { test, expect, Page } from '@playwright/test';

async function navigateAndWait(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
}

async function expectScreenshot(page: Page, name: string) {
  await expect(page).toHaveScreenshot(`${name}.png`, {
    fullPage: true,
    ...(process.env.CI ? { maxDiffPixelRatio: 0.03 } : {}),
  });
}

test.describe('Visual Regression Tests', () => {
  test('homepage visual comparison', async ({page}, testinfo) => {
    testinfo.snapshotSuffix = ''; 
    await navigateAndWait(page, '/');
    await expectScreenshot(page, 'homepage');
  });

  test('videos page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/video-resources');
    await expectScreenshot(page, 'videos');
  });

  test('helpful links', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/helpful-links');
    await expectScreenshot(page, 'helpful-links');
  });

  test('contact us', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/contact');
    await expectScreenshot(page, 'contact-us');
  });

  test('trafficking - impact', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/trafficking');
    await expectScreenshot(page, 'trafficking-impact');
  });

  test('trafficking - risk factors', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/trafficking');
    await page.getByRole('tab', { name: 'Risk Factors' }).click();
    const toggles = page.locator('[data-testid="toggle"]');
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      await toggles.nth(i).click();
    }
    await expectScreenshot(page, 'trafficking-risk-factors');
  });
});
