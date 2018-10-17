// 那么有没有一种方法，让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API 呢？回答是可以的，并且还有两种写法。
// 第一种写法是用async函数来写。
const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next

// 第二种写法是使用new Promise()。
(
    () => new Promise(
        resolve => resolve(f())
    )
)();
console.log('next');
// now
// next

// 上面代码也是使用立即执行的匿名函数，执行new Promise()。这种情况下，同步函数也是同步执行的。

/*
鉴于这是一个很常见的需求，所以现在有一个提案，提供Promise.try方法替代上面的写法。
Promise.try(f);
console.log('next');
// now
// next
事实上，Promise.try存在已久，Promise 库Bluebird、Q和when，早就提供了这个方法。

由于Promise.try为所有操作提供了统一的处理机制，所以如果想用then方法管理流程，最好都用Promise.try包装一下。
这样有许多好处，其中一点就是可以更好地管理异常。

function getUsername(userId) {
  return database.users.get({id: userId})
  .then(function(user) {
    return user.name;
  });
}

上面代码中，database.users.get()返回一个 Promise 对象，如果抛出异步错误，可以用catch方法捕获，就像下面这样写。

database.users.get({id: userId})
.then(...)
.catch(...)

但是database.users.get()可能还会抛出同步错误（比如数据库连接错误，具体要看实现方法），这时你就不得不用try...catch去捕获。

try {
  database.users.get({id: userId})
  .then(...)
  .catch(...)
} catch (e) {
  // ...
}

上面这样的写法就很笨拙了，这时就可以统一用下面的写法捕获所有同步和异步的错误。

Promise.try(database.users.get({id: userId}))
  .then(...)
  .catch(...)
事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。
 */