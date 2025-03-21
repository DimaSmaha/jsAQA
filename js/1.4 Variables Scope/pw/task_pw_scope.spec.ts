/** TASK - Understanding Variable Scope in a Playwright Test
 *
 * 1. Create 2 Playwright tests.
 *
 * 2. Declare variables using `let` or `const` inside and outside of a test block.
 *
 * 3. Try accessing the variables from different parts of the test.
 *
 * 4. Observe which variables are accessible and which cause errors.
 *
 * 5. Use assertions to verify expected values.
 *
 * 💡 **Clue:** Create 2 tests, in one create a local variable that would make the test pass, in other do not add a local variable and make the test pass
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Scope Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const error = '[data-test="error"]';
  const login = "standard_user";
  const pass = "wrongPassword";

  test("Scope Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    await page.locator(passwordInput).fill(pass); // fix the test inside of the block to make sure that password is correct. DO NOT CHANGE THE pass variable!
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
  });

  test("Scope Test2", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    await page.locator(passwordInput).fill(pass);
    await page.locator(loginButton).click();
    //verify that pass is incorrect
  });
});
