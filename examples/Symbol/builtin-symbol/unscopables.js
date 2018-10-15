/*
对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。
 */

Array.prototype[Symbol.unscopables]
// {
//   copyWithin: true,
//   entries: true,
//   fill: true,
//   find: true,
//   findIndex: true,
//   includes: true,
//   keys: true
// }

console.log(Object.keys(Array.prototype[Symbol.unscopables]));
// ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'includes', 'keys']

// 上面代码说明，数组有 7 个属性，会被with命令排除。

// 没有 unscopables 时
class MyClass {
    foo() { return 1; }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
    console.log(foo()); // 1
}

// 有 unscopables 时
class MyClass2 {
    foo() { return 1; }
    get [Symbol.unscopables]() {
        return { foo: true };
    }
}

with (MyClass2.prototype) {
    console.log(foo()); // 2
}