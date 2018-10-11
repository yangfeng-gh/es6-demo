/**
 * Created by yvan on 2016-06-29.
 */

// ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
// 情况一
if (true) {
    function f() {
    }
}

// 情况二
try {
    function f2() {
    }
} catch (e) {

}

// ES5严格模式
'use strict';
if (true) {
    function f3() {}
}
// 报错

// ES6严格模式
'use strict';
if (true) {
    function f4() {}
}
// 不报错
