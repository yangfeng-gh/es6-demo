/**
 *
 */
// function* objectEntries(obj) {
//     let propKeys = Reflect.ownKeys(obj);
//
//     for (let propKey of propKeys) {
//         yield [propKey, obj[propKey]];
//     }
// }
//
// let jane = { first: 'Jane', last: 'Doe' };
//
// for (let [key, value] of objectEntries(jane)) {
//     console.log(`${key}: ${value}`);
// }
let jane = { first: 'Jane', last: 'Doe' };
// 为jane部署Object.entries()
jane[Symbol.iterator] = function*() {
    for (let key of Object.keys(this)) {
        yield [key, this[key]];
    }
};

for (let [key, value] of jane) {
    console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe