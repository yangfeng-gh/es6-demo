// throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。
function* gen() {
    try {
        yield 1;
    } catch (e) {
        console.log('内部捕获');
    }
}

var g = gen();
g.throw(1);
// Uncaught 1
// 上面代码中，g.throw(1)执行时，next方法一次都没有执行过。
// 这时，抛出的错误不会被内部捕获，而是直接在外部抛出，导致程序出错。
// 这种行为其实很好理解，因为第一次执行next方法，等同于启动执行 Generator 函数的内部代码，
// 否则 Generator 函数还没有开始执行，这时throw方法只可能在函数外部抛出错误。