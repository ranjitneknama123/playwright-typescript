Feature: Login

  Background:
    Given User navigates to login page


  @signup
  Scenario: Successful signup with valid details
    When user clicks on signuporlogin button
    When the user enters a valid name
    When the user enters a valid email address
    When the user clicks the signup button
    When user select title
    When the user provides a valid password during signup
    Then pause the page for sometime



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

