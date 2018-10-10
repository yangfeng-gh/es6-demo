/*
Reflect.getPrototypeOf(obj)
Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。
 */
function Greeting(name) {
    this.name = name;
}

const myObj = new Greeting();

// es5写法
console.log(Object.getPrototypeOf(myObj) === Greeting.prototype); // true

// es6写法
console.log(Reflect.getPrototypeOf(myObj) === Greeting.prototype); // true

/*
Reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是，
如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，然后再运行，
而Reflect.getPrototypeOf会报错
 */

Object.getPrototypeOf(1) // Number {[[PrimitiveValue]]: 0}
Reflect.getPrototypeOf(1) // TypeError: Reflect.getPrototypeOf called on non-object