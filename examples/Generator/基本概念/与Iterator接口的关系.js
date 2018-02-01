/**
 * 任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。
 * 由于Generator函数就是遍历器生成函数，因此可以把Generator赋值给对象的Symbol.iterator属性，从而使得该对象具有Iterator接口。
 */

var myIterator = {};
myIterator[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...myIterator]);

// Generator函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
function* gen() {
    // TODO
}
var g = gen();
console.log(g[Symbol.iterator]() === g);
// 上面代码中，gen是一个Generator函数，调用它会生成一个遍历器对象g。
// 它的Symbol.iterator属性，也是一个遍历器对象生成函数，执行后返回它自己。