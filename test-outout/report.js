$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/manishlalwani/eclipse-workspace/MyntraTest1Framework/src/main/java/com/qa/features/searchProduct.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Search Item functionality on Myntra Home Page",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To Verify When search product is available",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User logs in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enters product \"\u003csearchproduct\u003e\" on search textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Products \"\u003csearchproduct\u003e\" are displayed on New Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Selects Wishlist button for Required search",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Moves to Wishlist Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Moves item to Bag for Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Selects \"\u003csize\u003e\" from avaialble options",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User Selects Done",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Selects Bag to verify the item",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "searchproduct",
        "size"
      ],
      "line": 19,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available;;1"
    },
    {
      "cells": [
        "manishlalwani88@gmail.com",
        "Mar@2091",
        "Mens Jeans",
        "30"
      ],
      "line": 20,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2434622145,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To Verify When search product is available",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User logs in with \"manishlalwani88@gmail.com\" and \"Mar@2091\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enters product \"Mens Jeans\" on search textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Products \"Mens Jeans\" are displayed on New Page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Selects Wishlist button for Required search",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Moves to Wishlist Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Moves item to Bag for Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Selects \"30\" from avaialble options",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User Selects Done",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Selects Bag to verify the item",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductDefinition.user_launches_Myntra_application()"
});
formatter.result({
  "duration": 2235773121,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_is_on_Myntra_Home_Page()"
});
formatter.result({
  "duration": 9277158,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moved_to_Login_Page()"
});
formatter.result({
  "duration": 1612409825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manishlalwani88@gmail.com",
      "offset": 19
    },
    {
      "val": "Mar@2091",
      "offset": 51
    }
  ],
  "location": "SearchProductDefinition.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 5652051730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mens Jeans",
      "offset": 16
    }
  ],
  "location": "SearchProductDefinition.enters_product_on_search_textbox(String)"
});
formatter.result({
  "duration": 1639785900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mens Jeans",
      "offset": 10
    }
  ],
  "location": "SearchProductDefinition.products_are_displayed_on_New_Page(String)"
});
formatter.result({
  "duration": 55084127,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Wishlist_button_for_Required_search()"
});
formatter.result({
  "duration": 1114413222,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moves_to_Wishlist_Page()"
});
formatter.result({
  "duration": 966237651,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moves_item_to_Bag_for_Checkout()"
});
formatter.result({
  "duration": 120787732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 14
    }
  ],
  "location": "SearchProductDefinition.user_Selects_size_from_avaialble_options(int)"
});
formatter.result({
  "duration": 171508351,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Done()"
});
formatter.result({
  "duration": 80891388,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Bag_to_verify_the_item()"
});
formatter.result({
  "duration": 1434984361,
  "status": "passed"
});
formatter.after({
  "duration": 168240020,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "To Verify When search product is available before login",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available-before-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Enters product \"\u003csearchproduct\u003e\" on search textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Products \"\u003csearchproduct\u003e\" are displayed on New Page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User Selects Wishlist button for Required search",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User logs in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User Clicks on Wishlist Button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User Moves to Wishlist Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Moves item to Bag for Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Selects \"\u003csize\u003e\" from avaialble options",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Selects Done",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Selects Bag to verify the item",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available-before-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "searchproduct",
        "size"
      ],
      "line": 38,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available-before-login;;1"
    },
    {
      "cells": [
        "manishlalwani88@gmail.com",
        "Mar@2091",
        "Mens Jeans",
        "30"
      ],
      "line": 39,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available-before-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1541470193,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "To Verify When search product is available before login",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-available-before-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Enters product \"Mens Jeans\" on search textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Products \"Mens Jeans\" are displayed on New Page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User Selects Wishlist button for Required search",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User logs in with \"manishlalwani88@gmail.com\" and \"Mar@2091\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User Clicks on Wishlist Button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User Moves to Wishlist Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Moves item to Bag for Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Selects \"30\" from avaialble options",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Selects Done",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Selects Bag to verify the item",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductDefinition.user_launches_Myntra_application()"
});
formatter.result({
  "duration": 1449183865,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_is_on_Myntra_Home_Page()"
});
formatter.result({
  "duration": 22004049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mens Jeans",
      "offset": 16
    }
  ],
  "location": "SearchProductDefinition.enters_product_on_search_textbox(String)"
});
formatter.result({
  "duration": 2057168784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mens Jeans",
      "offset": 10
    }
  ],
  "location": "SearchProductDefinition.products_are_displayed_on_New_Page(String)"
});
formatter.result({
  "duration": 102783465,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Wishlist_button_for_Required_search()"
});
formatter.result({
  "duration": 2058156923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manishlalwani88@gmail.com",
      "offset": 19
    },
    {
      "val": "Mar@2091",
      "offset": 51
    }
  ],
  "location": "SearchProductDefinition.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 5698483685,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Clicks_on_Wishlist_Button()"
});
formatter.result({
  "duration": 55485805,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moves_to_Wishlist_Page()"
});
formatter.result({
  "duration": 824026522,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moves_item_to_Bag_for_Checkout()"
});
formatter.result({
  "duration": 115388442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 14
    }
  ],
  "location": "SearchProductDefinition.user_Selects_size_from_avaialble_options(int)"
});
formatter.result({
  "duration": 167121559,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Done()"
});
formatter.result({
  "duration": 104958140,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Bag_to_verify_the_item()"
});
formatter.result({
  "duration": 1428395464,
  "status": "passed"
});
formatter.after({
  "duration": 194343861,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "To Verify When search product is not available",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-not-available",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User logs in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Enters product \"\u003csearchproduct\u003e\" on search textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Product not available on Application",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-not-available;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "searchproduct"
      ],
      "line": 51,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-not-available;;1"
    },
    {
      "cells": [
        "manishlalwani88@gmail.com",
        "Mar@2091",
        "Refridgerator"
      ],
      "line": 52,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-not-available;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1449635875,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "To Verify When search product is not available",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-when-search-product-is-not-available;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User logs in with \"manishlalwani88@gmail.com\" and \"Mar@2091\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Enters product \"Refridgerator\" on search textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Product not available on Application",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductDefinition.user_launches_Myntra_application()"
});
formatter.result({
  "duration": 2277651208,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_is_on_Myntra_Home_Page()"
});
formatter.result({
  "duration": 11101478,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moved_to_Login_Page()"
});
formatter.result({
  "duration": 1409081330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manishlalwani88@gmail.com",
      "offset": 19
    },
    {
      "val": "Mar@2091",
      "offset": 51
    }
  ],
  "location": "SearchProductDefinition.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 5699757952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Refridgerator",
      "offset": 16
    }
  ],
  "location": "SearchProductDefinition.enters_product_on_search_textbox(String)"
});
formatter.result({
  "duration": 1019122356,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.product_not_available_on_Application()"
});
formatter.result({
  "duration": 30131661,
  "status": "passed"
});
formatter.after({
  "duration": 109353718,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "To Verify Whether Item is added to Wishlist or not",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-whether-item-is-added-to-wishlist-or-not",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User logs in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Enters product \"\u003csearchproduct\u003e\" on search textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Products \"\u003csearchproduct\u003e\" are displayed on New Page",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User Selects Wishlist button for Required search",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User Log Out of Application",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-whether-item-is-added-to-wishlist-or-not;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "searchproduct",
        "size"
      ],
      "line": 69,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-whether-item-is-added-to-wishlist-or-not;;1"
    },
    {
      "cells": [
        "manishlalwani88@gmail.com",
        "Mar@2091",
        "Levis Jeans",
        "32"
      ],
      "line": 70,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-whether-item-is-added-to-wishlist-or-not;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1398019534,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "To Verify Whether Item is added to Wishlist or not",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-whether-item-is-added-to-wishlist-or-not;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User is on Myntra Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User logs in with \"manishlalwani88@gmail.com\" and \"Mar@2091\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Enters product \"Levis Jeans\" on search textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Products \"Levis Jeans\" are displayed on New Page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User Selects Wishlist button for Required search",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User Log Out of Application",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductDefinition.user_launches_Myntra_application()"
});
formatter.result({
  "duration": 2185551314,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_is_on_Myntra_Home_Page()"
});
formatter.result({
  "duration": 9577635,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moved_to_Login_Page()"
});
formatter.result({
  "duration": 1457290441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manishlalwani88@gmail.com",
      "offset": 19
    },
    {
      "val": "Mar@2091",
      "offset": 51
    }
  ],
  "location": "SearchProductDefinition.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 5652226659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Levis Jeans",
      "offset": 16
    }
  ],
  "location": "SearchProductDefinition.enters_product_on_search_textbox(String)"
});
formatter.result({
  "duration": 8430506933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Levis Jeans",
      "offset": 10
    }
  ],
  "location": "SearchProductDefinition.products_are_displayed_on_New_Page(String)"
});
formatter.result({
  "duration": 51319264,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Wishlist_button_for_Required_search()"
});
formatter.result({
  "duration": 1239518339,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Log_Out_of_Application()"
});
formatter.result({
  "duration": 435260911,
  "status": "passed"
});
formatter.after({
  "duration": 163188327,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "To Verify Wishlist after logging out and then check out",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-wishlist-after-logging-out-and-then-check-out",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "User logs in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User Moves to Wishlist Page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User Moves item to Bag for Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "User Selects \"\u003csize\u003e\" from avaialble options",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "User Selects Done",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "User Selects Bag to verify the item",
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-wishlist-after-logging-out-and-then-check-out;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "searchproduct",
        "size"
      ],
      "line": 85,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-wishlist-after-logging-out-and-then-check-out;;1"
    },
    {
      "cells": [
        "manishlalwani88@gmail.com",
        "Mar@2091",
        "Levis Jeans",
        "30"
      ],
      "line": 86,
      "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-wishlist-after-logging-out-and-then-check-out;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1478901778,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "To Verify Wishlist after logging out and then check out",
  "description": "",
  "id": "verify-search-item-functionality-on-myntra-home-page;to-verify-wishlist-after-logging-out-and-then-check-out;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User launches Myntra application",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User Moved to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "User logs in with \"manishlalwani88@gmail.com\" and \"Mar@2091\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User Moves to Wishlist Page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User Moves item to Bag for Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "User Selects \"30\" from avaialble options",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "User Selects Done",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "User Selects Bag to verify the item",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductDefinition.user_launches_Myntra_application()"
});
formatter.result({
  "duration": 2287550879,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moved_to_Login_Page()"
});
formatter.result({
  "duration": 1373005337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manishlalwani88@gmail.com",
      "offset": 19
    },
    {
      "val": "Mar@2091",
      "offset": 51
    }
  ],
  "location": "SearchProductDefinition.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 5666662556,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moves_to_Wishlist_Page()"
});
formatter.result({
  "duration": 805453036,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Moves_item_to_Bag_for_Checkout()"
});
formatter.result({
  "duration": 101953588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 14
    }
  ],
  "location": "SearchProductDefinition.user_Selects_size_from_avaialble_options(int)"
});
formatter.result({
  "duration": 178246516,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Done()"
});
formatter.result({
  "duration": 95863389,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductDefinition.user_Selects_Bag_to_verify_the_item()"
});
formatter.result({
  "duration": 1402254684,
  "status": "passed"
});
formatter.after({
  "duration": 151523632,
  "status": "passed"
});
});