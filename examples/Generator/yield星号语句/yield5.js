/**
 * Created by yvan on 2016-06-28.
 */

let delegatedIterator = (function* () {
    yield 'Hello!';
    yield 'Bye!';
}());

let delegatingIterator = (function* () {
    yield 'Greetings!';
    yield* delegatedIterator;
    yield 'Ok, bye.';
}());

for(let value of delegatingIterator) {
    console.log(value);
}
// "Greetings!
// "Hello!"
// "Bye!"
// "Ok, bye."