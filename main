javascript:(function(){
    var elements = document.querySelectorAll('*');
    var mp3Urls = [];
    elements.forEach(function(element) {
        if (element.innerText) {
            var text = element.innerText;
            var matches = text.match(/https:\/\/[^\s]*\.mp3/g);
            if (matches) {
                matches.forEach(function(match) {
                    var cleanUrl = match.split('.mp3')[0] + '.mp3';
                    if (!mp3Urls.includes(cleanUrl)) {
                        mp3Urls.push(cleanUrl);
                    }
                });
            }
        }
    });
    if (mp3Urls.length > 0) {
        window.location.href = mp3Urls[0];
    } else {
        alert('未找到符合條件的 HTTPS MP3 內容');
    }
})();
