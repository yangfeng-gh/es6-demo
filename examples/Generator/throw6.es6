/**
 * Created by yvan on 2016-06-28.
 */
function *foo() {
    var x = yield 3;
    var y = x.toUpperCase();
    yield y;
}

var it = foo();

it.next(); // { value:3, done:false }

try {
    it.next(42);
} catch (err) {
    console.log(err);
}