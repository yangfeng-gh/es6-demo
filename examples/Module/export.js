/**
 * export命令可以出现在模块的任何位置，只要处于模块顶层就可以。
 * 如果处于块级作用域内，就会报错。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。
 */

function v1() {
    console.log('this is v1');
}
function v2() {
    console.log('this is v2');
}

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};

// 写法一
export var m = 1;

// 写法二
var m2 = 2;
export {m2};

// 写法三
var n = 3;
export {n as m3};

//
export function f() {
    console.log('this is function f');
};

// 正确
function f2() {
    console.log('this is function f2');
}
export {f2};

// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

export var obj = {};
