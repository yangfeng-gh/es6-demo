/**
 * yield语句后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，
 * 因此等于为JavaScript提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
 */

function* gen() {
    yield 123 + 456;
}

var it = gen();
var next = it.next();
console.log(next.value);