/*
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
 */

// 简单例子
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});

// 上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。
// 过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。

// Promise 新建后就会立即执行
const promise = new Promise(function(resolve, reject) {
    console.log('promise created!')
    // ... some code
    if (true /* 异步操作成功 */){
        let value = 'success';
        return resolve(value);
        console.log(2); // 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
    } else {
        reject(error);
    }
});
// 上面代码中，调用resolve(value)以后，后面的console.log(2)还是会执行，并且会首先打印出来。
// 这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

// 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。
// 所以，尽管不需要return就可以在紧随其后的then回调中获取promise成功回调的返回值，最好还是在它们前面加上return语句，这样就不会有意外。

// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
promise.then(function(value) {
    // success
    console.log(value)
}, function(error) {
    // failure
    console.log(error)
});

console.log('Hi!');

// 上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。
// 然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

