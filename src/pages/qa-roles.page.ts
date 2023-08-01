import {Page} from "@playwright/test";
import {generateRandomString} from "../helper/string-generator";

export class QaRolesPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getQaRolesPage() {
        await this.page.locator("a[href='/input']").click()
        await this.page.waitForSelector("text=QA Automation", {state: 'visible'})
    }

    async fillingRolesDetails(){
        const lastname = generateRandomString(6)
        await this.page.locator("input[id='firstName']").fill("Automation")
        await this.page.locator("input[id='lastName']").fill(lastname)
    }

    async checkPrintButton() {
        return await this.page.locator("button[id='print']")
    }

}