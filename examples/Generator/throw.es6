/**
 * throw方法可以接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。
 */
var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
};

var i = g();
i.next();

try {
    i.throw(new Error('a'));
    i.throw(new Error('b'));
} catch (e) {
    console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b