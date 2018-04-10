/**
 * async函数的语法规则总体上比较简单，难点是错误处理机制。
 */
// （1）async函数返回一个Promise对象。
// async函数内部return语句返回的值，会成为then方法回调函数的参数。
async function f() {
    return 'hello world';
}

f().then(v => console.log(v))
// "hello world"

// async函数内部抛出错误，会导致返回的Promise对象变为reject状态。
// 抛出的错误对象会被catch方法回调函数接收到。
async function f2() {
    throw new Error('出错了');
}

f2().then(
    v => console.log(v),
    e => console.log(e)
)
// Error: 出错了

// （2）async函数返回的Promise对象，必须等到内部所有await命令的Promise对象执行完，才会发生状态改变。
// 也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)
// "ECMAScript 2017 Language Specification"

// （3）正常情况下，await命令后面是一个Promise对象。如果不是，会被转成一个立即resolve的Promise对象。
async function f() {
    return await 123;
}

f().then(v => console.log(v))
// 123
// 上面代码中，await命令的参数是数值123，它被转成Promise对象，并立即resolve。

// await命令后面的Promise对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
async function f() {
    await Promise.reject('出错了');
}

f()
    .then(v => console.log(v))
    .catch(e => console.log(e))
// 出错了
// 注意，上面代码中，await语句前面没有return，但是reject方法的参数依然传入了catch方法的回调函数。
// 这里如果在await前面加上return，效果是一样的。

// 只要一个await语句后面的Promise变为reject，那么整个async函数都会中断执行。
async function f() {
    await Promise.reject('出错了');
    await Promise.resolve('hello world'); // 不会执行
}
// 为了避免这个问题，可以将第一个await放在try...catch结构里面，这样第二个await就会执行。
async function f() {
    try {
        await Promise.reject('出错了');
    } catch(e) {
    }
    return await Promise.resolve('hello world');
}

f()
    .then(v => console.log(v))
// hello world

// 另一种方法是await后面的Promise对象再跟一个catch方面，处理前面可能出现的错误。
async function f() {
    await Promise.reject('出错了')
        .catch(e => console.log(e));
    return await Promise.resolve('hello world');
}

f()
    .then(v => console.log(v))
// 出错了
// hello world

// 如果有多个await命令，可以统一放在try...catch结构中。
async function main() {
    try {
        var val1 = await firstStep();
        var val2 = await secondStep(val1);
        var val3 = await thirdStep(val1, val2);

        console.log('Final: ', val3);
    }
    catch (err) {
        console.error(err);
    }
}

// （4）如果await后面的异步操作出错，那么等同于async函数返回的Promise对象被reject。
async function f() {
    await new Promise(function (resolve, reject) {
        throw new Error('出错了');
    });
}

f()
    .then(v => console.log(v))
    .catch(e => console.log(e))
// Error：出错了