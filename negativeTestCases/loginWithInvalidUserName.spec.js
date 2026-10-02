import { test, expect } from '@playwright/test';

test('user can log in with valid credentials', async ({page}) =>
{
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standardUser");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await page.locator("#login-button").click();

    const errorElement = page.locator('h3[data-test="error"]');

    await expect(errorElement).toBeVisible();
});