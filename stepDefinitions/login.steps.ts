import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

let loginPage!: LoginPage;
let homePage!: HomePage;

Given('User navigates to login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('user clicks on signuporlogin button', async function () {
  await loginPage.clickSignupLogin();
});

When('User enters username {string}', async function (username: string) {
  //await loginPage.clickSignupLogin();
  await loginPage.enterUsername(username);
});

When('User enters password {string}', async function (password: string) {
  await loginPage.enterPassword(password);
});

When('User clicks login button', async function () {
  await loginPage.clickLogin();
});

Then('Login should be successful', async function () {
  homePage = new HomePage(this.page);
  const logoutText = await homePage.getLogoutText();
  console.log('Logout Text: ', logoutText);
  const isLogoutLinkVisible = await homePage.isLoginSuccessful();
  console.log('Is Logout Link Visible: ', isLogoutLinkVisible);
  expect(isLogoutLinkVisible).toBeTruthy();
});
