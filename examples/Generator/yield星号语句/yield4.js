/**
 * Created by yvan on 2016-06-28.
 */

function* inner() {
    yield 'hello!';
}

function* outer1() {
    yield 'open';
    yield inner();
    yield 'close';
}
var v;
var gen1 = outer1();
v = gen1.next().value; // "open"
v = gen1.next().value; // 返回一个遍历器对象
v = gen1.next().value; // "close"

function* outer2() {
    yield 'open';
    yield* inner();
    yield 'close'
}

var gen2 = outer2();
v = gen2.next().value; // "open"
v = gen2.next().value; // "hello!"
v = gen2.next().value; // "close"
