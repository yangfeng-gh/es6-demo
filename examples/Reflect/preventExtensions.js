/*
Reflect.preventExtensions(target)
Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。
 */

var myObject = {};

// 旧写法
Object.preventExtensions(myObject) // Object {}

// 新写法
Reflect.preventExtensions(myObject) // true

/*
如果参数不是对象，Object.preventExtensions在 ES5 环境报错，在 ES6 环境返回传入的参数，而Reflect.preventExtensions会报错。
 */

Object.preventExtensions(1)
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1)
// false                         (ES6 code)

Reflect.preventExtensions(1)
// TypeError: 1 is not an object