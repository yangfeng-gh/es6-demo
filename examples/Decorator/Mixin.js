/**
 * 在修饰器的基础上，可以实现Mixin模式。
 * 所谓Mixin模式，就是对象继承的一种替代方案，中文译为“混入”（mix in），意为在一个对象之中混入另外一个对象的方法。即组合优于继承中的组合
 */

// 请看下面的例子。

const Foo = {
    foo() { console.log('foo') }
};

class MyClass {}

Object.assign(MyClass.prototype, Foo);

let obj = new MyClass();
obj.foo() // 'foo'
// 上面代码之中，对象Foo有一个foo方法，通过Object.assign方法，可以将foo方法“混入”MyClass类，导致MyClass的实例obj对象都具有foo方法。这就是“混入”模式的一个简单实现。

// 下面，我们部署一个通用脚本mixins.js，将mixin写成一个修饰器。
export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list);
    };
}
// 然后，就可以使用上面这个修饰器，为类“混入”各种方法。

import { mixins } from './mixins';

const Foo = {
    foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // "foo"
// 通过mixins这个修饰器，实现了在MyClass类上面“混入”Foo对象的foo方法。

// 不过，上面的方法会改写MyClass类的prototype对象，如果不喜欢这一点，也可以通过类的继承实现mixin。

class MyClass extends MyBaseClass {
    /* ... */
}
// 上面代码中，MyClass继承了MyBaseClass。如果我们想在MyClass里面“混入”一个foo方法，一个办法是在MyClass和MyBaseClass之间插入一个混入类，这个类具有foo方法，并且继承了MyBaseClass的所有方法，然后MyClass再继承这个类。

let MyMixin = (superclass) => class extends superclass {
    foo() {
        console.log('foo from MyMixin');
    }
};
// 上面代码中，MyMixin是一个混入类生成器，接受superclass作为参数，然后返回一个继承superclass的子类，该子类包含一个foo方法。

// 接着，目标类再去继承这个混入类，就达到了“混入”foo方法的目的。

class MyClass extends MyMixin(MyBaseClass) {
    /* ... */
}

let c = new MyClass();
c.foo(); // "foo from MyMixin"
// 如果需要“混入”多个方法，就生成多个混入类。

class MyClass extends Mixin1(Mixin2(MyBaseClass)) {
    /* ... */
}
// 这种写法的一个好处，是可以调用super，因此可以避免在“混入”过程中覆盖父类的同名方法。

let Mixin1 = (superclass) => class extends superclass {
    foo() {
        console.log('foo from Mixin1');
        if (super.foo) super.foo();
    }
};

let Mixin2 = (superclass) => class extends superclass {
    foo() {
        console.log('foo from Mixin2');
        if (super.foo) super.foo();
    }
};

class S {
    foo() {
        console.log('foo from S');
    }
}

class C extends Mixin1(Mixin2(S)) {
    foo() {
        console.log('foo from C');
        super.foo();
    }
}
// 上面代码中，每一次混入发生时，都调用了父类的super.foo方法，导致父类的同名方法没有被覆盖，行为被保留了下来。

new C().foo()
// foo from C
// foo from Mixin1
// foo from Mixin2
// foo from S
