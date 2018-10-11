/**
 * Created by yvan on 2016-06-30.
 */
'\u01D1'==='\u004F\u030C' //false

'\u01D1'.length // 1
'\u004F\u030C'.length // 2

'\u01D1'.normalize() === '\u004F\u030C'.normalize() //true

'\u004F\u030C'.normalize('NFC').length // 1
'\u004F\u030C'.normalize('NFD').length // 2