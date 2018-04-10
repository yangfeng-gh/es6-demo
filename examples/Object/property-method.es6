/**
 * 为对象添加方法
 */
class SomeClass {
    constructor() {
        console.log('构造方法执行。。。');
    }
}

Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {
        console.log('someMethod方法执行。。。');
    },
    anotherMethod() {
        console.log('anotherMethod方法执行。。。');
    }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
    console.log('someMethod方法执行。。。');
};
SomeClass.prototype.anotherMethod = function () {
    console.log('anotherMethod方法执行。。。');
};

let someClass = new SomeClass();
someClass.someMethod();
someClass.anotherMethod();