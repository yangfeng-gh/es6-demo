/**
 * y修饰符
 */

var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

var a1 = r1.exec(s) // ["aaa"]
var a2 = r2.exec(s) // ["aaa"]
console.log('g修饰符：%s， y修饰符：%s，', a1, a2);
a1 = r1.exec(s) // ["aa"]
a2 = r2.exec(s) // null
console.log('g修饰符：%s， y修饰符：%s，', a1, a2);

const REGEX = /abc/g;
// 指定从2号位置（c）开始匹配
REGEX.lastIndex = 2;
// 匹配成功
let match = REGEX.exec('abc,abc,abc');
// 在4号位置匹配成功
console.log(match.index) // 4
// 下一次匹配从7号位开始
console.log(REGEX.lastIndex) // 7
// 7号位开始匹配失败
match = REGEX.exec('abc,abc,abc')
// 在8号位置匹配成功
console.log(match.index) // 8
// 下一次匹配从11号位开始
console.log(REGEX.lastIndex) // 11

match = REGEX.exec('abc,abc,abc')
// 在11号位置匹配失败
console.log(match) // // null
// 下一次匹配从0号位开始（重置为0）
console.log(REGEX.lastIndex)

match = REGEX.exec('abc,abc,abc')
// 在0号位置匹配成功
console.log(match)
// 下一次匹配从3号位开始
console.log(REGEX.lastIndex)