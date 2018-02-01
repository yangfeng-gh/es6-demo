'use strict';
// 对象中的扩展运算符

/**
 * 解构赋值
 *
 *
 *
 * 3.解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，
 * 而不是这个值的副本;
 * 4.扩展运算符修饰的变量解构赋值不会拷贝继承自原型对象的属性;
 */

/**
 * 对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。
 * 所有的键和它们的值，都会拷贝到新对象上面。
 */
{
  const [a, ...b] = [1, 2, 3];
  console.log('解析赋值拷贝键值：a = %d, b = %s', a, b)
}

{
  let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
  console.log(`解析赋值拷贝键值： ${JSON.stringify(z)}`);
}

/**
 * 1.解构赋值要求等号右边是一个对象,如果等号右边是null,undefined就会报错;
 */
// let { x, y, ...z } = null; // 运行时错误
// let { x, y, ...z } = undefined; // 运行时错误
/**
 * 2.扩展运算符修饰的变量必须是最后一个参数，否则会报错;
 */
// let { x, ...y, ...z } = obj; // 句法错误
// let { ...x, y, z } = obj; // 句法错误

/**
 * 解构赋值的拷贝是浅拷贝，
 * 即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。
 */
{
  let obj = {a: {b: 1}};
  let {...n} = obj;
  obj.a.b = 2;
  console.log(`解构赋值的拷贝是浅拷贝: ${n.a.b}`) // 2
}
// 上面代码中，x是解构赋值所在的对象，拷贝了对象obj的a属性。a属性引用了一个对象，修改这个对象的值，会影响到解构赋值对它的引用。

{
  let o = Object.create({x: 1, y: 2});
  o.z = 3;
  // let {a, ...{b, c}} = o;
  // console.log(`${a}, ${b}, ${c}`);
}
// 上面代码中，变量x是单纯的解构赋值，所以可以读取继承的属性；扩展运算符产生的变量y和z，只能读取对象自身的属性，
// 所以只有变量z可以赋值成功

/**
 * 3.扩展运算符的解构赋值，不能复制继承自原型对象的属性
 */
{
  let o1 = {a: 1};
  let o2 = {b: 2};
  o2.__proto__ = o1;
  let o3 = {...o2};
  console.log(o3 === o2);
  console.log(`扩展运算符不会拷贝继承自原型对象的属性: ${JSON.stringify(o3)}`) // { b: 2 }
}

{
  const o = Object.create({ x: 1, y: 2 });
  o.z = 3;
  let o2 = {...o, m: 4, n: 5};
  console.log(`o2 = ${JSON.stringify(o2)}`)
}

{
  var [x1 = 1, y1 = x1] = [];
  var [x2 = 1, y2 = x2] = [2];
  var [x3 = 1, y3 = x3] = [1,2];
  var [x4 = y4, y4 = 1] = [];
  console.log(x1,y1);//1 1
  console.log(x2,y2);//2 2
  console.log(x3,y3);//1 2
  console.log(x4,y4);
}

/**
 * 2.扩展运算符
 * 扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。
 * 如果扩展运算符的参数是null或undefined，这个两个值会被忽略，不会报错。
 */
// 扩展运算符可以用于合并两个对象。
{
  let o1 = {a: 1};
  let o2 = {b: 2};
  let ab = {...o1, ...o2};
}
// 等同于
// let ab2 = Object.assign({}, o1, o2);

{
  let obj = {};
  let aWithOverrides = {...obj, x: 1, y: 2};
}
// 等同于
// let aWithOverrides2 = {...a, ...{x: 1, y: 2}};
// 等同于
// let x2 = 1, y2 = 2, aWithOverrides3 = {...a, x, y};
// 等同于
// let aWithOverrides4 = Object.assign({}, a, {x: 1, y: 2});
// 上面代码中，a对象的x属性和y属性，拷贝到新对象后会被覆盖掉。

{

  let previousVersion = {};
  let newVersion = {
    ...previousVersion,
    name: 'New Name' // Override the name property
  };
}

// 上面代码中，newVersion对象自定义了name属性，其他属性全部复制自previousVersion对象。
// 并不会抛出错误，因为x属性只是被定义，但没执行
{
  let obj = {}
  let aWithXGetter = {
    ...obj,
    get x() {
      throw new Error('not thrown yet');
    }
  };
}

// 会抛出错误，因为x属性被执行了
// {
//   let obj = {};
//   let runtimeError = {
//     ...obj,
//     ...{
//       get x() {
//         throw new Error('thrown now');
//       }
//     }
//   };
// }

{
  let emptyObject = {...null, ...undefined}; // 不报错
  let obj = {...undefined, ...{a: 1}}
  console.log('undefined: ', obj)
}
