/*
ArrayBuffer转为字符串，或者字符串转为ArrayBuffer，有一个前提，即字符串的编码方法是确定的。
假定字符串采用 UTF-16 编码（JavaScript 的内部编码方式），可以自己编写转换函数。
 */

// ArrayBuffer 转为字符串，参数为 ArrayBuffer 对象
function ab2str(buf) {
    // 注意，如果是大型二进制数组，为了避免溢出，
    // 必须一个一个字符地转
    if (buf && buf.byteLength < 1024) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }

    const bufView = new Uint16Array(buf);
    const len =  bufView.length;
    const bstr = new Array(len);
    for (let i = 0; i < len; i++) {
        bstr[i] = String.fromCharCode.call(null, bufView[i]);
    }
    return bstr.join('');
}

// 字符串转为 ArrayBuffer 对象，参数为字符串
function str2ab(str) {
    const buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
    const bufView = new Uint16Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
