/*
对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。

String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)
*/

class MyMatcher {
    constructor(regexp) {
        this.regexp = regexp;
    }
    [Symbol.match](string) {
        return string.match(this.regexp);
    }
}

console.log('hello world'.match(new MyMatcher('e'))) // [ 'e', index: 1, input: 'hello world' ]
