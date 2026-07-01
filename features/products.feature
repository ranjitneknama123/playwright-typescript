Feature: products

    Background:
        Given User navigates to login page

    @products
    Scenario: select validate product
        When user clicks on signuporlogin button
        When User enters username "ranjitsumeru@gmail.com"
        And User enters password "Ranjit@12345"
        And User clicks login button
        Then pause the page for sometime
