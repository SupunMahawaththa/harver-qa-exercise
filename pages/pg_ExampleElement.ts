import { expect, Locator, Page } from '@playwright/test';

export class ExampleElementPage {
    readonly page: Page;
    readonly lnk_AddRemove: Locator;
    readonly lbl_PageHeaderWelcome: Locator;
    readonly lnk_Checkboxes: Locator;
    readonly lnk_DropdownList: Locator;
    readonly lnk_FormAuthentication: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.lbl_PageHeaderWelcome = page.locator('//div/h1[text()="Welcome to the-internet"]');
        this.lnk_AddRemove = page.locator('//li/a[text()="Add/Remove Elements"]');
        this.lnk_Checkboxes = page.locator('//li/a[text()="Checkboxes"]');
        this.lnk_DropdownList = page.locator('//li/a[text()="Dropdown"]');
        this.lnk_FormAuthentication = page.locator('//li/a[text()="Form Authentication"]');
    }

    async NavigateToURL(pageHeaderWelcome:string) {
        //Navigate to the URL
        await this.page.goto('https://the-internet.herokuapp.com/');
        //Verfiy the Page Header
        await expect(this.lbl_PageHeaderWelcome).toHaveText(pageHeaderWelcome);

      }
      async ClickOnAddRemoveLink() {
        //Click on the ADD/Remove Elements Link
        await this.lnk_AddRemove.click();
      }

      async ClickOnCheckboxesLink() {
        //Click on the Checkboxes Link
        await this.lnk_Checkboxes.click();
      }

      async ClickOnDropdownListLink() {
        //Click on the Dropdown List Link
        await this.lnk_DropdownList.click();
      }

      async ClickOnFormAuthenticationLink() {
        //Click on the Form Authentication Link
        await this.lnk_FormAuthentication.click();
      }
}