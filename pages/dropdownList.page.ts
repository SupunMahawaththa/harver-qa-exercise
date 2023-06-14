import { expect, Locator, Page } from '@playwright/test';
export class DropdownListPage {
    readonly page: Page;
    readonly lbl_PageHeaderDropdownList: Locator;
    readonly dd_DropdownList: Locator;
    readonly ele_SelectedDropdownValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.lbl_PageHeaderDropdownList = page.locator('//h3[text()="Dropdown List"]');
        this.dd_DropdownList = page.locator('//h3[text()="Dropdown List"]/following-sibling::select');
        this.ele_SelectedDropdownValue = page.locator('//h3[text()="Dropdown List"]/following-sibling::select');

    }
    async VerifyDropdownListFunction(pageHeaderDropdownList:string, dropdownValue:string) {
        //Verify Page Header
        await expect(this.lbl_PageHeaderDropdownList).toHaveText(pageHeaderDropdownList);
        //Select a Value from the Dropdown list 
        await this.dd_DropdownList.selectOption(dropdownValue);
        //Verify Previously Selected Value is Selected
        await expect(this.ele_SelectedDropdownValue).toBeVisible();

    }
}