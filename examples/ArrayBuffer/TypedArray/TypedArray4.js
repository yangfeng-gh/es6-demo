/*
TypedArray(arrayLikeObject)
构造函数的参数也可以是一个普通数组，然后直接生成TypedArray实例。
 */

const typedArray = new Uint8Array([1, 2, 3, 4]);

/*
注意，这时TypedArray视图会重新开辟内存，不会在原数组的内存上建立视图。
上面代码从一个普通的数组，生成一个 8 位无符号整数的TypedArray实例。
 */

// TypedArray 数组也可以转换回普通数组。
const normalArray = [...typedArray];
// or
const normalArray2 = Array.from(typedArray);
// or
const normalArray3 = Array.prototype.slice.call(typedArray);
