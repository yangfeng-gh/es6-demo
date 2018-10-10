(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/core-js/get-iterator", "babel-runtime/helpers/toConsumableArray", "babel-runtime/regenerator", "babel-runtime/core-js/symbol/iterator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/core-js/get-iterator"), require("babel-runtime/helpers/toConsumableArray"), require("babel-runtime/regenerator"), require("babel-runtime/core-js/symbol/iterator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.getIterator, global.toConsumableArray, global.regenerator, global.iterator);
    global.iterator = mod.exports;
  }
})(this, function (_getIterator2, _toConsumableArray2, _regenerator, _iterator) {
  "use strict";

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _iterator2 = _interopRequireDefault(_iterator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _marked = _regenerator2.default.mark(gen);

  /**
   * 任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象
   * 由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，
   * 从而使得该对象具有 Iterator 接口
   */
  var myIterator = {};
  myIterator[_iterator2.default] = _regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 1;

          case 2:
            _context.next = 4;
            return 2;

          case 4:
            _context.next = 6;
            return 3;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  });
  console.log([].concat((0, _toConsumableArray3.default)(myIterator)));

  /**
   * Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
   */
  function gen() {
    return _regenerator2.default.wrap(function gen$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked, this);
  }
  var g = gen();
  console.log((0, _getIterator3.default)(g) === g);
});

//# sourceMappingURL=Generator\iterator.js.map