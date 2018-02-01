/**
 * Symbol值作为对象属性名时，不能用点运算符;
 * 在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中;
 * Symbol值作为属性名时，该属性还是公开属性，不是私有属性。
 */
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, {
  value: 'Hello!'
});

// 以上写法都得到同样结果

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