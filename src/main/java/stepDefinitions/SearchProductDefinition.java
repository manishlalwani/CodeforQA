package stepDefinitions;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.myntra.config.Configuration;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class SearchProductDefinition {

	WebDriver driver;
	WebDriverWait wait;
	Properties properties;
	public final String propertyFilePath= "/Users/manishlalwani/eclipse-workspace/MyntraTest1Framework/src/main/resources/config.properties";

	// Set Up the Environment
	@Before
	public void setUp() {

		BufferedReader reader;
		 try {
		 reader = new BufferedReader(new FileReader(propertyFilePath));
		 properties = new Properties();
		 try {
		 properties.load(reader);
		 reader.close();
		 } catch (IOException e) {
		 e.printStackTrace();
		 }
		 } catch (FileNotFoundException e) {
		 e.printStackTrace();
		 throw new RuntimeException("Config.properties not found at " + propertyFilePath);
		 } 
		 
		if (properties.getProperty("browser").contains("Chrome")) {
			System.setProperty("webdriver.chrome.driver", properties.getProperty("chromedriverPath"));
			driver = new ChromeDriver();
		} else if (properties.getProperty("browser").contains("FF")) {
			System.setProperty("webdriver.gecko.driver", properties.getProperty("FFdriverPath"));
			driver = new FirefoxDriver();
		}

		wait = new WebDriverWait(driver, Integer.parseInt(properties.getProperty("explicitwait")));
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Integer.parseInt(properties.getProperty("implicitlyWait")), TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(Integer.parseInt(properties.getProperty("pageloadwait")), TimeUnit.SECONDS);
		
	}

	// Close the Browser after test complete
	@After
	public void tearDown() {
		driver.quit();
	}

	// Launch the WebPage URL
	@Given("^User launches Myntra application$")
	public void user_launches_Myntra_application() {

		driver.get(properties.getProperty("url"));

	}

	// Verification of Home page
	@When("^User is on Myntra Home Page$")
	public void user_is_on_Myntra_Home_Page() {
		// Write code here that turns the phrase above into concrete actions		
		Assert.assertEquals(properties.getProperty("expectedHomePageTitle"), driver.getTitle());

	}

	// Moving to Log in Page
	@When("^User Moved to Login Page$")
	public void user_Moved_to_Login_Page() {

		try {
		By profilelnk = By.xpath("//span[contains(text(),'Profile')]");
		wait.until(ExpectedConditions.elementToBeClickable(profilelnk));
		WebElement profileelement = driver.findElement(profilelnk);
		
		Actions action = new Actions(driver);
		action.moveToElement(profileelement).build().perform();
		
		By loginlnk = By.xpath("//a[text()='log in']");
		
		wait.until(ExpectedConditions.presenceOfElementLocated(loginlnk)).click();
		Assert.assertEquals(properties.getProperty("expectedLoginPageTitle"), driver.getTitle());
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	// User Logs in with User name and password
	@When("^User logs in with \"(.*?)\" and \"(.*?)\"$")
	public void user_logs_in_with_and(String username, String password) {

		// Login Locators
		By email = By.name("email");
		By pwd = By.name("password");
		By loginbtn = By.xpath("//button[text()='Log in']");

		wait.until(ExpectedConditions.presenceOfElementLocated(email)).sendKeys(username);
		driver.findElement(pwd).sendKeys(password);
		driver.findElement(loginbtn).click();

		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}

		By profilelocator = By.xpath("//span[contains(text(),'Profile')]");
		wait.until(ExpectedConditions.presenceOfElementLocated(profilelocator));

		WebElement profileelement = driver.findElement(profilelocator);
		Actions action1 = new Actions(driver);
		action1.moveToElement(profileelement).build().perform();

		By usernameverify = By.className("desktop-infoEmail");
		driver.findElement(usernameverify);
		wait.until(ExpectedConditions.presenceOfElementLocated(usernameverify));
		String usernameactual = driver.findElement(usernameverify).getText();

		WebElement element = driver.findElement(By.className("desktop-infoEmail"));
		Assert.assertEquals(username, usernameactual);

	}
	
	

	// User Searches Item on Search box
	@Then("^Enters product \\\"(.*)\\\" on search textbox$")
	public void enters_product_on_search_textbox(String searchproduct) {
		// Write code here that turns the phrase above into concrete actions
		WebElement searchTextBox = driver
				.findElement(By.xpath("//input[@placeholder='Search for products, brands and more']"));
		WebElement searchButton = driver
				.findElement(By.xpath("//span[@class='myntraweb-sprite desktop-iconSearch sprites-search']"));
		wait.until(ExpectedConditions.visibilityOf(searchTextBox)).sendKeys(searchproduct);
		wait.until(ExpectedConditions.visibilityOf(searchButton)).click();

	}

	// User Verifies Required product is displayed
	@Then("^Products \\\"(.*)\\\" are displayed on New Page$")
	public void products_are_displayed_on_New_Page(String prouductsearch) {

		WebElement element = driver.findElement(By.xpath("//h1[@class='title-title']"));
		wait.until(ExpectedConditions.visibilityOf(element));
		Assert.assertEquals(prouductsearch, element.getText());

	}

	// After Successful search Item is added to Wishlist
	@Then("^User Selects Wishlist button for Required search$")
	public void user_Selects_Wishlist_button_for_Required_search() {

		By productlist = By.className("product-base");
		By wishlistbtn = By.xpath("//div[contains(@class,'wishlist')]");
		
	
		
		List<WebElement> list = driver.findElements(productlist);
		if (list.size() > 0) {
			list.get(0).click();
			String parentwindow = driver.getWindowHandle();
			
			for (String handle1 : driver.getWindowHandles()) {
				// System.out.println(handle1);
				driver.switchTo().window(handle1);
				if (!parentwindow.equalsIgnoreCase(handle1)) {
					wait.until(ExpectedConditions.elementToBeClickable(wishlistbtn)).click();
				}
			}
			
		}
	}
	
	@Then("^User Clicks on Wishlist Button$")
	public void user_Clicks_on_Wishlist_Button() throws Throwable {
		
		WebElement wishlistbtn = driver.findElement(By.xpath("//*[text()='WISHLIST']"));
		JavascriptExecutor js = ((JavascriptExecutor)driver);
		js.executeScript("arguments[0].click();", wishlistbtn);
	}

	// For Unsuccessful Search verify Message header
	@Then("^Product not available on Application$")
	public void product_not_available_on_Application() {

		String notvailableelement = driver.findElement(By.className("index-infoBig")).getText();
		Assert.assertEquals("We couldn't find any matches!", notvailableelement);
	}

	// User Moves to Wishlist Page and verifies Wishlist header
	@Then("^User Moves to Wishlist Page$")
	public void user_Moves_to_Wishlist_Page() {
		
		By wishlistbutton = By.xpath("//span[contains(@class,'desktop-userTitle') and (contains(text(),'Wishlist'))]");
		By mywishlist = By.xpath("//span[contains(text(),'My Wishlist')]");
		wait.until(ExpectedConditions.presenceOfElementLocated(wishlistbutton)).click();
		
		String mywishlistheader = wait.until(ExpectedConditions.presenceOfElementLocated(mywishlist)).getText();
		Assert.assertEquals("My Wishlist", mywishlistheader);
	}

	// User Moves to Bag Page for Check Out
	@Then("^User Moves item to Bag for Checkout$")
	public void user_Moves_item_to_Bag_for_Checkout() {

		By moveTobagelement = By.xpath("//a[contains(@class,'moveToBag')]");
		wait.until(ExpectedConditions.presenceOfElementLocated(moveTobagelement)).click();
	}

	// User Selects Size of Item to Continue
	@Then("^User Selects \\\"(.*)\\\" from avaialble options$")
	public void user_Selects_size_from_avaialble_options(int size) {

		By selectSize = By.xpath("//button[contains(text()," + size + ")]");

		if (driver.findElement(selectSize) != null) {
			wait.until(ExpectedConditions.elementToBeClickable(selectSize)).click();
		} else {
			String script = "alert('" + Integer.toString(size) + "'  not avialable');";
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript(script);
			Assert.assertFalse(true);
		}

	}

	// User Selects Done to Continue to Checkout
	@Then("^User Selects Done$")
	public void user_Selects_Done() {
		By donebtn = By.xpath("//a[contains(@class,'moveToBag') and text()='DONE']");
		wait.until(ExpectedConditions.presenceOfElementLocated(donebtn)).click();
		// driver.findElement(donebtn).click();

	}

	// Then User Selects Bag to move to CheckOut Page
	@Then("^User Selects Bag to verify the item$")
	public void user_Selects_Bag_to_verify_the_item() {

		By bagPagebtn = By.xpath("//span[@class='desktop-userTitle'][contains(text(),'Bag')]");
		wait.until(ExpectedConditions.presenceOfElementLocated(bagPagebtn)).click();

	}
	
	@Then("^User Log Out of Application$")
	public void user_Log_Out_of_Application(){
		By profilelocator = By.xpath("//span[contains(text(),'Profile')]");
		wait.until(ExpectedConditions.presenceOfElementLocated(profilelocator));

		WebElement profileelement = driver.findElement(profilelocator);
		Actions action1 = new Actions(driver);
		action1.moveToElement(profileelement).build().perform();

		By userlogoutbtn = By.xpath("//div[contains(text(),'Logout')]");
		
		wait.until(ExpectedConditions.elementToBeClickable(userlogoutbtn)).click();
		
	}

}
