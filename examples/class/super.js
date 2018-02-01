(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/object/get-prototype-of', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/get', 'babel-runtime/helpers/inherits', 'babel-runtime/helpers/classCallCheck'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/object/get-prototype-of'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/get'), require('babel-runtime/helpers/inherits'), require('babel-runtime/helpers/classCallCheck'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.getPrototypeOf, global.createClass, global.possibleConstructorReturn, global.get, global.inherits, global.classCallCheck);
    global._super = mod.exports;
  }
})(this, function (_getPrototypeOf, _createClass2, _possibleConstructorReturn2, _get2, _inherits2, _classCallCheck2) {
  'use strict';
  /**
   *  super这个关键字，有两种用法，含义不同。
   * （1）作为函数调用时（即super(...args)），super代表父类的构造函数。
   * （2）作为对象调用时（即super.prop或super.method()），super代表父类。
   *  注意，此时super即可以引用父类实例的属性和方法，也可以引用父类的静态方法。
   */

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _get3 = _interopRequireDefault(_get2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _obj;

  var A = function A() {
    (0, _classCallCheck3.default)(this, A);
  };

  var B = function (_A) {
    (0, _inherits3.default)(B, _A);

    function B() {
      (0, _classCallCheck3.default)(this, B);
      return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).apply(this, arguments));
    }

    (0, _createClass3.default)(B, [{
      key: 'm',
      get: function get() {
        return this._p * (0, _get3.default)(B.prototype.__proto__ || (0, _getPrototypeOf2.default)(B.prototype), '_p', this);
      },
      set: function set(value) {
        throw new Error('该属性只读');
      }
    }]);
    return B;
  }(A);

  // 由于，对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。
  var obj = _obj = {
    toString: function toString() {
      return "MyObject: " + (0, _get3.default)(_obj.__proto__ || (0, _getPrototypeOf2.default)(_obj), 'toString', this).call(this);
    }
  };

  var str = obj.toString(); // MyObject: [object Object]
  console.log(str);
});

//# sourceMappingURL=super.js.map