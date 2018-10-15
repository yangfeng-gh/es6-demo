/**
 * 回调函数本身并没有问题，它的问题出现在多个回调函数嵌套。
 */
// 假定读取A文件之后，再读取B文件，代码如下。
fs.readFile(fileA, function (err, data) {
    fs.readFile(fileB, function (err, data) {
        // ...
    });
});
// 不难想象，如果依次读取多个文件，就会出现多重嵌套。代码不是纵向发展，而是横向发展，很快就会乱成一团，无法管理。
// 这种情况就称为"回调函数噩梦"（callback hell）。

// Promise就是为了解决这个问题而提出的。它不是新的语法功能，而是一种新的写法，允许将回调函数的嵌套，改成链式调用。
// 采用Promise，连续读取多个文件，写法如下。
var readFile = require('fs-readfile-promise');

readFile(fileA)
    .then(function (data) {
        console.log(data.toString());
    })
    .then(function () {
        return readFile(fileB);
    })
    .then(function (data) {
        console.log(data.toString());
    })
    .catch(function (err) {
        console.log(err);
    });

// 上面代码中，我使用了fs-readfile-promise模块，它的作用就是返回一个Promise版本的readFile函数。
// Promise提供then方法加载回调函数，catch方法捕捉执行过程中抛出的错误。

// 可以看到，Promise 的写法只是回调函数的改进，使用then方法以后，异步任务的两段执行看得更清楚了，除此以外，并无新意。
// Promise 的最大问题是代码冗余，原来的任务被Promise 包装了一下，不管什么操作，一眼看去都是一堆 then，原来的语义变得很不清楚。