/*
对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
 */

const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...myIterable]); // [1, 2, 3]

// 对象进行for...of循环时，会调用Symbol.iterator方法，返回该对象的默认遍历器

class Collection {
    *[Symbol.iterator]() {
        let i = 0;
        while(this[i] !== undefined) {
            yield this[i];
            ++i;
        }
    }
}

let myCollection = new Collection();
myCollection[0] = 1;
myCollection[1] = 2;

for(let value of myCollection) {
    console.log(value);
}
// 1
// 2