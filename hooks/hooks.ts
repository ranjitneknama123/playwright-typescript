import { Before, After, AfterStep, Status } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

Before(async function () {

  this.browser = await chromium.launch({
    headless: false
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  this.page.setDefaultTimeout(30000);
  this.page.setDefaultNavigationTimeout(60000);
});

After(async function ({ result }) {
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
