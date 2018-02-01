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
    global._yield = mod.exports;
  }
})(this, function (_regenerator) {
  'use strict';

  var _regenerator2 = _interopRequireDefault(_regenerator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _marked = _regenerator2.default.mark(gen),
      _marked2 = _regenerator2.default.mark(testYield);

  /**
    遍历器对象的next方法的运行逻辑如下。
   （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
   （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
   （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，
       作为返回的对象的value属性值。
   （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
  
    需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，
    因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
  
    yield使用场景：
    1. yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
    2. forEach方法的参数是一个普通函数，在里面使用yield表达式会报错。
    3. yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
   */

  function gen() {
    return _regenerator2.default.wrap(function gen$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 123 + 456;

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  function testYield() {
    return _regenerator2.default.wrap(function testYield$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = console;
            _context2.next = 3;
            return;

          case 3:
            _context2.t1 = _context2.sent;
            _context2.t2 = 'Hello ' + _context2.t1;

            _context2.t0.log.call(_context2.t0, _context2.t2);

            _context2.t3 = console;
            _context2.next = 9;
            return 123;

          case 9:
            _context2.t4 = _context2.sent;
            _context2.t5 = 'Hello ' + _context2.t4;

            _context2.t3.log.call(_context2.t3, _context2.t5);

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _marked2, this);
  }

  var gen = testYield();
  gen.next(); // 无输出, 执到第一个yield表达式并暂停,返回undefined赋值为next()返回对象的value;
  gen.next(); // Hello undefined，
  // 接着执行上一个yield表达式所在的console, 执行第二个yield并暂停,
  // 返回123赋值给next()返回对象的value,但是yield表达式永远返回undefined;
  gen.next(); // Hello undefined， 接着执行第二个yield表达式所在的console
});

//# sourceMappingURL=yield.js.map