Feature: Home Page

    Background:
        Given User navigates to login page

    @logout
    Scenario: Validate Logout
        When user clicks on signuporlogin button
        When User enters username "ranjitsumeru@gmail.com"
        And User enters password "Ranjit@12345"
        And User clicks login button
        Then Login should be successful
        When user clicks on logout button
#Then Logout should be successful


