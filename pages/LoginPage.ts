import { Locator, Page } from '@playwright/test';
import { config } from '../config/config';


export class LoginPage {

  private page: Page;

  //Locators
  private signupLoginLink: Locator;
  private usernameTxt: Locator;
  private passwordTxt: Locator;
  private loginBtn: Locator;


  constructor(page: Page) {
    this.page = page;

    this.signupLoginLink = page.locator('//a[(normalize-space())="Signup / Login"]');
    this.usernameTxt = page.locator('//h2[contains(text(),"Login to your account")]/..//*[@name="email"]');
    this.passwordTxt = page.locator('//h2[contains(text(),"Login to your account")]/..//*[@name="password"]');
    this.loginBtn = page.locator('//h2[contains(text(),"Login to your account")]/..//*[text()="Login"]');
  }

  async navigate() {
    //await this.page.goto('https://example.com/login');
    await this.page.goto(config.baseUrl);
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  async enterUsername(username: string) {
    //await this.clickSignupLogin();

    await this.usernameTxt.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordTxt.fill(password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

}