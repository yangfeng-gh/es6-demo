/**
 * Created by yvan on 2016-07-29.
 */
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve(function(){
        
    });
});

promise.then(function() {
    console.log('Resolved.');
});

console.log('Hi!');