/**
 * Created by yvan on 2016-06-28.
 */
// 如果想要第一次调用next方法时，就能够输入值，可以在Generator函数外面再包一层。
function wrapper(generatorFunction) {
    return function (...args) {
        let generatorObject = generatorFunction(...args);
        generatorObject.next();
        return generatorObject;
    };
}

const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
});

wrapped().next('hello!')
// First input: hello!
wrapped().next('hello2')
