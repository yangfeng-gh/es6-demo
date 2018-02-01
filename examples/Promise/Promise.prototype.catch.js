/**
 * Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
 * 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
 * catch方法返回的还是一个Promise对象，因此后面还可以接着调用then方法。
 */

var promise = new Promise(function (resolve, reject) {
    throw new Error('test');
});
promise.catch(function (error) {
    console.log(error);
});
// Error: test

// 等价于
// 写法一
var promise = new Promise(function (resolve, reject) {
    try {
        throw new Error('写法一');
    } catch (e) {
        reject(e);
    }
});
promise.catch(function (error) {
    console.log(error);
});


// 写法二
var promise = new Promise(function (resolve, reject) {
    reject(new Error('写法二'));
});
promise.catch(function (error) {
    console.log(error);
});

// 如果Promise状态已经变成Resolved，再抛出错误是无效的。
var promise = new Promise(function (resolve, reject) {
    resolve('ok');
    throw new Error('如果Promise状态已经变成Resolved，再抛出错误是无效的');
});
promise.then(function (value) {
    console.log(value)
}).catch(function (error) {
    console.log(error)
});

var someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function() {
    console.log('everything is great');
});
// 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应。
// Chrome浏览器不遵守这条规定，它会抛出错误“ReferenceError: x is not defined”。

var promise = new Promise(function(resolve, reject) {
    resolve("ok");
    setTimeout(function() { throw new Error('test') }, 0)
});
promise.then(function(value) { console.log(value) });
// ok
// Uncaught Error: test

// 上面代码中，Promise指定在下一轮“事件循环”再抛出错误，结果由于没有指定使用try...catch语句，就冒泡到最外层，成了未捕获的错误。
// 因为此时，Promise的函数体已经运行结束了，所以这个错误是在Promise函数体外抛出的。

// Node.js有一个unhandledRejection事件，专门监听未捕获的reject错误
process.on('unhandledRejection', function (err, p) {
    console.error(err.stack)
});
// 第一个是错误对象，第二个是报错的Promise实例

var someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing()
    .catch(function(error) {
        console.log('oh no', error);
    })
    .then(function() {
        console.log('carry on');
    });
// oh no [ReferenceError: x is not defined]
// carry on
// 上面代码运行完catch方法指定的回调函数，会接着运行后面那个then方法指定的回调函数。如果没有报错，则会跳过catch方法。

someAsyncThing().then(function() {
    return someOtherAsyncThing();
}).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2;
}).catch(function(error) {
    console.log('carry on', error);
});
// oh no [ReferenceError: x is not defined]
// carry on [ReferenceError: y is not defined]
// 上面代码中，第二个catch方法用来捕获，前一个catch方法抛出的错误。