/*
DataView实例提供 8 个方法读取内存。
getInt8：读取 1 个字节，返回一个 8 位整数。
getUint8：读取 1 个字节，返回一个无符号的 8 位整数。
getInt16：读取 2 个字节，返回一个 16 位整数。
getUint16：读取 2 个字节，返回一个无符号的 16 位整数。
getInt32：读取 4 个字节，返回一个 32 位整数。
getUint32：读取 4 个字节，返回一个无符号的 32 位整数。
getFloat32：读取 4 个字节，返回一个 32 位浮点数。
getFloat64：读取 8 个字节，返回一个 64 位浮点数。

这一系列get方法的参数都是一个字节序号（不能是负数，否则会报错），表示从哪个字节开始读取。
 */
const buffer = new ArrayBuffer(24);
const dv = new DataView(buffer);

// 从第1个字节读取一个8位无符号整数
const v1 = dv.getUint8(0);

// 从第2个字节读取一个16位无符号整数
const v2 = dv.getUint16(1);

// 从第4个字节读取一个16位无符号整数
const v3 = dv.getUint16(3);

/*
如果一次读取两个或两个以上字节，就必须明确数据的存储方式，到底是小端字节序还是大端字节序。
默认情况下，DataView的get方法使用大端字节序解读数据，如果需要使用小端字节序解读，必须在get方法的第二个参数指定true。
 */
// 小端字节序
const v4 = dv.getUint16(1, true);

// 大端字节序
const v5 = dv.getUint16(3, false);

// 大端字节序
const v6 = dv.getUint16(3);
