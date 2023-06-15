import { expect, Locator, Page } from '@playwright/test';

require('dotenv').config();

export class BasicAuthPage {
    readonly page: Page;
    readonly headerAuth: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerAuth = page.locator('//h3[text()="Basic Auth"]');
        
    }
    async ValidateBasicAuth(browser) {
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
        const header = await this.headerAuth;
        await expect(this.headerAuth).toHaveText("Basic Auth");

    }
}