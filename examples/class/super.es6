'use strict'
/**
 *  super这个关键字，有两种用法，含义不同。
 * （1）作为函数调用时（即super(...args)），super代表父类的构造函数。
 * （2）作为对象调用时（即super.prop或super.method()），super代表父类。
 *  注意，此时super即可以引用父类实例的属性和方法，也可以引用父类的静态方法。
 */
class A {
}

class B extends A {
  get m() {
    return this._p * super._p;
  }

  set m(value) {
    throw new Error('该属性只读');
  }
}

// 由于，对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。
var obj = {
  toString() {
    return "MyObject: " + super.toString();
  }
};

var str = obj.toString(); // MyObject: [object Object]
console.log(str);