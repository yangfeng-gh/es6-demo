/*
TypedArray(buffer, byteOffset=0, length?)
视图的构造函数可以接受三个参数：
第一个参数（必需）：视图对应的底层ArrayBuffer对象。
第二个参数（可选）：视图开始的字节序号，默认从 0 开始。
第三个参数（可选）：视图包含的数据个数，默认直到本段内存区域结束。
 */

// 创建一个8字节的ArrayBuffer
const b = new ArrayBuffer(8);

// 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾
const v1 = new Int32Array(b);

// 创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾
const v2 = new Uint8Array(b, 2);

// 创建一个指向b的Int16视图，开始于字节2，长度为2
const v3 = new Int16Array(b, 2, 2);

// 注意，byteOffset必须与所要建立的数据类型一致，否则会报错
const buffer = new ArrayBuffer(8);
const i16 = new Int16Array(buffer, 1);
// Uncaught RangeError: start offset of Int16Array should be a multiple of 2

/*
上面代码中，新生成一个 8 个字节的ArrayBuffer对象，然后在这个对象的第一个字节，建立带符号的 16 位整数视图，结果报错。
因为，带符号的 16 位整数需要两个字节，所以byteOffset参数必须能够被 2 整除。

如果想从任意字节开始解读ArrayBuffer对象，必须使用DataView视图，因为TypedArray视图只提供 9 种固定的解读格式。
 */
