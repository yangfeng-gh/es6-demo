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

// 上面代码中，Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。
// 因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
