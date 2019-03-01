/*
TypedArray 数组的所有构造函数，都有一个静态方法of，用于将参数转为一个TypedArray实例。
 */


Float32Array.of(0.151, -8, 3.7);
// Float32Array [ 0.151, -8, 3.7 ]


// 下面三种方法都会生成同样一个 TypedArray 数组。
// 方法一
let tarr = new Uint8Array([1,2,3]);

// 方法二
let tarr2 = Uint8Array.of(1,2,3);

// 方法三
let tarr3 = new Uint8Array(3);
tarr[0] = 1;
tarr2[1] = 2;
tarr3[2] = 3;
