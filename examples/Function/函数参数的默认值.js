/**
 * 基本用法
 */

// 在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
function log(x, y) {
    y = y || 'World';
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

// 这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。
// 就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
if (typeof y === 'undefined') {
    y = 'World';
}

// ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

var p = new Point();
console.log(p);

// 参数变量是默认声明的，所以不能用let或const再次声明。

function foo(x = 5) {
    let x = 1; // error
    const x = 2; // error
}