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

//one column version
//javascript:(function(){var elements=document.querySelectorAll('*');var mp3Urls=[];elements.forEach(function(element){if(element.innerText){var text=element.innerText;var matches=text.match(/https:\/\/[^\s]*\.mp3/g);if(matches){matches.forEach(function(match){var cleanUrl=match.split('.mp3')[0]+'.mp3';if(!mp3Urls.includes(cleanUrl)){mp3Urls.push(cleanUrl);}});}}});if(mp3Urls.length>0){window.location.href=mp3Urls[0];}else{alert('未找到符合條件的 HTTPS MP3 內容');}})();

//other: Display found mp3 files
/*
javascript:(function(){
    // 選擇所有元素
    var elements = document.querySelectorAll('*');
    var mp3Urls = [];  // 存儲處理過的 MP3 URL

    // 遍歷所有元素
    elements.forEach(function(element){
        // 確保元素內部有文本內容
        if (element.innerText) {
            var text = element.innerText;
            // 使用正則表達式查找包含 https:// 和 .mp3 的內容
            var matches = text.match(/https:\/\/[^\s]*\.mp3/g);
            if (matches) {
                // 遍歷所有找到的匹配項
                matches.forEach(function(match){
                    // 將 .mp3 後面的內容刪除，只保留 .mp3
                    var cleanUrl = match.split('.mp3')[0] + '.mp3';
                    // 確保 URL 不重複
                    if (!mp3Urls.includes(cleanUrl)) {
                        mp3Urls.push(cleanUrl);
                    }
                });
            }
        }
    });

    // 檢查是否找到符合條件的 MP3 URL
    if (mp3Urls.length > 0) {
        // 顯示所有找到的 MP3 URL 於對話框
        alert('找到的 MP3 URL:\n' + mp3Urls.join('\n'));
    } else {
        // 如果未找到符合條件的內容，顯示提示對話框
        alert('未找到符合條件的 HTTPS MP3 內容');
    }
})();
*/
//one column version
//javascript:(function(){var elements=document.querySelectorAll('*');var mp3Urls=[];elements.forEach(function(element){if(element.innerText){var text=element.innerText;var matches=text.match(/https:\/\/[^\s]*\.mp3/g);if(matches){matches.forEach(function(match){var cleanUrl=match.split('.mp3')[0]+'.mp3';if(!mp3Urls.includes(cleanUrl)){mp3Urls.push(cleanUrl);}});}}});if(mp3Urls.length>0){alert('找到的 MP3 URL:\n' + mp3Urls.join('\n'));}else{alert('未找到符合條件的 HTTPS MP3 內容');}})();
