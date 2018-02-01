/**
 * Created by yvan on 2016-06-30.
 */
console.log(String.fromCharCode(0x20BB7));
// ES5提供String.fromCharCode方法
// 上面代码中，String.fromCharCode不能识别大于0xFFFF的码点，所以0x20BB7就发生了溢出，最高位2被舍弃了，
// 最后返回码点U+0BB7对应的字符，而不是码点U+20BB7对应的字符。

console.log(String.fromCodePoint(0x20BB7));

console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');