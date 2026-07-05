# Playwright + Cucumber TypeScript Automation Suite

## Proof of Concept (POC)

### Objective
Build a maintainable, BDD-driven automation framework that validates end-to-end user journeys for a web application using Playwright and Cucumber.

### Outcomes
- Executable business-readable test scenarios for login, signup, product checkout, and logout.
- Reusable page object abstractions that separate UI actions from test logic.
- Dynamic test data generation to reduce hardcoded values and improve test coverage.
- Automated reporting and failure diagnostics with Allure and screenshots.

### Advantages
- Faster validation of critical e-commerce flows through automation.
- Clear collaboration between non-technical and technical team members via Gherkin feature files.
- Easier maintenance with modular page objects and shared hooks.
- Expandable architecture for adding new scenarios, browsers, and environments.

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
-Technology Stack
Component	Technology
Language	TypeScript
UI Automation	Playwright
BDD	Cucumber
Design Pattern	Page Object Model (POM)
Assertions	Playwright Expect
Reporting	Allure Report
Logging	Custom Logger
Test Data	Faker.js
IDE	VS Code
Source Control	Git / GitHub
CI/CD	Jenkins / GitHub Actions
Package Manager	npm


## Project structure
- features/: Gherkin feature files
- stepDefinitions/: Cucumber step implementations
- pages/: Page Object Model classes
- hooks/: Browser lifecycle and scenario hooks
- config/: Shared configuration values
- utils/: Helper utilities such as logging and data generation
- reports/, screenshots/, allure-results/, allure-report/: Generated outputs

## Framework architecture
This framework is designed as a clean, layered automation suite that separates business-readable tests, step logic, page interactions, and browser control.

### Playwright Automation Framework


                                  Feature Files
                                       │
                                       ▼
                               Step Definitions
                                       │
                                       ▼
                                Page Objects
                                       │
                 ┌─────────────────────┼────────────────────┐
                 │                     │                    │
                 ▼                     ▼                    ▼
             Utilities             Config             Custom World
                 │                     │                    │
                 ├──────────────┬──────┴──────────────┐
                 ▼              ▼                     ▼
            Logger         Test Data             Hooks
                              Generator
                 │
                 ▼
          Playwright Browser
                 │
                 ▼
          Application Under Test

                 │
                 ▼
      Allure Results + Screenshots
                 │
                 ▼
            Allure HTML Report

### Architecture diagram
playwright-framework
│
├── features
│
├── stepDefinitions
│
├── pages
│
├── hooks
│
│     ├── hooks.ts
│     └── world.ts
│
├── utils
│     ├── Logger.ts
│     ├── TestDataGenerator.ts
│     └── Constants.ts
│
├── config
│
├── reports
│
├── screenshots
│
├── allure-results
│
├── allure-report
│
├── cucumber.js
│
├── package.json
│
└── tsconfig.json

### Executetion flow

Feature File
      │
      ▼
Step Definition
      │
      ▼
Page Object
      │
      ▼
Playwright Actions
      │
      ▼
Application
      │
      ▼
Validation
      │
      ▼
Hooks
      │
      ├── Capture Screenshot
      ├── Capture Logs
      ├── Attach Test Data
      └── Close Browser
      │
      ▼
Allure Report

### Implemented Capabilities

✅ Playwright + TypeScript Framework

✅ Cucumber BDD

✅ Page Object Model

✅ Parallel Execution

✅ Custom World Implementation

✅ Dynamic Test Data using Faker

✅ Common Utility Classes

✅ Screenshot on Failure

✅ Automatic Browser Cleanup

✅ Allure Reporting

✅ Automatic Report Generation

✅ Logging Utility

✅ Configuration Management

✅ Reusable Page Methods

✅ Scenario-level Isolation

✅ Debugging Support

### Workflow for management
1. **Write business scenarios** in plain language under `features/`.
2. **Step Definitions** convert scenario steps into automated actions.
3. **Page Objects** encapsulate page locators and actions for reuse.
4. **Hooks and Custom World** start the browser, manage context, capture failures, and close resources.
5. **Playwright executes the browser actions** and validates outcomes.
6. **Allure reporting and screenshots** are generated automatically after execution.

### Key benefits for the team
- Non-technical stakeholders can review tests using plain English feature files.
- Developers can add UI coverage without changing business logic.
- Failures are easier to diagnose with structured reports and screenshots.
- The framework is extensible for new features, test data, and browser support.

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
