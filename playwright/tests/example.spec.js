// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title', async ({ page }) => {
  await page.goto('https://asknicely.needlecompass.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ASKNICELY - Sample Work/);
});
