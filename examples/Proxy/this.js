/**
虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。
主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
 */

const target = {
    m: function () {
        console.log(this === proxy);
    }
};
const handler = {};

const proxy = new Proxy(target, handler);

console.log(target.m()); // false
console.log(proxy.m());  // true

// 上面代码中，一旦proxy代理target.m，后者内部的this就是指向proxy，而不是target。

// 下面是一个例子，由于this指向的变化，导致 Proxy 无法代理目标对象。
const _name = new WeakMap();

class Person {
    constructor(name) {
        _name.set(this, name);
    }
    get name() {
        return _name.get(this);
    }
}

const jane = new Person('Jane');
jane.name // 'Jane'

const proxy = new Proxy(jane, {});
proxy.name // undefined

// 上面代码中，目标对象jane的name属性，实际保存在外部WeakMap对象_name上面，通过this键区分。
// 由于通过proxy.name访问时，this指向proxy，导致无法取到值，所以返回undefined。
