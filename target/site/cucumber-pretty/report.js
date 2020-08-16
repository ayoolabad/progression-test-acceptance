$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create An Account",
  "description": "",
  "id": "account-management;create-an-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user inputs his/her \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user types in the \"\u003cEmail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user creates preferred \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user reenters to \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks CreateanAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "users MyAccount dashboard displays.",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "account-management;create-an-account;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 15,
      "id": "account-management;create-an-account;;1"
    },
    {
      "cells": [
        "Sugar",
        "Honey",
        "mysugarpie@hotmail.com",
        "deliciouS04",
        "deliciouS04"
      ],
      "line": 16,
      "id": "account-management;create-an-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Create An Account",
  "description": "",
  "id": "account-management;create-an-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user inputs his/her \"Sugar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"Honey\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user types in the \"mysugarpie@hotmail.com\" address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user creates preferred \"deliciouS04\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user reenters to \"deliciouS04\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks CreateanAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "users MyAccount dashboard displays.",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 5056297081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sugar",
      "offset": 21
    }
  ],
  "location": "AccountManagementSteps.userInputsHisHer(String)"
});
formatter.result({
  "duration": 545085999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honey",
      "offset": 17
    }
  ],
  "location": "AccountManagementSteps.userEntersThe(String)"
});
formatter.result({
  "duration": 89817606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mysugarpie@hotmail.com",
      "offset": 19
    }
  ],
  "location": "AccountManagementSteps.userTypesInTheAddress(String)"
});
formatter.result({
  "duration": 141068215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deliciouS04",
      "offset": 24
    }
  ],
  "location": "AccountManagementSteps.userCreatesPreferred(String)"
});
formatter.result({
  "duration": 163483830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deliciouS04",
      "offset": 18
    }
  ],
  "location": "AccountManagementSteps.userReentersTo(String)"
});
formatter.result({
  "duration": 102283430,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClicksCreateanAccount()"
});
formatter.result({
  "duration": 779051746,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.usersMyAccountDashboardDisplays()"
});
formatter.result({
  "duration": 355652048,
  "status": "passed"
});
});