/**
 * 扩展运算符（spread）是三个点（...）
 * 将一个数组转为用逗号分隔的参数序列。
 */

console.log(...[1, 2, 3])

function push(array, ...items) {
    array.push(...items);
}


function add(x, y) {
    return x + y;
}

var numbers = [4, 38];
var sum = add(...numbers) // 42
console.log(sum);

// 由于JavaScript不提供求数组最大元素的函数，所以只能套用Math.max函数，将数组转为一个参数序列，然后求最大值。
// ES5的写法
Math.max.apply(null, [14, 3, 77])

// ES6的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);

// ES5的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);

// ES5
var d1 = new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6
var d2 = new Date(...[2015, 1, 1]);
console.log(d1, d2);