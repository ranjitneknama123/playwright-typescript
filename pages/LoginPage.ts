import { Locator, Page } from '@playwright/test';
import { config } from '../config/config';
import { AsyncLocalStorage } from 'node:async_hooks';


export class LoginPage {

  private page: Page;

  //Locators
  private signupLoginLink: Locator;
  private usernameTxt: Locator;
  private passwordTxt: Locator;
  private loginBtn: Locator;
  private errorTxt: Locator;
  private signupName: Locator;
  private signupEmail: Locator;
  private signupBtn: Locator;
  private signUpTitle: Locator;
  private signupPsw: Locator;



  constructor(page: Page) {
    this.page = page;

    this.signupLoginLink = page.locator('//a[(normalize-space())="Signup / Login"]');
    this.usernameTxt = page.locator('//h2[contains(text(),"Login to your account")]/..//*[@name="email"]');
    this.passwordTxt = page.locator('//h2[contains(text(),"Login to your account")]/..//*[@name="password"]');
    this.loginBtn = page.locator('//h2[contains(text(),"Login to your account")]/..//*[text()="Login"]');
    this.errorTxt = page.locator('//*[text()="Your email or password is incorrect!"]');
    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupBtn = page.locator('[data-qa="signup-button"]');
    this.signUpTitle = page.locator('[value="Mr"]');
    this.signupPsw = page.locator('[data-qa="password"]');

  }

  async navigate() {
    //await this.page.goto('https://example.com/login');
    await this.page.goto(config.baseUrl);
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  async enterUsername(username: string) {
    await this.clickSignupLogin();

    await this.usernameTxt.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordTxt.fill(password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async getErrorMessage() {
    return await this.errorTxt.textContent();
  }

  async enterSignupName(name: string) {
    await this.signupName.fill(name);
  }

  async enterSignupEmail(email: string) {
    await this.signupEmail.fill(email);
  }

  async clickSignup() {
    await this.signupBtn.click();
  }

  async selectTitle() {
    await this.signUpTitle.click();
  }

  async enterPasswordForSignup(signupPassword: string) {
    await this.signupPsw.fill(signupPassword);
  }

}