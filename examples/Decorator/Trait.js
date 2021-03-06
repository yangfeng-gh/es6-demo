/**
 * Trait也是一种修饰器，效果与Mixin类似，但是提供更多功能，比如防止同名方法的冲突、排除混入某些方法、为混入的方法起别名等等。
 */

// 下面采用traits-decorator这个第三方模块作为例子。这个模块提供的traits修饰器，不仅可以接受对象，还可以接受ES6类作为参数。
import { traits } from 'traits-decorator';

class TFoo {
    foo() { console.log('foo') }
}

const TBar = {
    bar() { console.log('bar') }
};

@traits(TFoo, TBar)
class MyClass { }

let obj = new MyClass();
obj.foo() // foo
obj.bar() // bar
// 上面代码中，通过traits修饰器，在MyClass类上面“混入”了TFoo类的foo方法和TBar对象的bar方法。

// Trait不允许“混入”同名方法。

import { traits } from 'traits-decorator';

class TFoo {
    foo() { console.log('foo') }
}

const TBar = {
    bar() { console.log('bar') },
    foo() { console.log('foo') }
};

@traits(TFoo, TBar)
class MyClass { }
// 报错
// throw new Error('Method named: ' + methodName + ' is defined twice.');
//        ^
// Error: Method named: foo is defined twice.
// 上面代码中，TFoo和TBar都有foo方法，结果traits修饰器报错。

// 一种解决方法是排除TBar的foo方法。

import { traits, excludes } from 'traits-decorator';

class TFoo {
    foo() { console.log('foo') }
}

const TBar = {
    bar() { console.log('bar') },
    foo() { console.log('foo') }
};

@traits(TFoo, TBar::excludes('foo'))
class MyClass { }

let obj = new MyClass();
obj.foo() // foo
obj.bar() // bar
// 上面代码使用绑定运算符（::）在TBar上排除foo方法，混入时就不会报错了。

// 另一种方法是为TBar的foo方法起一个别名。

import { traits, alias } from 'traits-decorator';

class TFoo {
    foo() { console.log('foo') }
}

const TBar = {
    bar() { console.log('bar') },
    foo() { console.log('foo') }
};

@traits(TFoo, TBar::alias({foo: 'aliasFoo'}))
class MyClass { }

let obj = new MyClass();
obj.foo() // foo
obj.aliasFoo() // foo
obj.bar() // bar
// 上面代码为TBar的foo方法起了别名aliasFoo，于是MyClass也可以混入TBar的foo方法了。

// alias和excludes方法，可以结合起来使用。

@traits(TExample::excludes('foo','bar')::alias({baz:'exampleBaz'}))
class MyClass {}
// 上面代码排除了TExample的foo方法和bar方法，为baz方法起了别名exampleBaz。

// as方法则为上面的代码提供了另一种写法。

@traits(TExample::as({excludes:['foo', 'bar'], alias: {baz: 'exampleBaz'}}))
class MyClass {}