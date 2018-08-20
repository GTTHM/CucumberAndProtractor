"use strict";
const BasePage = require('../BasePage');

class GoogleSearchedPage extends BasePage {
    get resultsAmountDiv() {
        return element(by.id("resultStats"));
    }

    get allResultsDivsArray() {
        return element.all(by.xpath("//div[@class='g']"));
    }

    async getResultsAmountText() {
        await this.waitForElement(this.resultsAmountDiv);
        const resultsAmountDiv = await this.resultsAmountDiv;
        
        return await resultsAmountDiv.getText();
    }

    async getAllResultsTextArray() {
        let result = [];

        const elements = await this.allResultsDivsArray;  

        for (let i = 0; i < elements.length; i++) {
            result.push(await elements[i].getText());
        }

        return result;
    }
}

module.exports = GoogleSearchedPage;