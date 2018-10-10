/**
 * ES6引入Symbol的原因:mixin模式,防止属性名的冲突;
 * 新的原始数据类型, 表示独一无二的值,它是JavaScript语言的第七种数据类型;
 * 前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）;
 *
 * Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。
 * 也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
 */

'use strict';

let symbol = Symbol();
console.log(`typeof symbol: ${typeof symbol}`);

/*
Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
Symbol函数的参数相当于为它们加上了描述，输出的时候就能够分清，到底是哪一个值
 */
let s1 = Symbol('foo');
let s2 = Symbol('bar');
console.log(`s1 = ${s1}, s2 = ${s2}`)

/*
如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
 */
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym); // Symbol(abc)

