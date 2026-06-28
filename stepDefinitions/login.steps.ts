import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CustomWorld } from '../hooks/world';
import { TestDataGenerator } from '../utils/TestDataGenerator';

// let loginPage!: LoginPage;
// let homePage!: HomePage;

Given('User navigates to login page', async function () {
  this.loginPage = new LoginPage(this.page);
  this.homePage = new HomePage(this.page);
  //loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('user clicks on signuporlogin button', async function () {
  await this.loginPage.clickSignupLogin();
});

When('User enters username {string}', async function (username: string) {
  await this.loginPage.enterUsername(username);
});

When('User enters password {string}', async function (password: string) {
  await this.loginPage.enterPassword(password);
});

When('User clicks login button', async function () {
  await this.loginPage.clickLogin();
});

Then('Login should be successful', async function () {
  //homePage = new HomePage(this.page);
  const logoutText = await this.homePage.getLogoutText();
  console.log('Logout Text: ', logoutText);
  const isLogoutLinkVisible = await this.homePage.isLoginSuccessful();
  console.log('Is Logout Link Visible: ', isLogoutLinkVisible);
  expect(isLogoutLinkVisible).toBeTruthy();
});

When('User enters username {string} and password {string}', async function (username: string, password: string) {
  await this.loginPage.enterUsername(username);
  await this.loginPage.enterPassword(password);
});

Then('Login should fail', async function () {
  const errorMessage = await this.loginPage.getErrorMessage();
  console.log('Error Message: ', errorMessage);
  expect(errorMessage).toBe('Your email or password is incorrect!');
});

Then('Login page title should be {string}', async function (expectedTitle: string) {
  console.log('Expected Title: ', expectedTitle);
  const actualTitle = await this.page.title();
  console.log('Actual Title: ', actualTitle);
  await expect(actualTitle).toBe(expectedTitle);
})


When('the user enters a valid name', async function (this: CustomWorld) {
  const fullName = await TestDataGenerator.getFullName();
  await this.loginPage.enterSignupName(fullName);
});

When('the user enters a valid email address', async function (this: CustomWorld) {
  const email = TestDataGenerator.getEmail();
  console.log('Generated Email: ', email);
  //this.testData.set('signupEmail', email);
  this.setData('signupEmail', email);
  this.loginPage.enterSignupEmail(email);
});


When('the user clicks the signup button', async function (this: CustomWorld) {
  await this.loginPage.clickSignup();

});

When('user select title', async function (this: CustomWorld) {
  await this.loginPage.selectTitle();
});

Then('pause the page for sometime', async function (this: CustomWorld) {
  await this.page.pause();
});

When('the user provides a valid password during signup', async function (this: CustomWorld) {
  const password = await TestDataGenerator.getPassword();
  //await this.testData.set('signupPassword', password)
  this.setData('password', password);
  await this.loginPage.enterPasswordForSignup(password);
  console.log('Generated Password: ', password);
  console.log('Signup Password from testData: ', this.getData<string>('password'));
});


//When user enter the date of birth
When('user enter the date of birth', async function (this: CustomWorld) {
  const { day, month, year } = await TestDataGenerator.getDOB();
  await this.loginPage.enterDob(day, month, year);
});

//When user enter first name
When('user enter first name', async function (this: CustomWorld) {
  const fistName = await TestDataGenerator.getFirstName();
  await this.loginPage.enterFirstName(fistName);
});

//When user the last name
When('user the last name', async function (this: CustomWorld) {
  const lastName = await TestDataGenerator.getLastName();
  await this.loginPage.enterLastName(lastName);
});

//When user enter the company name
When('user enter the company name', async function (this: CustomWorld) {
  const companyName = await TestDataGenerator.getCompanyName();
  await this.loginPage.enterCompanyName(companyName);
});

//When user enter the address deatails
When('user enter the address deatails', async function (this: CustomWorld) {
  const address1 = await TestDataGenerator.getAddress();
  await this.loginPage.enterAddressDetails(address1);
});

//When user enter the address two detils
When('user enter the address two detils', async function (this: CustomWorld) {
  const address2 = await TestDataGenerator.getAddress();
  await this.loginPage.enterAddress2Details(address2);
});

//When user enter the country name
When('user enter the country name', async function (this: CustomWorld) {
  const country = await TestDataGenerator.getCountry();
  await this.loginPage.enterCountryName(country);
});

//When user enter the state name
When('user enter the state name', async function (this: CustomWorld) {
  const state = await TestDataGenerator.getState();
  await this.loginPage.enterStateName(state);
});

//When user enter the city name
When('user enter the city name', async function (this: CustomWorld) {
  const city = await TestDataGenerator.getCity();
  await this.loginPage.enterCityName(city);
});

//When user enter zip code
When('user enter zip code', async function (this: CustomWorld) {
  const zipCode = await TestDataGenerator.getZipCode();
  await this.loginPage.enterZipCode(zipCode);
});

//When user enter the mobile number
When('user enter the mobile number', async function (this: CustomWorld) {
  const mobileNumber = await TestDataGenerator.getMobileNumber();
  await this.loginPage.enterMobileName(mobileNumber);
});

//When user click on crate on create account button
When('user click on crate on create account button', async function (this: CustomWorld) {
  await this.loginPage.clickOnCreateAcccountBtn();
});