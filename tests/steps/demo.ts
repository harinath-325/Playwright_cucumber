import{Given,When, Then} from "@cucumber/cucumber"

import{chromium, Page, Browser} from "@playwright/test"
//import allure from "allure-cucumberjs"
//const { allure } = require('allure-cucumberjs');;
let browser: Browser;
let page: Page;

Given('checking demo', async function () {
    browser = await chromium.launch({headless: false});
    page   = await browser.newPage();
    //this.allure.label('feature', 'Open App');
    await page.goto("https://google.com/")

    console.log("entering the website")

  });

  When('print meassage', async function () {
   //await page.locator("//span[text() =' Login ']").click();
   await page.locator("//textarea[@aria-label ='Search']").fill("make my trip");
   await page.keyboard.press("Enter");
   console.log("Entered makemy trip in search box")
   //console.log("Entered playwright in search box")
 });


  Then('verify', async function () {
    await browser.close();
    //const title = await page.title();
    //console.log(title);
    //await expect(title).toBe("")
   //console.log("verify")

 });