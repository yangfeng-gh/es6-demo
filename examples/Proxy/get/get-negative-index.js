/*
下面的例子使用get拦截，实现数组读取负数的索引。
 */

function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };

    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);

/*
上面代码中，数组的位置参数是-1，就会输出数组的倒数第一个成员。
 */