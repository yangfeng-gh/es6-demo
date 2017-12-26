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

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }