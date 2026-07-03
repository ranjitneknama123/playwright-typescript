import { Locator, Page } from '@playwright/test';
import { config } from '../config/config';
import { AsyncLocalStorage } from 'node:async_hooks';
import { Logger } from "../utils/Logger";


export class ProductsPage {

    private page: Page;

    private productsHeader: Locator;
    private continueShoppingButton: Locator;
    private viewCartButton: Locator;
    private allproductsInCart: Locator;
    private procedeToCheckoutButton: Locator;
    private placeOrderButton: Locator;
    private nameOnCardInput: Locator;
    private cardNumberInput: Locator;
    private cvcInput: Locator;
    private expiryMonthInput: Locator;
    private expiryYearInput: Locator
    private submitButton: Locator;
    private congratulationsMessage: Locator;
    private orderPlaced: Locator;
    private registerLoginLink: Locator;
    private clickOncardheaderLink: Locator;


    constructor(page: Page) {
        this.page = page;

        this.productsHeader = page.locator('//*[@class="productinfo text-center"]/descendant::p');
        this.continueShoppingButton = page.locator('//button[normalize-space(text())="Continue Shopping"]');
        this.viewCartButton = page.locator('//*[text()="View Cart"]');
        this.allproductsInCart = page.locator('//tbody/tr/td[2]/h4/a');
        this.procedeToCheckoutButton = page.locator('//a[text()="Proceed To Checkout"]');
        this.placeOrderButton = page.locator('//a[text()="Place Order"]');
        this.nameOnCardInput = page.locator('//input[@data-qa="name-on-card"]');
        this.cardNumberInput = page.locator('//input[@data-qa="card-number"]');
        this.cvcInput = page.locator('//input[@data-qa="cvc"]');
        this.expiryMonthInput = page.locator('//input[@data-qa="expiry-month"]');
        this.expiryYearInput = page.locator('//input[@data-qa="expiry-year"]');
        this.submitButton = page.locator('#submit');
        this.congratulationsMessage = page.locator('//*[normalize-space(text())="Congratulations! Your order has been confirmed!"]');
        this.orderPlaced = page.locator('//*[normalize-space(text())="Order Placed!"]');
        this.registerLoginLink = page.locator('//u[normalize-space(text())="Register / Login"]');
        this.clickOncardheaderLink = page.locator('//a[contains(text(),"Cart")]')


    }

    async getProductsHeaderText(specificProductName: string) {
        //await this.page.waitForLoadState('networkidle');
        //await this.productsHeader.waitFor({ state: 'visible', timeout: 5000 });
        // await this.productsHeader.waitFor();
        const headerText = await this.productsHeader.allTextContents();
        console.log(headerText);
        const productCount = headerText.length;
        console.log('total product Count: ', productCount);

        for (let i = 0; i < productCount; i++) {
            // const productName = headerText[i];
            // console.log(`Product ${i + 1}: ${productName}`);

            if (await this.productsHeader.nth(i).textContent() == specificProductName) {
                //console.log('===============>', await this.productsHeader.nth(i).textContent() === specificProductName);
                //console.log('===============>', await this.productsHeader.nth(i).textContent() == specificProductName);
                console.log(`Found '${specificProductName}' at position ${i + 1}`);
                await this.productsHeader.nth(i).click();
                Logger.info(`Clicked on product: ${specificProductName}`);
                await this.page.locator(`//a[@data-product-id="${i + 1}"]`).first().click();
                Logger.info(`Clicked on product: ${specificProductName}`);
                //await this.page.pause();
                break; // Exit the loop after clicking the first occurrence
            }

        }
    }

    async clickOnContinueShoppingButton() {
        Logger.info("Clicking on Continue Shopping button");
        await this.continueShoppingButton.click();
        Logger.info("Continue Shopping button clicked");
    }

    async clickOnViewCartButton() {
        Logger.info("Clicking on View Cart button");
        await this.viewCartButton.click();
        Logger.info("View Cart button clicked");
    }

    async checkProductInCart(): Promise<string[]> {
        // .allTextContents() returns an array of strings
        const totalProductInCart = await this.allproductsInCart.allTextContents();
        console.log('All products in cart: ', totalProductInCart.length);

        const totalProductCountInCart = totalProductInCart.length;
        console.log('Total Product Count in Cart: ', totalProductCountInCart);

        // Return the array containing all product text strings
        return totalProductInCart;
    }

    async clickOnProceedToCheckoutButton() {
        Logger.info("Clicking on Proceed to Checkout button");
        await this.procedeToCheckoutButton.click();
        Logger.info("Proceed to Checkout button clicked");
    }

    async clickOnPlaceOrderButton() {
        Logger.info("Clicking on Place Order button");
        await this.placeOrderButton.click();
        Logger.info("Place Order button clicked");
    }

    async enterNameOnCard(nameOnCard: string) {
        Logger.info(`Entering name on card: ${nameOnCard}`);
        await this.nameOnCardInput.fill(nameOnCard);
        Logger.info(`Name on card entered: ${nameOnCard}`);
    }

    async enterCardNumber(cardNumber: string) {
        Logger.info(`Entering card number: ${cardNumber}`);
        await this.cardNumberInput.fill(cardNumber);
        Logger.info(`Card number entered: ${cardNumber}`);
    }

    async enterCVC(cvv: string) {
        Logger.info(`Entering CVC: ${cvv}`);
        await this.cvcInput.fill(cvv);
        Logger.info(`CVC entered: ${cvv}`);
    }

    async enterExpiryMonth(month: string) {
        Logger.info(`Entering expiry month: ${month}`);
        await this.expiryMonthInput.fill(month);
        Logger.info(`Expiry month entered: ${month}`);
    }

    async enterExpiryYear(year: string) {
        Logger.info(`Entering expiry year: ${year}`);
        await this.expiryYearInput.fill(year);
        Logger.info(`Expiry year entered: ${year}`);
    }

    async clickOnSubmitButton() {
        Logger.info("Clicking on Submit button");
        await this.submitButton.click();
        Logger.info("Submit button clicked");
    }

    async getCongratulationsMessage(): Promise<string> {
        Logger.info("Waiting for Congratulations message to be visible");
        await this.congratulationsMessage.waitFor({ state: 'visible', timeout: 30000 });
        const message = await this.congratulationsMessage.textContent();
        Logger.info(`Congratulations message found: ${message}`);

        return message || '';
    }

    async getOrderPlacedMessage(): Promise<string> {
        Logger.info("Waiting for Order Placed message to be visible");
        await this.orderPlaced.waitFor({ state: 'visible', timeout: 30000 });
        const message = await this.orderPlaced.textContent();
        Logger.info(`Order Placed message found: ${message}`);

        return message || '';
    }

    async clickOnRegisterLoginLink() {
        Logger.info("Clicking on Register/Login link");
        await this.registerLoginLink.click();
        Logger.info("Register/Login link clicked");
    }

    async clickOnHeaderByName() {
        Logger.info('Clicking on cart')
        await this.clickOncardheaderLink.click();
        Logger.info('Clicked on cart')
    }

}