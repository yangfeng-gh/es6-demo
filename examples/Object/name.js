/**
 * 方法的name属性
 */
var person = {
    sayName() {
        console.log(this.name);
    },
    get firstName() {
        return "Nicholas";
    }
};

console.log(person.sayName.name)   // "sayName"
console.log(person.firstName.name) // "get firstName"

//(new Function()).name; // "anonymous"

var doSomething = function() {
    // ...
};
console.log(doSomething.bind().name); // "bound doSomething"

const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
    [key1]() {},
    [key2]() {},
};
console.log(obj[key1].name); // "[description]"
obj[key2].name // ""