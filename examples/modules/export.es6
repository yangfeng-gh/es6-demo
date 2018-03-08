// syntax1
export const x = 1;

// syntax2
var y = 2;
export { y }

// syntax3
export {y as z}

export function multiply(x, y) {
  return x * y;
}

function v1() {}
function v2() {}
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}

// 错误语法1：
// export 1;

// 错误语法2：
// var m = 1;
// export m;

// 错误语法3：
// function f() {}
// export f;

/**
 * export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
 */
export var foo = 'bar';
setTimeout(() => foo = 'bazz', 500);