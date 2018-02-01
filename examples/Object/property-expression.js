/**
 * Created by yvan on 2016-06-23.
 */
"use strict";
// es3 支持的语法, es5严格模式下报obj is not defined
/*
obj.foo = true;
obj['a' + 'bc'] = 123;
*/

// 直接量语法
var obj2 = {
    foo: true,
    abc: 123
};

// 仅es6支持的语法
let propKey = 'foo';

let obj3 = {
    [propKey]: true, //es6对象字面量属性名可以使用变量
    ['a'+'bc']: 123 //es6对象字面量属性名可以是表达式
};

var lastWord = 'last word';
var a = {
    'first word': 'hello',
    [lastWord]: 'word'
};
console.log(a['first word']);
console.log(a[lastWord]);
console.log(a['last word']);

/*表达式还可以用于定义方法名*/
let obj4 = {
    ['h' + 'ello'](){
        return 'hi';
    }
};

console.log(obj4.hello());

/*属性名表达式与简洁表示法，不能同时使用，会报错*/
var foo = 'bar';
var bar = 'abc';
//var baz = {[foo]}; //incorrect

var baz = {[foo]: 'abc'}; //correct