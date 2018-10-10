(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/object/create', 'babel-runtime/helpers/classCallCheck'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/object/create'), require('babel-runtime/helpers/classCallCheck'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.create, global.classCallCheck);
        global.constructor = mod.exports;
    }
})(this, function (_create, _classCallCheck2) {
    'use strict';

    /**
     * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
     * 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
     * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
     */

    var _create2 = _interopRequireDefault(_create);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    var Foo = function Foo() {
        (0, _classCallCheck3.default)(this, Foo);

        return (0, _create2.default)(null);
    };

    console.log(new Foo() instanceof Foo);
    // false
});

//# sourceMappingURL=class\constructor-compile.js.map