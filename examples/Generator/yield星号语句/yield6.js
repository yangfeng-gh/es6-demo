/**
 * Created by yvan on 2016-06-28.
 */
function* concat(iter1, iter2) {
    yield* iter1;
    yield* iter2;
}

// 等同于
/*
function* concat(iter1, iter2) {
    for (var value of iter1) {
        yield value;
    }
    for (var value of iter2) {
        yield value;
    }
}
*/
