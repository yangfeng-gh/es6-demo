/*
Reflect.getOwnPropertyDescriptor(target, propertyKey)
Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者。
 */

var myObject = {};
Object.defineProperty(myObject, 'hidden', {
    value: true,
    enumerable: false,
});

// 旧写法
var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden');

// 新写法
var theDescriptor2 = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');

console.log(theDescriptor);
console.log(theDescriptor2);

/*
Reflect.getOwnPropertyDescriptor和Object.getOwnPropertyDescriptor的一个区别是，
如果第一个参数不是对象，Object.getOwnPropertyDescriptor(1, 'foo')不报错，返回undefined，
而Reflect.getOwnPropertyDescriptor(1, 'foo')会抛出错误，表示参数非法。
 */