$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Log In",
  "description": "",
  "id": "log-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Log into Account",
  "description": "",
  "id": "log-in;user-log-into-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user inputs \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer clicks Sign In",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customers MyDashboard is displayed.",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "log-in;user-log-into-account;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 12,
      "id": "log-in;user-log-into-account;;1"
    },
    {
      "cells": [
        "mysugarpie@hotmail.com",
        "deliciouS04"
      ],
      "line": 13,
      "id": "log-in;user-log-into-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "User Log into Account",
  "description": "",
  "id": "log-in;user-log-into-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"mysugarpie@hotmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user inputs \"deliciouS04\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer clicks Sign In",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customers MyDashboard is displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.userIsOnSignInPage()"
});
formatter.result({
  "duration": 4940098543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mysugarpie@hotmail.com",
      "offset": 13
    }
  ],
  "location": "LogInSteps.userEnters(String)"
});
formatter.result({
  "duration": 413829893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deliciouS04",
      "offset": 13
    }
  ],
  "location": "LogInSteps.userInputs(String)"
});
formatter.result({
  "duration": 104440520,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.customerClicksSignIn()"
});
formatter.result({
  "duration": 705014116,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.customersMyDashboardIsDisplayed()"
});
formatter.result({
  "duration": 167844989,
  "status": "passed"
});
});