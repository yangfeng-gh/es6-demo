var g = function* () {
    while (true) {
        try {
            yield;
        } catch (e) {
            if (e != 'a') throw e;
            console.log('内部捕获', e);
        }
    }
};

var i = g();
i.next();

try {
    throw new Error('a');
    throw new Error('b');
} catch (e) {
    console.log('外部捕获', e);
}
// 外部捕获 [Error: a]
// 上面代码之所以只捕获了a，是因为函数体外的catch语句块，捕获了抛出的a错误以后，就不会再继续try代码块里面剩余的语句了。