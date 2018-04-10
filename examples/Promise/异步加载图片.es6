/**
 * Created by yvan on 2016-07-29.
 */
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('Could not load images at ' + url));
        };

        image.src = url;
    });
}

loadImageAsync('http://pic.qiantucdn.com/58pic/19/40/65/17m58PICgSH_1024.jpg').then(function(image){
    console.log(image.src);
}, function() {
    console.log('rejected!');
});