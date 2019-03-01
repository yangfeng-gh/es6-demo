/*
共享内存上面的某些运算是不能被打断的，即不能在运算过程中，让其他线程改写内存上面的值。Atomics 对象提供了一些运算方法，防止数据被改写。

Atomics.add(sharedArray, index, value)
Atomics.add用于将value加到sharedArray[index]，返回sharedArray[index]旧的值。

Atomics.sub(sharedArray, index, value)
Atomics.sub用于将value从sharedArray[index]减去，返回sharedArray[index]旧的值。

Atomics.and(sharedArray, index, value)
Atomics.and用于将value与sharedArray[index]进行位运算and，放入sharedArray[index]，并返回旧的值。

Atomics.or(sharedArray, index, value)
Atomics.or用于将value与sharedArray[index]进行位运算or，放入sharedArray[index]，并返回旧的值。

Atomics.xor(sharedArray, index, value)
Atomic.xor用于将vaule与sharedArray[index]进行位运算xor，放入sharedArray[index]，并返回旧的值。
*/
