package com.myntra.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class HomePage extends TestBase{

	
	By profilelnk = By.xpath("//span[contains(text(),'Profile')]");
	By loginlnk = By.xpath("//a[text()='log in']");
	By wishlistlink = By.xpath("//span[@class='desktop-userTitle'][contains(text(),'Wishlist')]");
	By searchTextBox = By.xpath("//input[@placeholder='Search for products, brands and more']");
	By searchButton = By.xpath("//span[@class='myntraweb-sprite desktop-iconSearch sprites-search']");
	By bagPagebtn = By.xpath("//span[@class='desktop-userTitle'][contains(text(),'Bag')]");
	
	public HomePage() {
		
	}
	
	public String verifyHomePageTitle() {
		return driver.getTitle();
	}
	
	public LoginPage doLogin() {
		
			WebElement profileelement = driver.findElement(profilelnk);		
			Actions action = new Actions(driver);
			action.moveToElement(profileelement).build().perform();
			driver.findElement(loginlnk);
			return new LoginPage();		
	}
	
	public WishListPage moveToWishlistPage() {
		
		driver.findElement(wishlistlink).click();
		return new WishListPage();
		
	}
	
	public CheckOutPage moveToBagPage() {
		driver.findElement(bagPagebtn).click();
		return new CheckOutPage();
	}
	
	public SearchPage searchPage(String product) {
		driver.findElement(searchTextBox).clear();
		driver.findElement(searchTextBox).sendKeys(product);
		driver.findElement(searchButton).click();
		return new SearchPage();
	}
	
}
