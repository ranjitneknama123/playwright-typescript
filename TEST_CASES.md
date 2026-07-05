# Test Cases

This document maps the existing feature scenarios to structured test cases. Each case includes scope, preconditions, test steps, and expected results.

## Feature: Login

### TC-001 — Successful signup with valid details (@signup)
- **Objective:** Verify new user signup, account creation, login, and logout flow.
- **Precondition:** Application is accessible at the base URL.
- **Test steps:**
  1. Navigate to the login page.
  2. Click the Signup / Login button.
  3. Enter a valid name.
  4. Enter a valid email address.
  5. Click the signup button.
  6. Select title.
  7. Enter a valid signup password.
  8. Enter date of birth.
  9. Enter first name.
  10. Enter last name.
  11. Enter company name.
  12. Enter address details.
  13. Enter secondary address details.
  14. Enter state name.
  15. Enter city name.
  16. Enter zip code.
  17. Enter mobile number.
  18. Click Create Account.
  19. Click the Signup / Login button again.
  20. Enter created email id.
  21. Enter created password.
  22. Click login button.
- **Expected results:**
  - "Account Created!" message is displayed.
  - "Congratulations! Your new account has been successfully created!" message is displayed.
  - Login succeeds.

### TC-002 — User Signup with existing email address (@singupNegative)
- **Objective:** Validate that signup fails when using an existing email.
- **Precondition:** Application is accessible.
- **Test steps:**
  1. Navigate to the login page.
  2. Click the Signup / Login button.
  3. Enter a valid name.
  4. Enter the existing email address `ranjitsumeru@gmail.com`.
  5. Click the signup button.
- **Expected results:**
  - Error message "Email Address already exist!" is displayed.

### TC-003 — User Login (@Smoke @postive)
- **Objective:** Verify user login with valid credentials.
- **Precondition:** The user account `ranjitsumeru@gmail.com` exists.
- **Test steps:**
  1. Navigate to the login page.
  2. Click the Signup / Login button.
  3. Enter username `ranjitsumeru@gmail.com`.
  4. Enter password `Ranjit@12345`.
  5. Click login button.
- **Expected results:**
  - Login is successful.

### TC-004 — User Login with invalid credentials (@Negative)
- **Objective:** Verify login fails for invalid credentials.
- **Precondition:** Application is accessible.
- **Test steps (for each example):**
  - Enter username and password from the example table.
  - Click login button.
- **Examples:**
  | username | password |
  | invalid@gmail.com | wrongpass |
  | ranjitsumeru@gmail.com | wrongpass |
  | ranjitsumeru@gmail.com | " " |
- **Expected results:**
  - Error message "Your email or password is incorrect!" is displayed.

### TC-005 — Validate login page title (@title)
- **Objective:** Confirm the login page title is correct.
- **Precondition:** Application is accessible.
- **Test steps:**
  1. Navigate to the login page.
  2. Click the Signup / Login button.
- **Expected results:**
  - Page title is exactly "Automation Exercise - Signup / Login".

## Feature: Products

### TC-006 — Select and validate product (@products)
- **Objective:** Verify product selection, cart validation, checkout, and order placement.
- **Precondition:** Application is accessible; user account exists.
- **Test steps:**
  1. Navigate to the login page.
  2. Click the Signup / Login button.
  3. Enter username `ranjitsumeru@gmail.com`.
  4. Enter password `Ranjit@12345`.
  5. Click login button.
  6. Select the product "Blue Top".
  7. Click the View Cart button.
  8. Verify "Blue Top" is displayed in the cart.
  9. Click the Proceed To Checkout button.
  10. Click the Place Order button.
  11. Enter name on card.
  12. Enter card number.
  13. Enter CVC.
  14. Enter expiry month.
  15. Enter expiry year.
  16. Click the submit button.
- **Expected results:**
  - "Order Placed!" is displayed.
  - "Congratulations! Your order has been confirmed!" is displayed.

## Feature: Home Page

### TC-007 — Validate Logout (@logout)
- **Objective:** Verify logout works after a successful login.
- **Precondition:** Application is accessible; user account exists.
- **Test steps:**
  1. Navigate to the login page.
  2. Click the Signup / Login button.
  3. Enter username `ranjitsumeru@gmail.com`.
  4. Enter password `Ranjit@12345`.
  5. Click login button.
  6. Confirm login is successful.
  7. Click logout button.
- **Expected results:**
  - Logout completes successfully.

## Feature: Signup

### No scenarios defined
- **Note:** The file `features/signup.feature` exists but currently contains no defined scenarios.

## Notes
- The test cases are based on the existing Gherkin scenarios in the `features/` folder.
- Any future feature updates should be reflected here with matching test case IDs and expected results.
