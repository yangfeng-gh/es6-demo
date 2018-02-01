/**
 * 生成器
 */
//针对一个整数范围定义一个生成器函数
function range(min, max) {
  for (let i = Math.ceil(min); i <= max; i++) yield i;
}

//调用这个生成器函数以获得一个生成器，并对它进行遍历
for (let n in range(3, 8))
  console.log(n); //输出数字3~8

//Fibonacci数列的生成器函数
function fibonacci() {
  let x = 0, y = 1;
  while (true) {
    yield y;
    [x, y] = [y, x + y];
  }
}

//调用生成器函数以获得一个生成器
f = fibonacci();
//将生成器当做迭代器，输出Fibonacci数列的前10个数
for (let i = 0; i < 10; i++) {
  console.log(f.next());
}
