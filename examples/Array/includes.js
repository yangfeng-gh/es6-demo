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
    global.includes = mod.exports;
  }
})(this, function () {
  "use strict";

  /**
   * Created by yvan on 2016-07-01.
   */

  //Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。
  // 下面代码用来检查当前环境是否支持该方法，如果不支持，部署一个简易的替代版本。
  var contains = function () {
    return Array.prototype.includes ? function (arr, value) {
      return arr.includes(value);
    } : function (arr, value) {
      return arr.some(function (el) {
        return el === value;
      });
    };
  }();
  contains(["foo", "bar"], "baz"); // => false

  var b = [1, 2, 3].includes(3, 3); // false
  var b2 = [1, 2, 3].includes(3, -1); // true
  console.log(b, b2);

  var b3 = [NaN].indexOf(NaN);
  console.log(b3);

  // -1
  // includes使用的是不一样的判断算法，就没有这个问题。

  var b4 = [NaN].includes(NaN);
  console.log(b4);
});

//# sourceMappingURL=includes.js.map