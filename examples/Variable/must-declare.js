/**
 * Created by yvan on 2016-06-29.
 * variable-hoisting
 * 不存在变量提升（声明提前）
 */

console.log(foo); // 输出undefined
console.log(bar); // 报错ReferenceError

var foo = 2;
let bar = 2;
