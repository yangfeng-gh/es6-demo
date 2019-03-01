/*
TypedArray实例的buffer属性，返回整段内存区域对应的ArrayBuffer对象。该属性为只读属性。
 */

const a = new Float32Array(64);
const b = new Uint8Array(a.buffer);

/*
上面代码的a视图对象和b视图对象，对应同一个ArrayBuffer对象，即同一段内存。
 */
