/**
 * Created by yvan on 2016-07-01.
 */

var a1 = new Array(3);
var a2 = [undefined, undefined, undefined];
var a3 = [,,,];
console.log(2 in a1); // 空位数组中没有下标2
console.log(2 in a2); // 空位
console.log(2 in a3);