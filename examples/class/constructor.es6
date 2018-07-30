'use strict';

/**
 * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
 * 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
 * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
 */

function Point(x, y) {
    this.x = x
    this.y = y
}

class Foo {
    constructor() {
        return Object.create(null);
    }
}

console.log(new Foo() instanceof Foo);
// false