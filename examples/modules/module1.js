(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "babel-runtime/helpers/extends"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("babel-runtime/helpers/extends"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends);
    global.module1 = mod.exports;
  }
})(this, function (exports, _extends2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.def = undefined;

  var _extends3 = _interopRequireDefault(_extends2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var o = {
    a: 1,
    b: 2
  };

  var def = exports.def = (0, _extends3.default)({}, o, {
    c: 3
  });
});

//# sourceMappingURL=module1.js.map