import { expect, Locator, Page } from '@playwright/test';
export class CheckboxesPage {
    readonly page: Page;
    readonly chk_Checkbox1: Locator;
    readonly chk_Checkbox2: Locator;
    constructor(page: Page) {
        this.page = page;
        this.chk_Checkbox1 = page.locator('//*[@id="checkboxes"]/input[1]');
        this.chk_Checkbox2 = page.locator('//*[@id="checkboxes"]/input[2]');

    }
    async VerifyCheckboxFunction() {
        //Check the Checkbox 1
        await this.chk_Checkbox1.check();
        //Verify Whether Checkbox 1 is Checked 
        expect(await this.chk_Checkbox1.isChecked()).toBeTruthy();
        //Un-Check the Checkbox 1
        await this.chk_Checkbox1.uncheck();
        //Verify Whether Checkbox 1 is Un-Checked
        expect(await this.chk_Checkbox1.isChecked()).toBeFalsy();

    }
}