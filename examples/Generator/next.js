/*
无限循环Generator函数
yield表达式本身没有返回值,或者总是返回undefined, next()可以带一个参数，该参数就会被当作上一个yield表达式的返回值

Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。
通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。
也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
*/
function* f() {
  for (var i=0; true; i++) {
    var reset = yield i;
    if (reset) {i = -2}
  }
}

var g = f();
console.log('以下是g.next()的输出：')
console.log(g.next())
console.log(g.next())
console.log(g.next(true))
console.log(g.next())

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
console.log('以下是a.next()的输出：')
console.log(a.next()); // Object{value:6, done:false}
console.log(a.next()); // Object{value:NaN, done:false}
console.log(a.next()); // Object{value:NaN, done:true}

var b = foo(5);
console.log('以下是b.next()的输出：')
console.log(b.next()); // { value:6, done:false }
console.log(b.next(12)); // { value:8, done:false }
console.log(b.next(13)); // { value:42, done:true }

// 注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。
// V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。
// 从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。

// 再看一个通过next方法的参数，向 Generator 函数内部输入值的例子。
function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}

let genObj = dataConsumer();
genObj.next();
// Started
genObj.next('a')
// 1. a
genObj.next('b')
// 2. b

// 如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层。
function wrapper(generatorFunction) {
    return function (...args) {
        let generatorObject = generatorFunction(...args);
        generatorObject.next();
        return generatorObject;
    };
}

const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
});

wrapped().next('hello!')
// First input: hello!