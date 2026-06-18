Feature: Login

  Background:
    Given User navigates to login page

  Scenario: User Login
    When user clicks on signuporlogin button
    When User enters username "ranjitsumeru@gmail.com"
    And User enters password "Ranjit@12345"
    And User clicks login button
    Then Login should be successful
  
 Scenario: User Login123
    When user clicks on signuporlogin button
    When User enters username "ranjitsumeru@gmail.com"
    And User enters password "Ranjit@12345"
    And User clicks login button
    Then Login should be successful  