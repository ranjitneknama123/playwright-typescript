import { Before, After, AfterStep, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';


setDefaultTimeout(120 * 1000);

Before(async function (this: CustomWorld) {

  this.browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });

  //this.context = await this.browser.newContext();
  this.context = await this.browser.newContext({
    viewport: null
  });

  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);
  this.homePage = new HomePage(this.page);

  this.page.setDefaultTimeout(120 * 1000);

  this.page.setDefaultNavigationTimeout(60 * 1000);
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      path: `screenshots/${Date.now()}.png`,
      fullPage: true
    });

    await this.attach(screenshot, 'image/png');
  }

  await this.context?.close();
  await this.browser?.close();
});
