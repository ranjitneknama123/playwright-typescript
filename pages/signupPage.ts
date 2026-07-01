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
        await this.signupName.fill(name);
    }

    async enterSignupEmail(email: string) {
        await this.signupEmail.fill(email);
    }

    async clickSignupButton() {
        await this.signupBtn.click();
    }

}