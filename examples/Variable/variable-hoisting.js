/**
 * variable-hoisting 变量提升
 */

// 变量提升导致的问题
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log('inner i = %d', i)
    }, 0)
}
console.log('outer i = %d', i)

// 解决方案一: let
for (let j = 1; j <= 3; j++) {
    setTimeout(function () {
        console.log('j = %d', j)
    }, 0)
}
// console.log(j)
// ReferenceError: j is not defined

// 解决方案二：IIFE
for (var m = 1; m <= 3; m++) {
    (function (m) {
        setTimeout(function () {
            console.log('iife m = %d', m)
        }, 0)
    })(m)
}
