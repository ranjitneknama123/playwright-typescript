# Playwright + Cucumber TypeScript Automation Suite

## Overview
This project is an end-to-end UI automation framework built with Playwright and Cucumber using TypeScript. It targets the Automation Exercise website and covers common user journeys such as login, signup, product selection, checkout, and logout.

## What the project does
The suite currently includes scenarios for:
- User login
- Signup flow
- Product selection and cart validation
- Checkout and order placement
- Logout validation

## Tech stack
- TypeScript
- Playwright
- Cucumber.js
- Faker.js for test data generation
- Allure for reporting

## Project structure
- features/: Gherkin feature files
- stepDefinitions/: Cucumber step implementations
- pages/: Page Object Model classes
- hooks/: Browser lifecycle and scenario hooks
- config/: Shared configuration values
- utils/: Helper utilities such as logging and data generation
- reports/, screenshots/, allure-results/, allure-report/: Generated outputs

## Prerequisites
Make sure the following are installed:
- Node.js
- npm

## Installation
Run the following in the project root:

```bash
npm install
```

## Running tests
Run the full suite:

```bash
npx cucumber-js
```

Run a tagged scenario such as products:

```bash
npx cucumber-js --tags "@products"
```

## Useful npm scripts
- npm test: runs the Cucumber suite and writes a JSON report
- npm run clean: removes generated report folders
- npm run report: runs the report generation utility

## Reporting
The project is configured to generate Allure reports after test execution. Report artifacts are stored in:
- allure-results/
- allure-report/

## Review summary
The framework is structured well for maintainability with a clear separation between:
- feature files
- step definitions
- page objects
- hooks

A few observations from the current codebase:
- The project uses a page-object structure, which is a good practice for UI automation.
- Test data is generated dynamically using Faker, which helps reduce hardcoded data.
- Reporting is integrated with Allure and screenshot capture on failure.
- Some areas could be improved further, such as cleaning up unused imports, standardizing step naming, and aligning the Playwright config with the actual browser setup used in hooks.

## Suggested next improvements
- Add a dedicated README for local environment setup and example commands.
- Standardize step definitions and feature naming for consistency.
- Add more assertions and better error handling.
- Consider using a single browser strategy across Playwright config and Cucumber hooks.
