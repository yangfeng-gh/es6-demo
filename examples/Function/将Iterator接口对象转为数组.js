/**
 * 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
 */

var nodeList = document.querySelectorAll('div');
var array = [...nodeList];

// 对于那些没有部署Iterator接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。