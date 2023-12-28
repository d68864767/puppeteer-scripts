const puppeteer = require('puppeteer');

async function runPuppeteerScript() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');
    const content = await page.content();
    await browser.close();
    return content;
}

module.exports = runPuppeteerScript;
