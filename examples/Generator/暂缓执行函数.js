(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/regenerator'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/regenerator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.regenerator);
    global._ = mod.exports;
  }
})(this, function (_regenerator) {
  'use strict';

  var _regenerator2 = _interopRequireDefault(_regenerator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _marked = _regenerator2.default.mark(f);

  /**
   * Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
   * 函数f如果是普通函数，在为变量generator赋值时就会执行。
   * 但是，函数f是一个 Generator 函数，就变成只有调用next方法时，函数f才会执行。
   */
  function f() {
    return _regenerator2.default.wrap(function f$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('执行了！');

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  var generator = f();

  setTimeout(function () {
    generator.next();
  }, 2000);
});

//# sourceMappingURL=暂缓执行函数.js.map