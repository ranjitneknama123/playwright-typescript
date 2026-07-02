import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { Logger } from '../utils/Logger';
import fs from "fs";
import path from "path";

setDefaultTimeout(120 * 1000);

Before(async function (this: CustomWorld) {

  try {

    this.browser = await chromium.launch({
      headless: false,
      args: ['--start-maximized']
    });

    this.context = await this.browser.newContext({
      viewport: null
    });

    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);

    this.page.setDefaultTimeout(120 * 1000);
    this.page.setDefaultNavigationTimeout(60 * 1000);

  } catch (error) {

    console.error("Failed to initialize browser:", error);
    Logger.info(`Failed to initialize browser ${error}`);

    await this.context?.close();
    await this.browser?.close();

    throw error;
  }
});

After(async function (this: CustomWorld, scenario) {

  try {

    // ================================
    // Attach Test Data to Allure Report
    // ================================
    const testData = this.getAllTestData();

    if (Object.keys(testData).length > 0) {

      const formattedTestData = Object.entries(testData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      await this.attach(formattedTestData
        , "text/plain");
    }

    // ======================================
    // Print Failure Details
    // ======================================
    if (scenario.result?.status === Status.FAILED) {

      console.error("\n========================================");
      console.error("❌ Scenario Failed");
      console.error(`Scenario Name : ${scenario.pickle.name}`);
      console.error(`Status        : ${scenario.result.status}`);

      if (scenario.result.message) {
        console.error("\nFailure Details:");
        console.error(scenario.result.message);
      }

      console.error("========================================\n");
    }

    // ======================================
    // Capture Screenshot ONLY if Test Failed
    // ======================================
    if (
      scenario.result?.status === Status.FAILED &&
      this.page &&
      !this.page.isClosed()
    ) {

      const now = new Date();

      const timestamp =
        `${String(now.getDate()).padStart(2, "0")}_` +
        `${String(now.getMonth() + 1).padStart(2, "0")}_` +
        `${now.getFullYear()}_` +
        `${String(now.getHours()).padStart(2, "0")}_` +
        `${String(now.getMinutes()).padStart(2, "0")}_` +
        `${String(now.getSeconds()).padStart(2, "0")}_` +
        `${String(now.getMilliseconds()).padStart(3, "0")}`;

      const screenshotsDir = path.join(process.cwd(), "screenshots");

      if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
      }

      const scenarioName = scenario.pickle.name
        .replace(/[<>:"/\\|?*]/g, "_")
        .replace(/\s+/g, "_");

      const filePath = path.join(
        screenshotsDir,
        `${scenarioName}_${timestamp}.png`
      );

      const screenshot = await this.page.screenshot({
        path: filePath,
        fullPage: true
      });

      await this.attach(screenshot, "image/png");

      console.log(`📸 Screenshot saved: ${filePath}`);
    }

  } catch (error) {

    console.error("After Hook Error:", error);

  } finally {

    if (this.page && !this.page.isClosed()) {
      await this.page.close().catch(() => { });
    }

    await this.context?.close().catch(() => { });
    await this.browser?.close().catch(() => { });

    console.log("✅ Browser closed successfully.");
  }
});