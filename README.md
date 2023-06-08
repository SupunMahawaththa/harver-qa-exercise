# Harver QA Exercise
========================

## Web UI Automation test assignment

### Background

This automation project is designed based on the Playwright Page Object Model. The web elements and corresponding methods are organized within the "pages" folder, while the test cases are located in the "tests" project folder.

The following naming conventions are utilized for test cases and pages.
- tc_ - uses for test case
- pg_ - uses for page

### Steps to execute

First time execute the following command:

`npm install`

To execute the unit test cases, you may utilize the following commands, which will execute the tests using three browser engines.

1. `npx playwright test tc_VerifyAddRemoveElementFunction.test.ts  --headed`
2. `npx playwright test tc_ValidateBasicAuth.test.ts  --headed`
3. `npx playwright test tc_VerifyCheckboxesFunction.test.ts  --headed`
4. `npx playwright test tc_VerifyDropdownListFunction.test.ts --headed`
5. `npx playwright test tc_VerifyFormAuthenticationFunction.test.ts --headed`

To execute unit test cases, you can use the following commands, specifically for the Chrome browser.

1. `npx playwright test tc_VerifyAddRemoveElementFunction.test.ts  --project=chromium --headed`
2. `npx playwright test tc_ValidateBasicAuth.test.ts  --project=chromium --headed`
3. `npx playwright test tc_VerifyCheckboxesFunction.test.ts  --project=chromium --headed`
4. `npx playwright test tc_VerifyDropdownListFunction.test.ts --project=chromium --headed`
5. `npx playwright test tc_VerifyFormAuthenticationFunction.test.ts --project=chromium --headed`

To perform bulk execution, you can utilize the following command (for Chrome only).

1. `npx playwright test --project=chromium`

To view any of the reports, you can use the following command.

1. `npx playwright show-report`