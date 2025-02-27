import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test.only('homepage visual comparison', async ({page}, testinfo) => {
    testinfo.snapshotSuffix = ''; 
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('homepage-fullscreen.png', {
      fullPage: true,
      threshold: 0.2, // Threshold for per-pixel color difference
      maxDiffPixelRatio: 0.02, // Allow up to 2% of pixels to be different
    });
  });

  test('videos page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/video-resources');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('videos-fullscreen.png', {
      fullPage: true,
      threshold: 0.2,
      maxDiffPixelRatio: 0.02,
    });
  });

  test('helpful links page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/helpful-links');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('helpful-links-fullscreen.png', {
      fullPage: true,
      threshold: 0.2,
      maxDiffPixelRatio: 0.02,
    });
  });

  test('contact us page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('contact-fullscreen.png', {
      fullPage: true,
      threshold: 0.2,
      maxDiffPixelRatio: 0.02,
    });
  });
});
