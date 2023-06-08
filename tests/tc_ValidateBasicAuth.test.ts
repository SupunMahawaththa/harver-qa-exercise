import { test, expect } from '@playwright/test';


test('Validate Basic Authentication', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: "admin",
            password: "admin"
        }
    })

    //
    const page = await context.newPage();
    //Navigate to Auth Page
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    //Verify Authentication is a Success
    const header = await page.$("h3");
    if(header){
        console.log(await header.textContent());
        expect (await header.textContent()).toBe("Basic Auth")
    }
  });