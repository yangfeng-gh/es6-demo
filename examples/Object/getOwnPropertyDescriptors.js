/*
功能:
所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。

语法: Object.getOwnPropertyDescriptors(obj)
obj: 需要查找的目标对象
 */

var person = {
  name: '张三',
  age: 18
}
var desc = Object.getOwnPropertyDescriptors(person, 'name');
console.log(desc);
