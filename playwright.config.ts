import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: './src/tests',
    timeout: 30 * 1000,

    expect: {
        timeout: 6000
    },

     reporter: 'list',
    // reporter: 'html',
    retries: 2,

    use: {
//        channel: 'chrome',
//        channel: 'chromium',
//        channel: 'msedge',
        headless: false,
        actionTimeout: 0,
        screenshot: 'only-on-failure',
        // video: 'retain-on-failure',
        // trace: 'retain-on-failure',
    },
};

export default config;