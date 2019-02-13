/*
由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。

遍历器对象的next方法的运行逻辑如下。
1.遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
2. 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
3. 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，
   作为返回的对象的value属性值。
4. 如果该函数没有return语句，则返回的对象的value属性值为undefined。

需要注意的是，yield后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，
因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。

yield使用场景：
1. yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
2. forEach方法的参数是一个普通函数，在里面使用yield表达式会报错。
3. yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
 */

var arr = [1, [[2, 3], 4], [5, 6]];

/*
var flat = function* (a) {
    a.forEach(function (item) {
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    });
};

for (var f of flat(arr)){
    console.log(f);
}
*/
// 上面代码也会产生句法错误，因为forEach方法的参数是一个普通函数，但是在里面使用了yield表达式（这个函数里面还使用了yield*表达式，详细介绍见后文）。

// 一种修改方法是改用for循环。
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
// 1, 2, 3, 4, 5, 6

// 另外，yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
function* demo() {
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError

    console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK
}

var gen = demo();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。
function* demo2() {
    (function(){})(yield 'a', (yield 'b')); // OK
    let input = yield 'c'; // OK
    return input;
}

var gen2 = demo2();
var r = gen2.next();
while (r.done !== true) {
    console.log(r);
    r = gen2.next();
}


