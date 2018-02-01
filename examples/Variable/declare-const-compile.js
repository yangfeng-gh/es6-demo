(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/helpers/typeof', 'babel-runtime/core-js/object/keys', 'babel-runtime/core-js/object/freeze'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/helpers/typeof'), require('babel-runtime/core-js/object/keys'), require('babel-runtime/core-js/object/freeze'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global._typeof, global.keys, global.freeze);
        global.declareConst = mod.exports;
    }
})(this, function (_typeof2, _keys, _freeze) {
    /**
     * Created by yvan on 2016-06-29.
     */
    'use strict';

    var _typeof3 = _interopRequireDefault(_typeof2);

    var _keys2 = _interopRequireDefault(_keys);

    var _freeze2 = _interopRequireDefault(_freeze);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var foo = {};
    foo.prop = 123;

    foo.prop;
    // 123

    // foo = {}; // TypeError: "foo" is read-only

    var c = [];
    c.push('Hello'); // 可执行
    c.length = 0; // 可执行
    // a = ['Dave'];    // 报错

    // 如果真的想将对象冻结，应该使用Object.freeze方法。
    var foo2 = (0, _freeze2.default)({});

    // 常规模式时，下面一行不起作用;
    // 严格模式时，该行会报错
    // foo2.prop = 123;

    // 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
    var constantize = function constantize(obj) {
        (0, _freeze2.default)(obj);
        (0, _keys2.default)(obj).forEach(function (key, value) {
            if ((0, _typeof3.default)(obj[key]) === 'object') {
                constantize(obj[key]);
            }
        });
    };

    global.a = 1;
    console.log(a); // 1

    a = 2;
    console.log(global.a); // 2
});

//# sourceMappingURL=declare-const-compile.js.map