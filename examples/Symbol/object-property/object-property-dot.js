/**
 * Symbol值作为对象属性名时，不能用点运算符;
 */
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
console.log(a[mySymbol]) // undefined
console.log(a['mySymbol']); // "Hello!"
// 上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。