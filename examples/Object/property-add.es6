/**
 * 为对象添加属性
 */

class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}

let p1 = new Point(1,2);
console.log(p1);