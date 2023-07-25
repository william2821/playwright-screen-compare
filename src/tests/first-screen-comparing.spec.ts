import {expect, test} from "@playwright/test";
import {configApp} from "../../configApp";
import {LoginPage} from "../pages/login.page";
import {QaRolesPage} from "../pages/qa-roles.page";

const url = configApp.baseURL;
const username = configApp.username
const password = configApp.password


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


test.beforeEach(async ({page}) => {
    await page.goto(url)
    await page.waitForLoadState('networkidle')

    let loginTest = new LoginPage(page);
    await loginTest.loginHomepage(username, password)
    await expect(page).toHaveScreenshot()

});

test('Should be able to log screenshot', async ({page}) => {
    // let loginTest = new LoginPage(page);
    // await loginTest.loginHomepage(username, password)
    let inputFields = new QaRolesPage(page)
    await inputFields.getQaRolesPage()
    await inputFields.fillingRolesDetails()
//    await expect(page).toHaveScreenshot()
//    await expect(page).toHaveScreenshot({maxDiffPixels: 10});
//x    await expect(page).toHaveScreenshot({mask: [page.locator(‘#lastName’) ], maskColor: ‘red’});

    await expect(page).toHaveScreenshot({
        mask: [ page.locator('#firstName'), page.locator('#lastName') ],
//        maskColor: 'red'
        maskColor: 'yellow'
    });
})


