/**
 * Created by yvan on 2016-06-29.
 *
 * 提供块级作用域
 */
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[5](); // 10
a[6](); // 10,i的值永远都是10，执行a[1]...a[9]，其实都是执行console.log(i);
//a[10](); // a[10] is not a function

var a2 = [];
for (let i = 0; i < 10; i++) {
    a2[i] = function () {
        console.log(i);
    };
}
a2[6](); // 6

var tmp = new Date();
function f() {
    if (false) {
        var tmp = "hello world";
    }
    console.log(tmp);
}
f(); // undefined

var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5,本就输出‘hello’


{{{{
    {let insane = 'Hello World'}
    console.log(insane); // 报错
}}}};
// 上面代码使用了一个五层的块级作用域。外层作用域无法读取内层作用域的变量。

// 内层作用域可以定义外层作用域的同名变量。
{{{{
    let insane = 'Hello World';
    {let insane = 'Hello World'}
}}}}

// 块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了。
// IIFE写法
(function () {
    // var tmp = ...;
    // ...
}());

// 块级作用域写法
{
    // let tmp = ...;
    // ...
}