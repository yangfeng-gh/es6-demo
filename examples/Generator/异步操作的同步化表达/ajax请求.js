/**
 * Created by yvan on 2016-06-28.
 */
function* main() {
    var result = yield request("http://some.url");
    var resp = JSON.parse(result);
    console.log(resp.value);
}

function request(url) {
    makeAjaxCall(url, function(response){
        it.next(response);
    });
}

var it = main();
it.next();