# playwright-screen-compare

Execution from CLI:
1. npx playwright --ui
2. npm run npx-ui
3. npm run ui
4. npm run + either command in the first part before ':' from following lines:
   "test": "playwright test first-screen-comparing.spec.ts --headed",
   "test:headless": "playwright test funding-support.spec.ts",
   "test:crossbrowsers:html": "playwright test --browser=all --reporter=html",
   "test:crossbrowsers:list": "playwright test --browser=all --reporter=list"
5. 