import { test, expect } from '@playwright/test';
import { playwrightTest } from '../../config/browserTest';
playwrightTest('open anamhira.ca with headless mode off', async ({ browserType }) => {
  console.log("Launching Chromium in headed mode...");
  const browser = await browserType.launch({ headless: false });
  const context = await browser.newContext();
  console.log(`Type of context: ${typeof context}`);
  const page = await context.newPage();
  await page.goto('https://anamhira.ca');

   // Enable the recorder
    await context.enableRecorder({
    language: 'jsonl', // Specify the language for the recorder
    mode: 'recording', // Set the mode to 'recording'
    outputFile: 'outputsignup.jsonl' // Define the output file for the recording
  });
  // Add any assertions or actions you want to perform on the page
  await page.waitForTimeout(5000); // Sleep for 5 seconds
  await browser.close();
});