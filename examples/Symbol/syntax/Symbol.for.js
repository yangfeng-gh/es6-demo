/**
 * 有时，我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点
 * 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。
 * 如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
 * 
 * Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。
 * 它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
 */

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

console.log(s1 === s2); // true

console.log(Symbol.for("bar") === Symbol.for("bar")); // true
console.log(Symbol("bar") === Symbol("bar")); // false

// 上面代码中，由于Symbol()写法没有登记机制，所以每次调用都会返回一个不同的值。

/**
 * Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
 */
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"

var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

// 上面代码中，变量s2属于未登记的 Symbol 值，所以返回undefined。
// 需要注意的是，Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。