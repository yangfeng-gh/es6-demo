// throw方法可以接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。

var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log(e);
    }
};

var i = g();
console.log(i.next()); // 启动generator函数，执行到yield语句暂停，此时generator函数还没有执行完。
i.throw(new Error('出错了！'));
// Error: 出错了！(…)
console.log(i.next());

// 注意，不要混淆遍历器对象的throw方法和全局的throw命令。
// 上面代码的错误，是用遍历器对象的throw方法抛出的，而不是用throw命令抛出的。
// 后者只能被函数体外的catch语句捕获。

