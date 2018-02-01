/**
 * 
 */
var gen = function* gen(){
    try {
        yield console.log('hello');
    } catch (e) {
        // ...
    }
    yield console.log('world');
}

var g = gen();
g.next();
g.throw();
g.next();
// hello
// world
/*
    上面代码在两次next方法之间，使用throw方法抛出了一个错误。
    由于这个错误在Generator函数内部被捕获了，所以不影响第二次next方法的执行。
    如果Generator函数内部没有try...catch,则遍历直接终止
*/