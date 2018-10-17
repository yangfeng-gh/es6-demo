/*
数组原生具备iterator接口（即默认部署了Symbol.iterator属性），for...of循环本质上就是调用这个接口产生的遍历器，可以用下面的代码证明。
 */

var arr = ['red', 'green', 'blue'];

for(let v of arr) {
    console.log(v); // red green blue
}

var obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for(let v of obj) {
    console.log(v); // red green blue
}

// 上面代码中，空对象obj部署了数组arr的Symbol.iterator属性，结果obj的for...of循环，产生了与arr完全一样的结果。
// for...of循环可以代替数组实例的forEach方法。
arr.forEach(function (element, index) {
    console.log(element); // red green blue
    console.log(index);   // 0 1 2
});

// JavaScript 原有的for...in循环，只能获得对象的键名，不能直接获取键值。ES6 提供for...of循环，允许遍历获得键值。
arr = ['a', 'b', 'c', 'd'];

for (let a in arr) {
    console.log(a); // 0 1 2 3
}

for (let a of arr) {
    console.log(a); // a b c d
}