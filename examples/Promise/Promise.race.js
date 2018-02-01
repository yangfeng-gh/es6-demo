/**
 * 将多个Promise实例，包装成一个新的Promise实例。
 * 与Promise.all()不同的是：
 * 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。
 */

// 如果指定时间内没有获得结果，就将Promise的状态变为reject，否则变为resolve。
var p = Promise.race([
    fetch('/resource-that-may-take-a-while'),
    new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('request timeout')), 5000)
    })
])
p.then(response => console.log(response))
p.catch(error => console.log(error))

// 上面代码中，如果5秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。
