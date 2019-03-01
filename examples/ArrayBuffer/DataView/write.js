/*
DataView 视图提供 8 个方法写入内存。

setInt8：写入 1 个字节的 8 位整数。
setUint8：写入 1 个字节的 8 位无符号整数。
setInt16：写入 2 个字节的 16 位整数。
setUint16：写入 2 个字节的 16 位无符号整数。
setInt32：写入 4 个字节的 32 位整数。
setUint32：写入 4 个字节的 32 位无符号整数。
setFloat32：写入 4 个字节的 32 位浮点数。
setFloat64：写入 8 个字节的 64 位浮点数。

这一系列set方法，接受两个参数，第一个参数是字节序号，表示从哪个字节开始写入，第二个参数为写入的数据。
对于那些写入两个或两个以上字节的方法，需要指定第三个参数，false或者undefined表示使用大端字节序写入，true表示使用小端字节序写入。
 */

// 在第1个字节，以大端字节序写入值为25的32位整数
dv.setInt32(0, 25, false);

// 在第5个字节，以大端字节序写入值为25的32位整数
dv.setInt32(4, 25);

// 在第9个字节，以小端字节序写入值为2.5的32位浮点数
dv.setFloat32(8, 2.5, true);

// 如果不确定正在使用的计算机的字节序，可以采用下面的判断方式。
const littleEndian = (function() {
    const buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true);
    return new Int16Array(buffer)[0] === 256;
})();
// 如果返回true，就是小端字节序；如果返回false，就是大端字节序。
