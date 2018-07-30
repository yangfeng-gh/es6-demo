/**
 * Thunk函数真正的威力，在于可以自动执行Generator函数。
 */
function run(fn) {
    var gen = fn();

    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }

    next();
}

function* g() {
    // ...
}

run(g);