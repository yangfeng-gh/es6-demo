'use strict';
/**
 * ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组
 */

for (let index of ['a', 'b'].keys()) {
    console.log(`遍历数组的key: ${index}`);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(`遍历数组的entries: `${index}, ${elem});
}
// 0 "a"
// 1 "b"

let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
