/**
 * 返回一个新的Promise实例，该实例的状态为rejected。它的参数用法与Promise.resolve方法完全一致。
 */
var p = Promise.reject('出错了');
// 等同于
var p = new Promise((resolve, reject) => reject('出错了'));

p.then(null, function (s){
    console.log(s)
});
// 出错了
// 上面代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。

// 注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。
const thenable = {
    then(resolve, reject) {
        reject('出错了');
    }
};

Promise.reject(thenable)
    .catch(e => {
        console.log(e === thenable)
    })
// true
// 上面代码中，Promise.reject方法的参数是一个thenable对象，
// 执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象。