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
    When user enter the date of birth
    When user enter first name
    When user the last name
    When user enter the company name
    When user enter the address deatails
    When user enter the address two detils
    #When user enter the country name
    When user enter the state name
    When user enter the city name
    When user enter zip code
    When user enter the mobile number
    When user click on crate on create account button
    #Then pause the page for sometime




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

