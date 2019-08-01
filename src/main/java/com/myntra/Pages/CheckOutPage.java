package com.myntra.Pages;

import org.openqa.selenium.By;

public class CheckOutPage extends TestBase {

	
	By items = By.xpath("//div[contains(text(),'My Shopping Bag')]");
	public String getCheckOutPageTitle() {
		return driver.getTitle();
	}
	
	public boolean verifyShoppingBagDetails() {
		driver.findElement(items).isDisplayed();
		return true;
		
	}
	
	
}
