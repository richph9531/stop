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
    await expectScreenshot(page, 'homepage-fullscreen');
  });

  test('videos page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/video-resources');
    await expectScreenshot(page, 'videos-fullscreen');
  });

  test('helpful links page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/helpful-links');
    await expectScreenshot(page, 'helpful-links-fullscreen');
  });

  test('contact us page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await navigateAndWait(page, '/contact');
    await expectScreenshot(page, 'contact-fullscreen');
  });
});
