(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/object/create", "babel-runtime/helpers/classCallCheck"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/object/create"), require("babel-runtime/helpers/classCallCheck"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.create, global.classCallCheck);
        global._new = mod.exports;
    }
})(this, function (_create, _classCallCheck2) {
    "use strict";

    var _create2 = _interopRequireDefault(_create);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Foo = function Foo() {
        (0, _classCallCheck3.default)(this, Foo);

        return (0, _create2.default)(null);
    };

    Foo(); //TypeError: class constructor Foo cannot be invoked without 'new'
});

//# sourceMappingURL=new.js.map