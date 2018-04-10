(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.fill = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * fill方法使用给定值，填充一个数组。
   */
  var a = ['a', 'b', 'c'].fill(7);
  // [7, 7, 7]

  var a2 = new Array(3).fill(7);
  // [7, 7, 7]

  console.log(a, a2);

  // fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置(不包括)。
  var a3 = ['a', 'b', 'c'].fill(7, 1, 2);
  console.log(a3);
  // ['a', 7, 'c']
});

//# sourceMappingURL=fill.js.map