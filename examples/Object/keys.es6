/**
 * ES5引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
 */
let {keys/*, values, entries*/} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
    console.log(key); // 'a', 'b', 'c'
}

// values()
// Generator函数的版本
function* values(obj) {
    for (let key of Object.keys(obj)) {
        yield [obj[key]]
    }
}
// 非Generator函数的版本
function values(obj) {
    let arr = [];
    for (let key of Object.keys(obj)) {
        arr.push(obj[key]);
    }
    return arr;
}

// entries()
// Generator函数的版本
function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

// 非Generator函数的版本
function entries(obj) {
    let arr = [];
    for (let key of Object.keys(obj)) {
        arr.push([key, obj[key]]);
    }
    return arr;
}

// ES7有一个提案，引入了跟Object.keys配套的Object.values和Object.entries。

/*for (let value of values(obj)) {
    console.log(value); // 1, 2, 3
}*/

for (let [key, value] of entries(obj)) {
    console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}


