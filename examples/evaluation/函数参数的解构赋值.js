/**
 * Created by yvan on 2016-06-30.
 */
function add([x, y]){
    return x + y;
}

var z = add([1, 2]); // 3
console.log(z);

var arr = [[1, 2], [3, 4]];
var arr2 = arr.map(([a, b]) => a + b);
console.log(arr2);
