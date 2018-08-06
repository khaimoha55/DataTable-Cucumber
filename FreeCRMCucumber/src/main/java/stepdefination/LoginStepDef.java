package stepdefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDef {
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		
		System.setProperty("webdrive.chrome.driver", "/userdocuments/documents/khaiyum.mohammad/Selenium/chromedriver_win32.zip.exe");
		driver  = new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		
		}
	
	
	@When("^title of Login Page is Free CRM$")
	public void title_of_Login_Page_is_Free_CRM() {
		
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
		
	}
	
	@Then("^user enters username and Password$")
	public void user_enters_username_and_Password() throws InterruptedException  {
		
		Thread.sleep(10000);

		
		driver.findElement(By.name("username")).sendKeys("mohammadk");
		driver.findElement(By.name("password")).sendKeys("Sameena55");
		
	}
	

	
	@Then("^user clicks on Login Button$")
	public void user_clicks_on_Login_Button() {
	
	driver.findElement(By.xpath("//input[@type='submit']")).click();
}
	

@Then("^user is on Home Page$")
public void user_is_on_Home_Page() {
	
	String title = driver.getTitle();
	System.out.println("Home page title ::"+ title);
	Assert.assertEquals("CRMPRO", title);
	
	
	
	
	
}
	
	
	
	
	
	
	
	
	
	

}
