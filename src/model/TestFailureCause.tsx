import StackTrace from "./StackTrace"

interface TestFailureCause {
  message: string
  errorType: string
  stackTrace: Array<StackTrace>
  rootCause: TestFailureCause
}

export default TestFailureCause

/*
"{
  "errorType": "net.thucydides.core.webdriver.exceptions.ElementShouldBeEnabledException",
  "message": "Expected enabled element was not enabled",
  "stackTrace": [
    {
      "declaringClass": "nz.cri.gns.mapservice.navigation.ClickButton",
      "methodName": "clickControlButton",
      "fileName": "ClickButton.java",
      "lineNumber": 27
    },
    {
      "declaringClass": "nz.cri.gns.mapservice.webtests.steps.ClientSteps",
      "methodName": "has_clicked_the_control_button",
      "fileName": "ClientSteps.java",
      "lineNumber": 335
    },
    {
      "declaringClass": "cucumber.runner.PickleStepDefinitionMatch",
      "methodName": "runStep",
      "fileName": "PickleStepDefinitionMatch.java",
      "lineNumber": 50
    },
    {
      "declaringClass": "cucumber.runner.TestStep",
      "methodName": "executeStep",
      "fileName": "TestStep.java",
      "lineNumber": 65
    },
    {
      "declaringClass": "cucumber.runner.TestStep",
      "methodName": "run",
      "fileName": "TestStep.java",
      "lineNumber": 50
    },
    {
      "declaringClass": "cucumber.runner.PickleStepTestStep",
      "methodName": "run",
      "fileName": "PickleStepTestStep.java",
      "lineNumber": 43
    },
    {
      "declaringClass": "cucumber.runner.TestCase",
      "methodName": "run",
      "fileName": "TestCase.java",
      "lineNumber": 46
    },
    {
      "declaringClass": "cucumber.runner.Runner",
      "methodName": "runPickle",
      "fileName": "Runner.java",
      "lineNumber": 50
    },
    {
      "declaringClass": "io.cucumber.junit.FeatureRunner",
      "methodName": "runChild",
      "fileName": "FeatureRunner.java",
      "lineNumber": 68
    },
    {
      "declaringClass": "io.cucumber.junit.FeatureRunner",
      "methodName": "runChild",
      "fileName": "FeatureRunner.java",
      "lineNumber": 23
    },
    {
      "declaringClass": "io.cucumber.junit.CucumberSerenityRunner",
      "methodName": "runChild",
      "fileName": "CucumberSerenityRunner.java",
      "lineNumber": 208
    },
    {
      "declaringClass": "io.cucumber.junit.CucumberSerenityRunner",
      "methodName": "runChild",
      "fileName": "CucumberSerenityRunner.java",
      "lineNumber": 66
    }
  ],
  "rootCause": {
    "errorType": "org.openqa.selenium.TimeoutException",
    "message": "Expected condition failed: waiting for By.id: btnDrillhole to be enabled (tried for 5 second(s) with 100 milliseconds interval)",
    "stackTrace": [
      {
        "declaringClass": "nz.cri.gns.mapservice.navigation.ClickButton",
        "methodName": "clickControlButton",
        "fileName": "ClickButton.java",
        "lineNumber": 27
      },
      {
        "declaringClass": "nz.cri.gns.mapservice.webtests.steps.ClientSteps",
        "methodName": "has_clicked_the_control_button",
        "fileName": "ClientSteps.java",
        "lineNumber": 335
      },
      {
        "declaringClass": "cucumber.runner.PickleStepDefinitionMatch",
        "methodName": "runStep",
        "fileName": "PickleStepDefinitionMatch.java",
        "lineNumber": 50
      },
      {
        "declaringClass": "cucumber.runner.TestStep",
        "methodName": "executeStep",
        "fileName": "TestStep.java",
        "lineNumber": 65
      },
      {
        "declaringClass": "cucumber.runner.TestStep",
        "methodName": "run",
        "fileName": "TestStep.java",
        "lineNumber": 50
      },
      {
        "declaringClass": "cucumber.runner.PickleStepTestStep",
        "methodName": "run",
        "fileName": "PickleStepTestStep.java",
        "lineNumber": 43
      },
      {
        "declaringClass": "cucumber.runner.TestCase",
        "methodName": "run",
        "fileName": "TestCase.java",
        "lineNumber": 46
      },
      {
        "declaringClass": "cucumber.runner.Runner",
        "methodName": "runPickle",
        "fileName": "Runner.java",
        "lineNumber": 50
      },
      {
        "declaringClass": "io.cucumber.junit.FeatureRunner",
        "methodName": "runChild",
        "fileName": "FeatureRunner.java",
        "lineNumber": 68
      },
      {
        "declaringClass": "io.cucumber.junit.FeatureRunner",
        "methodName": "runChild",
        "fileName": "FeatureRunner.java",
        "lineNumber": 23
      },
      {
        "declaringClass": "io.cucumber.junit.CucumberSerenityRunner",
        "methodName": "runChild",
        "fileName": "CucumberSerenityRunner.java",
        "lineNumber": 208
      },
      {
        "declaringClass": "io.cucumber.junit.CucumberSerenityRunner",
        "methodName": "runChild",
        "fileName": "CucumberSerenityRunner.java",
        "lineNumber": 66
      }
    ],
    "rootCause": {
      "errorType": "org.openqa.selenium.NoSuchElementException",
      "message": "no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#btnDrillhole\"}\n  (Session info: headless chrome=85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'\nSystem info: host: 'DNDW7678', ip: '161.65.53.68', os.name: 'Windows 10', os.arch: 'amd64', os.version: '10.0', java.version: '1.8.0_201'\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /tmp/.com.google.Chrome.7cKpuE}, goog:chromeOptions: {debuggerAddress: localhost:46837}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: f93732a214e969090de91e93374...}\nSession ID: f93732a214e969090de91e93374f2407\n*** Element info: {Using=id, value=btnDrillhole}",
      "stackTrace": [
        {
          "declaringClass": "nz.cri.gns.mapservice.navigation.ClickButton",
          "methodName": "clickControlButton",
          "fileName": "ClickButton.java",
          "lineNumber": 27
        },
        {
          "declaringClass": "nz.cri.gns.mapservice.webtests.steps.ClientSteps",
          "methodName": "has_clicked_the_control_button",
          "fileName": "ClientSteps.java",
          "lineNumber": 335
        },
        {
          "declaringClass": "cucumber.runner.PickleStepDefinitionMatch",
          "methodName": "runStep",
          "fileName": "PickleStepDefinitionMatch.java",
          "lineNumber": 50
        },
        {
          "declaringClass": "cucumber.runner.TestStep",
          "methodName": "executeStep",
          "fileName": "TestStep.java",
          "lineNumber": 65
        },
        {
          "declaringClass": "cucumber.runner.TestStep",
          "methodName": "run",
          "fileName": "TestStep.java",
          "lineNumber": 50
        },
        {
          "declaringClass": "cucumber.runner.PickleStepTestStep",
          "methodName": "run",
          "fileName": "PickleStepTestStep.java",
          "lineNumber": 43
        },
        {
          "declaringClass": "cucumber.runner.TestCase",
          "methodName": "run",
          "fileName": "TestCase.java",
          "lineNumber": 46
        },
        {
          "declaringClass": "cucumber.runner.Runner",
          "methodName": "runPickle",
          "fileName": "Runner.java",
          "lineNumber": 50
        },
        {
          "declaringClass": "io.cucumber.junit.FeatureRunner",
          "methodName": "runChild",
          "fileName": "FeatureRunner.java",
          "lineNumber": 68
        },
        {
          "declaringClass": "io.cucumber.junit.FeatureRunner",
          "methodName": "runChild",
          "fileName": "FeatureRunner.java",
          "lineNumber": 23
        },
        {
          "declaringClass": "io.cucumber.junit.CucumberSerenityRunner",
          "methodName": "runChild",
          "fileName": "CucumberSerenityRunner.java",
          "lineNumber": 208
        },
        {
          "declaringClass": "io.cucumber.junit.CucumberSerenityRunner",
          "methodName": "runChild",
          "fileName": "CucumberSerenityRunner.java",
          "lineNumber": 66
        }
      ]
    }
  }
}"

 */