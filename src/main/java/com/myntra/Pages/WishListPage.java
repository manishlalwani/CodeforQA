package com.myntra.Pages;

import org.openqa.selenium.By;

public class WishListPage extends TestBase{
	
	
	
	By mywishlist = By.xpath("//span[contains(text(),'My Wishlist')]");
	By moveTobagelement = By.xpath("//a[contains(@class,'moveToBag')]");
	By donebtn = By.xpath("//a[contains(@class,'moveToBag') and text()='DONE']");
	
	public String getWishListPageTitle() {
		return driver.findElement(mywishlist).getText();
	}
	
	public CheckOutPage moveToBagPage() {
		driver.findElement(moveTobagelement).click();
		return new CheckOutPage();
	}
	
	public void selectSize(int size) {
		By selectSize = By.xpath("//button[contains(text()," + size + ")]");

		if (driver.findElement(selectSize) != null) {
			driver.findElement(selectSize).click();
		} 
}
	public boolean selectDone() {
		driver.findElement(donebtn).click();
		return true;
	}
}
