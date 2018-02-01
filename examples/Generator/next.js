(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/regenerator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/regenerator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.regenerator);
    global.next = mod.exports;
  }
})(this, function (_regenerator) {
  "use strict";

  var _regenerator2 = _interopRequireDefault(_regenerator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _marked = _regenerator2.default.mark(f),
      _marked2 = _regenerator2.default.mark(foo);

  /**
   * 无限循环Generator函数
   * yield表达式本身没有返回值,或者总是返回undefined, next()可以带一个参数，该参数就会被当作上一个yield表达式的返回值
   */
  function f() {
    var i, reset;
    return _regenerator2.default.wrap(function f$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!true) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return i;

          case 4:
            reset = _context.sent;

            if (reset) {
              i = -1;
            }

          case 6:
            i++;
            _context.next = 1;
            break;

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  var g = f();
  console.log(g.next());
  console.log(g.next());
  console.log(g.next(true));

  function foo(x) {
    var y, z;
    return _regenerator2.default.wrap(function foo$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return x + 1;

          case 2:
            _context2.t0 = _context2.sent;
            y = 2 * _context2.t0;
            _context2.next = 6;
            return y / 3;

          case 6:
            z = _context2.sent;
            return _context2.abrupt("return", x + y + z);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked2, this);
  }

  var a = foo(5);
  a.next(); // Object{value:6, done:false}
  a.next(); // Object{value:NaN, done:false}
  a.next(); // Object{value:NaN, done:true}

  var b = foo(5);
  b.next(); // { value:6, done:false }
  b.next(12); // { value:8, done:false }
  b.next(13); // { value:42, done:true }
});

//# sourceMappingURL=next.js.map