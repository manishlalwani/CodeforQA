package com.myntra.Pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class SearchPage extends TestBase{

	By searchPageTitle = By.xpath("//h1[@class='title-title']");
	By productlist = By.className("product-base");
	By wishlistbtn = By.xpath("//div[contains(@class,'wishlist')]");
	
	public String verifySearchPageTitle(String product) {
		
		return driver.findElement(searchPageTitle).getText();
	}
	
	public void doSelectRequiredProductAfterLogin() {
		
		List<WebElement> list = driver.findElements(productlist);
		if (list.size() > 0) {
			list.get(0).click();
			String parentwindow = driver.getWindowHandle();
	
			for (String handle1 : driver.getWindowHandles()) {
				driver.switchTo().window(handle1);
				if (!parentwindow.equalsIgnoreCase(handle1)) {
					driver.findElement(wishlistbtn).click();
				}
			}
			
		}
	}
	public void doSelectRequiredProductBeforeLogin() {
		driver.findElement(wishlistbtn).click();
	}
	
}
