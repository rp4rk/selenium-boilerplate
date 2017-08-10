const assert = require('assert');
const GoogleSearch = require('./Pages/GoogleSearch');

describe('Google Search', function () {
    beforeEach(function() {
        browser.url('https://google.co.uk/');
        this.googleSearch = new GoogleSearch;
    });

    it('should predict results for pugs', function() {
        this.googleSearch.open();
        this.googleSearch.setSearchTerm();

        browser.waitForVisible(GoogleSearch.searchPredictionsSelector);

        assert(browser.isVisible(GoogleSearch.searchPredictionsSelector));
    });

    it('should search for a valid term successfully', function () {
        this.googleSearch.open();
        this.googleSearch.setSearchTerm();
        this.googleSearch.submit();

        assert(this.googleSearch.result.getText() === "Pug - Wikipedia");
    });
    
    it('should search for a valid term successfully', function () {
        this.googleSearch.open();
        this.googleSearch.setSearchTerm();
        this.googleSearch.submit();

        assert(this.googleSearch.result.getText() === "Pug - Wikipedia");
    });

});

