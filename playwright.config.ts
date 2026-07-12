import { defineConfig, devices } from '@playwright/test';

const runLabel = process.env.VISUAL_QA_PASS ?? 'functional';
const externalBaseUrl = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 45_000,
  expect: { timeout: 8_000 },
  outputDir: `test-results/${runLabel}`,
  reporter: [
    ['list'],
    ['html', { outputFolder: `playwright-report/${runLabel}`, open: 'never' }],
  ],
  use: {
    baseURL: externalBaseUrl ?? 'http://127.0.0.1:4380',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    colorScheme: 'dark',
  },
  webServer: externalBaseUrl
    ? undefined
    : {
        command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4380',
        url: 'http://127.0.0.1:4380',
        reuseExistingServer: false,
        timeout: 120_000,
        stdout: 'pipe',
        stderr: 'pipe',
      },
  projects: [
    {
      name: 'chromium',
      testIgnore: /visual\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'visual-1440x1000',
      testMatch: /visual\.spec\.ts/,
      use: { browserName: 'chromium', viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 },
    },
    {
      name: 'visual-1024x900',
      testMatch: /visual\.spec\.ts/,
      use: { browserName: 'chromium', viewport: { width: 1024, height: 900 }, deviceScaleFactor: 1 },
    },
    {
      name: 'visual-768x1024',
      testMatch: /visual\.spec\.ts/,
      use: { browserName: 'chromium', viewport: { width: 768, height: 1024 }, deviceScaleFactor: 1 },
    },
    {
      name: 'visual-390x844',
      testMatch: /visual\.spec\.ts/,
      use: { browserName: 'chromium', viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true },
    },
    {
      name: 'visual-320x700',
      testMatch: /visual\.spec\.ts/,
      use: { browserName: 'chromium', viewport: { width: 320, height: 700 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true },
    },
  ],
});
