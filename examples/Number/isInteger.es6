/**
 * Created by yvan on 2016-06-30.
 */
(function (global) {
    var floor = Math.floor,
        isFinite = global.isFinite;

    Object.defineProperty(Number, 'isInteger', {
        value: function isInteger(value) {
            return typeof value === 'number' && isFinite(value) &&
                value > -9007199254740992 && value < 9007199254740992 &&
                floor(value) === value;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
})(this);