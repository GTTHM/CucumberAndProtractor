"use strict";
const BasePage = require('../BasePage');

class GoogleMainPage extends BasePage {
    constructor (
        targetUrl = "https://google.com/"
    ) {
        super(targetUrl);
    }

    get searchInput() {
        return element(by.name("q"));
    }

    async search(key) {
        await this.searchInput.sendKeys(key, protractor.Key.ENTER);
    }
}

module.exports = GoogleMainPage;