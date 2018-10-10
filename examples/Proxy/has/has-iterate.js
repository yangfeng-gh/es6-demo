// 另外，虽然for...in循环也用到了in运算符，但是has拦截对for...in循环不生效。
let stu1 = {name: '张三', score: 59};
let stu2 = {name: '李四', score: 99};

let handler = {
    has(target, prop) {
        if (prop === 'score' && target[prop] < 60) {
            console.log(`${target.name} 不及格`);
            return false;
        }
        return prop in target;
    }
}

let oproxy1 = new Proxy(stu1, handler);
let oproxy2 = new Proxy(stu2, handler);

console.log('score' in oproxy1);
// 张三 不及格
// false

console.log('score' in oproxy2);
// true

for (let a in oproxy1) {
    console.log(oproxy1[a]);
}
// 张三
// 59

for (let b in oproxy2) {
    console.log(oproxy2[b]);
}
// 李四
// 99
// 上面代码中，has拦截只对in运算符生效，对for...in循环不生效，导致不符合要求的属性没有被for...in循环所排除。