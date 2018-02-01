/**
 * Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
 */
{
  let target = {a: 1};

  let source1 = {b: 2};
  let source2 = {c: 3};

  Object.assign(target, source1, source2);
  console.log(target);
}


// 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
{
  let target = {a: 1, b: 1};

  let source1 = {b: 2, c: 2};
  let source2 = {c: 3};

  Object.assign(target, source1, source2);
  console.log(target);
}

// 如果只有一个参数，Object.assign会直接返回该参数。
{
  let obj = {a: 1};
  Object.assign(obj) === obj // true
  console.log(obj);
}

// 如果该参数不是对象，则会先转成对象，然后返回。
{
  let obj = Object.assign(2); // "object"
  console.log(typeof obj);
}

// 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
{
  // Object.assign(undefined) // 报错
  // Object.assign(null) // 报错
}

// 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
// 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。
// 这意味着，如果undefined和null不在首参数，就不会报错。
{
  let obj = {a: 1};
  Object.assign(obj, undefined) === obj // true
  Object.assign(obj, null) === obj // true
}

// 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。
// 但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
{
  let v1 = 'abc';
  let v2 = true;
  let v3 = 10;

  let obj = Object.assign({}, v1, v2, v3);
  console.log(obj); // { "0": "a", "1": "b", "2": "c" }
}

// Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），
// 也不拷贝不可枚举的属性（enumerable: false）。
{
  let obj = Object.assign({b: 'c'},
    Object.defineProperty({}, 'invisible', {
      enumerable: false,
      value: 'hello'
    })
  );
  console.log(obj);
}

// 属性名为Symbol值的属性，也会被Object.assign拷贝。
{
  let obj = Object.assign({a: 'b'}, {[Symbol('c')]: 'd'})
  console.log(obj);
}

// Object.assign方法实行的是浅拷贝，而不是深拷贝。
// 也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
{
  let obj1 = {a: {b: 1}};
  let obj2 = Object.assign({}, obj1);

  obj1.a.b = 2;
  console.log(obj2.a.b) // 2
}

// 对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
{
  let target = {a: {b: 'c', d: 'e'}}
  let source = {a: {b: 'hello'}}
  Object.assign(target, source)
  console.log(target);
}

// 注意，Object.assign可以用来处理数组，但是会把数组视为对象。
{
  let obj = Object.assign([1, 2, 3], [4, 5]);
  console.log(obj); // [4, 5, 3]
}

{
  // let obj = Object.assign(undefined, {a: 1})
  // console.log(obj) // Cannot convert undefined or null to object
}