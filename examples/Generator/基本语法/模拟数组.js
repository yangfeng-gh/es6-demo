/**
 * Created by yvan on 2016-06-28.
 */
function *doStuff() {
    yield fs.readFile.bind(null, 'hello.txt');
    yield fs.readFile.bind(null, 'world.txt');
    yield fs.readFile.bind(null, 'and-such.txt');
}

// 相当于
function doStuff() {
    return [
        fs.readFile.bind(null, 'hello.txt'),
        fs.readFile.bind(null, 'world.txt'),
        fs.readFile.bind(null, 'and-such.txt')
    ];
}

// 上面的函数，可以用一模一样的for...of循环处理！
// 两相一比较，就不难看出Generator使得数据或者操作，具备了类似数组的接口。
for (task of doStuff()) {
    // task是一个函数，可以像回调函数那样使用它
}