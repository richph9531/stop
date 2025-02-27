import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test.only('homepage visual comparison', async ({page}, testinfo) => {
    testinfo.snapshotSuffix = ''; 
    await page.goto('/');
    // Wait for any dynamic content to load
    await page.waitForLoadState('networkidle');
    // Additional wait to ensure all styles are applied
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('homepage-fullscreen.png', {
      fullPage: true,
    });
  });

  test('videos page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/video-resources');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('videos-fullscreen.png', {
      fullPage: true,
    });
  });

  test('helpful links page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/helpful-links');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('helpful-links-fullscreen.png', {
      fullPage: true,
    });
  });

  test('contact us page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('contact-fullscreen.png', {
      fullPage: true,
    });
  });
});
