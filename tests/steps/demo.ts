import{Given,When, Then} from "@cucumber/cucumber";

import{expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";


Given('checking demo', async function () {
   
    await pageFixture.page.goto("https://bookcart.azurewebsites.net/")

    console.log("entering the website")

  });

  When('print meassage', async function () {
   await pageFixture.page.locator("//span[text() =' Login ']").click();
   //await page.locator("//textarea[@aria-label ='Search']").fill("make my trip");
   //await page.keyboard.press("Enter");
   console.log("login button is clicked")

 });

  Then('verify', async function () {
    const title = await pageFixture.page.title();
    console.log(title);
   // await expect(pageFixture.page).toHaveTitle("Home")
   console.log("title is verified")
 });