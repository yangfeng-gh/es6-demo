/**
 * Created by yvan on 2016-06-28.
 */
function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 'x';
    foo();
    yield 'y';
}

for (let v of bar()){
    console.log(v);
}
// "x"
// "y"

/*
 如果在Generater函数内部，调用另一个Generator函数，默认情况下是没有效果的。
*/
