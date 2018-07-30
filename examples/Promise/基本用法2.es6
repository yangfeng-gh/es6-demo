new Promise(function (resolve, reject) {
        resolve(1); // 不需要return就可以在紧随其后的then回调中获取promise成功回调的返回值
        // throw new Error('出错');
    }).then(function(v) {
        console.log(v);
    })