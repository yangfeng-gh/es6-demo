/**
 * 函数的name属性，返回该函数的函数名。
 */
function foo() {}
console.log(foo.name); //foo

var func1 = function () {};
console.log(func1.name);

// ES5
func1.name // ""
// ES6
func1.name // "func1"


const bar = function baz() {};

// ES5
bar.name // "baz"

// ES6
bar.name // "baz"

// Function构造函数返回的函数实例，name属性的值为“anonymous”。

console.log((new Function).name) // "anonymous"
// bind返回的函数，name属性值会加上“bound ”前缀。

function foo() {};
foo.bind({}).name // "bound foo"

console.log((function(){}).bind({}).name) // "bound "