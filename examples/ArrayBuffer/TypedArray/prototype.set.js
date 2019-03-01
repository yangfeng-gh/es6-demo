/*
TypedArray 数组的set方法用于复制数组（普通数组或 TypedArray 数组），也就是将一段内容完全复制到另一段内存。
 */
const a = new Uint8Array(8);
const b = new Uint8Array(8);

b.set(a);


/*
上面代码复制a数组的内容到b数组，它是整段内存的复制，比一个个拷贝成员的那种复制快得多。
*/

// set方法还可以接受第二个参数，表示从b对象的哪一个成员开始复制a对象。
const a = new Uint16Array(8);
const b = new Uint16Array(10);

b.set(a, 2);

/*上面代码的b数组比a数组多两个成员，所以从b[2]开始复制。*/
