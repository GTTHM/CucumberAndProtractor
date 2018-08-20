class ComponentExtensions {

    async waitForElement(element, waitTimeout = 10000) {
        const until = protractor.ExpectedConditions;
        await browser.wait(until.presenceOf(element)
            , waitTimeout, 'Unable to find element');
    }
}

module.exports = ComponentExtensions;