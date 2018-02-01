/**
 * Created by yvan on 2016-07-25.
 */
var str = new String("hi");

[...str] // ["h", "i"]

str[Symbol.iterator] = function() {
    return {
        next: function() {
            if (this._first) {
                this._first = false;
                return { value: "bye", done: false };
            } else {
                return { done: true };
            }
        },
        _first: true
    };
};

console.log([...str]);
console.log(str);