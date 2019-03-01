/*
TypedArray(length)
视图还可以不通过ArrayBuffer对象，直接分配内存而生成。
 */

const f64a = new Float64Array(8);
f64a[0] = 10;
f64a[1] = 20;
f64a[2] = f64a[0] + f64a[1];
console.log(f64a[2]);

/*
上面代码生成一个 8 个成员的Float64Array数组（共 64 字节），然后依次对每个成员赋值。
这时，视图构造函数的参数就是成员的个数。可以看到，视图数组的赋值操作与普通数组的操作毫无两样。
 */
