import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: process.env.CI 
      ? 'http://localhost:3000'
      : 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    deviceScaleFactor: 1, // Force 1:1 pixel ratio
    viewport: { width: 1280, height: 720 }, // Set consistent viewport
  },
  projects: [
    {
      name: 'Desktop',
      use: { 
        ...devices['Desktop Chrome'],
        deviceScaleFactor: 1,
        viewport: { width: 1280, height: 720 },
      },
    },
    // {
    //   name: 'Pixel 7 portrait',
    //   use: { 
    //     ...devices['Pixel 7'],
    //     browserName: 'chromium',
    //     deviceScaleFactor: 1,
    //   },
    // },
    // {
    //   name: 'Pixel 7 landscape',
    //   use: { 
    //     ...devices['Pixel 7 landscape'],
    //     browserName: 'chromium',
    //     deviceScaleFactor: 1,
    //   },
    // },
    // {
    //   name: 'Ipad pro 11 portrait',
    //   use: { 
    //     ...devices['iPad Pro 11 portrait'],
    //     browserName: 'chromium',
    //     deviceScaleFactor: 1,
    //   },
    // },
    // {
    //   name: 'Ipad pro 11 landscape',
    //   use: { 
    //     ...devices['iPad Pro 11 landscape'],
    //     browserName: 'chromium',
    //     deviceScaleFactor: 1,
    //   },
    // },
  ],
});
