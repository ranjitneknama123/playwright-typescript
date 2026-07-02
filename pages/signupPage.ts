import { Locator, Page } from '@playwright/test';
import { config } from '../config/config';
import { AsyncLocalStorage } from 'node:async_hooks';
import { Logger } from "../utils/Logger";


export class SignupPage {
    private page: Page;

    //Locators
    private signupName: Locator;
    private signupEmail: Locator;
    private signupBtn: Locator;



    constructor(page: Page) {

        this.page = page;

        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupBtn = page.locator('[data-qa="signup-button"]');
    }


    async enterSignupName(name: string) {
        Logger.info(`Entering signup name: ${name}`);
        await this.signupName.fill(name);
        Logger.info(`Successfully entered signup name: ${name}`);
    }

    async enterSignupEmail(email: string) {
        Logger.info(`Entering signup email: ${email}`);
        await this.signupEmail.fill(email);
        Logger.info(`Successfully entered signup email: ${email}`);
    }

    async clickSignupButton() {
        Logger.info("Clicking signup button.");
        await this.signupBtn.click();
        Logger.info("Clicked signup button successfully.");
    }

}