/**
 * 如果Generator函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。
 */

function* g() {
    yield console.log('hello');
}

var it = g();
it.throw();