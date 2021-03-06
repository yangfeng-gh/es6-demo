/**
 * Generator可以看作是数据结构，更确切地说，可以看作是一个数组结构，
 * 因为Generator函数可以返回一系列的值，这意味着它可以对任意表达式，提供类似数组的接口。
 */

function *doStuff() {
    yield fs.readFile.bind(null, 'hello.txt');
    yield fs.readFile.bind(null, 'world.txt');
    yield fs.readFile.bind(null, 'and-such.txt');
}
// 上面代码就是依次返回三个函数，但是由于使用了Generator函数，导致可以像处理数组那样，处理这三个返回的函数。

for (task of doStuff()) {
    // task是一个函数，可以像回调函数那样使用它
}
// 实际上，如果用ES5表达，完全可以用数组模拟Generator的这种用法。

function doStuff() {
    return [
        fs.readFile.bind(null, 'hello.txt'),
        fs.readFile.bind(null, 'world.txt'),
        fs.readFile.bind(null, 'and-such.txt')
    ];
}
// 上面的函数，可以用一模一样的for...of循环处理！两相一比较，就不难看出Generator使得数据或者操作，具备了类似数组的接口。