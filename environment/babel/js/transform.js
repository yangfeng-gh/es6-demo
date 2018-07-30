var es6Code = 'let x = n => n + 1';
// noinspection JSUnresolvedFunction
var babel = require('babel-core');

var es5Code = babel.transform(es6Code, {
  presets: ['es2015']
}).code;

console.log(es5Code);
