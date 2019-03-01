const buffer = new ArrayBuffer(32);
console.log(buffer.byteLength); // 32

/*
用途：检查内存是否分配成功
如果要分配的内存区域很大，有可能分配失败（因为没有那么多的连续空余内存），所以有必要检查是否分配成功。
 */
if (buffer.byteLength === 32) {
    // 成功
} else {
    // 失败
}
