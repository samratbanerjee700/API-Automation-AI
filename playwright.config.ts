import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['json', { outputFile: 'reports/test-report.json' }],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }]
  ]
});
