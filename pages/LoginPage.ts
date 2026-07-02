import { Locator, Page } from '@playwright/test';
import { config } from '../config/config';
import { AsyncLocalStorage } from 'node:async_hooks';
import { Logger } from "../utils/Logger";


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

  private Dob_Day: Locator;
  private Dob_Month: Locator;
  private Dob_Year: Locator;

  //Address information
  private firstName: Locator;
  private lastName: Locator;
  private company: Locator;
  private address: Locator;
  private address2: Locator;
  private country: Locator;
  private state: Locator;
  private city: Locator;
  private zipcode: Locator;
  private mobileNumber: Locator;
  private createAccountBtn: Locator;
  private accCreatedSucessfullMsg: Locator;
  private congratulationsMsg: Locator;
  private signUpErrorMsg: Locator;

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

    this.Dob_Day = page.locator('#days');
    this.Dob_Month = page.locator('#months');
    this.Dob_Year = page.locator('#years');

    this.firstName = page.locator('[data-qa="first_name"]');
    this.lastName = page.locator('[data-qa="last_name"]');
    this.company = page.locator('[data-qa="company"]');
    this.address = page.locator('[data-qa="address"]');
    this.address2 = page.locator('[data-qa="address2"]');
    this.country = page.locator('[data-qa="country"]');
    this.state = page.locator('[data-qa="state"]');
    this.city = page.locator('[data-qa="city"]');
    this.zipcode = page.locator('[data-qa="zipcode"]');
    this.mobileNumber = page.locator('[data-qa="mobile_number"]');
    this.createAccountBtn = page.locator('[data-qa="create-account"]');
    this.accCreatedSucessfullMsg = page.locator('//b[normalize-space(text())="Account Created!"]');
    this.congratulationsMsg = page.locator('//p[contains(text(),"Congratulations!")]');
    this.signUpErrorMsg = page.locator('//p[contains(text(),"Email Address already exist!")]');

  }

  async navigate() {
    Logger.info(`Navigating on base url ${config.baseUrl}`);
    await this.page.goto(config.baseUrl);
    Logger.info(`Navigated successfully on base ${config.baseUrl}`);
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
    Logger.info("Clicked 'Sign Up / Login' button successfully.");
  }

  async enterUsername(username: string) {
    await this.clickSignupLogin();

    await this.usernameTxt.fill(username);
    Logger.info(`Successfully entered username: ${username}`);
  }

  async enterPassword(password: string) {
    Logger.info(`Entering password: ${password}`);
    await this.passwordTxt.fill(password);
    Logger.info(`Successfully entered password: ${password}`);
  }

  async clickLogin() {
    Logger.info("Clicking Login button.");
    await this.loginBtn.click();
    Logger.info("Clicked Login button successfully.");
  }

  async getErrorMessage() {
    Logger.info("Getting error message.");
    return await this.errorTxt.textContent();
    Logger.info("Retrieved error message.");
  }

  async getSignupErrorMessage(): Promise<string | null> {
    Logger.info("Getting signup error message.");
    return await this.signUpErrorMsg.textContent();
    Logger.info("Retrieved signup error message.");
  }

  async enterSignupName(name: string) {
    Logger.info(`Entering signup name: ${name}`);
    await this.signupName.fill(name);
    Logger.info(`Successfully entered name: ${name}`);
  }

  async enterSignupEmail(email: string) {
    Logger.info(`Entering signup email: ${email}`);
    await this.signupEmail.fill(email);
    Logger.info(`Successfully entered email: ${email}`);
  }

  async clickSignup() {
    Logger.info("Clicking signup button.");
    await this.signupBtn.click();
    Logger.info("Clicked signup button successfully.");
  }

  async selectTitle() {
    Logger.info("Selecting title.");
    await this.signUpTitle.click();
    Logger.info("Selected title successfully.");
  }

  async enterPasswordForSignup(signupPassword: string) {
    Logger.info(`Entering password for signup: ${signupPassword}`);
    await this.signupPsw.fill(signupPassword);
    Logger.info(`Successfully entered password: ${signupPassword}`);
  }

  async enterDob(day: string, month: string, year: string) {
    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
    Logger.info(`Entering date of birth: ${day}-${month}-${year}`);

    await this.Dob_Day.click();
    Logger.info(`Successfully selected day: ${day}`);
    await this.page.locator('#days').selectOption(day);

    await this.page.locator('#months').selectOption(month);
    Logger.info(`Successfully selected month: ${month}`);

    await this.Dob_Year.selectOption(year);
    Logger.info(`Successfully selected year: ${year}`);
  }

  async enterFirstName(fname: string) {
    Logger.info(`Entering first name: ${fname}`);
    await this.firstName.fill(fname);
    Logger.info(`Successfully entered first name: ${fname}`);
  }

  async enterLastName(lname: string) {
    Logger.info(`Entering last name: ${lname}`);
    await this.lastName.fill(lname);
    Logger.info(`Successfully entered last name: ${lname}`);
  }

  async enterCompanyName(cname: string) {
    Logger.info(`Entering company name: ${cname}`);
    await this.company.fill(cname);
    Logger.info(`Successfully entered company: ${cname}`);
  }

  async enterAddressDetails(address1: string) {
    Logger.info(`Entering address: ${address1}`);
    await this.address.fill(address1);
    Logger.info(`Successfully entered address: ${address1}`);
  }

  async enterAddress2Details(address2: string) {
    Logger.info(`Entering address2: ${address2}`);
    await this.address2.fill(address2);
    Logger.info(`Successfully entered address2: ${address2}`);
  }

  async enterCountryName(countryName: string) {
    Logger.info(`Entering country name: ${countryName}`);
    await this.country.fill(countryName);
    Logger.info(`Successfully entered country : ${countryName}`);
  }

  async enterStateName(stateName: string) {
    await this.state.fill(stateName);
    Logger.info(`Successfully entered state: ${stateName}`);
  }

  async enterCityName(cityName: string) {
    Logger.info(`Entering city name: ${cityName}`);
    await this.city.fill(cityName);
    Logger.info(`Successfully entered city: ${cityName}`);
  }

  async enterZipCode(zipCode: string) {
    Logger.info(`Entering zip code: ${zipCode}`);
    await this.zipcode.fill(zipCode);
    Logger.info(`Successfully entered zip: ${zipCode}`);
  }

  async enterMobileName(mobNum: string) {
    Logger.info(`Entering mobile number: ${mobNum}`);
    await this.mobileNumber.fill(mobNum);
    Logger.info(`Successfully entered mobile: ${mobNum}`);
  }

  async clickOnCreateAcccountBtn() {
    Logger.info("Clicking on create account button");
    await this.createAccountBtn.click();
    Logger.info("Successfully clicked on create account button");
  }

  async getAccountCreatedMessage(): Promise<string> {
    Logger.info("Getting account created message");
    const text = await this.accCreatedSucessfullMsg.textContent();
    if (text === null) {
      throw new Error("Account created message not found");
    }
    return text;
  }

  async getCongratulationsMessage(): Promise<string> {
    const text = await this.congratulationsMsg.textContent();
    if (text === null) {
      throw new Error("unable to get Congratulations message");
    }
    return text;
  }
  
}