/**
 * 基于Promise对象的自动执行
 */
var fs = require('fs');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};

var gen = function* (){
    var f1 = yield readFile('user.json');
    var f2 = yield readFile('goods.json');
    console.log(f1.toString());
    console.log(f2.toString());
};

// var g = gen();
//
// g.next().value.then(function(data){
//     g.next(data).value.then(function(data){
//         g.next(data);
//     });
// });
// 手动执行其实就是用then方法，层层添加回调函数。理解了这一点，就可以写出一个自动执行器。

function run(gen){
    var g = gen();

    function next(data){
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function(data){
            next(data);
        });
    }

    next();
}

run(gen);