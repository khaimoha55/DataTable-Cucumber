package runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "C:/Users/khaiyum.mohammad/eclipse-workspace/FreeCRMCucumber/src/main/java/featurefile/login.feature",
		glue = {"stepdefination"},
		dryRun=false,
		strict=false,
		format= {"pretty", "html:test-output"},
		monochrome=true
		
		
		
		
		
		
		)








public class RunnerClass {

}
