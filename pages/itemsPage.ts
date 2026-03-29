import { Page } from "@playwright/test";

export class ItemsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private items = "//div[@class='inventory_item_name ']";
  
  async getItemsList(): Promise<string[]> {
    const itemsList = await this.page.locator(this.items).allTextContents();
    console.log("Items list retrieved successfully");
    return itemsList;
  }
}