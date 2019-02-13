// 下面是一个变通方法。首先，生成一个空对象，使用call方法绑定 Generator 函数内部的this。
// 这样，构造函数调用以后，这个空对象就是 Generator 函数的实例对象了。
function* F() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}
var obj = {};
var f = F.call(obj);

console.log(f.next());  // Object {value: 2, done: false}
console.log(f.next());  // Object {value: 3, done: false}
console.log(f.next());  // Object {value: undefined, done: true}

console.log(obj.a) // 1
console.log(obj.b) // 2
console.log(obj.c) // 3