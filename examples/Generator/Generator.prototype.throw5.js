// 如果 Generator 函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。
var gen = function* gen(){
    yield console.log('hello');
    yield console.log('world');
}

var g = gen();
g.next();
g.throw();
// hello
// Uncaught undefined
// 上面代码中，g.throw抛出错误以后，没有任何try...catch代码块可以捕获这个错误，导致程序报错，中断执行。