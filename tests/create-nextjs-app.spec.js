import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("welcome text changed", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("main>h1")).not.toHaveText("Welcome to Next.js!");
});
