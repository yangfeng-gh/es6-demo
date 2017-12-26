/**
 * 无限循环Generator函数
 * yield表达式本身没有返回值,或者总是返回undefined, next()可以带一个参数，该参数就会被当作上一个yield表达式的返回值
 */
function* f() {
  for (var i=0; true; i++) {
    var reset = yield i;
    if (reset) {i = -1}
  }
}

var g = f();
console.log(g.next())
console.log(g.next())
console.log(g.next(true))