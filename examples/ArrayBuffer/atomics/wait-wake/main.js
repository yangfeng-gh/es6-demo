// 主线程一旦更改了指定位置的值，就可以唤醒 Worker 线程。

// 主线程
const newArrayValue = 100;
Atomics.store(sharedArray, 0, newArrayValue);
const arrayIndex = 0;
const queuePos = 1;
Atomics.wake(sharedArray, arrayIndex, queuePos);

// 上面代码中，sharedArray的0号位置改为100，然后就执行Atomics.wake()方法，唤醒在sharedArray的0号位置休眠队列里的一个线程。

// Atomics.wait()方法的使用格式如下。
Atomics.wait(sharedArray, index, value, timeout);

