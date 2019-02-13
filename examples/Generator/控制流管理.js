/**
 * 控制流管理
 */
function* longRunningTask() {
    try {
        var value1 = yield step1();
        var value2 = yield step2(value1);
        var value3 = yield step3(value2);
        var value4 = yield step4(value3);
        // Do something with value4
    } catch (e) {
        // Handle any error from step1 through step4
    }
}
// 然后，使用一个函数，按次序自动执行所有步骤。

scheduler(longRunningTask());

function scheduler(task) {
    setTimeout(function() {
        var taskObj = task.next(task.value);
        // 如果Generator函数未结束，就继续调用
        if (!taskObj.done) {
            task.value = taskObj.value
            scheduler(task);
        }
    }, 0);
}
// 注意，yield语句是同步运行，不是异步运行（否则就失去了取代回调函数的设计目的了）。
// 实际操作中，一般让yield语句返回Promise对象。

var Q = require('q');

function delay(milliseconds) {
    var deferred = Q.defer();
    setTimeout(deferred.resolve, milliseconds);
    return deferred.promise;
}

function* f(){
    yield delay(100);
};
// 上面代码使用Promise的函数库Q，yield语句返回的就是一个Promise对象。
// 如果yield语句后面的参数，是一个具有遍历器接口的对象，yield会遍历这个对象，再往下执行。这意味着，
// 多个任务按顺序一个接一个执行时，yield语句可以按顺序排列。多个任务需要并列执行时（比如只有A任务和B任务都执行完，才能执行C任务），可以采用数组的写法。

function* parallelTasks() {
    let [resultA, resultB] = yield [
        taskA(),
        taskB()
    ];
    console.log(resultA, resultB);
}
// 上面代码中，yield语句的参数是一个数组，成员就是两个任务taskA和taskB，只有等这两个任务都完成了，才会接着执行下面的语句。
