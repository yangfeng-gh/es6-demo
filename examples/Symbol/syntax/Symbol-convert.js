/*
Symbol 值也可以转为布尔值，但是不能转为数值。
 */

let sym = Symbol();
console.log(Boolean(sym)) // true
console.log(!sym) // false

if (sym) {
    console.log(`sym can auto convert to Boolean True`)
}

// Number(sym) // TypeError
// sym + 2 // TypeError