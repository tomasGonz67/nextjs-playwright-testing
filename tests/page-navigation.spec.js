import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("first posts exists", async ({ page }) => {
  await page.goto(`${localhost}/posts/first-post`);
  await expect(page.locator("main>h1")).toHaveText(/^[\w\s]+$/);
});

test("back to home button works", async ({ page }) => {
  await page.goto(`${localhost}/posts/first-post`);
  await page.locator("main>h2>a").click();
  await expect(page).toHaveURL(localhost);
});
