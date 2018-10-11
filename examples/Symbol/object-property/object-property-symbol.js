/*
由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
 */

let size = Symbol('size');

class Collection {
    constructor() {
        this[size] = 0;
    }

    add(item) {
        this[this[size]] = item;
        this[size]++;
    }

    static sizeOf(instance) {
        return instance[size];
    }
}

let x = new Collection();
Collection.sizeOf(x) // 0

x.add('foo');
Collection.sizeOf(x) // 1

console.log(Object.keys(x)) // [ '0' ]
console.log(Object.getOwnPropertyNames(x)) // [ '0' ]
console.log(Object.getOwnPropertySymbols(x)) // [ Symbol(size) ]

// 上面代码中，对象x的size属性是一个 Symbol 值，所以Object.keys(x)、Object.getOwnPropertyNames(x)都无法获取它。
// 这就造成了一种非私有的内部方法的效果。