/*
Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，
将参数转为 Promise 实例，再进一步处理。
（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

p的状态由p1、p2、p3决定，分成两种情况。
1. 当p1、p2、p3的状态都变成fulfilled，则p的状态会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
2. 当p1、p2、p3之中有一个被rejected，则p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */

/*
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
    return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
    // ...
}).catch(function(reason){
    // ...
});
上面代码中，promises是包含 6 个 Promise 实例的数组，只有这 6 个实例的状态都变成fulfilled，或者其中有一个变为rejected，
才会调用Promise.all方法后面的回调函数。
*/

/*
const databasePromise = connectDatabase();

const booksPromise = databaseProimse
    .then(findAllBooks);

const userPromise = databasePromise
    .then(getCurrentUser);

Promise.all([
    booksPromise,
    userPromise
]).then(([books, user]) => pickTopRecommentations(books, user));

// 上面代码中，booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommentations这个回调函数。
*/

// 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
    .then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
})
    .then(result => result)
    .catch(e => e);

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));
// 58行打印出 ["hello", Error: 报错了]

// 上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，
// p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，
// 因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

// 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。