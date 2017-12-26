/**
 * 静态属性指的是Class本身的属性，即Class.propname，而不是定义在实例对象（this）上的属性。
 */
class Foo {
}

Foo.prop = 1;
Foo.prop // 1

// ES6明确规定，Class内部只有静态方法，没有静态属性。
// 以下两种写法都无效
class Foo {
    // 写法一
    prop: 2

    // 写法二
    static prop: 2
}

Foo.prop // undefined

// ES7有一个静态属性的提案，目前Babel转码器支持。
// 类的静态属性只要在上面的实例属性写法前面，加上static关键字就可以了。
class MyClass {
    static myStaticProp = 42;

    constructor() {
        console.log(MyClass.myProp); // 42
    }
}

// 老写法
class Foo {
}
Foo.prop = 1;

// 新写法
class Foo {
    static prop = 1;
}