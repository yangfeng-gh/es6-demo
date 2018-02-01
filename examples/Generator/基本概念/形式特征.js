/**
 * Generator函数是一个普通函数，但是有两个特征。
 * 一是，function关键字与函数名之间有一个星号；
 * 二是，函数体内部使用yield语句，定义不同的内部状态
 */

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
var result;

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