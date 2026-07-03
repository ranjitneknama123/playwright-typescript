Feature: products

    Background:
        Given User navigates to login page

    @products
    Scenario: User should be able to place order successfully
        When user clicks on signuporlogin button
        When User enters username "ranjitsumeru@gmail.com"
        And User enters password "Ranjit@12345"
        And User clicks login button
        #Then pause the page for sometime
        Then user selects the product "Blue Top"
        #Then pause the page for sometime
        #When click on continue shopping button
        When click on view cart button
        Then validate the product "Blue Top" is displayed in cart
        When click on proceed to checkout button
        When click on place order button
        When enter name on card
        When enter card number
        When enter CVC
        When enter expiry month
        When enter expiry year
        When click on submit button
        Then validate order place successfully message as "Order Placed!"
        Then validate order place confirmation message "Congratulations! Your order has been confirmed!"


    @products
    Scenario: Add Products in Cart
        When user clicks on signuporlogin button
        When User enters username "ranjitsumeru@gmail.com"
        And User enters password "Ranjit@12345"
        And User clicks login button
        Then user selects the product "Men Tshirt"
        When click on view cart button
        Then validate the product "Men Tshirt" is displayed in cart

    @products
    Scenario: Search Product
        When user clicks on signuporlogin button
        When User enters username "ranjitsumeru@gmail.com"
        And User enters password "Ranjit@12345"
        And User clicks login button
        Then user selects the product "Men Tshirt"
        When click on view cart button
        Then validate the product "Men Tshirt" is displayed in cart


    @products
    Scenario: Verify Product quantity in Cart
        When user clicks on signuporlogin button
        When User enters username "ranjitsumeru@gmail.com"
        And User enters password "Ranjit@12345"
        And User clicks login button
        Then user selects the product "Stylish Dress"
        When click on view cart button
        Then validate the product "Stylish Dress" is displayed in cart
        Then validate the product count in cart

    @products
    Scenario: Verify add Product in Cart without login
        #When user clicks on signuporlogin button
        #When User enters username "ranjitsumeru@gmail.com"
        #And User enters password "Ranjit@12345"
        #And User clicks login button
        Then user selects the product "Stylish Dress"
        When click on view cart button
        Then validate the product "Stylish Dress" is displayed in cart
        Then validate the product count in cart

     @products
    Scenario: Place Order: Register while Checkout
        #When user clicks on signuporlogin button
        #When User enters username "ranjitsumeru@gmail.com"
        #And User enters password "Ranjit@12345"
        #And User clicks login button
        Then user selects the product "Stylish Dress"
        When click on view cart button
        Then validate the product "Stylish Dress" is displayed in cart
        #Then validate the product count in cart
        When click on proceed to checkout button

        When click on register login link
        #When user clicks on signuporlogin button
        When User enters username "ranjitsumeru@gmail.com"
        And User enters password "Ranjit@12345"
        And User clicks login button

        When click on "cart" header link
        When click on proceed to checkout button
        When click on place order button
        When enter name on card
        When enter card number
        When enter CVC
        When enter expiry month
        When enter expiry year
        When click on submit button
        Then validate order place successfully message as "Order Placed!"
        Then validate order place confirmation message "Congratulations! Your order has been confirmed!"



