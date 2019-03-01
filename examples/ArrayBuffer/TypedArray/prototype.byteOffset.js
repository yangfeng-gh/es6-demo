const b = new ArrayBuffer(8);

const v1 = new Int32Array(b);
const v2 = new Uint8Array(b, 2);
const v3 = new Int16Array(b, 2, 2);

console.log(v1.byteOffset); // 0
console.log(v2.byteOffset); // 2
console.log(v3.byteOffset); // 2
