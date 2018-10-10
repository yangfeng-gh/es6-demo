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

s1 === s2 // true

/**
 * Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
 */
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined