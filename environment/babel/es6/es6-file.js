/**
 * Created by yvan on 2016-06-29.
 */
class Calc {
    constructor(){
        console.log('Calc constructor');
    }
    add(a, b){
        return a + b;
    }
}
var c = new Calc();
console.log(c.add(4,5));