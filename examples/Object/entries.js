/**
 * Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
 * 1.如果原对象的属性名是一个 Symbol 值，该属性会被忽略
 * 
 */
var obj = { foo: 'bar', baz: 42 };
var r = Object.entries(obj);
console.log(`Object.entries方法返回一个数组: ${JSON.stringify(r)}`)
