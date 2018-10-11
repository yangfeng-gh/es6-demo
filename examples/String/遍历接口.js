/**
 * Created by yvan on 2016-06-30.
 */
// ES6为字符串添加了遍历器接口

for (let codePoint of 'foo') {
    console.log(codePoint)
}

// 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
var text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
// �
// �

for (let i of text) {
    console.log(i);
}
// "𠮷"