/*
Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
这种函数体内捕获错误的机制，大大方便了对错误的处理。
多个yield表达式，可以只用一个try...catch代码块来捕获错误。
如果使用回调函数的写法，想要捕获多个错误，就不得不为每个函数内部写一个错误处理语句，现在只在 Generator 函数内部写一次catch语句就可以了。
 */
var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
};

var i = g();
i.next();

try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b

// 上面代码中，遍历器对象i连续抛出两个错误。
// 第一个错误被 Generator 函数体内的catch语句捕获。
// i第二次抛出错误，由于 Generator 函数内部的catch语句已经执行过了，不会再捕捉到这个错误了，
// 所以这个错误就被抛出了 Generator 函数体，被函数体外的catch语句捕获。
