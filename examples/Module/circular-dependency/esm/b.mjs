import {foo} from './a';
console.log('b.mjs');
// console.log(foo);
console.log(foo());
function bar() {
  return 'bar'
}
// export let bar = 'bar';
export {bar};
