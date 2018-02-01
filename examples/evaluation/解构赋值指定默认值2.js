let x;
if ([1][0] === undefined) {
    x = f();
} else {
    x = [1][0]; //[1]的第[0]个无素
}
console.log(x);

console.log([1][0]);