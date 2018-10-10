// 这个方法有一个强限制，它的返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。
// 下面是一个例子。
var t = {} // t的extensible属性默认为true
var p = new Proxy(t, {
    isExtensible: function(target) {
        // return false; // 返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。
        return true;
    }
});

console.log(Object.isExtensible(p) === Object.isExtensible(t));
console.log(Object.isExtensible(p)) // 报错