(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/core-js/get-iterator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/core-js/get-iterator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.getIterator);
    global.forOf = mod.exports;
  }
})(this, function (_getIterator2) {
  "use strict";

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      console.log(i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

//# sourceMappingURL=for-of.js.map