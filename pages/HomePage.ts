import { Locator, Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class HomePage {

     private page: Page;

     //Locators
     private logoutLink: Locator;


     constructor(page: Page) {
          this.page = page;

          this.logoutLink = page.locator('//a[contains(text(),"Logout")]');
     }

     async getLogoutText(): Promise<string | null> {
          Logger.info("Getting logout text.");

          return await this.logoutLink.textContent();
     }

     async isLoginSuccessful() {
          Logger.info("Checking if login was successful.");

          return await this.logoutLink.isVisible();
     }

     async clickLogout() {
          Logger.info("Clicking logout link.");
          await this.logoutLink.click();
          Logger.info("Clicked logout link successfully.");
     }



}