/*
对象的Symbol.species属性，指向一个构造函数。创建衍生对象时，会使用该属性。
 */

class MyArray extends Array {

}
const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

console.log(b instanceof MyArray) // true
console.log(c instanceof MyArray) // true

// 上面代码中，子类MyArray继承了父类Array，a是MyArray的实例，b和c是a的衍生对象。
// 你可能会认为，b和c都是调用数组方法生成的，所以应该是数组（Array的实例），但实际上它们也是MyArray的实例。

// Symbol.species属性就是为了解决这个问题而提供的。现在，我们可以为MyArray设置Symbol.species属性。
class MyArray2 extends Array {
    static get [Symbol.species]() { return Array; }
}

// 上面代码中，由于定义了Symbol.species属性，创建衍生对象时就会使用这个属性返回的函数，作为构造函数。
// 这个例子也说明，定义Symbol.species属性要采用get取值器。
// 默认的Symbol.species属性等同于下面的写法。

/*
class MyArray extends Array {
    static get [Symbol.species]() {
        return this;
    }
}
*/

const a2 = new MyArray2();
const b2 = a2.map(x => x);

console.log(b2 instanceof MyArray2); // false
console.log(b2 instanceof Array); // true

// 上面代码中，a.map(x => x)生成的衍生对象，就不是MyArray的实例，而直接就是Array的实例。

// 再看一个例子。
class T1 extends Promise {
}

class T2 extends Promise {
    static get [Symbol.species]() {
        return Promise;
    }
}

console.log(new T1(r => r()).then(v => v) instanceof T1) // true
console.log(new T2(r => r()).then(v => v) instanceof T2) // false
// 上面代码中，T2定义了Symbol.species属性，T1没有。结果就导致了创建衍生对象时（then方法），T1调用的是自身的构造方法，而T2调用的是Promise的构造方法。

// 总之，Symbol.species的作用在于，实例对象在运行过程中，需要再次调用自身的构造函数时，会调用该属性指定的构造函数。
// 它主要的用途是，有些类库是在基类的基础上修改的，那么子类使用继承的方法时，作者可能希望返回基类的实例，而不是子类的实例。