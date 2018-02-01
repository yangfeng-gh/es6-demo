/**
 * Generator函数是一个状态机，封装了多个内部状态。
 */
// Generator是实现状态机的最佳结构。比如，下面的clock函数就是一个状态机。
var ticking = true;
var clock = function() {
    if (ticking)
        console.log('Tick!');
    else
        console.log('Tock!');
    ticking = !ticking;
};
// 上面代码的clock函数一共有两种状态（Tick和Tock），每运行一次，就改变一次状态。这个函数如果用Generator实现，就是下面这样。

var clock2 = function*() {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};

var c = clock2();
c.next();
c.next();