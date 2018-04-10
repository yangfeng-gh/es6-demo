(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/core-js/array/of"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/core-js/array/of"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.of);
    global.ArrayOf = mod.exports;
  }
})(this, function (_of) {
  "use strict";

  var _of2 = _interopRequireDefault(_of);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Array.of方法用于将一组值，转换为数组
   * 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
   */

  var a1 = (0, _of2.default)(3, 11, 8); // [3,11,8]
  var a2 = (0, _of2.default)(3); // [3]
  var a3 = (0, _of2.default)(3).length; // 1

  console.log("Array.of\u65B9\u6CD5\u7528\u4E8E\u5C06\u4E00\u7EC4\u503C\uFF0C\u8F6C\u6362\u4E3A\u6570\u7EC4: " + a1 + ", " + a2 + ", " + a3);

  // 创建JS对象可以使用关键字new,也可以直接省略new
  var a4 = new Array(); // []
  var a5 = Array(3); // [, , ,]
  var a6 = new Array(3, 11, 8); // [3, 11, 8]
  console.log("\u521B\u5EFAJS\u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528\u5173\u952E\u5B57new,\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7701\u7565new: " + a4 + ", " + a5 + ", " + a6);

  // Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
  var a7 = (0, _of2.default)(); // []
  var a8 = (0, _of2.default)(undefined); // [undefined]
  var a9 = (0, _of2.default)(1); // [1]
  var a10 = (0, _of2.default)(1, 2); // [1, 2]
  console.log("\u521B\u5EFAJS\u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528\u5173\u952E\u5B57new,\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7701\u7565new: " + a7 + ", " + a8 + ", " + a9 + ", " + a10);
});

//# sourceMappingURL=Array.of.js.map