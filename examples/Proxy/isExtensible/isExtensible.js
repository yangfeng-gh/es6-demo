// isExtensible方法拦截Object.isExtensible操作。
var p = new Proxy({}, {
    isExtensible: function(target) {
        console.log("called");
        return true;
    }
});

console.log(Object.isExtensible(p));
// "called"
// true
// 上面代码设置了isExtensible方法，在调用Object.isExtensible时会输出called。
// 注意，该方法只能返回布尔值，否则返回值会被自动转为布尔值。
