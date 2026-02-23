import { test, expect } from "@playwright/test";

test("Add/Remove Elements: додавання елемента", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await page.click("button[onclick='addElement()']");
  const deleteBtn = page.locator(".added-manually");
  await expect(deleteBtn).toBeVisible();
});