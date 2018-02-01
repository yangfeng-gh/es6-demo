/**
 * 集合数据结构需要一种统一的接口机制，来处理所有不同的数据结构
 * 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。
 * 任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）
 * 
 * Iterator的作用有三个：
 * 一是为各种数据结构，提供一个统一的、简便的访问接口；
 * 二是使得数据结构的成员能够按某种次序排列；
 * 三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费
 * 
 * Iterator的遍历过程：
 * （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 * （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 * （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 * （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 * 
 * 每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。
 * 其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
 */
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ? {
                value: array[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            };
        }
    };
}
// 上面代码定义了一个makeIterator函数，它是一个遍历器生成函数，作用就是返回一个遍历器对象。
// 对数组['a', 'b']执行这个函数，就会返回该数组的遍历器对象（即指针对象）it

// 对于遍历器对象来说，done: false和value: undefined属性都是可以省略的，因此上面的makeIterator函数可以简写成下面的形式。
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++]} :
        {done: true};
    }
  };
}