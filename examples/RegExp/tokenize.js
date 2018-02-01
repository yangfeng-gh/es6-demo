/**
 * Created by yvan on 2016-06-30.
 */

const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

tokenize(TOKEN_Y, '3 + 4')
// [ '3', '+', '4' ]
tokenize(TOKEN_G, '3 + 4')
// [ '3', '+', '4' ]

function tokenize(TOKEN_REGEX, str) {
    let result = [];
    let match;
    while (match = TOKEN_REGEX.exec(str)) {
        result.push(match[1]);
    }
    return result;
}

console.log(tokenize(TOKEN_Y, '3x + 4'));
// [ '3' ]
console.log(tokenize(TOKEN_G, '3x + 4'));
// [ '3', '+', '4' ]
// 上面代码中，g修饰符会忽略非法字符，而y修饰符不会，这样就很容易发现错误。


// sticky属性
var r = /hello\d/y;
console.log(r.sticky);  // true


// flag属性
// ES5的source属性
// 返回正则表达式的正文
console.log(/abc/ig.source);
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
console.log(/abc/ig.flags);
// 'gi'

// RegExp.escape()
// RegExp.escape('The Quick Brown Fox');
// "The Quick Brown Fox"

// RegExp.escape('Buy it. use it. break it. fix it.');
// "Buy it\. use it\. break it\. fix it\."

// RegExp.escape('(*.*)');
// "\(\*\.\*\)"