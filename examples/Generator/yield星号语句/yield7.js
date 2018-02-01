/**
 * Created by yvan on 2016-06-28.
 */
function* gen(){
    yield* ["a", "b", "c"];
}
var v;
v = gen().next()
// { value:"a", done:false }
console.log(v);

// 任何数据结构只要有Iterator接口，就可以被yield*遍历。
let read = (function* () {
    yield 'hello';
    yield* 'hello';
})();


v = read.next().value // "hello"
console.log(v);
v = read.next().value // "h"
console.log(v);
