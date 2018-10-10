/**
 * 1. 一个模块只能有一个默认输出，因此export default命令只能使用一次。
 *
 * 2. import命令后面才不用加大括号，因为只可能存在唯一对应的export default命令
 *
 * 3. 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
 */

export * from './profile';

export default function foo() {
    console.log('foo');
}

// 或者写成
/*
function foo() {
    console.log('foo');
}

export default foo;
*/


