const Page = require('./Page');

class GoogleSearch extends Page {
    static get searchBarSelector() { return '.gsfi' };
    static get searchButtonSelector() { return '.lsb[value="Google Search"]' };
    static get luckyButtonSelector() { return '.lsb[value="Google Search"]' };
    static get resultSelector() { return 'a[href$="https://en.wikipedia.org/wiki/Pug"]' };
    static get searchPredictionsSelector() { return '.sbsb_a' };

    get searchBar() { return browser.element(GoogleSearch.searchBarSelector); }
    get searchButton() { return browser.element(GoogleSearch.searchButtonSelector); }
    get luckyButton() { return browser.element(GoogleSearch.luckyButtonSelector); }
    get result() { return browser.element(GoogleSearch.resultSelector); }
    get searchPredictions() { return browser.element(GoogleSearch.searchPredictions); }

    constructor() {
        super();
        this.searchTerm = "Pugs";
    }

    setSearchTerm() {
        this.searchBar.setValue(this.searchTerm);
    }

    submitLucky() {
        browser.waitForVisible(this.constructor.searchButtonSelector);
        this.luckyButton.click();
    }

    submit() {
        browser.waitForVisible(this.constructor.searchButtonSelector);
        this.searchButton.click();
    }
}

module.exports = GoogleSearch;