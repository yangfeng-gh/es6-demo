(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/json/stringify"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/json/stringify"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.stringify);
        global.find = mod.exports;
    }
})(this, function (_stringify) {
    "use strict";

    var _stringify2 = _interopRequireDefault(_stringify);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * 数组实例的find方法，用于找出第一个符合条件的数组成员。
     * 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
     * 如果没有符合条件的成员，则返回undefined。
     */

    var e = [1, 4, -5, -10].find(function (n) {
        return n < 0;
    });
    //返回的是数组的成员，如果有多个数组成员在回调函数中返回true,仅返回第一个返回true的数组成员
    console.log("find\u8FD4\u56DE\u7684\u662F\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458: " + e);

    var e2 = [1, 5, 10, 15].findIndex(function (value, index, arr) {
        return value > 9;
    });
    // 2 与find不同：返回的是数组成员的下标。
    console.log("findIndex\u8FD4\u56DE\u7684\u662F\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458\u7684\u4E0B\u6807: " + e2);

    var objectArray = [{ a: 1, b: 2 }, { a: 5, b: 6 }, { a: 8, b: 9 }];

    var r = objectArray.find(function (item) {
        return item.a > 1;
    });
    console.log("\u5F53find\u64CD\u4F5C\u5BF9\u8C61\u6570\u7EC4\u662F\u7684\u8FD4\u56DE\u503C\uFF1A " + (0, _stringify2.default)(r));
});

//# sourceMappingURL=find.js.map