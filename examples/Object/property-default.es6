/**
 * 为属性指定默认值
 */

const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};

function processContent(options) {
    let options = Object.assign({}, DEFAULTS, options);
}

// 上面代码中，DEFAULTS对象是默认值，options对象是用户提供的参数。
// Object.assign方法将DEFAULTS和options合并成一个新对象，如果两者有同名属性，则option的属性值会覆盖DEFAULTS的属性值。
// 注意，由于存在深拷贝的问题，DEFAULTS对象和options对象的所有属性的值，都只能是简单类型，而不能指向另一个对象。
// 否则，将导致DEFAULTS对象的该属性不起作用。