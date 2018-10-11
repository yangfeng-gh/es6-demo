/*
对象的Symbol.hasInstance属性，指向一个内部方法。
当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
 */

class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}

console.log([1, 2, 3] instanceof new MyClass()); // true
// 上面代码中，MyClass是一个类，new MyClass()会返回一个实例。
// 该实例的Symbol.hasInstance方法，会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。

// 下面是另一个例子。
class Even {
    static [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
}

// 等同于
/*
const Even = {
    [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
};
*/
console.log(1 instanceof Even) // false
console.log(2 instanceof Even) // true
console.log(12345 instanceof Even)// false