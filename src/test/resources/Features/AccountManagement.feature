@AccountManagement
Feature: Account Management

  Scenario Outline: Create An Account
    Given user is on create an account page
    When user inputs his/her "<FirstName>"
    And user enters the "<LastName>"
    And user types in the "<Email>" address
    And user creates preferred "<Password>"
    And user reenters to "<ConfirmPassword>"
    And user clicks CreateanAccount
    Then users MyAccount dashboard displays.

    Examples:
      | FirstName | LastName | Email                  | Password    | ConfirmPassword |
      | Sugar     | Honey    | mysugarpie@hotmail.com | deliciouS04 | deliciouS04     |



