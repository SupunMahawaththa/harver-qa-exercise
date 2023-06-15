import { test } from '@playwright/test';
import { ExampleElementPage } from '../pages/exampleElement.page';
import { FormAuthenticationPage } from '../pages/formAuthentication.page';


test('Verify Form Authentication Function', async ({ page }) => {
    const exampleElement = new ExampleElementPage(page);
    const formAuthentication = new FormAuthenticationPage(page);
    //Navigate to the URL
    await exampleElement.NavigateToURL();
    //Click on the Form Authentication Link
    await exampleElement.ClickOnFormAuthenticationLink();
    //Verify Form Authentication Function
    await formAuthentication.VerifyFormAuthenticationFunction();
});