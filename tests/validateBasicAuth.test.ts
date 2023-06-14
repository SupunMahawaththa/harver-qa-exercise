import { test, expect } from '@playwright/test';

require('dotenv').config();

test('Validate Basic Authentication', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username:process.env.BASIC_AUTH_USERNAME! ,
            password:process.env.BASIC_AUTH_PASSWORD!
        }
    })

    //
    const page = await context.newPage();
    //Navigate to Auth Page
    await page.goto(process.env.BASIC_AUTH_URL!);
    //Verify Authentication is a Success
    const header = await page.$("h3");
    if(header){
        console.log(await header.textContent());
        expect (await header.textContent()).toBe("Basic Auth")
    }
  });