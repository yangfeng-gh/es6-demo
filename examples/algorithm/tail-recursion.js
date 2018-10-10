// 递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（stack overflow）。
// 但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

var v = factorial(5); // 120
console.log(v);

// 上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。
// 如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。

function factorial2(n, total) {
  if (n === 1) return total;
  return factorial2(n - 1, n * total);
}

var v2 = factorial2(5, 1); // 120
console.log(v2);
