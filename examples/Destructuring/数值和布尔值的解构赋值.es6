/**
 * Created by yvan on 2016-06-30.
 */
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let {toString: s} = 123;
console.log(s === Number.prototype.toString); // true

let {toString: s2} = true;
console.log(s2 === Boolean.prototype.toString); // true

// 解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。
// 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError