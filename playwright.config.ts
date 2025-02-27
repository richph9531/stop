import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: process.env.CI 
      ? 'https://richph9531.github.io/stop'
      : 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Pixel 7 portrait',
      use: { 
        ...devices['Pixel 7'], browserName: 'chromium',
      },
    },
    {
      name: 'Pixel 7 landscape',
      use: { 
        ...devices['Pixel 7 landscape'], browserName: 'chromium',
      },
    },
    {
      name: 'Ipad pro 11 portrait',
      use: { 
        ...devices['iPad Pro 11 portrait'], browserName: 'chromium',
      },
    },
    {
      name: 'Ipad pro 11 landscape',
      use: { 
        ...devices['iPad Pro 11 landscape'], browserName: 'chromium',
      },
    },
  ],
});
