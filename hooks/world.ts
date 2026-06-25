import {
  IWorldOptions,
  World,
  setWorldConstructor
} from '@cucumber/cucumber';

import { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

export class CustomWorld extends World {

  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  homePage!: HomePage;

  constructor(options: IWorldOptions) {
    super(options);
    console.log('CustomWorld initialized');
  }
}

setWorldConstructor(CustomWorld);