/*
ownKeys方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。

Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.keys()
for...in循环
 */

// 下面是拦截Object.keys()的例子。
let target = {
    a: 1,
    b: 2,
    c: 3
};

let handler = {
    ownKeys(target) {
        return ['a'];
    }
};

let proxy = new Proxy(target, handler);
console.log(Object.keys(proxy));
// [ 'a' ]
// 上面代码拦截了对于target对象的Object.keys()操作，只返回a、b、c三个属性之中的a属性。
