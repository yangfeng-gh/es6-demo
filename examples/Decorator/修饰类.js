/**
* 修饰器（Decorator）是一个函数，用来修改类的行为。这是ES7的一个提案，目前Babel转码器已经支持。
*/
function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable;
    }
}

@testable(true)
class MyTestableClass {}
console.log(MyTestableClass.isTestable); // true

@testable(false)
class MyClass {}
console.log(MyClass.isTestable); // false

// mixins.js
export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

// main3.js
import { mixins } from './mixins'

const Foo = {
    foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass2 {}

let obj = new MyClass();
obj.foo() // 'foo'

// 上面代码通过修饰器mixins，把Foo类的方法添加到了MyClass的实例上面。可以用Object.assign()模拟这个功能。
const Foo2 = {
    foo() { console.log('foo') }
};

class MyClass3 {}

Object.assign(MyClass.prototype, Foo);

let obj2 = new MyClass();
obj2.foo() // 'foo'
