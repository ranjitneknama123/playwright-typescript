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

  testData = new Map<string, unknown>();

  constructor(options: IWorldOptions) {
    super(options);
  }

  setData(key: string, value: unknown): void {
    this.testData.set(key, value);
  }

  getData<T>(key: string): T {
    const value = this.testData.get(key);

    if (value === undefined) {
      throw new Error(`No test data found for key: ${key}`);
    }

    return value as T;
  }
}

setWorldConstructor(CustomWorld);