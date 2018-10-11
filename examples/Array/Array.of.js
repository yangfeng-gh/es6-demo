/**
 * Array.of方法用于将一组值，转换为数组
 * 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
 */

var a1 = Array.of(3, 11, 8) // [3,11,8]
var a2 = Array.of(3) // [3]
var a3 = Array.of(3).length // 1

console.log(`Array.of方法用于将一组值，转换为数组: ${a1}, ${a2}, ${a3}`);

// 创建JS对象可以使用关键字new,也可以直接省略new
var a4 = new Array() // []
var a5 = Array(3) // [, , ,]
var a6 = new Array(3, 11, 8) // [3, 11, 8]
console.log(`创建JS对象可以使用关键字new,也可以直接省略new: ${a4}, ${a5}, ${a6}`);

// Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
var a7 = Array.of() // []
var a8 = Array.of(undefined) // [undefined]
var a9 = Array.of(1) // [1]
var a10 = Array.of(1, 2) // [1, 2]
console.log(`创建JS对象可以使用关键字new,也可以直接省略new: ${a7}, ${a8}, ${a9}, ${a10}`);
