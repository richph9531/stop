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
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'iPhone 14',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'iPhone 14 landscape',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'Pixel 7',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'Pixel 7 landscape',
      use: { 
        ...devices['Pixel 7'],
      },
    },
    {
      name: 'iPad Pro 11',
      use: { ...devices['iPad Pro 11'] },
    },
    {
      name: 'iPad Pro 11 landscape',
      use: { ...devices['iPad Pro 11'] },
    }
  ],
});
