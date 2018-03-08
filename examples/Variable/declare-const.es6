/**
 * Created by yvan on 2016-06-29.
 */
'use strict';
const foo = {};
foo.prop = 123;

foo.prop
// 123

// foo = {}; // TypeError: "foo" is read-only

const c = [];
c.push('Hello'); // 可执行
c.length = 0;    // 可执行
// a = ['Dave'];    // 报错

// 如果真的想将对象冻结，应该使用Object.freeze方法。
const foo2 = Object.freeze({});

// 常规模式时，下面一行不起作用;
// 严格模式时，该行会报错
// foo2.prop = 123;

// 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, value) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};

global.a = 1;
console.log(a); // 1

a = 2;
console.log(global.a); // 2