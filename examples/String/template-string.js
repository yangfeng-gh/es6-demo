/**
 * 模板字符串
 */

// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`)

// 多行字符串
console.log(`In JavaScript this is
 not legal.`);

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error(
            // 传统写法为
            // 'User '
            // + user.name
            // + ' is not authorized to do '
            // + action
            // + '.'
            `User ${user.name} is not authorized to do ${action}.`);
    }
}

var x = 1;
var y = 2;

console.log(`${x} + ${y} = ${x + y}`)
// "1 + 2 = 3"
console.log(`${x} + ${y * 2} = ${x + y * 2}`);
// "1 + 4 = 5"

var obj = {x: 1, y: 2};
console.log(`${obj.x + obj.y}`);
// 3

// 模板字符串甚至还能嵌套。
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('==')}
  </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));

// 写法一
// let foo = new Function('a','b', 'Generator.prototype.return a+b');
// console.log(foo(1,2));
// new Function('arg1','arg2', 'statement1;statement2')
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack'); // "Hello Jack!"

/*
// 写法二
let str = '(name) => `Hello ${name}!`';
let func = eval.call(null, str);
func('Jack') // "Hello Jack!"
*/

