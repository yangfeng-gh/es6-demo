/*
注意，TypedArray 数组没有concat方法。如果想要合并多个 TypedArray 数组，可以用下面这个函数。
 */

function concatenate(resultConstructor, ...arrays) {
    let totalLength = 0;
    for (let arr of arrays) {
        totalLength += arr.length;
    }
    let result = new resultConstructor(totalLength);
    let offset = 0;
    for (let arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}

const r = concatenate(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4));
console.log(r);
// Uint8Array [1, 2, 3, 4]
