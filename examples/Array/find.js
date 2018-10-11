/**
 * 数组实例的find方法，用于找出第一个符合条件的数组成员。
 * 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
 * 如果没有符合条件的成员，则返回undefined。
 */

var e = [1, 4, -5, -10].find((n) => n < 0);
//返回的是数组的成员，如果有多个数组成员在回调函数中返回true,仅返回第一个返回true的数组成员
console.log(`find返回的是第一个符合条件的数组成员: ${e}`);

var e2= [1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
})
// 2 与find不同：返回的是数组成员的下标。
console.log(`findIndex返回的是第一个符合条件的数组成员的下标: ${e2}`);

var objectArray = [{a:1, b:2},{a:5,b:6},{a:8,b:9}];

var r = objectArray.find(item => {
    return item.a > 1;
});
console.log(`当find操作对象数组是的返回值： ${JSON.stringify(r)}`)