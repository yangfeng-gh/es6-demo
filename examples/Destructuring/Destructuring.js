/**
 * Created by yvan on 2016-06-29.
 */

// 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3

let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

let [a, b, ...c] = ['a'];
// x // "a"
// y // undefined
// z // []

// 如果解构不成功，变量的值就等于undefined。
var [foo2] = [];
var [bar2, foo2] = [1];
console.log(foo2);

// 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。
// 这种情况下，解构依然可以成功。
let [x2, y2] = [1, 2, 3];
// x // 1
// y // 2

let [a2, [b2], d2] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4

