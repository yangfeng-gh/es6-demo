/*
实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。
因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。一般就会采用下面的写法。
 */

const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now

// 上面代码中，函数f是同步的，但是用 Promise 包装了以后，就变成异步执行了。
