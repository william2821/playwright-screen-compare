import {expect, test} from "@playwright/test";
import {configApp} from "../../configApp";
import {LoginPage} from "../pages/login.page";
import {QaRolesPage} from "../pages/qa-roles.page";

const url = configApp.baseURL;
const username = configApp.username
const password = configApp.password
let inputFields

test.use({
    viewport: {
        // width: 1674,
        // height: 1004
        // width: 1280,
        // height: 680
        width: 1218,
        height: 578
    }
})

test.describe.parallel('Practice test demo', async () => {

    test.beforeEach(async ({page}) => {
        await page.goto(url)
        await page.waitForLoadState('networkidle', {timeout: 60000})
        let loginTest = new LoginPage(page);
        await loginTest.loginHomepage(username, password)
        await expect(page).toHaveScreenshot()
        inputFields = new QaRolesPage(page)
    });

    test('Check button enabled', async ({page}) => {
        await inputFields.getQaRolesPage()
        let button = await inputFields.checkPrintButton()
        await expect(button).toBeEnabled()
        await expect(button).toHaveText('Print details')
        await expect.soft(button).toHaveText('Print details')
    })

    test('Should be able to log screenshot', async ({page}) => {

        await inputFields.getQaRolesPage()
        await inputFields.fillingRolesDetails()
//    await expect(page).toHaveScreenshot()
//    await expect(page).toHaveScreenshot({maxDiffPixels: 10});

        await expect(page).toHaveScreenshot({
            mask: [page.locator('#firstName'), page.locator('#lastName')],
            maskColor: 'yellow'
        });
    })

})
