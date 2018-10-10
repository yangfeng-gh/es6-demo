/*
for...in循环也受到ownKeys方法的拦截。
 */

const obj = { hello: 'world' };
const proxy = new Proxy(obj, {
    ownKeys: function () {
        return ['a', 'b'];
    }
});

for (let key in proxy) {
    console.log(key); // 没有任何输出
}

// 上面代码中，ownKeys指定只返回a和b属性，由于obj没有这两个属性，因此for...in循环不会有任何输出。