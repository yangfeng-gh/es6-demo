/**
 * ES7有一个静态属性的提案，目前Babel转码器支持。
 * 类的实例属性可以用等式，写入类的定义之中。
 */

class MyClass {
    myProp = 42;

    constructor() {
        console.log(this.myProp); // 42
    }
}

// 以前，我们定义实例属性，只能写在类的constructor方法里面。
class ReactCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
}

// 有了新的写法以后，可以不在constructor方法里面定义。
class ReactCounter extends React.Component {
    state = {
        count: 0
    };
}

// 为了可读性的目的，对于那些在constructor里面已经定义的实例属性，新写法允许直接列出。
class ReactCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    state;
}