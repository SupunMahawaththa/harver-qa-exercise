# Harver QA Exercise
========================

## Web UI Automation test assignment

### Background

This automation project is designed based on the Playwright Page Object Model. The web elements and corresponding methods are organized within the "pages" folder, while the test cases are located in the "tests" project folder.

### Prerequisite

You'll need **Node.JS** 14 or higher and **NPM** installed to setup and run the server.

:warning: This application does not support Node.js below version 14 .. !

:information_source: If You want, You can use **YARN** instead of **NPM**. To install **YARN** you can use `npm install --global yarn` command.

### Steps to execute

First time execute the following command:

`npm install` or `yarn install`

To perform bulk execution using three browser engines in headless mode, you can use the following command.

1. `npm run test`

To execute the unit test cases, you may utilize the following commands, which will execute the tests using three browser engines.

1. `npx playwright test verifyAddRemoveElementFunction.test.ts  --headed`
2. `npx playwright test validateBasicAuth.test.ts  --headed`
3. `npx playwright test verifyCheckboxesFunction.test.ts  --headed`
4. `npx playwright test verifyDropdownListFunction.test.ts --headed`
5. `npx playwright test verifyFormAuthenticationFunction.test.ts --headed`

To execute unit test cases, you can use the following commands, specifically for the Chrome browser.

1. `npx playwright test verifyAddRemoveElementFunction.test.ts  --project=chromium --headed`
2. `npx playwright test validateBasicAuth.test.ts  --project=chromium --headed`
3. `npx playwright test verifyCheckboxesFunction.test.ts  --project=chromium --headed`
4. `npx playwright test verifyDropdownListFunction.test.ts --project=chromium --headed`
5. `npx playwright test verifyFormAuthenticationFunction.test.ts --project=chromium --headed`

To perform bulk execution, you can utilize the following command (for Chrome only).

1. `npx playwright test --project=chromium`

To view any of the reports, you can use the following command.

1. `npx playwright show-report`