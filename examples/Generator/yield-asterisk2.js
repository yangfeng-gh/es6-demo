// 如果yield*后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。

function* gen(){
    yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value:"a", done:false }

// 上面代码中，yield命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器对象。

// 实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
let read = (function* () {
    yield 'hello';
    yield* 'hello';
})();

console.log(read.next().value); // "hello"
console.log(read.next().value); // "h"
// 上面代码中，yield表达式返回整个字符串，yield*语句返回单个字符。因为字符串具有 Iterator 接口，所以被yield*遍历。

// 如果被代理的 Generator 函数有return语句，那么就可以向代理它的 Generator 函数返回数据。
function* foo() {
    yield 2;
    yield 3;
    return "foo";
}

function* bar() {
    yield 1;
    var v = yield* foo();
    console.log("v: " + v);
    yield 4;
}

var it = bar();

console.log(it.next())
// {value: 1, done: false}
console.log(it.next())
// {value: 2, done: false}
console.log(it.next())
// {value: 3, done: false}
console.log(it.next())
// "v: foo"
// {value: 4, done: false}
console.log(it.next())
// {value: undefined, done: true}

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
}
function* logReturned(genObj) {
    let result = yield* genObj;
    console.log(result);
}

console.log([...logReturned(genFuncWithReturn())]);
// The result
// [ 'a', 'b' ]

// yield*命令可以很方便地取出嵌套数组的所有成员。
function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for(let i=0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    } else {
        yield tree;
    }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree)) {
    console.log(x);
}
// a
// b
// c
// d
// e