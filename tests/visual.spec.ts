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
    await navigateAndWait(page, '/videos');
    await expectScreenshot(page, 'videos');
  });

  test('videos (expanded) page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/videos');
    await page.evaluate(() => {
      document.querySelectorAll('button').forEach(button => {
        if (button.textContent?.includes('Show More')) {
          button.click();
        }
      });
    });
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('videos-expanded.png', {
      fullPage: true,
      ...(process.env.CI ? { maxDiffPixelRatio: 0.03 } : {}),
      maxDiffPixels: 5,
    });
  });


  test('helpful links', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/resources');
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
