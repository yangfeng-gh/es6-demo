/*
ownKeys方法还可以拦截Object.getOwnPropertyNames()。
 */

var p = new Proxy({}, {
    ownKeys: function(target) {
        return ['a', 'b', 'c'];
    }
});

console.log(Object.getOwnPropertyNames(p));
// [ 'a', 'b', 'c' ]