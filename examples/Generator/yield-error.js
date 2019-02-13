/*
yield不能用在普通函数中，否则会报错
 */

function f() {
    // console.log('yield不能用在普通函数中，否则会报错');
    // yield 1; //SyntaxError: Unexpected number
};

function* g() {
    // yield语句如果用在一个表达式之中，必须放在圆括号里面。
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError

    console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK

// yield语句用作函数参数或赋值表达式的右边，可以不加括号。
    f(yield 'a', yield 'b');
    let input = yield; // OK
}

var it = g();

/*
如果在Generator函数内部，调用另一个Generator函数，默认情况下是没有效果的。
 */
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};

for (var f of flat(arr)) {
    console.log(f);
}