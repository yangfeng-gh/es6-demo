// mod.js
const FOO_KEY = Symbol.for('foo');

function A() {
    this.foo = 'hello';
}

if (!global[FOO_KEY]) {
    global[FOO_KEY] = new A();
}

module.exports = global[FOO_KEY];

// 上面代码中，可以保证global[FOO_KEY]不会被无意间覆盖，但还是可以被改写。