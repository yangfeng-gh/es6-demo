/**
 * finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
 * finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。
 * 这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
 * finally本质上是then方法的特例。
 */

// 实现
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason;
        })
    );
};
// 上面代码中，不管前面的 Promise 是fulfilled还是rejected，都会执行回调函数callback。

// 从上面的实现还可以看到，finally方法总是会返回原来的值。
// resolve 的值是 undefined
Promise.resolve(1).then(() => {}, () => {}).then(v => console.log('line22: ' + v))

// resolve 的值是 2
Promise.resolve(2).finally(() => {}).then(v => console.log('line25: ' + v))

// reject 的值是 undefined
Promise.reject(3).then(() => {}, () => {}).then(v => console.log('line28: ' + v))

// reject 的值是 4
Promise.reject(4).finally(() => {}).catch(v => console.log('line31: ' + v))

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

/*
promise
    .finally(() => {
        // 语句
    });

// 等同于
promise
    .then(
        result => {
            // 语句
            return result;
        },
        error => {
            // 语句
            throw error;
        }
    );
*/
// 上面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。

