/**
 * async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。
 */
async function fn(args){
    // ...
}

// 等同于
function fn(args){
    return spawn(function*() {
        // ...
    });
}

// 所有的async函数都可以写成上面的第二种形式，其中的 spawn 函数就是自动执行器。
// 下面给出spawn函数的实现，基本就是前文自动执行器的翻版。
function spawn(genF) {
    return new Promise(function(resolve, reject) {
        var gen = genF();
        function step(nextF) {
            try {
                var next = nextF();
            } catch(e) {
                return reject(e);
            }
            if(next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function(v) {
                step(function() { return gen.next(v); });
            }, function(e) {
                step(function() { return gen.throw(e); });
            });
        }
        step(function() { return gen.next(undefined); });
    });
}
// async函数是非常新的语法功能，新到都不属于 ES6，而是属于 ES7。
// 目前，它仍处于提案阶段，但是转码器Babel和regenerator都已经支持，转码后就能使用。