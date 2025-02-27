import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test.only('homepage visual comparison', async ({page}, testinfo) => {
    testinfo.snapshotSuffix = ''; 
    await page.goto('/');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('homepage-fullscreen.png', {
      fullPage: true,
      // threshold: 0.2, // Allow for small differences
      // maxDiffPixelRatio: 0.25, // Allow for some pixel ratio differences
    });
  });

  test('videos page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/video-resources');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('videos-fullscreen.png', {
      fullPage: true,
      // threshold: 0.2,
      // maxDiffPixelRatio: 0.25,
    });
  });

  test('helpful links page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/helpful-links');
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot('helpful-links-fullscreen.png', {
      fullPage: true,
      // threshold: 0.2,
      // maxDiffPixelRatio: 0.25,
    });
  });

  test('contact us page visual comparison', async ({ page }, testinfo) => {
    testinfo.snapshotSuffix = '';
    await page.goto('/contact');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('contact-fullscreen.png', {
      fullPage: true,
      // threshold: 0.2,
      // maxDiffPixelRatio: 0.25,
    });
  });
});
