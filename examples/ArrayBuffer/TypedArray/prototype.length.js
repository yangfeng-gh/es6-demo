/*
length属性表示 TypedArray 数组含有多少个成员。注意将byteLength属性和length属性区分，前者是字节长度，后者是成员长度。
 */

const a = new Int16Array(8);

console.log(a.length); // 8
console.log(a.byteLength); // 16
