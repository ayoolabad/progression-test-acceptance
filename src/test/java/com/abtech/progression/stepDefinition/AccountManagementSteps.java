package com.abtech.progression.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^user is on create an account page$")
    public void userIsOnCreateAnAccountPage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io");
        driver.manage().window().maximize();
        driver.findElement(By.linkText("Create an Account")).click();
    }

    @When("^user inputs his/her \"([^\"]*)\"$")
    public void userInputsHisHer(String FirstName) throws Throwable {
        driver.findElement(By.name("firstname")).sendKeys(FirstName);
    }

    @And("^user enters the \"([^\"]*)\"$")
    public void userEntersThe(String LastName) throws Throwable {
        driver.findElement(By.id("lastname")).sendKeys(LastName);
    }

    @And("^user types in the \"([^\"]*)\" address$")
    public void userTypesInTheAddress(String Email) throws Throwable {
        driver.findElement(By.id("email_address")).sendKeys(Email);
    }

    @And("^user creates preferred \"([^\"]*)\"$")
    public void userCreatesPreferred(String Password) throws Throwable {
        driver.findElement(By.id("password")).sendKeys(Password);
    }

    @And("^user reenters to \"([^\"]*)\"$")
    public void userReentersTo(String ConfirmPassword) throws Throwable {
        driver.findElement(By.name("password_confirmation")).sendKeys(ConfirmPassword);
    }

    @And("^user clicks CreateanAccount$")
    public void userClicksCreateanAccount() {
        driver.findElement(By.cssSelector("#form-validate > div > div.primary > button")).click();
    }

    @Then("^users MyAccount dashboard displays\\.$")
    public void usersMyAccountDashboardDisplays() {
        //driver.close();
        //driver.quit();
    }

}
