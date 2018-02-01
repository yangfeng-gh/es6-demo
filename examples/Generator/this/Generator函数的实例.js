/**
 * Created by yvan on 2016-06-28.
 */
function* g() {}

g.prototype.hello = function () {
    return 'hi!';
};

let obj = g();

console.log(obj instanceof g); // true
let v = obj.hello() // 'hi!'
console.log(v);