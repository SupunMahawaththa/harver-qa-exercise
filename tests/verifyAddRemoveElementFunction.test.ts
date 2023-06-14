import { test, expect } from '@playwright/test';
import { ExampleElementPage } from '../pages/exampleElement.page';
import { AddRemoveElemnetPage } from '../pages/addRemoveElement.page';

test('Verify Add/Remove Elements Function', async ({ page }) => {
    const exampleElement = new ExampleElementPage(page);
    const addRemoveElemnet = new AddRemoveElemnetPage(page);
    //Navigate to the URL
    await exampleElement.NavigateToURL("Welcome to the-internet");
    //Click on Add/Remove Elemnts Link
    await exampleElement.ClickOnAddRemoveLink();
    //Verify Add/Remove Element Function
    await addRemoveElemnet.VerifyAddRemoveElementFunction("Add/Remove Elements");
  });