// catch方法之中，还能再抛出错误。
const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function() {
    console.log('oh yes');
}).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为 y 没有声明
    y + 2; // UnhandledPromiseRejectionWarning: ReferenceError: y is not defined
}).then(function() {
    console.log('carry on');
});
// oh no [ReferenceError: x is not defined]

// 上面代码中，catch方法抛出一个错误，因为后面没有别的catch方法了，导致这个错误不会被捕获，也不会传递到外层。