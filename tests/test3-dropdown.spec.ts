import { test, expect } from "@playwright/test";

test("Dropdown: вибір пункту зі списку", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.selectOption("#dropdown", "2");
  await expect(page.locator("#dropdown")).toHaveValue("2");
});