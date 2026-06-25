Feature: Login

  Background:
    Given User navigates to login page

  @Smoke @postive
  Scenario: User Login
    When user clicks on signuporlogin button
    When User enters username "ranjitsumeru@gmail.com"
    And User enters password "Ranjit@12345"
    And User clicks login button
    Then Login should be successful

  @Negative
  Scenario Outline: User Login with invalid credentials
    When user clicks on signuporlogin button
    When User enters username "<username>" and password "<password>"
    And User clicks login button
    Then Login should fail

    Examples:
      | username               | password  |
      | invalid@gmail.com      | wrongpass |
      | ranjitsumeru@gmail.com | wrongpass |
      | ranjitsumeru@gmail.com | " "       |


  @title
  Scenario: Validate login page title
    When user clicks on signuporlogin button
    Then Login page title should be "Automation Exercise - Signup / Login"

