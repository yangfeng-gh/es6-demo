/*
尾调用
某个函数的最后一步是调用另一个函数。
 */

// 情况一
function f(x){
    let y = g(x);
    return y;
}

// 情况二
function f(x){
    return g(x) + 1;
}

// 以上两种情况都不属于尾调用
function f(x) {
    if (x > 0) {
        return m(x)
    }
    return n(x);
}

// 尾调用不一定出现在函数尾部，只要是最后一步操作即可。