/**
 * Created by yvan on 2016-07-29.
 */
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('success'), 3000);
    // setTimeout(() => reject(new Error('fail')), 3000);
});

var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
});

p2.then(result => console.log(result)).catch(error => console.log(error));

// result => console.log(result) 变成了针对p1, 当p1从pending变成resolved状态后