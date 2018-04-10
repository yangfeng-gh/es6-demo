/**
 * Created by yvan on 2016-06-29.
 */
var traceur = require('traceur');
var fs = require('fs');

// 将ES6脚本转为字符串
var contents = fs.readFileSync('es6-file.js').toString();

var result = traceur.compile(contents, {
    filename: 'es6-file.js',
    sourceMap: true,
    // 其他设置
    modules: 'commonjs'
});

if (result.error)
    throw result.error;

// result对象的js属性就是转换后的ES5代码
fs.writeFileSync('out.js', result);
// sourceMap属性对应map文件
fs.writeFileSync('out.js.map', result.sourceMap);