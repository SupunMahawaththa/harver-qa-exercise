import { test, expect } from '@playwright/test';
import { BasicAuthPage } from '../pages/basicAuth.page';

require('dotenv').config();

test('Validate Basic Authentication', async ({ browser, page }) => {
    const basicAuth = new BasicAuthPage(page);
    // Verify Basic Auth Validation
    await basicAuth.ValidateBasicAuth(browser);
  });