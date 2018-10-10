/**
 * 不要混淆遍历器对象的throw方法和全局的throw命令。全局的throw命令只能被函数体外的catch语句捕获。
 */
var g = function* () {
    while (true) {
        try {
            yield;
        } catch (e) {
            console.log('内部捕获', e.message);
            if (e.message != 'a') throw e;
        }
    }
};

var i = g();
i.next();

try {
    // i.throw(new Error('a'));
    throw new Error('a'); // 全局的throw命令不会被generator函数内部的try...catch捕获
    throw new Error('b');
} catch (e) {
    console.log('外部捕获', e.message);
}
// 外部捕获 [Error: a]