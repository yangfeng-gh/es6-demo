/**
 * 这两条继承链，可以这样理解：
 * 作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；
 * 作为一个构造函数，子类（B）的原型（prototype属性）是父类的实例。
 */
class A {
}

class B {
}

Object.setPrototypeOf = function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
}

// B的实例继承A的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B继承A的静态属性
Object.setPrototypeOf(B, A);

Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;

Object.create(A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;