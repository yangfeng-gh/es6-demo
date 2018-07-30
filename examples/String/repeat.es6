/**
 * repeat方法返回一个新字符串，表示将原字符串重复n次。
 */

console.log('x'.repeat(3)); // 'xxx'
console.log('na'.repeat(0)); // ''

console.log('na'.repeat(2.9)); // 'nana'小数向下取整

// 'na'.repeat(Infinity)
// RangeError
// 'na'.repeat(-1)
// RangeError

// 参数NaN等同于0。
// 如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。

