/**
 * next()的执行逻辑：
 * (1)遇到yield语句就暂停执行后面的操作，并将紧跟在yield后面的表达式的值，作为执行next方法后返回的对象的value属性值
 * (2)下一次调用next方法时，再继续往下执行，直到遇到下一个yield方法
 * (3)如果没有再遇到新的yield语句，就一直运行至函数结束，并将return语句后面的表达式的值，作为返回对象的value属性值
 * (4)如果该函数没有return语句，则返回对象的value属性值为undefined
 */
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }