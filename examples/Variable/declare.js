/**
 * Created by yvan on 2016-06-29.
 */

// 不报错
function test() {
    var a = 1;
    var a = 10;
}

// 报错
function test() {
    var a = 1;
    let a = 10;
}
/*

// 报错
function () {
    let a = 10;
    let a = 1;
}

function func(arg) {
    let arg; // 报错，不能在函数内部重新声明参数
}

function func(arg) {
    {
        let arg; // 不报错
    }
}
*/
