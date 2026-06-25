import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

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
