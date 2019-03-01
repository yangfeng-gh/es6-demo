/*
使用while循环等待主线程的通知，不是很高效，如果用在主线程，就会造成卡顿，Atomics对象提供了wait()和wake()两个方法用于等待通知。
这两个方法相当于锁内存，即在一个线程进行操作时，让其他线程休眠（建立锁），等到操作结束，再唤醒那些休眠的线程（解除锁）。
 */

// Worker 线程
self.addEventListener('message', (event) => {
    const sharedArray = new Int32Array(event.data);
    const arrayIndex = 0;
    const expectedStoredValue = 50;
    Atomics.wait(sharedArray, arrayIndex, expectedStoredValue);
    console.log(Atomics.load(sharedArray, arrayIndex));
}, false);

// 上面代码中，Atomics.wait()方法等同于告诉 Worker 线程，只要满足给定条件（sharedArray的0号位置等于50），就在这一行 Worker 线程进入休眠。
