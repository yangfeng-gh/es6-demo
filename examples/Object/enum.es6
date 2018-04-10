/**
 * 属性的可枚举性
 */


let obj = { foo: 123 };
let desc = Object.getOwnPropertyDescriptor(obj, 'foo')
console.log(desc);

let isEnumerable = Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
console.log(isEnumerable);

let toString = Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
console.log(toString);
// false

let len = Object.getOwnPropertyDescriptor([], 'length').enumerable
console.log(len);
// false

// 另外，ES6规定，所有Class的原型的方法都是不可枚举的。
let classPrototype = Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable
console.log(classPrototype);
// false