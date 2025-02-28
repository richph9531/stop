import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  workers: 5,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    deviceScaleFactor: 1, // Force 1:1 pixel ratio
    // viewport: { width: 1280, height: 720 }, // Set consistent viewport
  },
  projects: [
    {
      name: 'Desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Pixel 7 portrait',
      use: { 
        ...devices['Pixel 7'],
        browserName: 'chromium',
      },
    },
    {
      name: 'Pixel 7 landscape',
      use: { 
        ...devices['Pixel 7 landscape'],
        browserName: 'chromium',
      },
    },
    {
      name: 'Ipad pro 11 portrait',
      use: { 
        ...devices['iPad Pro 11'],
        browserName: 'chromium',
      },
    },
    {
      name: 'Ipad pro 11 landscape',
      use: { 
        ...devices['iPad Pro 11 landscape'],
        browserName: 'chromium',
      },
    },
  ],
});
