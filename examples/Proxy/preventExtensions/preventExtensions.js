/*
preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
这个方法有一个限制，只有目标对象不可扩展时（即Object.isExtensible(proxy)为false），proxy.preventExtensions才能返回true，否则会报错。
 */
var p = new Proxy({}, {
    preventExtensions: function(target) {
        return true;
    }
});

// Object.preventExtensions(p); // 报错
// 上面代码中，proxy.preventExtensions方法返回true，但这时Object.isExtensible(proxy)会返回true，因此报错。

// 为了防止出现这个问题，通常要在proxy.preventExtensions方法里面，调用一次Object.preventExtensions。
var p2 = new Proxy({}, {
    preventExtensions: function(target) {
        console.log('called');
        Object.preventExtensions(target);
        return true;
    }
});

Object.preventExtensions(p2);
console.log(Object.preventExtensions({}));
// "called"
// true