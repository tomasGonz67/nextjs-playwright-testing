import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("simple api endpoint", async ({ page }) => {
  const response = await page.request.get(`${localhost}/api/hello`);
  await expect(response).toBeOK();

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("text", "Hello");
});
