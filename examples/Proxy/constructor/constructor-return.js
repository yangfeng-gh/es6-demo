// construct方法返回的必须是一个对象，否则会报错。
var p2 = new Proxy(function() {}, {
    construct: function(target, argumentsList) {
        return 1;
    }
});

new p2() // 报错