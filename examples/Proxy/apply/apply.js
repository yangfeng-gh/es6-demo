/*
apply方法拦截函数的调用、call和apply操作。
apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
 */

var target = function () { return 'I am the target'; };
var handler = {
    apply: function () {
        return 'I am the proxy';
    }
};

var p = new Proxy(target, handler);

console.log(p())
// "I am the proxy"

// 上面代码中，变量p是 Proxy 的实例，当它作为函数调用时（p()），就会被apply方法拦截，返回一个字符串。

var twice = {
    apply (target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
};

function sum (left, right) {
    return left + right;
};

var proxy = new Proxy(sum, twice);
console.log(proxy(1, 2)) // 6
console.log(proxy.call(null, 5, 6)) // 22
console.log(proxy.apply(null, [7, 8])) // 30

// 上面代码中，每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。

// 另外，直接调用Reflect.apply方法，也会被拦截。

console.log(Reflect.apply(proxy, null, [9, 10])) // 38