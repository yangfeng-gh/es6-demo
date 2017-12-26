/**
 * Created by yvan on 2016-07-28.
 */
// 一种做法是在命名上加以区别。
class Widget {

    // 公有方法
    foo (baz) {
        this._bar(baz);
    }

    // 私有方法
    _bar(baz) {
        return this.snaf = baz;
    }

    // ...
}

var widget = new Widget();
widget.foo('hello');
console.log(widget.snaf);

// 另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
class Widget2 {
    foo (baz) {
        bar.call(this, baz);
    }

    // ...
}

function bar(baz) {
    return this.snaf = baz;
}

var widget2 = new Widget2();
// widget2.bar('hello2');
// TypeError: widget2.bar is not a function

widget2.foo('hello2');
console.log(widget2.snaf);

// 还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default subclassFactory({

    // 共有方法
    foo (baz) {
        this[bar](baz);
    }

    // 私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }

    // ...
});