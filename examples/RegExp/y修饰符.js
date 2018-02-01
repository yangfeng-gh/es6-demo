/**
 * y修饰符
 */
// 单单一个y修饰符对replace方法只能匹配一次
// y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。
// 不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，
// 这也就是“粘连”的涵义。
const REGEX = /a/y;
// 指定从2号位置开始匹配
REGEX.lastIndex = 2;
// 不是粘连，匹配失败
REGEX.exec('xaya') // null
// 指定从3号位置开始匹配
REGEX.lastIndex = 3;
// 3号位置是粘连，匹配成功
let match = REGEX.exec('xaxa');
match = REGEX.exec('xaxa');
console.log(match.index);
console.log(match.lastIndex);

/*const REGEX = /a/y;
let r = 'aaxa'.replace(REGEX, '-')
console.log(r);// '-axa'

const REGEX = /a/gy;
let r = 'aaxa'.replace(REGEX, '-')
console.log(r);// '--xa'*/

