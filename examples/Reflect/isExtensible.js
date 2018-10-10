/*
Reflect.isExtensible(target)
Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。
 */

// 旧写法
// 新对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty); // === true

// 可以变的不可扩展.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 密封对象是不可扩展的.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false

// 新写法
const myObject = {};
console.log(Reflect.isExtensible(myObject))  // true

/*
如果参数不是对象，Object.isExtensible会返回false，因为非对象本来就是不可扩展的，而Reflect.isExtensible会报错。
 */
// Object.isExtensible(1) // false
// Reflect.isExtensible(1) // 报错