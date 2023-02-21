import { test, expect, devices } from '@playwright/test';


test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.use({
   
      browserName:'chromium',
      ...devices['iPhone XR'],
    viewport: { width: 414, height: 896 }
})
test.use({
    browserName: 'chromium',
    viewport: { width: 1200, height: 720 },
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


test.describe('testing for home tablet', () => {
    test("Testing for padding on page", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#column');

        const checkingPadding = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('padding')
        })

        console.log(checkingPadding);
        expect(checkingPadding).toBe("20px");
    })
})


test.describe('testing for home iPhone', () => {
    test("Testing for margins on page", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#margins');

        const checkingMargins = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('margin')
        })

        console.log(checkingMargins);
        expect(checkingMargins).toBe("-10px");
    })
})


test.describe('testing for home iPhone', () => {
    test("Testing for text alignment", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#margins');

        const checkingAlign = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('text-align')
        })

        console.log(checkingAlign);
        expect(checkingAlign).toBe("left");
    })
})


test.describe('testing for home Desktop', () => {
    test("Testing for text alignment", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#margins');

        const checkingAlign = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('text-align')
        })

        console.log(checkingAlign);
        expect(checkingAlign).toBe("left");
    })
})

