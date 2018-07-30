// 解构赋值不仅适用于var命令，也适用于let和const命令。

// var [v1, v2, ..., vN ] = array;
// let [v1, v2, ..., vN ] = array;
// const [v1, v2, ..., vN ] = array;

// 对于Set结构，也可以使用数组的解构赋值。
let [x, y, z] = new Set(["a", "b", "c"]);
console.log(x); // "a"

// 事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth); // 5