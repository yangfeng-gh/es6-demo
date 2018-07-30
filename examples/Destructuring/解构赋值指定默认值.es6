/**
 * Created by yvan on 2016-06-29.
 */
var [foo = true] = [];
foo // true

// 注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x = 1] = [undefined];
// x // 1
console.log(x);
var [y = 1] = [null];
console.log(y);
// x // null

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
function f() {
    console.log('aaa');
}

let [z = f()] = [1];
console.log(z);

