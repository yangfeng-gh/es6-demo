/**
 * 合并多个对象
 */

const merge = (target, ...sources) => Object.assign(target, ...sources);

// 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
const merge2 = (...sources) => Object.assign({}, ...sources);

{
  const obj = merge2({a: 1}, {b: 2})
  console.log(obj)
}
