// getPrototypeOf方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。

// Object.prototype.__proto__
// Object.prototype.isPrototypeOf()
// Object.getPrototypeOf()
// Reflect.getPrototypeOf()
// instanceof
// 下面是一个例子。

var proto = {};
var p = new Proxy({}, {
    getPrototypeOf(target) {
        return proto;
    }
});
Object.getPrototypeOf(p) === proto // true

// 注意，getPrototypeOf方法的返回值必须是对象或者null，否则报错。
// 另外，如果目标对象不可扩展（extensible）， getPrototypeOf方法必须返回目标对象的原型对象。