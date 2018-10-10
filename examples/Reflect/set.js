/*
Reflect.set(target, name, value, receiver)
Reflect.set方法设置target对象的name属性等于value。
 */

var myObject = {
    foo: 1,
    set bar(value) {
        return this.foo = value;
    }
}

console.log('myObject.foo: %d', myObject.foo) // 1

Reflect.set(myObject, 'foo', 2);
console.log('myObject.foo: %d', myObject.foo) // 2

Reflect.set(myObject, 'bar', 3)
console.log('myObject.foo: %d', myObject.foo) // 3

/*
如果name属性设置了赋值函数，则赋值函数的this绑定receiver。
 */
var myReceiverObject = {
    foo: 0,
};
Reflect.set(myObject, 'bar', 4, myReceiverObject);
console.log('myReceiverObject.foo: %d', myReceiverObject.foo); // 4

/*
如果 Proxy 对象和 Reflect 对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver，
那么Reflect.set会触发Proxy.defineProperty拦截。
 */
let p = {
    a: 'a'
};

let handler = {
    set(target, key, value, receiver) {
        console.log('set');
        Reflect.set(target, key, value, receiver)
    },
    defineProperty(target, key, attribute) {
        console.log('defineProperty');
        Reflect.defineProperty(target, key, attribute);
    }
};

let obj = new Proxy(p, handler);
obj.a = 'A';
// set
// defineProperty

/*
上面代码中，Proxy.set拦截里面使用了Reflect.set，而且传入了receiver，导致触发Proxy.defineProperty拦截。
这是因为Proxy.set的receiver参数总是指向当前的 Proxy 实例（即上例的obj），
而Reflect.set一旦传入receiver，就会将属性赋值到receiver上面（即obj），导致触发defineProperty拦截。
如果Reflect.set没有传入receiver，那么就不会触发defineProperty拦截。
 */

let handler2 = {
    set(target, key, value, receiver) {
        console.log('set');
        Reflect.set(target, key, value)
    },
    defineProperty(target, key, attribute) {
        console.log('defineProperty');
        Reflect.defineProperty(target, key, attribute);
    }
};

let obj2 = new Proxy(p, handler2);
obj2.a = 'A';
// set

/*
如果第一个参数不是对象，Reflect.set会报错。
 */
// Reflect.set(1, 'foo', {}) // 报错
// Reflect.set(false, 'foo', {}) // 报错