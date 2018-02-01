/**
 * co模块是著名程序员TJ Holowaychuk于2013年6月发布的一个小工具，用于Generator函数的自动执行。
 * 前面说过，Generator就是一个异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。
 * 两种方法可以做到这一点。
 * （1）回调函数。将异步操作包装成Thunk函数，在回调函数里面交回执行权。
 * （2）Promise 对象。将异步操作包装成Promise对象，用then方法交回执行权。
 * co模块其实就是将两种自动执行器（Thunk函数和Promise对象），包装成一个模块。
 * 使用co的前提条件是，Generator函数的yield命令后面，只能是Thunk函数或Promise对象。
 */

var Thunk = function(fn) {
    return function (...args) {
        return function (callback) {
            that = this;
            return fn.call(this, ...args, callback);
        }
    };
};

var fs = require('fs');
var readFile = Thunk(fs.readFile);

var gen = function* (){
    var f1 = yield readFile('user.json');
    var f2 = yield readFile('goods.json');
    console.log(f1.toString());
    console.log(f2.toString());
};

// co模块可以让你不用编写Generator函数的执行器。
var co = require('co');
// co(gen);

// 上面代码中，Generator函数只要传入co函数，就会自动执行。

// co函数返回一个Promise对象，因此可以用then方法添加回调函数。
co(gen).then(function (){
    console.log('Generator 函数执行完成');
});
// 上面代码中，等到Generator函数执行结束，就会输出一行提示。