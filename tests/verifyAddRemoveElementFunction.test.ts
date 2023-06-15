import { test } from '@playwright/test';
import { ExampleElementPage } from '../pages/exampleElement.page';
import { AddRemoveElementPage } from '../pages/addRemoveElement.page';

test('Verify Add/Remove Elements Function', async ({ page }) => {
    const exampleElement = new ExampleElementPage(page);
    const addRemoveElement = new AddRemoveElementPage(page);
    //Navigate to the URL
    await exampleElement.NavigateToURL();
    //Click on Add/Remove Element Link
    await exampleElement.ClickOnAddRemoveLink();
    //Verify Add/Remove Element Function
    await addRemoveElement.VerifyAddRemoveElementFunction();
  });