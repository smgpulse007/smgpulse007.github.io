import { defineConfig, devices } from '@playwright/test';

const externalBaseUrl = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: './tests',
  testMatch: /v23-capture\.capture\.ts/,
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: { timeout: 8_000 },
  outputDir: 'test-results/v23-capture',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report/v23-capture', open: 'never' }],
  ],
  use: {
    baseURL: externalBaseUrl ?? 'http://127.0.0.1:4380',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
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
      name: 'capture-v23',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
  ],
});
