import { test, expect } from '@playwright/test';
import { ExampleElementPage } from '../pages/pg_ExampleElement';
import { FormAuthenticationPage } from '../pages/pg_FormAuthentication';

test('Verify Form Authentication Function', async ({ page }) => {
    const exampleElement = new ExampleElementPage(page);
    const formAuthentication = new FormAuthenticationPage(page);
    //Navigate to the URL
    await exampleElement.NavigateToURL("Welcome to the-internet");
    //Click on the Form Authentication Link
    await exampleElement.ClickOnFormAuthenticationLink();
    //Verify Form Authentication Function
    await formAuthentication.VerifyFormAuthenticationFunction("tomsmith", "SuperSecretPassword!", "You logged into a secure area!");
});