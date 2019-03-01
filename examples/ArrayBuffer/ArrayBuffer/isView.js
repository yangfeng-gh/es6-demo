/*
ArrayBuffer有一个静态方法isView，返回一个布尔值，表示参数是否为ArrayBuffer的视图实例。
这个方法大致相当于判断参数，是否为TypedArray实例或DataView实例。
 */

const buffer = new ArrayBuffer(8);
console.log(ArrayBuffer.isView(buffer)); // false

const v = new Int32Array(buffer);
console.log(ArrayBuffer.isView(v)); // true
