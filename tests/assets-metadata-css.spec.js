import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("first post has title", async ({ page }) => {
  await page.goto(`${localhost}/posts/first-post`);
  await expect(page).toHaveTitle("First Post");
});

test("layout has css applied", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("body>div>div").first()).toHaveClass(
    /layout_container.*/
  );
});

test("global css applied", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("body")).toHaveCSS(
    "font-size",
    /^(\d+(\.\d+)?)(px|em|rem)$/
  ); // check thats there is a font-size set unit px or rem or em
});

test("layout back to home button works", async ({ page }) => {
  await page.goto(`${localhost}/posts/first-post`);
  await page.locator("div>div>a").click();
  await expect(page).toHaveURL(localhost);
});

test("name was updated", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("header > h1")).not.toHaveText("Your Name");
});

test("description was updated", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("main>section>p").first()).not.toHaveText(
    "[Your Self Introduction]"
  );
});
