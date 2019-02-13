/*
如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
 */
function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 'x';
    foo();
    yield 'y';
}

console.log('bar: ');
for (let v of bar()){
    console.log(v);
}
// "x"
// "y"

/*
yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。
 */

function* baz() {
    yield 'x';
    yield* foo();
    yield 'y';
}

/*
// 等同于
function* baz() {
    yield 'x';
    yield 'a';
    yield 'b';
    yield 'y';
}

// 等同于
function* baz() {
    yield 'x';
    for (let v of foo()) {
        yield v;
    }
    yield 'y';
}
// "x"
// "a"
// "b"
// "y"
}
*/

console.log('baz: ');
for (let v of baz()){
    console.log(v);
}
// "x"
// "a"
// "b"
// "y"

//
function* inner() {
    yield 'hello!';
}

function* outer1() {
    yield 'open';
    yield inner();
    yield 'close';
}

var gen = outer1()
console.log(gen.next().value); // "open"
console.log(gen.next().value); // 返回一个遍历器对象
console.log(gen.next().value); // "close"

function* outer2() {
    yield 'open'
    yield* inner()
    yield 'close'
}

var gen2 = outer2()
console.log(gen2.next().value ); // "open"
console.log(gen2.next().value); // "hello!"
console.log(gen2.next().value); // "close"

/*
从语法角度看，如果yield表达式后面跟的是一个遍历器对象，需要在yield表达式后面加上星号，表明它返回的是一个遍历器对象。
这被称为yield*表达式。
 */
let delegatedIterator = (function* () {
    yield 'Hello!';
    yield 'Bye!';
}());

let delegatingIterator = (function* () {
    yield 'Greetings!';
    yield* delegatedIterator;
    yield 'Ok, bye.';
}());

for(let value of delegatingIterator) {
    console.log(value);
}
// "Greetings!
// "Hello!"
// "Bye!"
// "Ok, bye."
// 上面代码中，delegatingIterator是代理者，delegatedIterator是被代理者。
// 由于yield* delegatedIterator语句得到的值，是一个遍历器，所以要用星号表示。
// 运行结果就是使用一个遍历器，遍历了多个 Generator 函数，有递归的效果。

/*
yield*后面的 Generator 函数（没有return语句时），等同于在 Generator 函数内部，部署一个for...of循环。
 */
function* concat(iter1, iter2) {
    yield* iter1;
    yield* iter2;
}
/*
// 等同于
function* concat(iter1, iter2) {
    for (var value of iter1) {
        yield value;
    }
    for (var value of iter2) {
        yield value;
    }
}
*/
// 上面代码说明，yield*后面的 Generator 函数（没有return语句时），不过是for...of的一种简写形式，完全可以用后者替代前者。
// 反之，在有return语句时，则需要用var value = yield* iterator的形式获取return语句的值。
