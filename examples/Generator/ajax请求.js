var fetch = require('node-fetch');

function* main() {
    var result = yield request("http://api.apiopen.top/singlePoetry");
    var resp = JSON.parse(result);
    console.log(resp);
}

function request(url) {
    fetch(url, function(response){
        it.next(response);
    });
}

var it = main();
it.next();