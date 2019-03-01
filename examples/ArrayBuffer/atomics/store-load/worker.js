// worker 线程
ia[112]++; // 错误
Atomics.add(ia, 112, 1); // 正确
