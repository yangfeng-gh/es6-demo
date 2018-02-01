/**
 * Created by yvan on 2016-07-27.
 */
var getCaller = function() {
    var original = Error.prepareStackTrace;
    var callerFile;
    try {
        var err = new Error();
        Error.prepareStackTrace = function(err, stack) {
            return stack;
        };
        var currentFile = err.stack.shift().getFileName();
        while (err.stack.length) {
            callerFile = err.stack.shift().getFileName();
            if (currentFile !== callerFile) {  // 往上获取调用文件名
                break;
            }
        }
        if (callerFile) {
            callerFile = require('path').parse(callerFile)['name'];  // 获取文件名部分
        }
    } catch (e) {}
    Error.prepareStackTrace = original;
    return callerFile;
};

var caller = getCaller();
console.log(caller);