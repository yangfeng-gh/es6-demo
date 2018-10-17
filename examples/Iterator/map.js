let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
    console.log(pair);
}
// ['a', 1]
// ['b', 2]

for (let [key, value] of map) {
    console.log(key + ' : ' + value);
}
// a : 1
// b : 2

// 有些数据结构是在现有数据结构的基础上，计算生成的。比如，ES6 的数组、Set、Map 都部署了以下三个方法，调用后都返回遍历器对象。
let arr = ['a', 'b', 'c'];
for (let pair of arr.entries()) {
    console.log(pair);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']