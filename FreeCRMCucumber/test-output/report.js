$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/khaiyum.mohammad/eclipse-workspace/FreeCRMCucumber/src/main/java/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8150437212,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 145446002,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 10125252768,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:33:15.31Z\u0027\nSystem info: host: \u0027WS-895\u0027, ip: \u0027172.18.114.227\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\KHAIYU~1.MOH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: e0189dccca87a4fc6a4b314f899bac1b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat stepdefination.LoginStepDef.user_enters_username_and_Password(LoginStepDef.java:45)\r\n\tat ✽.Then user enters username and Password(C:/Users/khaiyum.mohammad/eclipse-workspace/FreeCRMCucumber/src/main/java/featurefile/login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
});