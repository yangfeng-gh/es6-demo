/*
byteLength属性返回 TypedArray 数组占据的内存长度，单位为字节。
byteOffset属性返回 TypedArray 数组从底层ArrayBuffer对象的哪个字节开始。这两个属性都是只读属性。
 */

const b = new ArrayBuffer(8);

const v1 = new Int32Array(b);
const v2 = new Uint8Array(b, 2);
const v3 = new Int16Array(b, 2, 2);

console.log(v1.byteLength); // 8
console.log(v2.byteLength); // 6
console.log(v3.byteLength); // 4

