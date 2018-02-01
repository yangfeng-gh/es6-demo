/**
 * 与严格比较运算符（===）的行为基本一致
 * NaN === NaN
 */

Object.is('foo', 'foo')
// true
Object.is({}, {})
// false

+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// ES5可以通过下面的代码，部署Object.is
Object.defineProperty(Object, 'is', {
    value: function(x, y) {
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});

// polyfill
if (!Object.is) {
    Object.is = function(x, y) {
        // SameValue algorithm
        if (x === y) {
            //  +0 != -0, 当x!==0时，返回true, 当x==+0,y==-0(y==+0,x==-0)时，1/x == Infinity, 1/y==-Infinity, 根据Infinity ！= -Infinity
            // 推算出+0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            //  NaN == NaN, 根据NaN不等于自身的特点判断出x==NaN,y==NaN时返回true, 其他x!=y的情况返回false
            return x !== x && y !== y;
        }
    };
}