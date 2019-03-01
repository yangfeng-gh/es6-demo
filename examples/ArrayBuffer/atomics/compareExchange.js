/*
Atomics.compareExchange(sharedArray, index, oldval, newval)
如果sharedArray[index]等于oldval，就写入newval，返回oldval。

Atomics.compareExchange的一个用途是，从 SharedArrayBuffer 读取一个值，
然后对该值进行某个操作，操作结束以后，检查一下 SharedArrayBuffer 里面原来那个值是否发生变化（即被其他线程改写过）。
如果没有改写过，就将它写回原来的位置，否则读取新的值，再重头进行一次操作。
 */
