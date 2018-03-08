/**
 * Created by yvan on 2016-06-28.
 */
var log = {
    info: function(arg){
        try {
            throw new Error();
        } catch (e) {
            //console.log("Stack:" + e.stack);
            var loc= e.stack.replace(/Error\n/).split(/\n/)[1].replace(/^\s+|\s+$/, "");
            console.log("Location: "+loc+"");
        }
    }
};

function foo(){
    log.info(123);
}

foo();
