/*
Generator 函数的this
Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
 */

function* g() {
    this.a = 11;
}

g.prototype.hello = function () {
    return 'hi!';
};

let obj = g();

console.log(obj instanceof g) // true
console.log(obj.hello()) // 'hi!'
obj.next();
console.log(obj.a); // undefined
// 上面代码中，Generator 函数g在this对象上面添加了一个属性a，但是obj对象拿不到这个属性。

// Generator 函数也不能跟new命令一起用，会报错。
// new g(); TypeError: g is not a constructor
