/**
 * Created by yvan on 2016-07-27.
 * Class不存在变量提升（hoist），这一点与ES5完全不同。
 */

new Foo();
class Foo {} //ReferenceError: Foo is not defined