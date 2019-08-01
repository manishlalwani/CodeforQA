Feature: Verify Search Item functionality on Myntra Home Page

Scenario Outline: To Verify When search product is available

Given User launches Myntra application
When User is on Myntra Home Page
When User Moved to Login Page
When User logs in with "<username>" and "<password>"
Then Enters product "<searchproduct>" on search textbox
Then Products "<searchproduct>" are displayed on New Page
Then User Selects Wishlist button for Required search
Then User Moves to Wishlist Page
Then User Moves item to Bag for Checkout
Then User Selects "<size>" from avaialble options
Then User Selects Done
Then User Selects Bag to verify the item

Examples:
|username|password|searchproduct|size|    
|usernametoenter|passwordtoenter|Mens Jeans|30|

Scenario Outline: To Verify When search product is available before login

Given User launches Myntra application
When User is on Myntra Home Page
Then Enters product "<searchproduct>" on search textbox
Then Products "<searchproduct>" are displayed on New Page
Then User Selects Wishlist button for Required search
When User logs in with "<username>" and "<password>"
Then User Clicks on Wishlist Button 
Then User Moves to Wishlist Page
Then User Moves item to Bag for Checkout
Then User Selects "<size>" from avaialble options
Then User Selects Done
Then User Selects Bag to verify the item

Examples:
|username|password|searchproduct|size|    
|usernametoenter|passwordtoenter|Mens Jeans|30|

Scenario Outline: To Verify When search product is not available 

Given User launches Myntra application
When User is on Myntra Home Page
When User Moved to Login Page
When User logs in with "<username>" and "<password>"
Then Enters product "<searchproduct>" on search textbox
Then Product not available on Application

Examples:
|username|password|searchproduct|    
|usernametoenter|passwordtoenter|Refridgerator|



Scenario Outline: To Verify Whether Item is added to Wishlist or not

Given User launches Myntra application
When User is on Myntra Home Page
When User Moved to Login Page
When User logs in with "<username>" and "<password>"
Then Enters product "<searchproduct>" on search textbox
Then Products "<searchproduct>" are displayed on New Page
Then User Selects Wishlist button for Required search
Then User Log Out of Application


Examples:
|username|password|searchproduct|size|   
|usernametoenter|passwordtoenter|Levis Jeans|32|


Scenario Outline: To Verify Wishlist after logging out and then check out

Given User launches Myntra application
When User Moved to Login Page
When User logs in with "<username>" and "<password>"
Then User Moves to Wishlist Page
Then User Moves item to Bag for Checkout
Then User Selects "<size>" from avaialble options
Then User Selects Done
Then User Selects Bag to verify the item

Examples:
|username|password|searchproduct|size|   
|usernametoenter|passwordtoenter|Levis Jeans|30|
