/**
 * Created by yvan on 2016-06-28.
 */
function *foo() {
    yield 2;
    yield 3;
    return "foo";
}

function *bar() {
    yield 1;
    var v = yield *foo();
    console.log( "v: " + v );
    yield 4;
}

var it = bar();
var v;

v = it.next();
console.log(v);
// {value: 1, done: false}

v = it.next();
console.log(v);
// {value: 2, done: false}

v = it.next();
console.log(v);
// {value: 3, done: false}

v = it.next();
console.log(v);
// "v: foo"
// {value: 4, done: false}

v = it.next();
console.log(v);
// {value: undefined, done: true}