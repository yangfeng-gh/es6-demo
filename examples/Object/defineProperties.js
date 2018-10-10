/*
功能:
方法直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。

语法: Object.defineProperties(obj, props)
obj: 将要被添加属性或修改属性的对象
props: 该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置
 */

var book = {};
Object.defineProperties(book, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function() {
      return this._year;
    },
    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004
      }
    }
  }
});

