/*
生产环境的转换器，建议使用 Thunkify 模块。

首先是安装。

$ npm install thunkify
使用方式如下。

var thunkify = require('thunkify');
var fs = require('fs');

var read = thunkify(fs.readFile);
read('package.json')(function(err, str){
  // ...
});
 */

// Thunkify 的源码与上一节那个简单的转换器非常像。
function thunkify(fn) {
    return function() {
        var args = new Array(arguments.length);
        var ctx = this;

        for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
        }

        return function (done) {
            var called;

            args.push(function () {
                if (called) return;
                called = true;
                done.apply(null, arguments);
            });

            try {
                fn.apply(ctx, args);
            } catch (err) {
                done(err);
            }
        }
    }
};

// 它的源码主要多了一个检查机制，变量called确保回调函数只运行一次。这样的设计与下文的 Generator 函数相关。请看下面的例子。
function f(a, b, callback){
    var sum = a + b;
    callback(sum);
    callback(sum);
}

var ft = thunkify(f);
var print = console.log.bind(console);
ft(1, 2)(print);
// 3
// 上面代码中，由于thunkify只允许回调函数执行一次，所以只输出一行结果。
