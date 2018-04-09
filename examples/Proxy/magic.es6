/**
 * 技巧: 将 Proxy 对象，设置到obj.proxy属性，从而可以在obj对象上调用。
 */

var target = {};
var handler = {};
var proxy = new Proxy(target, handler);

var obj = {proxy: proxy};
obj.proxy.a = 'a';
console.log(target.a);
