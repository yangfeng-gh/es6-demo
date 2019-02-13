/*
throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法。
 */
var gen = function* gen(){
    try {
        yield console.log('a');
    } catch (e) {
        // ...
    }
    yield console.log('b');
    yield console.log('c');
}

var g = gen();
g.next() // a
g.throw() // b
g.next() // c

// 上面代码中，g.throw方法被捕获以后，自动执行了一次next方法，所以会打印b。
// 另外，也可以看到，只要 Generator 函数内部部署了try...catch代码块，那么遍历器的throw方法抛出的错误，不影响下一次遍历。