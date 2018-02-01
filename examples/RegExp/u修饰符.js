/**
 * ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符。
 * 也就是说，会正确处理四个字节的UTF-16编码。
 */

console.log(/\uD83D/u.test('\uD83D\uDC2A')); //false
console.log(/\uD83D/.test('\uD83D\uDC2A')); //true

// （1）点字符
// 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的Unicode字符，点字符不能识别，必须加上u修饰符。
var s = '𠮷';

console.log(/^.$/.test(s)) // false
console.log(/^.$/u.test(s)) // true

// （2）Unicode字符表示法
// ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。
console.log(/\u{61}/.test('a')) // false
console.log(/\u{61}/u.test('a')) // true
console.log(/\u{20BB7}/u.test('𠮷')) // true

// （3）量词
// 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符。
// /a{2}/.test('aa') // true
// /a{2}/u.test('aa') // true
// /𠮷{2}/.test('𠮷𠮷') // false
// /𠮷{2}/u.test('𠮷𠮷') // true

// /^\u{3}$/.test('uuu') // true
// 上面代码中，由于正则表达式没有u修饰符，所以大括号被解读为量词。加上u修饰符，就会被解读为Unicode表达式。

// （4）预定义模式
// u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的Unicode字符。
// /^\S$/.test('𠮷') // false
// /^\S$/u.test('𠮷') // true

function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}

var s = '𠮷𠮷';

console.log(s.length) // 4
console.log(codePointLength(s)) // 2

var s = 'a b\nc';
var s2 = s.match(/\s/);
console.log(s);
console.log(s2);