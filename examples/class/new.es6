/**
 * Created by yvan on 2016-07-27.
 * 类的构造函数，不使用new是没法调用的，会报错。
 * 这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
 */

class Foo {
    constructor() {
        return Object.create(null);
    }
}

Foo(); //TypeError: class constructor Foo cannot be invoked without 'new'