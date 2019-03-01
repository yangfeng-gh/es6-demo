/*
字节序指的是数值在内存中的表示方式。
 */

const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);

for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
    console.log(int32View);
}

const int16View = new Int16Array(buffer);
for (let i = 0; i < int16View.length; i++) {
    console.log("Entry " + i + ": " + int16View[i]);
}
