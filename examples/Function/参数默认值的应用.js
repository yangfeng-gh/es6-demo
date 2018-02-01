/**
 * 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
 */

function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

foo()
// Error: Missing parameter

// 参数mustBeProvided的默认值等于throwIfMissing函数的运行结果（即函数名之后有一对圆括号），
// 这表明参数的默认值不是在定义时执行，而是在运行时执行（即如果参数已经赋值，默认值中的函数就不会运行）

// 可以将参数默认值设为undefined，表明这个参数是可以省略的。
function foo(optional = undefined) { ··· }
