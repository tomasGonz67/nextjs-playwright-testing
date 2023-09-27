import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("Home page shows both blogs", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("ul>li")).toHaveCount(2);
});

test("blogs have correct info", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("ul>li")).toContainText([
    "When to Use Static Generation v.s. Server-side Rendering",
    "Two Forms of Pre-rendering",
  ]);
});
