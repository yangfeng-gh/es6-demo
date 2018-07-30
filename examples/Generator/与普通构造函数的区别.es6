/**
 * Created by yvan on 2016-06-28.
 */
function* g() {
    this.a = 11;
}

let obj = g();
console.log(obj.a); // undefined

function* F() {
    yield this.x = 2;
    yield this.y = 3;
}

new F();
// TypeError: F is not a constructor