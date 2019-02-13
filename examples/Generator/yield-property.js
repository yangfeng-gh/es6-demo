/*
如果一个对象的属性是 Generator 函数，可以简写成下面的形式。
 */

let obj = {
    * myGeneratorMethod() {
        console.log('this is a object property.')
    }
};

const g = obj.myGeneratorMethod();
g.next();