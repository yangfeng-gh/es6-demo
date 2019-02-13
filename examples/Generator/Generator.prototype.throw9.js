/*
Generator 函数体外抛出的错误，可以在函数体内捕获；反过来，Generator 函数体内抛出的错误，也可以被函数体外的catch捕获。
 */

function* foo() {
    var x = yield 3;
    var y = x.toUpperCase();
    yield y;
}

var it = foo();

console.log(it.next()); // { value:3, done:false }

try {
    it.next(42);
} catch (err) {
    console.log(err);
}
// 上面代码中，第二个next方法向函数体内传入一个参数 42，数值是没有toUpperCase方法的，
// 所以会抛出一个 TypeError 错误，被函数体外的catch捕获。