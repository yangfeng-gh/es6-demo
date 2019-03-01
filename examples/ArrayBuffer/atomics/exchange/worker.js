/*
Worker 线程如果要写入数据，可以使用上面的Atomics.store()方法，也可以使用Atomics.exchange()方法。
它们的区别是，Atomics.store()返回写入的值，而Atomics.exchange()返回被替换的值。
 */

// Worker 线程
self.addEventListener('message', (event) => {
    const sharedArray = new Int32Array(event.data);
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            const storedValue = Atomics.store(sharedArray, i, 1);
            console.log(`The item at array index ${i} is now ${storedValue}`);
        } else {
            const exchangedValue = Atomics.exchange(sharedArray, i, 2);
            console.log(`The item at array index ${i} was ${exchangedValue}, now 2`);
        }
    }
}, false);
