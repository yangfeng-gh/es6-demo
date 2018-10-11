/**
 * ES7提供了async函数，使得异步操作变得更加方便。async函数是什么？
 * 一句话，async函数就是Generator函数的语法糖。
 */
var fs = require('fs');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

// var gen = function* (){
//     var f1 = yield readFile('/etc/fstab');
//     var f2 = yield readFile('/etc/shells');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };

var asyncReadFile = async function (){
    var f1 = await readFile('user.json');
    var f2 = await readFile('goods.json');
    console.log(f1.toString());
    console.log(f2.toString());
};

/**
 * async函数对 Generator 函数的改进，体现在以下四点。
 */

// （1）内置执行器。Generator函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。
// 也就是说，async函数的执行，与普通函数一模一样，只要一行。
var result = asyncReadFile();

// （2）更好的语义。async和await，比起星号和yield，语义更清楚了。
// async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

// （3）更广的适用性。 co模块约定，yield命令后面只能是Thunk函数或Promise对象，
// 而async函数的await命令后面，可以是Promise对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

// （4）返回值是Promise。async函数的返回值是Promise对象，这比Generator函数的返回值是Iterator对象方便多了。
// 你可以用then方法指定下一步的操作。

// 进一步说，async函数完全可以看作多个异步操作，包装成的一个Promise对象，而await命令就是内部then命令的语法糖。
