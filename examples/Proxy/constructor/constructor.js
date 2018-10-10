// construct方法用于拦截new命令，下面是拦截对象的写法。
var handler = {
    construct (target, args, newTarget) {
        return new target(...args);
    }
};

// construct方法可以接受两个参数。
// target：目标对象
// args：构造函数的参数对象
// newTarget：创造实例对象时，new命令作用的构造函数（下面例子的p）

var p = new Proxy(function () {}, {
    construct: function(target, args) {
        console.log('called: ' + args.join(', '));
        return { value: args[0] * 10 };
    }
});

(new p(1)).value
// "called: 1"
// 10
