/**
 * Generator函数可以不用yield语句，这时就变成了一个单纯的暂缓执行函数。
 */

function* f() {
    console.log('f execute!');
}

var g = f(); // 若f是普通函数，则此时函数f就会执行

setTimeout(function() {
    g.next(); // 由于f是generator函数，只有在调用next方法时才会执行
}, 500);