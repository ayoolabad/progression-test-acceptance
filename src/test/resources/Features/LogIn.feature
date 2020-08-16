@LogIn
Feature: Log In

  Scenario Outline: User Log into Account
    Given user is on Sign In Page
    When user enters "<Email>"
    And user inputs "<Password>"
    And customer clicks Sign In
    Then customers MyDashboard is displayed.

    Examples:
      | Email                  | Password   |
      | mysugarpie@hotmail.com | deliciouS04 |







