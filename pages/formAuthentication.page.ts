import { expect, Locator, Page } from '@playwright/test';

export class FormAuthenticationPage {
    readonly page: Page;
    readonly lbl_LoginPageHeader: Locator;
    readonly txt_Username: Locator;
    readonly txt_Password: Locator;
    readonly btn_Login: Locator;
    readonly lbl_SuccessMessages: Locator;



    constructor(page: Page) {
        this.page = page;
        this.lbl_LoginPageHeader = page.locator('//div/h2[text()="Login Page"]');
        this.txt_Username = page.locator('//input[@name="username"]');
        this.txt_Password = page.locator('//input[@name="password"]');
        this.btn_Login = page.locator('//button/*[normalize-space(text()) ="Login"]');
        this.lbl_SuccessMessages = page.locator('//div[@id="flash-messages"]/div');
    }

    async VerifyFormAuthenticationFunction(username:string, password: string, successMessage : string) {
        //Verfiy the Login Page Header
        await expect(this.lbl_LoginPageHeader).toHaveText("Login Page");
        //Type Username
        await this.txt_Username.fill(username);
        //Type Username
        await this.txt_Password.fill(password);
        //Click on the Login Button
        await this.btn_Login.click();
        //Verify User Login is Successful
        //await expect(this.lbl_SuccessMessages).toBeVisible();
        await expect(this.lbl_SuccessMessages).toContainText(successMessage);

    }

}