const GoogleSearch = require('./GoogleSearch');


class GoogleImageSearch extends GoogleSearch {
    static get resultSelector() { return 'img[alt="Image result for Pugs"]'; }

    get result() { return browser.element(GoogleImageSearch.resultSelector); }

    open() {
        super.open('imghp')
    }
}

module.exports = GoogleImageSearch;