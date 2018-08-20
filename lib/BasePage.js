const ComponentExtensions = require('./ComponentExtentsions');

class BasePage extends ComponentExtensions {
    constructor(
        targetUrl = null,
    ) {
        super();
        this.targetUrl = targetUrl;
    }

    async navigate() {
        await browser.get(this.targetUrl);
    }
}

module.exports = BasePage;