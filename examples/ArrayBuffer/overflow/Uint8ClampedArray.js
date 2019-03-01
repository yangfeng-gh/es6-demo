const uint8c = new Uint8ClampedArray(1);

uint8c[0] = 256;
console.log(uint8c[0]); // 255

uint8c[0] = -1;
console.log(uint8c[0]); // 0

/*
上面例子中，uint8C是一个Uint8ClampedArray视图，正向溢出时都返回 255，负向溢出都返回 0。
 */
