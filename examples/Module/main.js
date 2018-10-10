import {firstName, lastName, year} from './profile.js';

function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}

console.log(firstName, lastName, year);

import {multiply} from  './profile.js';
console.log(multiply(2, 3));


import { area, circumference } from './circle';
console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));

// 模块的整体加载
import * as circle from './circle';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

// 模块整体加载所在的那个对象（本例是circle），应该是可以静态分析的，所以不允许运行时改变。
// 下面两行都是不允许的
circle.foo = 'hello';
console.log(circle); // 实测可以改变
