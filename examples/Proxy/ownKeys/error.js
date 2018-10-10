/**
1. ownKeys方法返回的数组成员，只能是字符串或 Symbol 值。如果有其他类型的值，或者返回的根本不是数组，就会报错。
 */

var obj = {};

var p = new Proxy(obj, {
    ownKeys: function(target) {
        return [123, true, undefined, null, {}, []];
    }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 123 is not a valid property name
// 上面代码中，ownKeys方法虽然返回一个数组，但是每一个数组成员都不是字符串或 Symbol 值，因此就报错了。
