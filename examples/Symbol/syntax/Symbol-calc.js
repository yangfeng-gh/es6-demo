/**
 * Symbol值不能与其他类型的值进行运算，会报错。
 * 但Symbol值可以显式转为字符串
 */
var sym = Symbol('My symbol');

// "your symbol is " + sym
// TypeError: can't convert symbol to string
//     `your symbol is ${sym}`
// TypeError: can't convert symbol to string

var sym = Symbol('My symbol');

console.log(String(sym)); // 'Symbol(My symbol)'
console.log(sym.toString()); // 'Symbol(My symbol)'