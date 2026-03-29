import{Given,When, Then} from "@cucumber/cucumber"
import { LoginPage } from "../../pages/loginPage";
import { ItemsPage } from "../../pages/itemsPage";
import { page } from "../hooks/hooks";

let loginPage: LoginPage;
let itemsPage: ItemsPage;
loginPage = new LoginPage(page);
itemsPage = new ItemsPage(page);  
Given('User is on the Swag labs website', async function () {
  await loginPage.navigateToSwagLabs();
  console.log("entering the Swag labs website")
});

When('user logs into the website {string} and {string}', async function (username: string, password: string) {
  await loginPage.login(username, password);
  console.log("logging into the website");
});

Then('verify the items in the website', async function (products:string) {
  
  
});
