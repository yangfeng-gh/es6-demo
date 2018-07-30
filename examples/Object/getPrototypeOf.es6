/**
 * 该方法与setPrototypeOf方法配套，用于读取一个对象的prototype对象。
 * Object.getPrototypeOf(obj);
 */

function Rectangle() {
}

var rec = new Rectangle();

Object.getPrototypeOf(rec) === Rectangle.prototype
// true

Object.setPrototypeOf(rec, Object.prototype);
Object.getPrototypeOf(rec) === Rectangle.prototype
// false