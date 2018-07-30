/**
 * Created by yvan on 2016-06-23.
 */

/* 属性名简写 */
var foo = 'bar';
var baz = {foo};
console.log(JSON.stringify(baz)); // {"foo":"bar"}

//等同于
var baz = {foo: foo};
/***********************************************************/
function f(x, y) {
    return {x, y};
}

console.log(f(1, 2)); //{ x: 1, y: 2 }

/*
 // 等同于
 function f(x, y) {
 Generator.prototype.return {x: x, y: y};
 }
 */
/*方法名简写*/

var o = {
    method(){
        return "hello";
    }
};
//等同于
var o = {
    method: function () {
        return "hello";
    }
};
/***********************************************************/
var birth = '2000/01/01';

var person = {
    name: '张三',
    birth,
    hello(){
        console.log('我的生日是：', this.birth);
    }
};

person.hello();
/***********************************************************/
var ms = {};

function getItem(key) {
    return key in ms ? ms[key] : null;
}
function setItem(key, value) {
    ms[key] = value;
}
function clear() {
    ms = {};
}
module.exports = {getItem, setItem, clear};
//等同于

/*
 module.exports = {
 getItem: getItem,
 setItem: setItem,
 clear: clear
 };
 */

/***********************************************************/

/*setter, getter*/
var cart = {
    _wheels: 4,

    get wheels() {
        return this._wheels;
    },

    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
};
cart._wheels = 5;
console.log(cart._wheels);
/***********************************************************/

/*简洁写法的属性名总是字符串*/
var obj = {
    class(){
        //class是字符串，所以不会因为属于关键字，而导致语法解析错误
    }
};
//等同于
var obj = {
    'class': function () {

    }
};