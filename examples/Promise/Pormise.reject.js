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
// 上面代码生成一个Promise对象的实例p，状态为rejected，回调函数会立即
// 执行。