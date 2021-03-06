/**
 * 使用Generator函数管理流程，遇到异步操作的时候，通常返回一个Promise对象。
 */
function getFoo () {
    return new Promise(function (resolve, reject){
        resolve('foo');
    });
}

var g = function* () {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run (generator) {
    var it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);

// 上面代码的Generator函数g之中，有一个异步操作getFoo，它返回的就是一个Promise对象。
// 函数run用来处理这个Promise对象，并调用下一个next方法。