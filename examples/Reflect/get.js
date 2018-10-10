/*
Reflect.get(target, name, receiver)
Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
如果name属性部署了读取函数（getter），则读取函数的this绑定receiver。
 */

var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar;
    },
};

var myReceiverObject = {
    foo: 4,
    bar: 4,
};

var r = Reflect.get(myObject, 'baz', myReceiverObject) // 8
console.log(r)

/*
如果第一个参数不是对象，Reflect.get方法会报错。
 */
// Reflect.get(1, 'foo') // 报错
// Reflect.get(false, 'foo') // 报错