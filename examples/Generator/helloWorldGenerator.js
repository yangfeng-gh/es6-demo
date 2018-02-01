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
    global.helloWorldGenerator = mod.exports;
  }
})(this, function (_regenerator) {
  'use strict';

  var _regenerator2 = _interopRequireDefault(_regenerator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _marked = _regenerator2.default.mark(helloWorldGenerator);

  /*
    ES6 没有规定，function关键字与函数名之间的星号，写在哪个位置,以下四种写法都可以
    function * foo(x, y) { ··· }
    function *foo(x, y) { ··· }
    function* foo(x, y) { ··· }
    function*foo(x, y) { ··· }
  */
  function helloWorldGenerator() {
    return _regenerator2.default.wrap(function helloWorldGenerator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 'hello';

          case 2:
            _context.next = 4;
            return 'world';

          case 4:
            return _context.abrupt('return', 'ending');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  var hw = helloWorldGenerator();

  console.log(hw.next()); // { value: 'hello', done: false }
  console.log(hw.next()); // { value: 'world', done: false }
  console.log(hw.next()); // { value: 'ending', done: true } 
  console.log(hw.next()); // { value: undefined, done: true }
});

//# sourceMappingURL=helloWorldGenerator.js.map