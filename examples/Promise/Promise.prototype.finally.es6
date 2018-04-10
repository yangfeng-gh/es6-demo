/**
 * finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。
 * 它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
 */

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason;
        })
    );
};
// 服务器使用Promise处理请求，然后使用finally方法关掉服务器。
// server.listen(0).then(function () {
//     // run test
// }).finally(server.stop);

// 上面代码中，不管前面的Promise是fulfilled还是rejected，都会执行回调函数callback。

Promise.resolve().then(()=> {
    throw new Error('finally test');
}).finally(callback);

function callback() {
    console.log('finally test');
}