/**
 * Created by yvan on 2016-06-29.
 *
 * ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
 * 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。
 */

var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}

if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}

// “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
typeof x; // ReferenceError
let x;

// 作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。
typeof undeclared_variable // "undefined"

// 有些“死区”比较隐蔽，不太容易发现。
function bar(x = y, y = 2) {
    return [x, y];
}

bar(); // 报错, 参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“。
// 相当于 let x = y; （此时y尚未声明）let y = 2; y使用在前，声明在后，处于暂时性死区，因此会报错

function bar(x = 2, y = x) {
    return [x, y];
}
bar(); // [2, 2], 相当于 let x=2; let y=x;