/**
 * Created by yvan on 2016-06-28.
 */
let obj = {
    myGeneratorMethod: function* () {
        // ···
    }
};

// 可以简写为：
let obj2 = {
    * myGeneratorMethod() {
        // ···
    }
};