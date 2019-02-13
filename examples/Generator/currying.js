function square(i) {
    return i * i;
}

function dubble(i) {
    return i * 2;
}

function map(handeler, list) {
    return list.map(handeler);
}

function currying(fn) {
    var slice = Array.prototype.slice,
        __args = slice.call(arguments, 1);
    return function() {
        var __inargs = slice.call(arguments);
        return fn.apply(null, __args.concat(__inargs));
    };
}

var mapSQ = currying(map, square);
console.log(mapSQ([1, 2, 3, 4, 5]));
console.log(mapSQ([6, 7, 8, 9, 10]));
console.log(mapSQ([10, 20, 30, 40, 50]));

var mapDB = currying(map, dubble);
console.log(mapDB([1, 2, 3, 4, 5]));
console.log(mapDB([6, 7, 8, 9, 10]));
console.log(mapDB([10, 20, 30, 40, 50]));