// @ts-check
const { test, expect } = require('@playwright/test');

test('Landing page', async ({ page }) => {
  await page.goto('https://asknicely.needlecompass.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ASKNICELY - Sample Work/);
});


test('Flow of the website', async ({ page }) => {
  await page.goto('https://asknicely.needlecompass.com/');
  await page.goto('https://asknicely.needlecompass.com/home');
  await page.getByRole('link', { name: 'Strategy How well our migration strategy is aligned? Strategy' }).click();
  await page.getByRole('link', { name: 'Migration journey ' }).click();
  await page.goto('https://asknicely.needlecompass.com/strategy/highlevel');
  await page.getByRole('link', { name: 'Building blocks ' }).click();
  await page.getByRole('link', { name: 'Migration Journey' }).click();
  await page.getByRole('link', { name: 'Strategy' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Work Smarter What can help us to be more productive? Work Smarter' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Architecture Do you want to know more about this website? Architecture' }).click();
  await page.getByRole('link').first().click();
});