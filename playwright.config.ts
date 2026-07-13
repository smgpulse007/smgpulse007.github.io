import { defineConfig, devices } from '@playwright/test';

const runLabel = process.env.VISUAL_QA_PASS ?? 'functional';
const externalBaseUrl = process.env.PLAYWRIGHT_BASE_URL;
const ignoreExternalWebKitTlsErrors =
  Boolean(externalBaseUrl) && process.env.PLAYWRIGHT_WEBKIT_IGNORE_HTTPS_ERRORS === 'true';
const requiredViewports = [
  { width: 320, height: 700 },
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 900 },
  { width: 1280, height: 800 },
  { width: 1440, height: 1000 },
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
] as const;
const browserEngines = ['chromium', 'firefox', 'webkit'] as const;

const visualProjects = browserEngines.flatMap((browserName) =>
  requiredViewports.map((viewport) => ({
    name: `visual-${browserName}-${viewport.width}x${viewport.height}`,
    testMatch: /visual\.spec\.ts/,
    use: {
      browserName,
      viewport,
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: browserName === 'webkit' && ignoreExternalWebKitTlsErrors,
    },
  })),
);

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
      name: 'firefox',
      testIgnore: /visual\.spec\.ts/,
      use: { ...devices['Desktop Firefox'], viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'webkit',
      testIgnore: /visual\.spec\.ts/,
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 800 },
        ignoreHTTPSErrors: ignoreExternalWebKitTlsErrors,
      },
    },
    ...visualProjects,
  ],
});
