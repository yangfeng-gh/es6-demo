/*
Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
 */

const log = {};

log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');

/*
下面是另外一个例子。
 */
const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            console.log('red');
            break;
        case COLOR_GREEN:
            console.log('green');
            break;
        default:
            throw new Error('Undefined color');
    }
}
getComplement(COLOR_RED);

// 常量使用 Symbol 值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的switch语句会按设计的方式工作。
// 还有一点需要注意，Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。
