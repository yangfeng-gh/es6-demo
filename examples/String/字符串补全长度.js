/**
 * ES7推出了字符串补全长度的功能。
 * padStart(), padEnd()
 */

'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'


'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'

'abc'.padStart(10, '0123456789')
// '0123456abc'

// 如果省略第二个参数，则会用空格补全长度。
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '

// padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"

// 另一个用途是提示字符串格式。
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
console.log('2016-06-30'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12"