const handler = {
    set: function(obj, prop, value, receiver) {
        obj[prop] = receiver;
    }
};
const proxy = new Proxy({}, handler);
proxy.foo = 'bar';
console.log(proxy.foo === proxy) // true

// 上面代码中，set方法的第四个参数receiver，指的是原始的操作行为所在的那个对象，一般情况下是proxy实例本身，请看下面的例子。
const myObj = {};
Object.setPrototypeOf(myObj, proxy);

myObj.foo = 'bar';
console.log(myObj.foo === myObj); // true
// 上面代码中，设置myObj.foo属性的值时，myObj并没有foo属性，因此引擎会到myObj的原型链去找foo属性。
// myObj的原型对象proxy是一个 Proxy 实例，设置它的foo属性会触发set方法。这时，第四个参数receiver就指向原始赋值行为所在的对象myObj。

