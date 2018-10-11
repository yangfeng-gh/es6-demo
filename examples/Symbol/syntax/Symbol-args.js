/*
注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
 */

// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

console.log(s1 === s2); // false

// 有参数的情况
let s3 = Symbol('foo');
let s4 = Symbol('foo');

console.log(s3 === s4); // false