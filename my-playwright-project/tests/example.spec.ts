import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
    test('should navigate to the homepage and check the title', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    });

    test('should click a link and verify navigation', async ({ page }) => {
        await page.goto('https://example.com');
        await page.click('text=More information...');
        await expect(page).toHaveURL(/.*iana.org/);
    });
});