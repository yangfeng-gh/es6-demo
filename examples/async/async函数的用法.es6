/**
 * async 函数的用法
 */
// 下面的例子，指定多少毫秒后输出一个值。
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
}

asyncPrint('hello world', 50);

// Async函数有多种使用形式。
// 函数声明
// async function foo() {}

// 函数表达式
// const foo = async function () {};

// 对象的方法
// let obj = { async foo() {} };

// 箭头函数
// const foo = async () => {};