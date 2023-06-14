import { test, expect } from '@playwright/test';
import { ExampleElementPage } from '../pages/exampleElement.page';
import { CheckboxesPage } from '../pages/checkboxes.page';

test('Verify Checkboxes Function', async ({ page }) => {
    const exampleElement = new ExampleElementPage(page);
    const checkboxes = new CheckboxesPage(page);
    //Navigate to the URL
    await exampleElement.NavigateToURL();
    //Click on Checkboxes Link
    await exampleElement.ClickOnCheckboxesLink();
    //Verify Checkboxes Function
    await checkboxes.VerifyCheckboxFunction();
    //Added for the Debug Purpose
    //await page.pause();
});