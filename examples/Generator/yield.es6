/**
  遍历器对象的next方法的运行逻辑如下。
 （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
 （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
 （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，
     作为返回的对象的value属性值。
 （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

  需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，
  因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。

  yield使用场景：
  1. yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
  2. forEach方法的参数是一个普通函数，在里面使用yield表达式会报错。
  3. yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
 */

function* gen() {
  yield  123 + 456; //yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值
}

function* testYield() {
  // console.log('Hello' + yield); // SyntaxError
  // console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello ' + (yield)); // OK
  console.log('Hello ' + (yield 123)); // OK
}

var gen = testYield()
gen.next(); // 无输出, 执到第一个yield表达式并暂停,返回undefined赋值为next()返回对象的value;
gen.next(); // Hello undefined，
// 接着执行上一个yield表达式所在的console, 执行第二个yield并暂停,
// 返回123赋值给next()返回对象的value,但是yield表达式永远返回undefined;
gen.next(); // Hello undefined， 接着执行第二个yield表达式所在的console