/**
 * Created by yvan on 2016-06-29.
 */
// 将[x,y]从笛卡尔（直角）坐标转换为[r,theta]极坐标
function polar(x,y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}
//将极坐标转换为笛卡尔坐标
function cartesian(r,theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r,theta] = polar(1.0, 1.0); //r=Math.sqrt(2), theta=Math.PI/4
let [x,y] = cartesian(r,theta); //x=1.0, y=1.0

[x,y] = [1]; //x=1, y=undefined
[x,y] = [1,2,3]; //x=1, y=2
[,x,,y] = [1,2,3,4]; //x=2, y=4
console.log(x, y);

let first, second, all;
all = [first, second] = [1,2,3,4]; //first=1, second=2, all=[1,2,3,4]

let [one, [twoA, twoB]] = [1,[2,2.5],3]; //one=1, towA=2, towB=2.5

let transparent = {r:0.0, g:0.0, b:0.0, a:1.0}; //一个用RGBA值表示的颜色
let {r:red, g:green, b:blue} = transparent; //red=0.0, green=0.0, blue=0.0

let value = [1, 2, [3, 4, 5]];
let [el1, el2, [el3, el4]] = value;

let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);  // [2, 3, 4]