package com.abtech.progression.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features",
        glue = {"com.abtech.progression.stepDefinition"},
        format = {"pretty", "html:target/site/cucumber-pretty"},
        tags = {"@AccountManagement"}
)

public class TestRunner {
}
