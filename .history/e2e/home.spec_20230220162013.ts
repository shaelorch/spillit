import { test, expect, devices } from '@playwright/test';


test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe('testing for home tablet', () => {
    test("Testing for columns on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#column');

        const checkingColumns = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('flex-direction')
        })

        console.log(checkingColumns);
        expect(checkingColumns).toBe("column");
    })
})
