/**
 * throw方法被捕获以后，会附带执行下一条yield语句。也就是说，会附带执行一次next方法。
 */
var gen = function* gen(){
    try {
        yield console.log('a');
    } catch (e) {
        // ...
    }
    yield console.log('b');
    yield console.log('c');
}

var g = gen();
g.next() // a
g.throw() // b
g.next() // c