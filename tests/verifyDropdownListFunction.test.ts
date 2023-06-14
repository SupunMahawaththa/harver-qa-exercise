import { test, expect } from '@playwright/test';
import { ExampleElementPage } from '../pages/exampleElement.page';
import { DropdownListPage } from '../pages/dropdownList.page';

test('Verify Dropdown List Function', async ({ page }) => {
    const exampleElement = new ExampleElementPage(page);
    const dropdownList = new DropdownListPage(page);
    //Navigate to the URL
    await exampleElement.NavigateToURL("Welcome to the-internet");
    //Click on Dropdown List Link
    await exampleElement.ClickOnDropdownListLink();
    //Verify Dropdown List Function
    await dropdownList.VerifyDropdownListFunction("Dropdown List", "Option 2");
    //Added for the Debug Purpose
    //await page.pause();
});