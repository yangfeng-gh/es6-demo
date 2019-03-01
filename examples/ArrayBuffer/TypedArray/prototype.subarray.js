/*
subarray方法是对于 TypedArray 数组的一部分，再建立一个新的视图
 */

const a = new Uint16Array(8);
const b = a.subarray(2, 3);

console.log(a.byteLength);
console.log(b.byteLength);

/*
subarray方法的第一个参数是起始的成员序号，第二个参数是结束的成员序号（不含该成员），如果省略则包含剩余的全部成员。
所以，上面代码的a.subarray(2,3)，意味着 b 只包含a[2]一个成员，字节长度为 2。
 */
