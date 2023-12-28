const assert = require('assert');
const runPuppeteerScript = require('./index');

describe('Puppeteer Script Test', function() {
    this.timeout(10000); // This might take some time, increase timeout

    it('should return content from example.com', async function() {
        const content = await runPuppeteerScript();
        assert(content.includes('Example Domain')); // Assuming 'Example Domain' is part of the content
    });
});
