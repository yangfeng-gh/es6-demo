(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global._export = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.multiply = multiply;
  // syntax1
  var x = exports.x = 1;

  // syntax2
  var y = 2;
  exports.y = y;
  exports.z = y;
  function multiply(x, y) {
    return x * y;
  }

  function v1() {}
  function v2() {}
  exports.streamV1 = v1;
  exports.streamV2 = v2;
  exports.streamLatestVersion = v2;


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
  var foo = exports.foo = 'bar';
  setTimeout(function () {
    return exports.foo = foo = 'bazz';
  }, 500);
});

//# sourceMappingURL=export.js.map