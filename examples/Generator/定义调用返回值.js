/**
 * 每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。
 * Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。
 */

// 1. 定义
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

// 2. 调用,返回的并不是函数运行结果，而是一个指向内部状态的指针对象，即Iterator Object
var hw = helloWorldGenerator();
var result;

// 3. 遍历
result = hw.next();
console.log(result);
// { value: 'hello', done: false }

result = hw.next();
console.log(result);
// { value: 'world', done: false }

result = hw.next();
console.log(result);
// { value: 'ending', done: true }

result = hw.next();
console.log(result);
// { value: undefined, done: true }