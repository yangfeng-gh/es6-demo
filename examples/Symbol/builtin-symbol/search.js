/*
对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
String.prototype.search(regexp)
// 等同于
regexp[Symbol.search](this)
 */

class MySearch {
    constructor(value) {
        this.value = value;
    }
    [Symbol.search](string) {
        return string.search(this.value);
    }
}
console.log('foobar'.search(new MySearch('bar'))); // 3