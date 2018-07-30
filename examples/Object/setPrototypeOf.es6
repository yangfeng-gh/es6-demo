/**
 * Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象。
 * 它是ES6正式推荐的设置原型对象的方法。
 */

// 格式
// Object.setPrototypeOf(object, prototype)

// 用法
var o = Object.setPrototypeOf({}, null);

// 该方法等同于下面的函数。

function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
}

let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x // 10
obj.y // 20
obj.z // 40