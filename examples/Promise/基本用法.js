/**
 *
 */

// setTimeout(print, 500, 'hello');
// function print(val) {
//     console.log(val);
// }
//
// function timeout(ms) {
//     Generator.prototype.return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
//
// timeout(1000).then((value) => {
//     console.log(value);
// });

// var p = new Promise((resolve, reject) => {
//     resolve(callback());
// });

// 以上代码简写为
var p = Promise.resolve(callback());

function callback() {
    console.log('callback');
}

var p2 = new Promise((resolve, reject) => {
    reject(new Error('p2 error rejected'));
});

p2.then(function() {
    console.log('p2 resolved');
});