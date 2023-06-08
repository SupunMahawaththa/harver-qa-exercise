import { expect, Locator, Page } from '@playwright/test';

export class AddRemoveElemnetPage {
    readonly page: Page;
    readonly lbl_AddRemoveElementsHeader: Locator;
    readonly btn_AddElement: Locator;
    readonly btn_Delete: Locator;



    constructor(page: Page) {
        this.page = page;
        this.lbl_AddRemoveElementsHeader = page.locator('//div/h3[text()="Add/Remove Elements"]');
        this.btn_AddElement = page.locator('//button[text()="Add Element"]');
        this.btn_Delete = page.locator('//button[text()="Delete"]');
    }

    async VerifyAddRemoveElementFunction(addRemoveElementsHeader: string) {
        //Verfiy the Page Header
        await expect(this.lbl_AddRemoveElementsHeader).toHaveText(addRemoveElementsHeader);
        //Click on the Add Element Button (Add a Element)
        await this.btn_AddElement.click();
        //Verify Delete Button Appears
        await expect(this.btn_Delete).toBeVisible();
        //Click on the Delete Button (Remove a Element)
        await this.btn_Delete.click();
        //Verify Delete Button Gets Removed
        await expect(this.btn_Delete).toBeHidden();

    }

}