/**
 * Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数。
 */
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
var v;
var g = gen();

v = g.next();        // { value: 1, done: false }
v = g.return('foo'); // { value: "foo", done: true }
v = g.next();        // { value: undefined, done: true }
// 面代码中，遍历器对象g调用return方法后，返回值的value属性就是return方法的参数foo。
// 并且，Generator函数的遍历就终止了，返回值的done属性为true，以后再调用next方法，done属性总是返回true。

// 如果return方法调用时，不提供参数，则返回值的value属性为undefined。
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return() // { value: undefined, done: true }