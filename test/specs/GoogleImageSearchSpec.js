const assert = require('assert');
const GoogleImageSearch = require('./Pages/GoogleImageSearch');

describe('Google Image Search', function() {
    beforeEach(function() {
        browser.url('http://google.com/');
        this.googleImageSearch = new GoogleImageSearch;
    });

     it('should image search for a valid term successfully', function() {
        this.googleImageSearch.open();
        this.googleImageSearch.setSearchTerm();
        this.googleImageSearch.submit();

        assert(!!this.googleImageSearch.result);
    });

    it('should predict results for pugs', function() {
        this.googleImageSearch.open();
        this.googleImageSearch.setSearchTerm();

        browser.waitForVisible(GoogleImageSearch.searchPredictionsSelector);

        assert(browser.isVisible(GoogleImageSearch.searchPredictionsSelector));
    });
});