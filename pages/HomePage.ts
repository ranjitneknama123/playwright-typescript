import { Locator, Page } from '@playwright/test';

export class HomePage {

     private page: Page;

     //Locators
     private logoutLink: Locator;

     constructor(page: Page) {
          this.page = page;

          this.logoutLink = page.locator('//a[contains(text(),"Logout")]');
     }

     async getLogoutText(): Promise<string | null> {
          return await this.logoutLink.textContent();
     }

     async isLoginSuccessful() {
          return await this.logoutLink.isVisible();
     }

     async clickLogout() {
          await this.logoutLink.click();
     }


}