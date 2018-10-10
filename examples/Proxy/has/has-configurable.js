// 如果原对象不可配置或者禁止扩展，这时has拦截会报错。

var obj = { a: 10 };
Object.preventExtensions(obj);

var p = new Proxy(obj, {
    has: function(target, prop) {
        return false;
    }
});

'a' in p // TypeError is thrown

// 上面代码中，obj对象禁止扩展，结果使用has拦截就会报错。
// 也就是说，如果某个属性不可配置（或者目标对象不可扩展），则has方法就不得“隐藏”（即返回false）目标对象的该属性。
// 值得注意的是，has方法拦截的是HasProperty操作，而不是HasOwnProperty操作，即has方法不判断一个属性是对象自身的属性，还是继承的属性。
