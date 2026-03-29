Feature: Test run
@swaglabs
Scenario: 1st test case
Given User is on the Swag labs website
When user logs into the website '<username>' and '<password>'
Then verify the items in the website
Examples:
| username       | password      |ProductsList|
| standard_user  | secret_sauce  |Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red)|