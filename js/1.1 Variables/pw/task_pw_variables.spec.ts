/** TASK - Writing a Playwright Test with Locator Variables
 *
 * 1. Create a Playwright test using `test()` from `@playwright/test`.
 *
 * 2. Use `const` to define locator variables for elements on the page.
 *
 * 3. Use `let` to define a variable that will store dynamic values during the test.
 *
 * 4. Perform interactions like filling out a form login form, clicking a login button, and verifying that we are logged in.
 *
 * 5. Use assertions to verify expected behavior.
 *
 * 6. Use `let`, change its value and reuse later in the test
 *
 * List of locators:
 *  usernameInput = '[data-test="username"]';
 *  passwordInput = '[data-test="password"]';
 *  loginButton = '[data-test="login-button"]';
 *  error = '[data-test="error"]';
 *  item = '[id="item_4_title_link"]';
 *
 * List of userData
 *  login = "standard_user";
 *  pass = "secret_sauce";
 *
 * 💡 **Clue:** Create a test where we firstly would enter wrong password, and then fix it inside of the test
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Variables Test", () => {
  //add a locators, userData, & wrong password
  test("Variables Test", async ({ page }) => {
    // await page.goto("/");
    // await page.locator(usernameInput).fill(login);
    // await page.locator(passwordInput).fill(pass);
    // enter wrong password and then fix it inside of the test, during test run
    // await page.locator(loginButton).click();
    // await expect(page.locator(item)).toBeVisible();
  });
});
