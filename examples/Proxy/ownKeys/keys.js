/*
注意，使用Object.keys方法时，有三类属性会被ownKeys方法自动过滤，不会返回。

目标对象上不存在的属性
属性名为 Symbol 值
不可遍历（enumerable）的属性
 */
let target = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.for('secret')]: '4',
};

Object.defineProperty(target, 'key', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: 'static'
});

let handler = {
    ownKeys(target) {
        return ['a', 'd', Symbol.for('secret'), 'key'];
    }
};

let proxy = new Proxy(target, handler);
console.log(Object.keys(proxy));
// ['a']
// 上面代码中，ownKeys方法之中，显式返回不存在的属性（d）、Symbol 值（Symbol.for('secret')）、不可遍历的属性（key），结果都被自动过滤掉。