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

/*
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
*/