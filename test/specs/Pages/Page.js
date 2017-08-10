class Page {
    open(path) {
        if (path) {
            const url = `${browser.getUrl()}/${path}`;
            browser.url(url);
        }
    }
}

module.exports = Page;