/**
 * 1. import命令可以出现在模块的任何位置，只要处于模块顶层就可以。
 *    如果处于块级作用域内，就会报错。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。
 *
 * 2. import命令输入的变量都是只读的，因为它的本质是输入接口。但是，如果输入变量是一个对象，改写对象的属性是允许的。
 *
 * 3. 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
 *
 * 4. import语句会执行所加载的模块。
 *
 * 5. 多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。
 *
 * 6. 因为import在静态解析阶段执行，所以它是一个模块之中最早执行的。所以与require命令混用可能不会得到预期结果。
 */

import {m} from './export.js';
// m = {}; // Syntax Error : 'a' is read-only;

// 但是，如果a是一个对象，改写a的属性是允许的。
import {obj} from './export.js';
obj.name = 'obj1';
console.log(obj);

// import命令具有提升效果
// .js后缀可以省略
console.log(m3)
import { m3 } from './export';

// import语句会执行所加载的模块。
// 多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。
import './export';
import './export';

import Point from './Point';
let point = new Point(12.34, 56.68);
console.log(point);

import foo from './export-import';
foo();