/**
 * Created by yvan on 2016-06-30.
 */
var {foo, bar} = {foo: "aaa", bar: "bbb"};
console.log(foo, bar);

// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
var {baz} = {foo: "aaa", bar: "bbb"};
console.log(baz); //undefined

// 如果变量名与属性名不一致，必须写成下面这样。
// 真正被赋值的是后者，而不是前者。
var {foo: baz} = {foo: "aaa", bar: "bbb"};
console.log(baz); //aaa

var obj = {
    p: [
        "Hello",
        {y: "World"}
    ]
};

var {p: [x, {y}]} = obj;
console.log(x); // "Hello"
console.log(y); // "World"
// 这时p是模式，不是变量，因此不会被赋值。

let obj2 = {};
let arr2 = [];

({foo: obj2.prop, bar: arr[0]} = {foo: 123, bar: true});

console.log(obj2); // {prop:123}
console.log(arr2);// [true]


