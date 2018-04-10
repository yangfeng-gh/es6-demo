'use strict';
/**
 * Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
 * （包括ES6新增的数据结构Set和Map）。
 */
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c'];
console.log(`es5将类数组对象转成数组： ${arr1}`);

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c'];
console.log(`es6将类数组对象转成数组： ${arr2}`);


// NodeList对象
if (typeof window == 'object') {
    let ps = document.querySelectorAll('p');
    Array.from(ps).forEach(function(p) {
        console.log(`NodeList对象转成数组: ${p}`);
    });
}

// arguments对象
function foo() {
    var args = Array.from(arguments);
    console.log(`arguments对象转成数组：${args}`);
}
foo('a', 'b');

var str = Array.from('hello')
console.log(`字符串转成数组: ${str}`);
// ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
var set = Array.from(namesSet) // ['a', 'b']
console.log(`set集合转成数组: ${set}`);

// 如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。
var arr3 = Array.from([1, 2, 3]);
console.log(`当Array.from的参数是数组时返回原数组: ${arr3}`);
// [1, 2, 3]

// 扩展运算符（...）也可以将某些数据结构转为数组。
// arguments对象
function foo2() {
    var args = [...arguments];
    console.log(`function中的arguments: ${args}`);
}
foo2(1, 2);
// NodeList对象
if (typeof window == 'object') {
    [...document.querySelectorAll('div')]
}

// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);
var r = Array.from([1, 2, 3], x => x * x);
console.log(`Array.from的第二个参数是个回调函数：${r}`);

// 取出一组DOM节点的文本内容。
if (typeof window == 'object') {
    let spans = document.querySelectorAll('span.name');
    // map()
    let names1 = Array.prototype.map.call(spans, s => s.textContent);
    // Array.from()
    let names2 = Array.from(spans, s => s.textContent)
}

// 将数组中布尔值为false的成员转为0
var r2 = Array.from([1, , 3, ,5], n => n||0);
console.log(`将数组中布尔值为false的成员转为0: ${r2}`);

// 返回各种数据的类型
function typesOf () {
  return Array.from(arguments, value => typeof value)
}
var types = typesOf([], {}, null, NaN);
console.log(`返回各种数据的类型: ${types}`);

// 如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this
var context = {
    value: 'ok'
}
var r3 = Array.from([1,2,3], function(v,i) {return this.value}, context);
console.log(`Array.from的第三个参数用法：${r3}`);

var names = Array.from({ length: 2 }, () => 'jack');
console.log(`Array.from的第一个参数指定了第二个参数运行的次数: ${names}`);
