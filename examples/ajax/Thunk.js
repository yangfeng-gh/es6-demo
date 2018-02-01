/**
 * 参数的求值策略
 * Thunk函数早在上个世纪60年代就诞生了。
 * 那时，编程语言刚刚起步，计算机学家还在研究，编译器怎么写比较好。
 * 一个争论的焦点是"求值策略"，即函数的参数到底应该何时求值。
 */

var x = 1;

function f(m){
    return m * 2;
}

f(x + 5)

// 上面代码先定义函数f，然后向它传入表达式x + 5。请问，这个表达式应该何时求值？
// 一种意见是"传值调用"（call by value），
// 即在进入函数体之前，就计算x + 5的值（等于6），再将这个值传入函数f 。C语言就采用这种策略。
// 另一种意见是"传名调用"（call by name），
// 即直接将表达式x + 5传入函数体，只在用到它的时候求值。Haskell语言采用这种策略。

/**
 * 传值调用比较简单，但是如果求值后的参数在函数内根本就用不到，会造成性能浪费，因此传名调用显得更科学
 * Thunk函数的含义
 * 编译器的"传名调用"实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做Thunk函数。
 */
// 上面的代码采有传名调用实现如下：
var thunk = function () {
    return x + 5;
};

function f(thunk){
    return thunk() * 2;
}

// JavaScript语言是传值调用，它的Thunk函数含义有所不同
// 在JavaScript语言中，Thunk函数替换的不是表达式，而是多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数。
// 正常版本的readFile（多参数版本）
fs.readFile(fileName, callback);

// Thunk版本的readFile（单参数版本）
var readFileThunk = Thunk(fileName);
readFileThunk(callback);

var Thunk = function (fileName){
    return function (callback){
        return fs.readFile(fileName, callback);
    };
};