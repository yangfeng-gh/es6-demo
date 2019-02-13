/*
另外，throw命令与g.throw方法是无关的，两者互不影响。
 */

var gen = function* gen(){
    yield console.log('hello');
    yield console.log('world');
}

var g = gen();
g.next();

try {
    throw new Error();
} catch (e) {
    g.next();
}
// hello
// world
// 上面代码中，throw命令抛出的错误不会影响到遍历器的状态，所以两次执行next方法，都进行了正确的操作。