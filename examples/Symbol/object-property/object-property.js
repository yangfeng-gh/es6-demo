/**
 * 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
 * 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
 */

let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a2 = {
    [mySymbol]: 'Hello!'
};

// 第三种写法
let a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
console.log(a[mySymbol])
console.log(a2[mySymbol])
console.log(a3[mySymbol])

/**
 * Symbol类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
 */
const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
  }
}