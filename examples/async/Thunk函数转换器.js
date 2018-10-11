/**
 * 任何函数，只要参数有回调函数，就能写成Thunk函数的形式。
 */
// 下面是一个简单的Thunk函数转换器。
var that = null;
// ES5版本
var _Thunk = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function (callback) {
            args.push(callback);
            return fn.apply(this, args);
        }
    };
};

// ES6版本
var Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            that = this;
            // return fn.call(this, ...args, callback);
            return fn(...args, callback);
        }
    };
};

// !function () {
//     console.log(this === that);
// }();

// 使用上面的转换器，生成fs.readFile的Thunk函数。
// var fs = require('fs');
// var callback = function (error, str) {
//     console.log(str);
// };
// var readFileThunk = Thunk(fs.readFile);
// readFileThunk('goods.json')(callback);

// 下面是另一个完整的例子。
function f(a, b, cb) {
    cb(a, b);
}
let ft = Thunk(f);

let log = console.log.bind(console);
let add = function (a, b) {
    return a + b;
}

ft(1, 2)(log); // 1