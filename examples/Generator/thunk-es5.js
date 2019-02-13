// ES5版本
var Thunk = function(fn){
    return function (){
        var args = Array.prototype.slice.call(arguments);
        return function (callback){
            args.push(callback);
            return fn.apply(this, args);
        }
    };
};

function f(a, cb) {
    cb(a);
}
const ft = Thunk(f);

ft(1)(console.log) // 1

var arr = [1, 2, 3];
console.log(arr.shift());
// console.log(arr.pop());
console.log(arr);
