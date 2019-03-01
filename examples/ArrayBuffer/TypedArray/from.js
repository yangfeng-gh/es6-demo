/*
静态方法from接受一个可遍历的数据结构（比如数组）作为参数，返回一个基于这个结构的TypedArray实例。
 */

Uint16Array.from([0, 1, 2]);
// Uint16Array [ 0, 1, 2 ]

// 这个方法还可以将一种TypedArray实例，转为另一种。
const ui16 = Uint16Array.from(Uint8Array.of(0, 1, 2));
console.log(ui16 instanceof Uint16Array); // true

// from方法还可以接受一个函数，作为第二个参数，用来对每个元素进行遍历，功能类似map方法。
Int8Array.of(127, 126, 125).map(x => 2 * x);
// Int8Array [ -2, -4, -6 ]

Int16Array.from(Int8Array.of(127, 126, 125), x => 2 * x);
// Int16Array [ 254, 252, 250 ]

/*
上面的例子中，from方法没有发生溢出，这说明遍历不是针对原来的 8 位整数数组。
也就是说，from会将第一个参数指定的 TypedArray 数组，拷贝到另一段内存之中，处理之后再将结果转成指定的数组格式。
 */
