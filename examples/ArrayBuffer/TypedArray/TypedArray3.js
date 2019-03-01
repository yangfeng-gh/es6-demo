/*
TypedArray(typedArray)
TypedArray 数组的构造函数，可以接受另一个TypedArray实例作为参数。
 */

const typedArray = new Int8Array(new Uint8Array(4));

/*
上面代码中，Int8Array构造函数接受一个Uint8Array实例作为参数。
注意，此时生成的新数组，只是复制了参数数组的值，对应的底层内存是不一样的。
新数组会开辟一段新的内存储存数据，不会在原数组的内存之上建立视图。
 */

const x = new Int8Array([1, 1]);
const y = new Int8Array(x);
x[0] // 1
y[0] // 1

x[0] = 2;
y[0] // 1

/*
上面代码中，数组y是以数组x为模板而生成的，当x变动的时候，y并没有变动。
 */

// 如果想基于同一段内存，构造不同的视图，可以采用下面的写法。
const x = new Int8Array([1, 1]);
const y = new Int8Array(x.buffer);
x[0] // 1
y[0] // 1

x[0] = 2;
y[0] // 2

