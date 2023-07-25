import {Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async loginHomepage(username, password) {
        await this.page.waitForLoadState('networkidle')
        await this.page.locator("input[id='login']").fill(username)
        await this.page.locator("input[id='password']").fill(password)
        await this.page.locator("button[id='loginBtn']").click()

        await this.page.waitForSelector('text=Test website designed for the automation practice. I know, site design is painful.',
            {state: 'visible'})
    }

    async processInputFields() {
        await this.page.locator("a[href='/input']").click()
    }

}