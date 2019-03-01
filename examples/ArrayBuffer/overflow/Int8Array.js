const int8 = new Int8Array(1);

int8[0] = 128;
console.log(int8[0]); // -128

int8[0] = -129;
console.log(int8[0]); // 127
