/*
Reflect.defineProperty方法基本等同于Object.defineProperty，用来为对象定义属性。
未来，后者会被逐渐废除，请从现在开始就使用Reflect.defineProperty代替它。
 */

let obj = Object.create(null);

// 旧写法
Object.defineProperty(obj, 'now', {
    value: 1
});

// 新写法
Reflect.defineProperty(obj, 'now2', {
    value: 2
});

console.log(obj.now, obj.now2);

/*
如果Reflect.defineProperty的第一个参数不是对象，就会抛出错误。
 */
// Reflect.defineProperty(1, 'foo')

/*
这个方法可以与Proxy.defineProperty配合使用。
 */
const p = new Proxy({}, {
    defineProperty(target, prop, descriptor) {
        console.log(descriptor);
        return Reflect.defineProperty(target, prop, descriptor);
    }
});

p.foo = 'bar';
// {value: "bar", writable: true, enumerable: true, configurable: true}

console.log(p.foo);
// "bar"