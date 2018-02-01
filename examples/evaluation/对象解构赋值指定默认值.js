/**
 * Created by yvan on 2016-06-30.
 */
// 对象的解构也可以指定默认值。
var {x = 3} = {};
console.log(x); // 3

var {x2, y2 = 5} = {x2: 1};
console.log(x2); // 1
console.log(y2); // 5

var { message: msg = "Something went wrong" } = {};
console.log(msg); // "Something went wrong"

// 默认值生效的条件是，对象的属性值严格等于undefined。
var {x3 = 3} = {x3: undefined};
console.log(x3); // 3

var {x4 = 3} = {x4: null};
console.log(x4); // null

// 如果解构失败，变量的值等于undefined。
var {foo} = {bar: 'baz'};
console.log(foo); //undefined

// 错误的写法
var x5;
{x5} = {x5: 1};
// SyntaxError: syntax error
// 上面代码的写法会报错，因为JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。
// 只有不将大括号写在行首，避免JavaScript将其解释为代码块，才能解决这个问题。
// 正确的写法
var x6;
({x6} = {x6: 1});

// 解构赋值允许，等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。

({} = [true, false]);
({} = 'abc');
({} = []);
// 上面的表达式虽然毫无意义，但是语法是合法的，可以执行。

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。

let { log, sin, cos } = Math;
// 上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。