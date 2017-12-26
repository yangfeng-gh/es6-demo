/**
 * Created by yvan on 2016-07-28.
 */
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}

var point = new ColorPoint(1, 2, 'red');
console.log(point.toString());

// 另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。
// 这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。

// 从子类上获取父类
var superClass = Object.getPrototypeOf(ColorPoint);
console.log(superClass);

// 子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。
// 也就是说，子类的原型的原型，是父类的原型。
var p1 = new Point(2, 3);
var p2 = new ColorPoint(2, 3, 'red');

console.log(p2.__proto__ === p1.__proto__) // false
console.log(p2.__proto__.__proto__ === p1.__proto__); // true

// 通过子类实例的__proto__.__proto__属性，可以修改父类实例的行为。
p2.__proto__.__proto__.printName = function () {
    console.log('Ha');
};

p1.printName() // "Ha"