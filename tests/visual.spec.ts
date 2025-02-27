import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage visual comparison', async ({page}, testinfo) => {
    testinfo.snapshotSuffix = ''; 
    await page.goto('/');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('homepage-fullscreen.png', {
      fullPage: true,
    });
  });

  test('videos page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/video-resources');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('videos-fullscreen.png', {
      fullPage: true,
    });
  });

  test('helpful links page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/helpful-links');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('helpful-links-fullscreen.png', {
      fullPage: true,
    });
  });

  test('contact us page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/contact');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('contact-fullscreen.png', {
      fullPage: true,
    });
  });
});
