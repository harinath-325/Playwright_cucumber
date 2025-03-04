import{Given,When, Then} from "@cucumber/cucumber"

Given('checking demo', async function () {
   console.log("checking demo")
  });

  When('print meassage', async function () {
   console.log("message")
 });


  Then('verify', async function () {
   console.log("verify")
 });