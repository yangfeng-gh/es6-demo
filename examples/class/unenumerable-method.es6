/**
 * Created by yvan on 2016-07-27.
 */
class Point {
    constructor(x, y) {
        // ...
    }

    toString() {
        // ...
    }
}

console.log(Object.keys(Point.prototype));
// []
console.log(Object.getOwnPropertyNames(Point.prototype));
// ["constructor","toString"]

var Point2 = function (x, y) {
    // ...
};

Point2.prototype.toString = function() {
    // ...
};

console.log(Object.keys(Point2.prototype));
// [ 'toString' ]
console.log(Object.getOwnPropertyNames(Point2.prototype));
// ["constructor","toString"]