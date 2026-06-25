import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CustomWorld } from '../hooks/world';


// When user clicks on logout button
        //Then Logout should be successful

When('user clicks on logout button', async function (this: CustomWorld) {
  this.homePage = new HomePage(this.page);

  await this.homePage.clickLogout();
});
