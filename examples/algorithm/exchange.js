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
    global.exchange = mod.exports;
  }
})(this, function () {
  'use strict';
  // 交换算法
  /**
   * 借助算术运算
   */

  {
    var a = 1,
        b = 2;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log('\u501F\u52A9\u7B97\u672F\u8FD0\u7B97: a = ' + a + ', b = ' + b);
  }

  /**
   * 借助异或运算
   */
  {
    var _a = 1,
        _b = 2;
    _a ^= _b;
    _b ^= _a;
    _a ^= _b;
    console.log('\u501F\u52A9\u5F02\u6216\u8FD0\u7B97: a = ' + _a + ', b = ' + _b);
  }

  /**
   * 借助异或运算
   */
  {
    var _a2 = 1,
        _b2 = 2;
    _a2 = (_b2 ^= _a2 ^= _b2) ^ _a2;
    console.log('\u501F\u52A9\u5F02\u6216\u8FD0\u7B972: a = ' + _a2 + ', b = ' + _b2);
  }

  /**
   * 借助对象
   */
  {
    var _a3 = 1,
        _b3 = 2;
    _a3 = { a: _b3, b: _a3 };
    _b3 = _a3.b;
    _a3 = _a3.a;
    console.log('\u501F\u52A9\u5BF9\u8C61: a = ' + _a3 + ', b = ' + _b3);
  }

  /**
   * 借助数组
   */
  {
    var _a4 = 1,
        _b4 = 2;
    _a4 = [_a4, _b4];
    _b4 = _a4[0];
    _a4 = _a4[1];
    console.log('\u501F\u52A9\u6570\u7EC4: a = ' + _a4 + ', b = ' + _b4);
  }

  /**
   * 借助数组2
   */
  {
    var _a5 = 1,
        _b5 = 2;
    _a5 = [_b5, _b5 = _a5][0];
    console.log('\u501F\u52A9\u6570\u7EC42: a = ' + _a5 + ', b = ' + _b5);
  }

  /**
   * 借助解构赋值
   */
  {
    var _a6 = 1,
        _b6 = 2;
    var _ref = [_b6, _a6];
    _a6 = _ref[0];
    _b6 = _ref[1];

    console.log('\u501F\u52A9\u89E3\u6784\u8D4B\u503C: a = ' + _a6 + ', b = ' + _b6);
  }
});
