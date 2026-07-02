import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../hooks/world';
import { TestDataGenerator } from '../utils/TestDataGenerator';
import { ProductsPage } from '../pages/productsPage';


Then('user selects the product {string}', async function (this: CustomWorld, productName: string) {
    console.log('Selected Product Name: ', productName);
    this.productsPage = new ProductsPage(this.page);
    await this.productsPage.getProductsHeaderText(productName);
});

When('click on continue shopping button', async function (this: CustomWorld) {
    await this.productsPage.clickOnContinueShoppingButton();
});

When('click on view cart button', async function (this: CustomWorld) {
    await this.productsPage.clickOnViewCartButton();
});

Then('validate the product {string} is displayed in cart', async function (this: CustomWorld, productName: string) {
    const totalProductsInCart = await this.productsPage.checkProductInCart();
    expect(totalProductsInCart.length).toBeGreaterThan(0);

    for (let i = 0; i < totalProductsInCart.length; i++) {
        const productInCart = totalProductsInCart[i];
        console.log(`Product ${i + 1} in cart: ${productInCart}`);
        if (productInCart === productName) {
            expect(productInCart).toBe(productName);
            console.log(`Product ${productName} is displayed in cart`);
            break; // Exit the loop after finding the product
        }
    }
});

When('click on proceed to checkout button', async function (this: CustomWorld) {
    await this.productsPage.clickOnProceedToCheckoutButton();
});

When('click on place order button', async function (this: CustomWorld) {
    await this.productsPage.clickOnPlaceOrderButton();
});

When('enter name on card', async function (this: CustomWorld) {
    const nameOnCard = await TestDataGenerator.getFirstName();
    await this.setData('First Name', nameOnCard);
    await this.productsPage.enterNameOnCard(nameOnCard);
})

When('enter card number', async function (this: CustomWorld) {
    const cardNumber = '4111111111111111'; // Example card number
    await this.setData('Card Number', cardNumber);
    await this.productsPage.enterCardNumber(cardNumber);
});

When('enter CVC', async function (this: CustomWorld) {
    const cvc = '311';
    await this.setData('CVC', cvc);
    await this.productsPage.enterCVC(cvc);
});

When('enter expiry month', async function (this: CustomWorld) {
    const expiryMonth = '12'; // Example expiry month
    await this.setData('Expiry Month', expiryMonth);
    await this.productsPage.enterExpiryMonth(expiryMonth);
});

When('enter expiry year', async function (this: CustomWorld) {
    const expiryYear = "2028";
    await this.setData('Expiry Year', expiryYear);
    await this.productsPage.enterExpiryYear(expiryYear);
});

When('click on submit button', async function (this: CustomWorld) {
    await this.productsPage.clickOnSubmitButton();
});

Then('validate order place confirmation message {string}', async function (this: CustomWorld, expectedMessage: string) {
    const actualMessage = await this.productsPage.getCongratulationsMessage();
    await this.setData('Congratualtion Message', actualMessage);
    await expect(actualMessage).toBe(expectedMessage);
});

Then('validate order place successfully message as {string}', async function (this: CustomWorld, expectedMessage: string) {
    const actualMessage = await this.productsPage.getOrderPlacedMessage();
    await this.setData('Order Placed Message', actualMessage);
    expect(actualMessage).toBe(expectedMessage);
});
