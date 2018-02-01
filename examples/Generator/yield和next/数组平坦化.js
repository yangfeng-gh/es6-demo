/**
 * 数组平坦化
 */

var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function*(a) {
    let len = a.length;
    for (let i=0; i<len; i++) {
        let item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};

for (let f of flat(arr)) {
    console.log(f);
}
