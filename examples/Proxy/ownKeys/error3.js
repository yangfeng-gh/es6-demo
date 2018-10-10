/**
 另外，如果目标对象是不可扩展的（ non-extensible），这时ownKeys方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错。
 */

var obj = {
    a: 1
};

Object.preventExtensions(obj);

var p = new Proxy(obj, {
    ownKeys: function(target) {
        return ['a', 'b'];
    }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible
// 上面代码中，obj对象是不可扩展的，这时ownKeys方法返回的数组之中，包含了obj对象的多余属性b，所以导致了报错。