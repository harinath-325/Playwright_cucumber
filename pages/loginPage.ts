import { Page } from "@playwright/test";
import { title } from "process";

export class LoginPage {
  private page: Page;
 

  private usernameField = "//input[@id='user-name']";
  private passwordField = "//input[@id='password']";
  private loginButton = "//input[@type='submit']";
  private productsTitle = "//span[@class='title']";
  private productItems = "//div[@class='inventory_item_name ']";

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator(this.usernameField).fill(username);
    await this.page.locator(this.passwordField).fill(password);
    await this.page.locator(this.loginButton).click();
    if (await this.page.locator(this.productsTitle).innerText() === "Products") {
      console.log("logged in successfully");
    } else {
      console.log("login failed");
    }
  }

  async navigateToSwagLabs(){
    await this.page.goto("https://www.saucedemo.com/");
    if (await this.page.title() === "Swag Labs") {
      console.log("Navigated to Swag labs website successfully");
    } else {
      console.log("Failed to navigate to Swag labs website");
    }
    console.log("Navigated to Swag labs website");
  }

  
}