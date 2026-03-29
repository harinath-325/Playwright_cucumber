import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { ItemsPage } from "../../pages/itemsPage";
import { LoginPage } from "../../pages/loginPage";

setDefaultTimeout(60000);

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

Before(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();
  console.log("Browser and page setup completed");
});

After(async () => {
  await page.close();
  await context.close();
  await browser.close();
  console.log("Browser session closed");
});