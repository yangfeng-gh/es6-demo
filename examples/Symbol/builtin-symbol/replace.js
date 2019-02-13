/*
对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。

String.prototype.replace(searchValue, replaceValue)
// 等同于
searchValue[Symbol.replace](this, replaceValue)
 */
class MyReplace {
    constructor(searchValue) {
        this.searchValue = searchValue;
    }
    [Symbol.replace](string, replaceValue) {
        return string.replace(this.searchValue, replaceValue);
    }
}
console.log('foobar'.replace(new MyReplace('foo'), 'hi')); // 3
console.log('foobar'.replace('foo', 'hi'));