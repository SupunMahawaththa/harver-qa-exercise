import { expect, Locator, Page } from '@playwright/test';
export class CheckboxesPage {
    readonly page: Page;
    readonly chk_Chekbox1: Locator;
    readonly chk_Chekbox2: Locator;
    constructor(page: Page) {
        this.page = page;
        this.chk_Chekbox1 = page.locator('//*[@id="checkboxes"]/input[1]');
        this.chk_Chekbox2 = page.locator('//*[@id="checkboxes"]/input[2]');

    }
    async VerifyCheckboxFunction() {
        //Check the Checkbox 1
        await this.chk_Chekbox1.check();
        //Verify Whether Checkbox 1 is Cheked 
        expect(await this.chk_Chekbox1.isChecked()).toBeTruthy();
        //Un-Check the Checkbox 1
        await this.chk_Chekbox1.uncheck();
        //Verify Whether Checkbox 1 is Un-Cheked
        expect(await this.chk_Chekbox1.isChecked()).toBeFalsy();

    }
}