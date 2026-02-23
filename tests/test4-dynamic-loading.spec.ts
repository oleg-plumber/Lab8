import { test, expect } from "@playwright/test";

test("Dynamic Loading: очікування завершення завантаження", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/2");
  await page.click("button");
  await expect(page.locator("#finish")).toContainText("Hello World");
});