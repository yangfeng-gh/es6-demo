/**
 * created by yvan on 2016-07-27.
 * 与函数一样，class也可以使用表达式的形式定义。
 */

const MyClass = class me {
    getclassname() {
        return me.name;
    }
};
// 上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是myclass而不是me，me只在class的内部代码可用，指代当前类。

var myclass = new MyClass();
var name = myclass.getclassname();
console.log(name);

// 采用Class表达式，可以写出立即执行的Class。
let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('张三');

person.sayName(); // "张三"